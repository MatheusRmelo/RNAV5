import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Text, Image } from 'react-native'

import HomeScreen from '../pages/HomeScreen'
import AboutScreen from '../pages/AboutScreen'
import ReceitaScreen from '../pages/ReceitaScreen'

import Logo from '../components/Logo'

const MainStack = createStackNavigator()

export default () => {
    return(
        <MainStack.Navigator screenOptions={{
            headerTitleAlign: 'left',
            headerStyle: {
                backgroundColor: '#CCC',
            },
            headerTitleStyle: {
                color: '#000',
                fontSize: 16
            }
        }}>
            <MainStack.Screen name="Receita" component={ReceitaScreen} />
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="About" component={AboutScreen} />
        </MainStack.Navigator>  
    )
}