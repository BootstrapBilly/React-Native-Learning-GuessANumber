import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Keyboard, Modal, Alert, Image } from 'react-native';
import Colors from '../constants/Colors';


const StartGameButton = props => {

    return (

        <TouchableOpacity onPress={props.pointTo}>

            <View style={{...styles.buttonContainer, ...props.overWriteStyleButton}}>

                <Text style={{...styles.buttonText, ...props.overWriteStyleText}}>{props.children}</Text>

            </View>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    buttonContainer : {

        backgroundColor: "green",
        width: "80%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 10,
        borderRadius: 20

    },

    buttonText : {

        fontSize: 16,
        fontFamily: "open-sans",
        color: "white"
    }

})

export default StartGameButton