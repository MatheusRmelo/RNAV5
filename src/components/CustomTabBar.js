import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

export default ({ state, descriptors, navigation }) => {
    return(
        <View style={styles.container}>
            {state.routes.map((route, index)=>{
                const { options } = descriptors[route.key]

                let label = route.name
                if( options.tabBarLabel !== undefined){
                    label = options.tabBarLabel
                }else if(options.title !== undefined){
                    label = options.title
                }

                const isFocused = state.index === index

                const handleTabPress = () => {
                    navigation.navigate( route.name )
                }
                if( route.name === 'TabHome'){
                    return (
                        <TouchableHighlight key={index} style={styles.middleTab} onPress={handleTabPress}>
                            <Text style={[styles.label, isFocused? styles.labelFocused:null]}>{label}</Text>
                        </TouchableHighlight>
                    )
                }else{
                    return (
                        <TouchableHighlight key={index} underlayColor="transparent" style={styles.tab} onPress={handleTabPress}>
                            <Text style={[styles.label, isFocused? styles.labelFocused:null]}>{label}</Text>
                        </TouchableHighlight>
                    )
                }
                
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#CCC'
    },
    tab:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height:50,
        
    },
    middleTab: {
        width: 70,
        height: 70,
        backgroundColor: '#00FF00',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-20,
        borderRadius:35   
    },
    label:{
        fontSize: 16,
        color: 'red'
    },
    labelFocused: {
        fontSize: 16,
        color: 'blue'
    }
})