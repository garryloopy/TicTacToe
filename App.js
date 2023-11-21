import {
  View,
  Text
} from "react-native";

import HomePage from "./screens/HomePage";
import SettingsPage from "./screens/SettingsPage";
import Game from "./components/game";

import { 
  NavigationContainer 
} from '@react-navigation/native';
import { 
  createBottomTabNavigator 
} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}