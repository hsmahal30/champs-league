import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {LoginScreen, HomeScreen, RegisterScreen} from '../screens/index'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const AuthStackNavigation = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator
         initialRouteName="Login">
           <Stack.Screen name="Login" 
             component={LoginScreen} 
             options={{headerShown: false}}
           />
           <Stack.Screen name="Registration" 
             component={RegisterScreen} 
             options={{headerShown: false}}
           />
           {/* <Stack.Screen name="HomeScreen">
              {props => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen> */}
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthStackNavigation;
