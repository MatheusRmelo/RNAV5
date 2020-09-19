import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default (props) => {
    let srcImage = null
    let badgeCount = 0

    switch(props.name){
        case 'TabAbout':
            srcImage = require('../assets/interface.png')
            badgeCount = 0
        break
        case 'TabHome':
            srcImage = require('../assets/home.png')
            badgeCount = 0

        break
        case 'TabConfig':
            srcImage = require('../assets/interface.png')
            badgeCount = 8
        break
    }
    return (
        <View>
            <Image source={srcImage} style={styles.icon} />
            {
                badgeCount > 0 &&
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badgeCount}</Text>
                </View>
            }
            
        </View>
    )
}
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
    badge:{
        position:"absolute",
        right:-6,
        top:-3,
        backgroundColor: 'red',
        width: 15,
        height: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeText:{
        color: 'white',
        fontSize: 10
    }
})