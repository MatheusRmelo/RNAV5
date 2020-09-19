import React, { useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default () => {
    const [ name, setName ] = useState('')
    const [ count, setCount ] = useState(0)

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: count
        })
    }, [count])

    const navigation = useNavigation()

    const handleSendButton = () => {
        //navigation.navigate('About', {cor:name}) 
        navigation.setOptions({
            title: name
        })   
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => <Button title="+1" onPress={handleHeaderPlus} />
        })
    }, [])

    const handleHeaderPlus = () => {
        setCount(c => c+1)
    }

    return(
        <View style={styles.container}>
            <Text>Qual seu nome?</Text>
            <TextInput style={styles.input} value={name}  onChangeText={t => setName(t)}/>
            <Button title="Enviar" onPress={handleSendButton} />
            <Button title="BG azul" onPress={()=>navigation.setOptions({
                headerStyle:{
                    backgroundColor: 'blue'
                }
            })} />
            <Button title="BG vermelho" onPress={()=>navigation.setOptions({
                headerStyle:{
                    backgroundColor: 'red'
                }
            })} />


            <Button title="+1" onPress={()=>setCount(count+1)} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        width:250,
        padding:10,
        fontSize:15,
        backgroundColor: '#DDD',
        margin:5
    }
})