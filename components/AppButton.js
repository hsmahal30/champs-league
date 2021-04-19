import React from 'react'
import {Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function AppButton(props) {
    return (
       <TouchableOpacity style={styles.appButtonContainer}>
           <Text style={styles.appButtonText}>{props.title}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: "#1F4068",
        width: 250,
        height: 55,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 40,
    },

    appButtonText: {
        top: 7,
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",

    },
})