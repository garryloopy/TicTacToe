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