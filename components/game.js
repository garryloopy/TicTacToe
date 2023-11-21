import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";

import {
    useState,
    useEffect
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

const starterWins = {
    X: 0,
    O: 0,
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

    const [winCounter, setWinCounter] = useState(starterWins)

    const [winner, setWinner] = useState("");

    useEffect(
        () => {
            setWinner(checkForWinner());
        }, [positions]
    )
  
    const resetBoard = () => {
      // Set new positions to starter position
      setPositions(starterPositions)

      // Set winner to nothing
      setWinner("");

      // Set current turn to X
      setCurrentTurn("X");
    }

    const handleOnPlayAgainButton = () => {
        // Reset board;
        resetBoard();

        // Create new object to handle new winner and increment the winner score by 1
        let newWinCounter = { ...winCounter }
        newWinCounter[winner] = newWinCounter[winner] + 1;

        // Set win counter
        setWinCounter( newWinCounter);
    }

    const changeTurn = () => {
        if (currentTurn == "X")
            setCurrentTurn("O");
        else
            setCurrentTurn("X");
    }

    const checkForWinner = () => {
        // Check for horizontal pattern
        if (positions.x0y0 !== "" && positions.x0y0 === positions.x1y0 && positions.x1y0 === positions.x2y0) 
            return positions.x0y0; 
        if (positions.x0y1 !== "" && positions.x0y1 === positions.x1y1 && positions.x1y1 === positions.x2y1)
            return positions.x0y1;
        if (positions.x0y2 !== "" && positions.x0y2 === positions.x1y2 && positions.x1y2 === positions.x2y2)
            return positions.x0y2;

        //Check for vertical pattern
        if (positions.x0y0 !== "" && positions.x0y0 === positions.x0y1 && positions.x0y1 === positions.x0y2)
            return positions.x0y0;
        if (positions.x1y0 !== "" && positions.x1y0 === positions.x1y1 && positions.x1y1 === positions.x1y2)
            return positions.x1y0;
        if (positions.x2y0 !== "" && positions.x2y0 === positions.x2y1 && positions.x2y1 === positions.x2y2)
            return positions.x2y0;

        // Check for diagonal pattern
        if (positions.x0y0 !== "" && positions.x0y0 === positions.x1y1 && positions.x1y1 === positions.x2y2)
            return positions.x0y0;
        if (positions.x0y2 !== "" & positions.x0y2 === positions.x1y1 && positions.x1y1 === positions.x2y0)
            return positions.x0y2;

        // No winner
        else
            return "";

    }
  
    const handleOnSquarePress = (squareId) => {
      // Winner found: don't do anything
      if (winner) return;

      // Current square is already occupied
      if (positions[squareId] !== "") return;
  
      // Create new variable to hold current positions
      const newPositions = { ...positions };
      // Change the value on the pressed square
      newPositions[squareId] = currentTurn;
  
      // Set new position
      setPositions(newPositions);
  
      // Change current turn
      changeTurn();
    }
    return (
        <View>
            <Text style={styles.center}>Current turn is {currentTurn}</Text>

            <Board positions={positions}
            onSquarePress={handleOnSquarePress}/>

            <View>
                <Text  style={styles.center}>Wins:</Text>
                <Text  style={styles.center}>X - {winCounter.X}</Text>
                <Text  style={styles.center}>O - {winCounter.O}</Text>
            </View>

            { winner &&
                <View>
                    <Text>
                        Winner is {winner}
                    </Text>
                    <Button title="Play again" 
                            onPress={handleOnPlayAgainButton}/>
                </View>
            }
            
            { !Object.values(positions).some( (value) => value === "" ) && !winner &&
                <View>
                    <Text style={styles.center}>Stalemate... </Text>
                    <Button title="Reset"
                    onPress={resetBoard}/>
                </View>
            }
        </View>
    )
}