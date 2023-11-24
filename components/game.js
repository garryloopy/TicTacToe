import {
    View,
    Text,
    Button,
    TouchableHighlight,
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
        },
        text: {
            marginLeft: 80,
        },
        textCurrent: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'green',
        },
        textTurn: {
            fontSize: 15,
            color: 'white',
            marginLeft: 50,
        },
        textWins: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'green'
        },
        infoContainer: {
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 5,
            padding: 10,
            marginLeft: 80,
            marginRight: 80,
            marginBottom: 10,
            backgroundColor: '#32CD32' 
        },
        buttonContainer: {
            marginRight: 80,
            marginLeft: 80,
            marginTop: 10,
            backgroundColor: 'green',
            color: 'white',
        },
        buttonText: {
            color: 'white',
            textAlign: 'center',
            padding: 10,
        },
    }
)

export default function Game( {singlePlay} ) {
    const [positions, setPositions] = useState(starterPositions);
    const [currentTurn, setCurrentTurn] = useState("X");

    const [winCounter, setWinCounter] = useState(starterWins);
    const [winStreakX, setWinStreakX] = useState(0);
    const [winStreakO, setWinStreakO] = useState(0);

    const [winner, setWinner] = useState("");

    useEffect(() => {
        // Don't do anything if there is a winner or it's not the computer's turn or the game is already won
        if (winner || currentTurn !== "O" || !singlePlay || checkForWinner()) return;
    
        const availablePositions = Object.keys(positions).filter(position => positions[position] === "");
        const randomNum = Math.floor(Math.random() * (availablePositions.length - 1));
        const chosenPosition = availablePositions[randomNum];
        handleOnSquarePress(chosenPosition);
    }, [currentTurn]);
    

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

        if (winner === "X") {
            setWinStreakX(winStreakX + 1);
            setWinStreakO(0);
        } else if (winner === "O") {
            setWinStreakO(winStreakO + 1);
            setWinStreakX(0);
        }
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
            <Text style={[styles.center, styles.textCurrent]}>Current turn is: {currentTurn}</Text>

            <Board positions={positions}
            onSquarePress={handleOnSquarePress}/>

            <View style={styles.infoContainer}>
                <Text style={[styles.textWins]}>Wins:</Text>
                <Text style={[styles.textTurn]}>X - {winCounter.X}</Text>
                <Text style={[styles.textTurn]}>O - {winCounter.O}</Text>
                <Text style={[styles.textWins]}>Win Streak:</Text>
                <Text style={[styles.textTurn]}> X - {winStreakX}</Text>
                <Text style={[styles.textTurn]}> O - {winStreakO}</Text>
            </View>

            { winner &&
                <View>
                    <Text style={styles.text}>
                        Winner is {winner}
                    </Text>
                    <TouchableHighlight 
                        style={styles.buttonContainer}
                        onPress={handleOnPlayAgainButton} 
                    >
                        <Text style={styles.buttonText}>Play Again</Text>
                    </TouchableHighlight>
                </View>
            }
            
            { !Object.values(positions).some( (value) => value === "" ) && !winner &&
                <View>
                    <Text style={styles.center}>Stalemate... </Text>
                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={resetBoard}
                    >
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableHighlight>
                </View>
            }

        </View>
    )
}