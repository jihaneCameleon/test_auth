import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Register from './screens/Register';
import Profile from './screens/Profile';

import Login from './screens/Login';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'white'
  }
});

// https://njwest.medium.com/building-a-react-native-jwt-client-api-requests-and-asyncstorage-d1a20ab60cf4

// https://www.youtube.com/watch?v=gZRklbykGGk