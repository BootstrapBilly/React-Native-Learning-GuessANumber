import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Card from "../components/Card";
import Colors from "../constants/Colors"

const StartGameScreen = props => {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>Start A New Game!</Text>

            <Card style={styles.card}>

                <Text>Select a Number</Text>
                <TextInput placeholder={"Number"} style={styles.inputBox} placeholderTextColor={"blue"}/>

                <View style={styles.buttonContainer}>

                    <View style={styles.button}><Button color={"red"} title="Reset" onPress={() => {}} /></View>
                    <View style={styles.button}><Button color={Colors.primary} title="Confirm" onPress={() => {}}/></View>
                    
                </View>

            </Card>

        </View>

    )

}

const styles = StyleSheet.create({

    title : {

        fontSize: 18,

    },

    container : {

        flex:1,
        padding : 10,
        alignItems: "center",

    },

    inputBox : {

        backgroundColor: "white",
        elevation: 10,
        width: "20%",
        padding: 10,
        marginTop: 10,
        color: "blue"

    },

    buttonContainer : {

        flexDirection: "row",
        width: "80%",
        justifyContent: "space-evenly",
        marginTop: 10,

    },

    button : {

        width: "40%"

    }

})

export default StartGameScreen