import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./components/Header"
import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"

export default function App() {

  const [screenNumber, SetScreenNumber] = useState();

  const startGameHandler = (number) => {

    SetScreenNumber(number)

  }

  let content = <StartGameScreen onStartGame={startGameHandler} />


  if(screenNumber) {

    content = <GameScreen />

  }

  return (

    <View style={styles.container}>
      
      <Header title={"My header"} />
      
      {content}
      

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
