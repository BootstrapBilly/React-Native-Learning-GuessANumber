import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';

import Card from "../components/Card";
import NumberInput from "../components/NumberInput";
import Colors from "../constants/Colors";
import NumberDisplay from "../components/NumberDisplay"
import HeaderText from "../components/HeaderText"
import StartGameButton from "../components/StartGameButton"

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

            Alert.alert("Failure", "The ting failed", [{text:"Noob", style:"destructive", onPress: setEnteredNumber("")}])
            return

        }

        setConfirmed(true)//set the confirmation state to true
        
        setNumberToSubmit(chosenNumber)//Set the submitted number to the number which was entered

        setEnteredNumber("")//clear the input

        closeKeyboard()

    }

    let confirmedOutput;//define a variable to output the confirmed number

    if(confirmed) {//if the number has been confirmed and validated

        confirmedOutput = 

        <Card style={styles.promptCard}>

                <Text>You have chosen : </Text>

            <NumberDisplay ><Text style={styles.number}>{numberToSubmit}</Text></NumberDisplay>

            <StartGameButton pointTo={() => props.onStartGame(numberToSubmit)}>Start Game!</StartGameButton>
            

        </Card>

    } 

    let holder = <View><Button title={"Start Game"} color={Colors.primary} onPress={() => props.onStartGame(numberToSubmit)}/></View>;
    
    return (

        <TouchableWithoutFeedback  onPress={closeKeyboard}>

            <View style={styles.container}>

                <HeaderText style={styles.title}>Start A New Game!</HeaderText>

                <Card style={styles.card}>

                    <Text style={styles.subTitle}>Select a Number</Text>
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


    },

    subTitle : {

        fontSize: 15,
        fontFamily: "open-sans-bold"

    },

    container : {

        padding : 10,
        alignItems: "center",
        justifyContent: "center"

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

    },

    promptCard : {

        justifyContent:"center",
        alignItems: "center",
        elevation:10,
        marginTop: 15
    },

})

export default StartGameScreen