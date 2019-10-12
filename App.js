import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font"
import {AppLoading} from "expo"

import Header from "./components/Header"
import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import WinScreen from './screens/WinScreen';

const fetchFonts = () => {

  return Font.loadAsync({//load fonts, takes a key and the value is the path of the font

    "open-sans":require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold":require("./assets/fonts/OpenSans-Bold.ttf")

  })

}

export default function App() {

  const [appLoaded, setAppLoaded] = useState(false);
  const [screenNumber, SetScreenNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  if(!appLoaded) {//If the app is still loading(state is false)
    //Only render the AppLoading component
    //start async means the apploading waits for an async function to be called
    //when it is called, onFinish is called which executes a function
    //In the function we set the loading state to true so the app can be rendered
    return <AppLoading startAsync={fetchFonts} 
    onFinish={() => setAppLoaded(true)}
    onError={(err) => console.log(err)}
    />

  }
  
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
