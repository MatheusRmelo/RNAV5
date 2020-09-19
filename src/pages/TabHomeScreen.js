import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>TAB HOME</Text>
            <Button title = "Ir para tela 2" onPress={()=>navigation.navigate('TabHome2')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})