import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../pages/HomeScreen'
import AboutScreen from '../pages/AboutScreen'


const MainStack = createStackNavigator()

export default () => {
    return(
        <MainStack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#0000FF',
                height:120
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 16
            }
        }}>
            <MainStack.Screen name="Home" component={HomeScreen} 
                    options={
                        {
                            title: 'Alguma coisa bem grande que ficará imensa'
                        }
                    } 
                    />
            <MainStack.Screen name="About" component={AboutScreen} options={({route})=>({
                headerStyle:{
                    backgroundColor: route.params?.cor ?? '#FF0000',
                    height: 120
                },
                headerBackTitleVisible:true,
                headerTruncatedBackTitle: 'Voltar'
            })}/>
        </MainStack.Navigator>  
    )
}