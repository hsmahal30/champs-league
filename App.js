import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import LoginPage from './LoginPage'


export default function App() {
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
