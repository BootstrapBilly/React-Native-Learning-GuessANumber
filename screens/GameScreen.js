import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import NumberDisplay from "../components/NumberDisplay"
import Card from "../components/Card"
import StartGameButton from "../components/StartGameButton"

const guessNumber = (min, max, exlude) => {

    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exlude) {

        return guessNumber(min, max, exlude);

    } else {

        return randomNumber;

    }
}



const GameScreen = props => {

    const initialGuess = guessNumber(1, 100, props.userChoice);

    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver, guessDetail } = props;//pull the values out of the props object and store them in their own constants

    useEffect(() => {

        if (currentGuess === userChoice) {//if the current guess is right

            onGameOver(pastGuesses.length);//send the amount of guesses to app.js

        }

    }, [currentGuess, userChoice, onGameOver]);//second parameter is an array of dependies/variables/objects that useEffect needs

    const nextGuess = direction => {

        if ((direction === "lower" && currentGuess < props.userChoice) || (direction === "higher" && currentGuess > props.userChoice)) {

            return Alert.alert("Wrong direction m8", "Wrong direction m8", [{ text: "wong", style: "cancel" }])

        }

        if (direction === "lower") {

            currentHigh.current = currentGuess + 1;

        }

        if (direction === "higher") {

            currentLow.current = currentGuess

        }
        const newGuess = guessNumber(currentLow.current, currentHigh.current, currentGuess)

        setCurrentGuess(newGuess)

        setPastGuesses(current => [...current, newGuess])

        console.log(pastGuesses)

    }

    return (

        <View style={styles.screen}>

            <Text>Computer says :</Text>

            <NumberDisplay><Text>{currentGuess}</Text></NumberDisplay>

            <Card style={styles.buttonContainer}>

                <View style={styles.button}><StartGameButton overWriteStyleButton={styles.buttonMinus} pointTo={nextGuess.bind(this, "lower")}> <Ionicons name={"md-remove"} size={24} color={"white"} /> </StartGameButton></View>
                <View style={styles.button}><StartGameButton overWriteStyleButton={styles.buttonAdd} pointTo={nextGuess.bind(this, "higher")}> <Ionicons name={"md-add"} size={24} color={"white"} /> </StartGameButton></View>

            </Card>

            {pastGuesses.map(guess => (

                <View key={guess}>

                    <Text>{guess}</Text>

                </View>

            ))}

        </View>
    )

}

const styles = StyleSheet.create({

    screen: {

        flex: 1,
        padding: 10,
        alignItems: "center"
    },

    buttonContainer: {

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        width: 300,
        maxWidth: "80%",
        elevation: 0

    },

    buttonMinus: {

        backgroundColor: "red",

    },

    button: {

        width: "40%",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    }
})

export default GameScreen