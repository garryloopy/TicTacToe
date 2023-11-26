import {
    View,
    Text,
    StyleSheet,
    Pressable
} from "react-native";

import {
    useState,
    useEffect
} from "react";

import { getThemeById } from "../components/themeManager";



export default function HomePage( {navigation, route} ) {
    // Represents the theme id that was passed from the previous page, otherwise default to theme id of 0
    const { themeId } = route.params || { themeId: 0 };

    // Represents current theme, defaulted to theme that corresponds to 0
    const [currentTheme, setCurrentTheme] = useState(getThemeById(0).theme);

    // Change theme every time the theme id changes
    useEffect(() => {
        // Sets current theme
        setCurrentTheme(getThemeById(themeId).theme);
      }, [themeId]);

      /**
       * Represents overall styling for the page
       */
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            backgroundColor: currentTheme.backgroundColor.color
        },
        header: {
            fontSize: 18,
            marginBottom: 20,
            color: currentTheme.homeHeader.color
        },
        buttonText: {
            color: currentTheme.buttonText.color
        },
        buttonContainer: {
            backgroundColor: currentTheme.buttonBackground.color,
            paddingVertical: 10,
            paddingHorizontal: 25
        }
    });

    /**
     * Handler for navigating to single play mode
     */
    const navigateToGameSingle = () => {
        // Navigate to Game page, passing in current theme
        navigation.navigate("Game", {themeId: themeId})
    }
    /**
     * Handler for navigating to duo mode
     */
    const navigateToGameDuo = () => {
        // Navigate to duo screen, passing in current theme
        navigation.navigate("Game Duo", {themeId: themeId})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Welcome to TicTacToe
            </Text>

            <View
                style={{gap: 10}}>
                    <Pressable
                        style={styles.buttonContainer}
                        onPress={navigateToGameSingle}>
                        <Text style={styles.buttonText}>Single Play</Text>
                    </Pressable>
                    <Pressable
                        style={styles.buttonContainer}
                        onPress={navigateToGameDuo}>
                        <Text style={styles.buttonText}>Duo Play</Text>
                    </Pressable>
                    <Pressable
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate("Settings", {prevThemeId : themeId})}>
                        <Text style={styles.buttonText}>Settings</Text>
                    </Pressable>
            </View>
        </View>
    )
}

