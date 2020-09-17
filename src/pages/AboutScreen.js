import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default () => {
    const navigation = useNavigation()
    const route = useRoute()
    
    const name = route.params?.name ?? 'Visitante'

    const handleBackButton = () => {
        navigation.popToTop()    
    }

    return(
        <View style={styles.container}>
            <Text>Tela de sobre: {name}</Text>
            <Button title="Voltar" onPress={handleBackButton} />
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