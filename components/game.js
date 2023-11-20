import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";

import {
    useState
} from "react";

import Board from "./board";

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

const styles = StyleSheet.create(
    {
        center: {
            textAlign: "center"
        }
    }
)

export default function Game() {
    const [positions, setPositions] = useState(starterPositions);
    const [currentTurn, setCurrentTurn] = useState("X");

    const [winner, setWinner] = useState("");

  
    const resetBoard = () => {
      setPositions(starterPositions)
      setWinner("");
    }

    const changeTurn = () => {
        if (currentTurn == "X")
            setCurrentTurn("O");
        else
            setCurrentTurn("X");
    }

    const checkForWinner = (player) => {
        // Check for horizontal pattern
        if (positions.x0y0 === player && positions.x1y0 === player && positions.x1y0 === player)
            return true;
        if (positions.x0y1 === player && positions.x1y1 === player && positions.x1y1 === player)
            return true;
        if (positions.x0y2 === player && positions.x1y2 === player && positions.x1y2 === player)
            return true;

        // Check for vertical pattern
        if (positions.x0y0 === player && positions.x0y1 === player && positions.x0y2 === player)
            return true;
        if (positions.x1y0 === player && positions.x1y1 === player && positions.x1y2 === player)
            return true;
        if (positions.x1y0 === player && positions.x1y1 === player && positions.x1y2 === player)
            return true;

        // Check for diagonal pattern
        if (positions.x0y0 === player && positions.x1y1 === player && positions.x2y2 === player)
            return true;
        if (positions.x0y2 === player && positions.x1y1 === player && positions.x2y0 === player)
            return true;

    }
  
    const handleOnSquarePress = (squareId) => {
      console.log("Clicked on ", squareId);
      // Current square is already occupied
      if (positions[squareId] !== "") return;
  
      // Create new variable to hold current positions
      const newPositions = { ...positions };
      // Change the value on the pressed square
      newPositions[squareId] = currentTurn;
  
      // Set new position
      setPositions(newPositions);

      if (checkForWinner(currentTurn)) {
        setWinner(currentTurn);
        return;
      }
  
      // Change current turn
      changeTurn();
    }
    return (
        <View>
            <Text style={styles.center}>Current turn is {currentTurn}</Text>

            <Board positions={positions}
            onSquarePress={handleOnSquarePress}/>

            { winner &&
                <Text>
                    Winner is {winner}
                </Text>
            }
        
            { !Object.values(positions).some( (value) => value === "" ) &&
                <Button title="Reset"
                    onPress={resetBoard}/>
            }
        </View>
    )
}