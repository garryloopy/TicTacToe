import HomePage from "./screens/HomePage";
import SettingsPage from "./screens/SettingsPage";
import GamePage from "./screens/GamePage";
import AboutPage from "./screens/AboutPage";

import { ConfigContextProvider } from "./_utils/context";

import { 
  NavigationContainer 
} from '@react-navigation/native';
import { 
  createStackNavigator 
} from '@react-navigation/stack';

const Stack = createStackNavigator();

const noHeader = {
  headerShown: false
};

export default function App() {

  return (
    <ConfigContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" 
                        component={HomePage} 
                        options={noHeader}/>
          <Stack.Screen name="Settings" 
                        component={SettingsPage} 
                        options={noHeader}/>
          <Stack.Screen name="Game" 
                        component={GamePage} 
                        options={noHeader}/>
          <Stack.Screen name="About" 
                        component={AboutPage}
                        options={noHeader}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ConfigContextProvider>
  )
}