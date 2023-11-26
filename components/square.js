import {
  Pressable,
  Text,
  StyleSheet
} from "react-native";

export default function Square( {id, contents, onPress, style, currentTheme } ) {
  const styles = StyleSheet.create(
    {
      square: {
        flex: 1,
        padding: 45,
      },
      squarePressed: {
        backgroundColor: currentTheme.squarePressed.color
      },
      occupied: {
        textAlign: "center",
        fontWeight: "800",
        fontSize: 15,
        color: currentTheme.squareOccupied.color
      }
    }
  )

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