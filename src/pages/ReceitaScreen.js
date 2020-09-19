import React, { useState, useLayoutEffect, useEffect } from 'react'
import { Text, Button, StyleSheet, SafeAreaView, TextInput, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default () => {
    const [ name, setName ] = useState('')
    const [ items, setItems ] = useState([])
    const [ id, setId] = useState(1)

    const navigation = useNavigation()

    const handleAddItem = () => {
        let newItems = [...items]
        newItems.push({name: name, id: id})
        setItems(newItems)
        setId(id => id+1)
        //alert(newItems[0].name)
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => <Button title="Adicionar" onPress={handleAddItem} />
        })
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Faça um bolo</Text>
            <TextInput style={styles.input} placeholder="Digite um ingrediente" value={name} onChangeText={e => setName(e)} />
            <FlatList 
                data={items}
                renderItem={({item})=><Text style={styles.itemList}>{item.name}</Text>}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#494747'
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginTop: 16
    },
    input: {
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 8,
        width: '80%',
        padding: 8
    },
    itemList: {
        color: 'white',
        fontSize: 18
    }
})