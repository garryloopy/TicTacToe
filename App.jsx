import {
  SafeAreaView,
  StyleSheet
} from "react-native";

import {
  NavigationContainer,
} from "react-navigation/native";

import {
  createNativeStackNavigator
} from "react-navigation/native-stack";

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: "#f5f5dc"
    },
    homeScreen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  }
)

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
    </NavigationContainer>
  )
}