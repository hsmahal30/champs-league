import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import AppButton from "./components/AppButton"


export default function LoginPage() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require("./assets/ucl.png")}/>  
            <TextInput style={styles.usernameInput} placeholder="username"></TextInput>
            <TextInput style={styles.password} placeholder="password"></TextInput>
            <AppButton title="Login" />
            <TouchableOpacity>
                <Text style={styles.register}>Not Signed up? <Text style={{color: "red"}}>Register</Text></Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
      },
      logo: {
        top: -100,
        width: 200,
        height: 200,
      },

      usernameInput: {
          backgroundColor: "#fff",
          paddingLeft: 20,
          top: -20,
          width: 250,
          height: 55,
          borderRadius: 20,
      },

      password: {
        backgroundColor: "#fff",
        paddingLeft: 20,
        top: 0,
        width: 255,
        height: 55,
        borderRadius: 20,
      },

      register: {
          top: 20,
        color: "#fff",
      },

  });