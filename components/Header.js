import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Colors from '../AppColors/Colors'

const Header = ({text}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>{text}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
    },

    header : {
        alignSelf: 'center',
        top: 25,
        fontSize: 32,
        color: Colors.textColor,
    },

})

export default Header
