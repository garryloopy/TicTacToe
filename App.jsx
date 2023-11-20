import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Image
  
} from "react-native";

import Square from "./components/square";
import Board from "./components/board";

import {
  useState
} from "react";


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

const starterPositions = {
  x0y0 : "",
  x1y0 : "",
  x2y0 : "",
  x0y1 : "",
  x1y1 : "",
  x2y1 : "",
  x0y2 : "",
  x1y2 : "",
  x2y2 : "",
}

export default function App() {
  const [positions, setPositions] = useState(starterPositions);
  const [currentTurn, setCurrentTurn] = useState("X");

  const resetBoard = () => {
    setPositions(starterPositions)
  }

  const handleOnSquarePress = (squareId) => {
    // Current square is already occupied
    if (positions[squareId] !== "") return;

    // Create new variable to hold current positions
    const newPositions = { ...positions };
    // Change the value on the pressed square
    newPositions[squareId] = currentTurn;

    // Set new position
    setPositions(newPositions);

    // Change current turn
    if (currentTurn == "X")
      setCurrentTurn("O");
    else
      setCurrentTurn("X");
  }
  return (
    <SafeAreaView style={styles.container}>
      
      <Text>This is a board</Text>
      <Text>Current turn is {currentTurn}</Text>
      <Board positions={positions}
             onSquarePress={handleOnSquarePress}/>
      
      { !Object.values(positions).some( (value) => value === "" ) &&
        <Button title="Reset"
                onPress={resetBoard}/>
      }
      <Image source={require("./assets/Thanus.png")}
             style={styles.image}/>
    </SafeAreaView>
  )
}