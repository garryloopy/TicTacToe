import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    FlatList
} from "react-native";

import { useConfigContext } from "../_utils/context";

import {
    getThemeById,
    getAllThemes
} from "../components/themeManager"

import {
    useState,
    useEffect
} from "react";

import { playSoundById, stopAllSounds } from "../components/soundManager";

export default function SettingsPage({ navigation }) {
    // Used to represent the state of which nav bar option is selected
    const [selectedNavBar, setSelectedNavBar] = useState("THEMES");

    const { themeId, setThemeId, soundId, setSoundId, availableThemes, availableSounds, setAvailableSounds, currentSound, setCurrentSound } = useConfigContext();

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
          paddingBottom: 1
      },
      headerContainer: {
          borderBottomWidth: 0.75,
          marginBottom: 10,
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
            paddingVertical: 20,
            paddingHorizontal: 25,
            borderRadius: 4,
        },
        buttonContainer: {
            backgroundColor: "gray",
            paddingVertical: 20,
            paddingHorizontal: 25,
            borderRadius: 4,
            opacity: 0.8
        }, 
        bodyContainer: {
            width: "100%"
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
     * Represents a theme button jsx
     * @param {Number} id The theme id
     * @param {String} title The contents for the theme button
     * @param {Function} onPress Handler when the theme button is pressed
     * @param {boolean} isSelected Represents a state on whether or not the current theme button is selected
     * @returns A theme button jsx
     */
    const OptionsButton = ({ id, title, onPress, isSelected }) => {

        /**
         * Handler whenever the theme button is pressed.
         */
        const handleOnButtonPress = () => {
            // Pass current button id to onPress 
            onPress(id);
        };
        return (
          <TouchableHighlight
            activeOpacity={0.9}
            underlayColor="#DDDDDD"
            style={[isSelected ? styles.buttonContainerSelected : styles.buttonContainer, styles.shadow]}
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
        if (selectedNavBar === "THEMES")
          // Sets the new theme id from the passed id
          setThemeId(id);
        else {
          stopAllSounds();
          setSoundId(id);
          playSoundById(id);
        }
          
      };

      /**
       * Handler for pressing the save changes button
       */
      const handleOnSaveChangesButtonPress = () => {
        // Navigate back to the home page, passing the theme Id
        navigation.navigate("Home", { themeId: themeId });
      }

      const handleOnNavButtonPress = (value) => {
        setSelectedNavBar(value);
      }

      const navBar = StyleSheet.create(
        {
          navBarContainer: {
            backgroundColor: "gray", 
            width: "100%", 
            height: 40, 
            flexDirection: "row", 
            justifyContent:"space-evenly", 
            gap: 6, 
            borderRadius: 4, 
            alignItems:"center",
            marginBottom: 10
          },
            navBarButtonContainer: {
              backgroundColor: "white", 
              paddingVertical: 5,
              paddingHorizontal: 60,
              borderRadius: 4
          },
          navBarButtonText: {
            textAlign: "center"
          },
          navBarButtonContainerSelected:{
            backgroundColor: currentTheme.buttonBackground.color
          },
          navBarButtonTextSelected: {
            color: currentTheme.buttonText.color
          }
        }
      )

      const handleOnNonePress = () => {
        setSoundId(-1);
        stopAllSounds();
      }
    
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Settings</Text>
          </View>

          <View style={navBar.navBarContainer}>
            <TouchableHighlight 
              style={[navBar.navBarButtonContainer, selectedNavBar === "THEMES" ? navBar.navBarButtonContainerSelected : {opacity: 0.7}, styles.shadow]}
              activeOpacity={0.9}
              underlayColor="#DDDDDD"
              onPressOut={() => handleOnNavButtonPress("THEMES")}>
              <Text style={[navBar.navBarButtonText, selectedNavBar === "THEMES" ? navBar.navBarButtonTextSelected : {}]}>Themes</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              style={[navBar.navBarButtonContainer, selectedNavBar === "SOUNDS" ? navBar.navBarButtonContainerSelected : {}, styles.shadow]}
              activeOpacity={0.9}
              underlayColor="#DDDDDD"
              onPressOut={() => handleOnNavButtonPress("SOUNDS")}>
              <Text style={[navBar.navBarButtonText, selectedNavBar === "SOUNDS" ? navBar.navBarButtonTextSelected : {opacity: 0.7}]}>Sounds</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.bodyContainer}>

          <FlatList
            data={selectedNavBar === "THEMES" ? Object.keys(availableThemes) : Object.keys(availableSounds)}
            renderItem={({ item }) => (
              <OptionsButton
                title={selectedNavBar === "THEMES" ? availableThemes[item].name : availableSounds[item].name}
                onPress={handleOnButtonPress}
                id={item}
                key={item}
                isSelected={selectedNavBar === "THEMES" ? item == themeId : item == soundId }
              />
            )}
            keyExtractor={(item) => item}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={<Text style={styles.heading}>{selectedNavBar === "THEMES" ? "Themes" : "Sounds"}</Text>}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          />

          {selectedNavBar === "SOUNDS" &&
            <TouchableHighlight
                  activeOpacity={0.9}
                  underlayColor="#DDDDDD"
                  style={[soundId === -1 ? styles.buttonContainerSelected : styles.buttonContainer, {marginTop: 10}, styles.shadow]}
                  onPressOut={handleOnNonePress}>
                  <Text style={soundId === -1 ? styles.buttonTextSelected : styles.buttonText}>
                  None
                  </Text>
              </TouchableHighlight>
          }

            <TouchableHighlight
                  activeOpacity={0.9}
                  underlayColor="#DDDDDD"
                  style={[styles.buttonContainerSelected, {marginTop: 15}, styles.shadow]}
                  onPress={handleOnSaveChangesButtonPress}>
                  <Text style={styles.buttonTextSelected}>
                  Save Changes
                  </Text>
              </TouchableHighlight>
          </View>
        </View>
      );
    }

