import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {LoginScreen, HomeScreen, RegisterScreen} from './src/screens'
import {decode, encode} from 'base-64'
import { StyleSheet, Text, View , Image} from 'react-native';

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
   <NavigationContainer>
     <Stack.Navigator>
       
       {user ? (
         <Stack.Screen name="Home">
           {props => <HomeScreen {...props} extraData={user} />}
         </Stack.Screen>
       ): (
         <>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Registration" component={RegisterScreen} options={{title: "Register", headerStyle: {backgroundColor: "#1F4068"}, headerTintColor: "#fff"}}/>
         </>
       )}
     </Stack.Navigator>
   </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#162447",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
