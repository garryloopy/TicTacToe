import {
    View,
    StyleSheet
} from "react-native";

import Square from "./square";


/**
 * Represents the game board. 
 * The board is represented in a 2D coordinate system (X and Y)
 * The board is represented as: X0Y2 X1Y2 X2Y2
 *                              X0Y1 X1Y1 X2Y1
 *                              X0Y0 X1Y0 X2Y0
 * @returns The game board
 */

export default function Board({ positions, onSquarePress, theme}) {

  /**
   * Represents overall styling of the page
   */
  const styles = StyleSheet.create({
    board: {
      marginTop: 10,
      marginBottom: 15,
      flexDirection: 'column',
      
    },
    row: {
      flexDirection: 'row',
    },
  
    borderHorizontal: {
      borderBottomWidth: 10,
      borderColor: theme.horizontalLine.color,
    },
    
    middleSquare: {
      borderRightWidth: 10,
      borderLeftWidth: 10,
      borderColor: theme.verticalLine.color,
    },
  });

  return (
    <View style={[styles.board]}>
      <View style={[styles.row, styles.borderHorizontal]}>
        <Square id={'x0y2'} contents={positions.x0y2} onPress={onSquarePress} currentTheme={theme}/>
        <Square id={'x1y2'} contents={positions.x1y2} onPress={onSquarePress} style={styles.middleSquare} currentTheme={theme}/>
        <Square id={'x2y2'} contents={positions.x2y2} onPress={onSquarePress} currentTheme={theme}/>
      </View>
      <View style={[styles.row, styles.borderHorizontal]}>
        <Square id={'x0y1'} contents={positions.x0y1} onPress={onSquarePress} currentTheme={theme}/>
        <Square id={'x1y1'} contents={positions.x1y1} onPress={onSquarePress} style={styles.middleSquare} currentTheme={theme} />
        <Square id={'x2y1'} contents={positions.x2y1} onPress={onSquarePress} currentTheme={theme}/>
      </View>
      <View style={[styles.row]}>
        <Square id={'x0y0'} contents={positions.x0y0} onPress={onSquarePress} currentTheme={theme}/>
        <Square id={'x1y0'} contents={positions.x1y0} onPress={onSquarePress} style={styles.middleSquare} currentTheme={theme}/>
        <Square id={'x2y0'} contents={positions.x2y0} onPress={onSquarePress} currentTheme={theme}/>
      </View>
    </View>
  );
}