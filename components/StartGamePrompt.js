import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Colors from "../constants/Colors"
import Card from './Card';
import NumberDisplay from "../components/NumberDisplay"

const StartGamePrompt = props => {

    return (

        <View style={styles.container}>

                <Text>{props.textValue}</Text>
                
                <NumberDisplay ><Text style={styles.number}>{props.number}</Text></NumberDisplay>

                <View><Button title={"Start Game"} color={Colors.primary} onPress={props.startGame}/></View>

        </View>
    )

}

const styles = StyleSheet.create({

    container : {

        marginTop:10,
        
    },

    number : {

        fontSize: 22,
        paddingVertical: 20
    }

})

export default StartGamePrompt