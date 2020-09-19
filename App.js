import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import MainStack from './src/navigators/MainStack'
import MainTab from './src/navigators/MainTab'

import Store from './src/Store'

export default () => {
  return(
    <Provider store={Store}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </Provider>
  )
}