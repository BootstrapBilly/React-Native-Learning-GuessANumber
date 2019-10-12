import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';

import NumberDisplay from "../components/NumberDisplay"
import Card from "../components/Card"

const guessNumber = (min, max, exlude) => {

    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomNumber === exlude) {

        return guessNumber(min, max, exlude);

    } else {

        return randomNumber;

    }
}



const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(guessNumber(1, 100, props.userChoice))
    const [guesses, setGuesses] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver} = props;//pull the values out of the props object and store them in their own constants

    useEffect(() => {
        if(currentGuess === userChoice) {//if the current guess is right

            onGameOver(guesses);//send the amount of guesses to app.js

        }

    }, [currentGuess, userChoice, onGameOver] );//second parameter is an array of dependies/variables/objects that useEffect needs

    const nextGuess = direction => {

        if ((direction === "lower" && currentGuess < props.userChoice) || (direction === "higher" && currentGuess > props.userChoice)){

            return Alert.alert("Wrong direction m8", "Wrong direction m8", [{text:"wong", style: "cancel"}])

        }

        if(direction === "lower") {

            currentHigh.current = currentGuess;

        }

        if(direction === "higher") {

            currentLow.current = currentGuess

        }
        
        setCurrentGuess(guessNumber(currentLow.current, currentHigh.current, currentGuess))

        setGuesses(currentGuesses => currentGuesses + 1)


    }

    return (

        <View style={styles.screen}>

            <Text>Computer says :</Text>

            <NumberDisplay><Text>{currentGuess}</Text></NumberDisplay>

            <Card style={styles.buttonContainer}>

                <Button title="LOWER" color={"red"} onPress={nextGuess.bind(this, "lower")}/>
                <Button title="HIGHER" color={"green"} onPress={nextGuess.bind(this, "higher")}/>

            </Card>
            
        </View>
    )

}

const styles = StyleSheet.create({

    screen : {

        flex:1,
        padding: 10,
        alignItems: "center"
    },

    buttonContainer : {

        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop: 20,
        width: 300,
        maxWidth: "80%"
        
    },

    button : {

        width:"40%"
    }
})

export default GameScreen