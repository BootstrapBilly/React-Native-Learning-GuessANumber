import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';

import NumberInput from "../components/NumberInput"
import NumberDisplay from "../components/NumberDisplay"
import Card from "../components/Card"

const guessNumber = (min, max, exlude) => {

    min = Math.ceil(min);
    max = Math.floor(min);

    const randomNumber = Math.floor(Math.random() * (max-min)) + min;

    if(randomNumber === exlude) {

        return guessNumber(min, max, exlude);

    } else {

        return randomNumber;

    }
}
const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(guessNumber(1, 100, props.userChoice))

    return (

        <View style={styles.screen}>

            <Text>Computer says : <NumberDisplay><Text>{currentGuess}</Text></NumberDisplay></Text>

            <Card style={styles.buttonContainer}>

                <Button title="LOWER" color={"red"} onPress={() => {}}/>
                <Button title="HIGHER" color={"green"} onPress={() => {}}/>     

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
        marginTop: 20,
        width: 300,
        maxWidth: "80%"
        
    }
})

export default GameScreen