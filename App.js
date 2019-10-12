import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./components/Header"
import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import WinScreen from './screens/WinScreen';

export default function App() {

  const [screenNumber, SetScreenNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const restartGame = () => {

    setGuessRounds(0);
    SetScreenNumber(null)
  }
  const startGameHandler = number => {

    SetScreenNumber(number);
    
  }

  const gameOverHandler = number => {

    setGuessRounds(number)

  }

  let content = <StartGameScreen onStartGame={startGameHandler} />


  if(screenNumber && guessRounds <=0) {

    content = <GameScreen userChoice={screenNumber} onGameOver={gameOverHandler}/>

  } else if (guessRounds > 0){

    content = <WinScreen rounds={guessRounds} number={screenNumber} restartGame={() => restartGame()}/>
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
