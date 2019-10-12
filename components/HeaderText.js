import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';

const HeaderText = props => {

    return (

        <Text style={{...styles.style, ...props.style}}>{props.children}</Text>
    )

}

const styles = StyleSheet.create({

    style : {

        fontSize: 18,
        fontFamily: "open-sans-bold"
    }
    
})

export default HeaderText