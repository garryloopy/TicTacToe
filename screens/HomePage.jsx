import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

import { useConfigContext } from "../_utils/context";

export default function HomePage( {navigation} ) {
    // Represents the theme id, current theme, and single play functionality
    const { themeId, currentTheme, setSinglePlay } = useConfigContext();

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
        setSinglePlay(true);
        navigation.navigate("Game")
    }
    /**
     * Handler for navigating to duo mode
     */
    const navigateToGameDuo = () => {
        setSinglePlay(false);
        // Navigate to duo screen, passing in current theme and single play functionality
        navigation.navigate("Game")
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
                        onPressOut={() => navigation.navigate("Settings")}>
                        <Text style={styles.buttonText}>Settings</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        activeOpacity={0.9}
                        underlayColor="#DDDDDD"
                        style={[styles.buttonContainer, styles.shadow]}
                        onPressOut={() => navigation.navigate("About")}>
                        <Text style={styles.buttonText}>About Us</Text>
                    </TouchableHighlight>
            </View>
        </View>
    )
}

