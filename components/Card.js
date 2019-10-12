import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Card = props => {

    return (

        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )

}
const styles = StyleSheet.create({

    card : {

        alignItems: "center",
        justifyContent:"center",
        marginTop:10,
        shadowColor: "black",
        shadowOpacity: 1,
        shadowOffset : {

            width:0, height:2
        },
        shadowRadius: 6,
        backgroundColor: "white",
        elevation: 5,
        padding:25,
        borderRadius: 10

    }

})

export default Card;