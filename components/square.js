import {
  Pressable,
  Text,
  StyleSheet
} from "react-native";

/**
 * A square component that is typically used with the board component. This component allows for button press, and state changes upon the press.
 * @param {String} id Represents the unique square id
 * @param {String} contents Represents the contents of the square
 * @param {Function} onPress Handler for the clicking the square
 * @param {Object} style Represents the style for the square
 * @param {Object} currentTheme Represents the theme for the square. Please see themeManager for more info.
 * @returns A square component
 */
export default function Square( {id, contents, onPress, style, currentTheme } ) {
  /**
   * Represents the overall styling of the component
   */
  const styles = StyleSheet.create(
    {
      square: {
        flex: 1,
        padding: 15,
      },
      squarePressed: {
        backgroundColor: currentTheme.squarePressed.color,
        opacity: 0.8
      },
      occupied: {
        textAlign: "center",
        fontSize: 60,
        color: currentTheme.XOtheme.color,
        fontWeight: "300",
        
      },
      
    }
  )

  /**
   * Handler for pressing a square
   */
  const handleOnPress = () => {
      onPress(id);
  }
  return (
      <Pressable style={
                      ({pressed}) => [
                          pressed ? styles.squarePressed : "",
                          styles.square,
                          style
                      ]
                      
                 }
                 onPress={handleOnPress}>
          <Text style={
                  styles.occupied
              }>
              {contents}
          </Text>
      </Pressable>
  )
}