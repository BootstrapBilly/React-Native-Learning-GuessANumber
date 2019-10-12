import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Alert, Image } from 'react-native';

const WinScreen = props => {

    return (

        <View style={styles.screen}>
            <Text>You win</Text>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/ainsley.jpg")} style={styles.image}/>
            </View>
            
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
    },

    imageContainer : {

        width:300,
        height: 300,
        overflow: "hidden",
        borderRadius: 200,
        borderColor: "black",
        borderWidth: 3
    },
    
    image : {

        width:"100%",
        height: "100%"
    }
    
})

export default WinScreen