import {
  Pressable,
  Text,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create(
  {
    square: {
      flex: 1,
      padding: 45,
      
    },
    occupied: {
      backgroundColor: "#f5f5dc"
    },
    textCenter: {
      textAlign: "center"
    }
  }
)

export default function Square( {id, contents, onPress, style } ) {

  const handleOnPress = () => {
      onPress(id);
  }
  return (
      <Pressable style={
                      ({pressed}) => [
                          pressed ? styles.occupied : "",
                          styles.square,
                          style
                      ]
                      
                 }
                 onPress={handleOnPress}>
          <Text style={
                  styles.textCenter
              }>
              {contents}
          </Text>
      </Pressable>
  )
}
// Example
/* <Pressable
  onPress= {
      () => {
        setTimesPressed(current => current + 1);
      }
  }

  style={
      ({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.wrapperCustom,
        ]
      }>
      {({pressed}) => (
        <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
      )}
</Pressable> */