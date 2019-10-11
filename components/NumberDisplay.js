import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';

import Colors from "../constants/Colors"

const NumberDisplay = props => {

    return (

        <View style={{...styles.container, ...props.additionalStyle}}>

            {props.children}


        </View>
    )

}

const styles = StyleSheet.create({

    container : {

        borderColor: Colors.secondary,
        borderWidth: 5,
        color: Colors.secondary,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 15,
        fontSize:35,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",

    }

})

export default NumberDisplay;