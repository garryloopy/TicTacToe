import {
  SafeAreaView,
  StyleSheet,
  Image
  
} from "react-native";

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
    }
  }
)


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Game />
      <Image source={require("./assets/Thanus.png")}
             style={styles.image}/>
    </SafeAreaView>
  )
}