import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import Colors from "../constants/Colors"

const Header = props => {

    return (

        <View style={styles.container}> 

            <Text style={styles.headerTitle}>{props.title}</Text>
           
        </View>
    )

}

const styles = StyleSheet.create({

    container : {

        width: "100%",
        height: "17%",
        backgroundColor: Platform.OS === "android" ? Colors.secondary : "white",
        justifyContent: "center",
        alignItems: "center"

    },

    headerTitle : {

        fontSize: 18,
        color: "white"        
    }

})

export default Header;