import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
export default () => {
    return(
        <View style={styles.container}>
            <Text>TAB HOME 2</Text>
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