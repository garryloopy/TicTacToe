import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

import {
    getThemeById,
    getAllThemes
} from "../components/themeManager"

import {
    useState,
    useEffect
} from "react";

export default function SettingsPage({ navigation, route }) {
    // Used to represent which theme id is passed from the previous route/page, if none: default to id 0
    const { prevThemeId } = route.params || { prevThemeId: 0 };

    // Represents current theme id
    const [themeId, setThemeId] = useState(prevThemeId);

    // Represents current theme
    const [currentTheme, setCurrentTheme] = useState(getThemeById(themeId).theme);
    
    // Change current theme each the current theme id changes
    useEffect(() => {
      setCurrentTheme(getThemeById(themeId).theme);
    }, [themeId]);

    // Represents overall styling for the page
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding:20,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            backgroundColor: currentTheme.backgroundColor.color
        },
        heading: {
          fontSize: 25,
          fontWeight: "bold",
          color: currentTheme.homeHeader.color,
          textAlign: "center",
          paddingBottom: 5
      },
      headerContainer: {
          borderBottomWidth: 0.75,
          marginBottom: 20,
          width: "100%",
          borderBottomColor: currentTheme.homeHeader.color
      },
        buttonText: {
            color: "white",
            textAlign: "center",
            fontSize: 15,
            fontWeight: "500"
        },
        buttonTextSelected: {
            color: currentTheme.buttonText.color,
            textAlign: "center",
            fontSize: 15,
            fontWeight: "500"
        },
        buttonContainerSelected: {
            backgroundColor: currentTheme.buttonBackground.color,
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 4,
        },
        buttonContainer: {
            backgroundColor: "gray",
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 4
        }, 
        themeContainer: {
            width: "100%"
        }

    });

    /**
     * Represents a theme button jsx
     * @param {Number} id The theme id
     * @param {String} title The contents for the theme button
     * @param {Function} onPress Handler when the theme button is pressed
     * @param {boolean} isSelected Represents a state on whether or not the current theme button is selected
     * @returns A theme button jsx
     */
    const ThemeButton = ({ id, title, onPress, isSelected }) => {

        /**
         * Handler whenever the theme button is pressed.
         */
        const handleOnButtonPress = () => {
            // Pass current button id to onPress 
            onPress(id);
        };
        return (
          <TouchableHighlight
            style={isSelected ? styles.buttonContainerSelected : styles.buttonContainer}
            onPress={handleOnButtonPress}>
            <Text style={isSelected ? styles.buttonTextSelected : styles.buttonText}>
              {title}
            </Text>
          </TouchableHighlight>
        );
    };
      
      /**
       * Handler for theme button
       * @param {id} id The id of the theme button that was pressed
       */
      const handleOnButtonPress = (id) => {
        // Sets the new theme id from the passed id
        setThemeId(id);
      };

      /**
       * Handler for pressing the save changes button
       */
      const handleOnSaveChangesButtonPress = () => {
        // Navigate back to the home page, passing the theme Id
        navigation.navigate("Home", { themeId: themeId });
      }
    
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Settings</Text>
          </View>
          <View style={[styles.headerContainer, {borderBottomWidth: 0, marginBottom: 5}]}>
            <Text style={styles.heading}>Themes</Text>
          </View>
          
          <View style={styles.themeContainer}>
            <View style={{gap: 10}}>
              {Object.keys(getAllThemes()).map((currentId) => (
                <ThemeButton
                  title={getAllThemes()[currentId].name}
                  onPress={handleOnButtonPress}
                  id={currentId}
                  key={currentId}
                  isSelected={currentId == themeId}
                />
              ))}

              <TouchableHighlight
                  style={[styles.buttonContainerSelected, {marginTop: 15}]}
                  onPress={handleOnSaveChangesButtonPress}>
                  <Text style={styles.buttonTextSelected}>
                  Save Changes
                  </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      );
    }

