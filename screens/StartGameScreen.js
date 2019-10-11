import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';

import Card from "../components/Card";
import NumberInput from "../components/NumberInput";
import Colors from "../constants/Colors";

const StartGameScreen = props => {

    const [enteredNumber, setEnteredNumber] = useState("")//define a state to hold the number input

    const [confirmed, setConfirmed] = useState(false)//define a state to hold whether the use has confirmed their input

    const [numberToSubmit, setNumberToSubmit] = useState("")//Define a state to hold the submitted number

    const inputHandler = enteredNumber => {

        setEnteredNumber(enteredNumber)

    }

    const closeKeyboard = () => {

        Keyboard.dismiss()

    }

    const submitNumber = () => {     

        const chosenNumber = parseInt(enteredNumber);//store the entered number in a constant

        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){ //if it fails validation, return

            Alert.alert("Failure", "The ting failed", [{text:"Fuck off", style:"destructive", onPress: setEnteredNumber("")}])
            return

        }

        setConfirmed(true)//set the confirmation state to true
        
        setNumberToSubmit(chosenNumber)//Set the submitted number to the number which was entered

        setEnteredNumber("")//clear the input

    }

    let confirmedOutput;//define a variable to output the confirmed number

    if(confirmed) {//if the number has been confirmed and validated

        confirmedOutput = <Text>Selected number : {numberToSubmit}</Text>//Create a text node

    } 

    return (

        <TouchableWithoutFeedback  onPress={closeKeyboard}>

            <View style={styles.container}>

                <Text style={styles.title}>Start A New Game!</Text>

                <Card style={styles.card}>

                    <Text>Select a Number</Text>
                    <NumberInput keyboardType="number-pad" maxLength={2} customStyle={styles.selectNumberInput} onChangeText={inputHandler} value={enteredNumber}/>

                    <View style={styles.buttonContainer}>

                        <View style={styles.button}><Button color={"red"} title="Reset" onPress={() => {setEnteredNumber("")}}/></View>
                        <View style={styles.button}><Button color={Colors.primary} title="Confirm" onPress={submitNumber}/></View>
                        
                    </View>

                </Card>

                {confirmedOutput}

            </View>

        </TouchableWithoutFeedback >
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

    selectNumberInput : {

        textAlign: "center"

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