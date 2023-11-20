import {
    View,
    StyleSheet
} from "react-native";

import Square from "./square";
import {
    useState
} from "react";

const styles = StyleSheet.create(
    {
      board: {
        backgroundColor: "#ffe4c4",
        margin: 15
      },
      row: {
        flexDirection: "row"
      }
    }
  )

/**
 * Represents the game board. 
 * The board is represented in a 2D coordinate system (X and Y)
 * The board is represented as: X0Y2 X1Y2 X2Y2
 *                              X0Y1 X1Y1 X2Y1
 *                              X0Y0 X1Y0 X2Y0
 * @returns The game board
 */
export default function Board( {positions, onSquarePress} ) {

    return (
      <View style={styles.board}>
        <View style={styles.row}>
          <Square id={"x0y2"}
                  contents={positions.x0y2} 
                  onPress={onSquarePress}/>
          <Square id={"x1y2"}
                  contents={positions.x1y2} 
                  onPress={onSquarePress}/>
          <Square id={"x2y2"}
                  contents={positions.x2y2} 
                  onPress={onSquarePress}/>
        </View>
        <View style={styles.row}>
          <Square id={"x0y1"}
                  contents={positions.x0y1} 
                  onPress={onSquarePress}/>
          <Square id={"x1y1"}
                  contents={positions.x1y1} 
                  onPress={onSquarePress}/>
          <Square id={"x2y1"}
                  contents={positions.x2y1} 
                  onPress={onSquarePress}/>
        </View>
        <View style={styles.row}>
          <Square id={"x0y0"}
                  contents={positions.x0y0} 
                  onPress={onSquarePress}/>
          <Square id={"x1y0"}
                  contents={positions.x1y0} 
                  onPress={onSquarePress}/>
          <Square id={"x2y0"}
                  contents={positions.x2y0} 
                  onPress={onSquarePress}/>
        </View>
      </View>
    )
}