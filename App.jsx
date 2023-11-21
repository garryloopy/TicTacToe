import {
  View,
  Text
} from "react-native";

import { 
  NavigationContainer 
} from '@react-navigation/native';

import { 
  createNativeStackNavigator 
} from '@react-navigation/native-stack';


const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

    </NavigationContainer>
  )
}