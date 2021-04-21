import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'

const RegisterScreen = ({navigation}) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () =>{}

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
                        onPress={() => onLoginPress()}>
                        <Text style={styles.appButtonText}>Register</Text>
                    </TouchableOpacity>

            </KeyboardAwareScrollView>
        </View>
    )
}

export default RegisterScreen;
