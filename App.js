import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {LoginScreen, HomeScreen, RegisterScreen} from './src/screens'
import {decode, encode} from 'base-64'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { firebase } from './src/firebase/config'
import { StyleSheet, Text, View , Image} from 'react-native';
import AuthStackNavigation from './src/navigation/AuthStackNavigation';
import BottomTabNavigation from './src/navigation/BottomTabNavigation'


if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

export default function App() {
  
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef.doc(user.uid).get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
     <Text>Loading</Text>
    )
  }
  return (
    user ?  (<BottomTabNavigation />) : (<AuthStackNavigation />)
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
