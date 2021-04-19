import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const FormInput = (props) => {
    return (
        <TextInput 
            value={props/labelInput}
            placeholder={props.placeholder}
            />
    )
}

export default FormInput
