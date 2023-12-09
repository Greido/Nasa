import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParams } from '../types'

import Home from '../views/Home'
import Details from '../views/Details/Details'
const Stack = createNativeStackNavigator<RootStackParams>();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName= 'Home'>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Home' component={Details}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes