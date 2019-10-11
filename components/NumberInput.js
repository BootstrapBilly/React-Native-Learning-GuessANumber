import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Colors from "../constants/Colors"

const NumberInput = props => {

    return (

        <TextInput {...props} multiline={false}  placeholder={"Number"} style={{...styles.inputBox, ...props.customStyle}} placeholderTextColor={Colors.primary}/>

    )

}

const styles = StyleSheet.create({

    inputBox : {

        width: "20%",
        padding: 10,
        marginTop: 10,
        color: Colors.primary,
        borderBottomColor: "black",
        borderBottomWidth: 1

    }

})

export default NumberInput