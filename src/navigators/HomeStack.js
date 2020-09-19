import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TabHomeScreen from '../pages/TabHomeScreen'
import TabHome2Screeen from '../pages/TabHome2Screen'

const MainStack = createStackNavigator()

export default () => {
    return(
        <MainStack.Navigator>
            <MainStack.Screen name="TabHomeScreen" component={TabHomeScreen} />
            <MainStack.Screen name="TabHome2" component={TabHome2Screeen} />
        </MainStack.Navigator>  
    )
}