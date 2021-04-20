import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {LoginScreen, HomeScreen, RegistrationScreen} from './src/screens'
import {decode, encode} from 'base-64'
import { StyleSheet, Text, View , Image} from 'react-native';
import LoginPage from './LoginPage'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  
  return (
    <View style={styles.container}>
      <LoginPage />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#162447",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
