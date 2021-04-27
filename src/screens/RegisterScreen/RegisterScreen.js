import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { firebase } from '../../firebase/config'

const RegisterScreen = ({navigation}) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () =>{
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef.doc(uid).set(data)
                    .then(() => {
                        // navigation.navigate('HomeScreen', {user: data})
                        console.log("Success")
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return (
        <View style={styles.container}>
             <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                    <TextInput
                        style={styles.input} 
                        placeholder="Full Name"
                        onChangeText={(text) => setFullName(text)}
                        value={fullName}
                    />
                    <TextInput
                        style={styles.input} 
                        placeholder="Email"
                        autoCapitalize="none"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <TextInput
                        style={styles.input} 
                        placeholder="Password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />

                    <TextInput
                        style={styles.input} 
                        placeholder="Confirm Password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                    />  

                    <TouchableOpacity 
                        style={styles.appButtonContainer}
                        onPress={() => onRegisterPress()}>
                        <Text style={styles.appButtonText}>Register</Text>
                    </TouchableOpacity>

                    <Text style={styles.register}>Already signed up? <Text style={{color: 'red'}} onPress={onFooterLinkPress}>Login</Text></Text>

            </KeyboardAwareScrollView>
        </View>
    )
}

export default RegisterScreen;
