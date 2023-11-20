import {
  SafeAreaView,
  StyleSheet,
  Image,
  Button
  
} from "react-native";

import {
  useState
} from "react";

import Game from "./components/game";

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: "#f5f5dc"
    },
    board: {
      backgroundColor: "#ffe4c4",
      margin: 15
    },
    row: {
      flexDirection: "row"
    },
    square: {
      flex: 1,
      padding: 15
    },
    textCenter: {
      textAlign: "center"
    },
    image: {
      width: 200,
      height: 200,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 12
    }
  }
)


export default function App() {
  const [thanus, setThanus] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Game />
      
      <Button title={thanus ? "I regret clicking on the button" : "Surprise me"}
              onPress={() => setThanus(!thanus)}/>
      
      {thanus && 
        <Image source={require("./assets/Lord_farquaad_banner.jpg")}
               style={styles.image}/>
      }
      
    </SafeAreaView>
  )
}