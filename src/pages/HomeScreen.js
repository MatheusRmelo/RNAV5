import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default () => {
    const [ name, setName ] = useState('')
    const navigation = useNavigation()

    const handleSendButton = () => {
        navigation.navigate('About', {cor:name})    
    }

    return(
        <View style={styles.container}>
            <Text>Qual seu nome?</Text>
            <TextInput style={styles.input} value={name}  onChangeText={t => setName(t)}/>
            <Button title="Enviar" onPress={handleSendButton} />
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