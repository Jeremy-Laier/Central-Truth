import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Input from './Input';
import Admin from './Admin';
import NewWorker from './AddWorker'

export default class App extends Component {
  render() {

    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name= "Welcome" component={Login} />
          <Stack.Screen name= "Patient and Equipment" component={Input} />
          <Stack.Screen name = "Administration" component={Admin} />
          <Stack.Screen name = "New Healthcare Worker" component={NewWorker} />
        </Stack.Navigator>
      </NavigationContainer >
    );
  }
}