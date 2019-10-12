import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';

const WinScreen = props => {

    return (

        <View style={styles.screen}>
            <Text>You win</Text>
            <Text>Your number was {props.number}</Text>
            <Text>Number of roundem : {props.rounds}</Text>

            <Button title={"RESTART"} onPress={props.restartGame}/>
        </View>
    )

}

const styles = StyleSheet.create({

    screen : {

        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
    
})

export default WinScreen