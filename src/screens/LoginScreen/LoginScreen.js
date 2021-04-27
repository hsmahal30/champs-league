import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles'
import { firebase } from '../../firebase/config'


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if(!firestoreDocument.exists){
                            alert("User does not exist")
                            return;
                        }
                        const user = firestoreDocument.data()
                        // navigation.navigate('HomeScreen', {user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                    <Image style={styles.logo} source={require("../../../assets/ucl.png")}/>
                    <TextInput 
                        style={styles.usernameInput} 
                        placeholder="email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        autoCapitalize = "none"
                    />
                    <TextInput 
                        style={styles.password} 
                        placeholder="password"
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity 
                        style={styles.appButtonContainer}
                        onPress={() => onLoginPress()}>
                        <Text style={styles.appButtonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                         <Text style={styles.register}>Not Signed up? <Text onPress={onFooterLinkPress} style={{color: "red"} }>Register</Text></Text>
                     </TouchableOpacity>
                </KeyboardAwareScrollView>
        </View>
    )
}

export default LoginScreen
