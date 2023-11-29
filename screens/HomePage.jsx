import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
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
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            backgroundColor: currentTheme.backgroundColor.color
        },
        heading: {
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 20,
            color: currentTheme.homeHeader.color,
            textAlign: "center",
            paddingBottom: 1
        },
        headerContainer: {
            borderBottomWidth: 0.75,
            width: "100%",
            borderBottomColor: currentTheme.homeHeader.color
        },
        buttonText: {
            color: currentTheme.buttonText.color,
            textAlign: "center",
            fontSize: 15,
            fontWeight: "500"
        },
        buttonContainer: {
            backgroundColor: currentTheme.buttonBackground.color,
            paddingVertical: 20,
            paddingHorizontal: 25,
            borderRadius: 4
        },
        shadow: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        }
    });

    /**
     * Handler for navigating to single play mode
     */
    const navigateToGameSingle = () => {
        // Navigate to Game page, passing in current theme and single play functionality
        navigation.navigate("Game", {themeId: themeId, singlePlay: true})
    }
    /**
     * Handler for navigating to duo mode
     */
    const navigateToGameDuo = () => {
        // Navigate to duo screen, passing in current theme and single play functionality
        navigation.navigate("Game", {themeId: themeId, singlePlay: false})
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.heading, styles.headerContainer, {marginBottom: 50}]}>
                Welcome to TicTacToe
            </Text>

            <View
                style={{gap: 10, width: "100%"}}>
                    <TouchableHighlight
                        activeOpacity={0.9}
                        underlayColor="#DDDDDD"
                        style={[styles.buttonContainer, styles.shadow]}
                        onPressOut={navigateToGameSingle}>
                        <Text style={styles.buttonText}>Single Play</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        activeOpacity={0.9}
                        underlayColor="#DDDDDD"
                        style={[styles.buttonContainer, styles.shadow]}
                        onPressOut={navigateToGameDuo}>
                        <Text style={styles.buttonText}> Duo Play</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        activeOpacity={0.9}
                        underlayColor="#DDDDDD"
                        style={[styles.buttonContainer, styles.shadow]}
                        onPressOut={() => navigation.navigate("Settings", {prevThemeId : themeId})}>
                        <Text style={styles.buttonText}>Settings</Text>
                    </TouchableHighlight>
            </View>
        </View>
    )
}

