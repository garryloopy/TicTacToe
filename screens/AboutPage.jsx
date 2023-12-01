import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from "react-native";

import { useConfigContext } from "../_utils/context";

import {
    getThemeById,
} from "../components/themeManager"

import {
    useState,
    useEffect
} from "react";

import { playSoundById, stopAllSounds } from "../components/soundManager";

export default function AboutPage({ navigation }) {

    const { themeId, availableSounds } = useConfigContext();

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
          fontFamily: "monospace",
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
            fontFamily: "monospace",
            fontSize: 20,
            fontWeight: "900"
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
        },
        text: {
            color: currentTheme.homeHeader.color,
            textAlign: "center",
            fontSize: 15,
            fontFamily: "monospace",
            fontWeight: "500",
            opacity: 0.9
        }

    });
      
      const handleOnHomeButtonPress = () => {
        navigation.navigate("Home");
      }
    
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>About</Text>
          </View>

          <View style={[styles.bodyContainer, {marginBottom: "auto", gap: 20}]}>
            <View>
                <View style={[styles.headerContainer, {marginTop: 10, marginBottom: 0, borderBottomWidth: 0}]}>
                    <Text style={[styles.heading, {fontSize: 20}]}>App made by:</Text>
                </View>
                <View style={{paddingBottom: 15}}>
                    <Text style={styles.text}>Garry Jr Dayag</Text>
                    <Text style={styles.text}>Nicholas Gonzales</Text>
                    <Text style={styles.text}>Bryan Zhou</Text>
                </View>
            </View>

            <View>
                <View style={[styles.headerContainer, {marginTop: 10, marginBottom: 0, borderBottomWidth: 0}]}>
                    <Text style={[styles.heading, {fontSize: 20}]}>Songs used:</Text>
                </View>
                <View style={{paddingBottom: 15}}>
                    {
                        Object.keys(availableSounds).map((soundId) => (
                            <Text style={styles.text} key={soundId}>{availableSounds[soundId].name} by {availableSounds[soundId].author}</Text>
                        ))
                    }
                    {/* <Text style={styles.text}>Moonlight by Scott Buckley</Text>
                    <Text style={styles.text}>Autumn Waltz by Oleksii_Kalyna</Text>
                    <Text style={styles.text}>Place holder</Text>
                    <Text style={styles.text}>Place holder</Text>
                    <Text style={styles.text}>Place holder</Text>
                    <Text style={styles.text}>Place holder</Text>
                    <Text style={styles.text}>Place holder</Text>
                    <Text style={styles.text}>Place holder</Text> */}
                </View>
            </View>

            <View>
                <View style={[styles.headerContainer, {marginTop: 10, marginBottom: 0, borderBottomWidth: 0}]}>
                    <Text style={[styles.heading, {fontSize: 20}]}>About the app</Text>
                </View>
                <View style={{paddingBottom: 15, gap: 8}}>
                    <Text style={styles.text}>
                        This app was made to showcase our knowledge with React Native and JavaScript. 
                    </Text>
                    <Text style={styles.text}>
                        The goal of the app was to create a simple Tic Tac Toe game that can be played by two players or by a single player.
                    </Text>
                    <Text style={styles.text}>
                        The app was also developed with the idea that the users can easily customize the application theme and background music with ease.
                    </Text>
                    <Text style={styles.text}>
                        We hope that you enjoy the app!
                    </Text>
                </View>
            </View>
          </View>

          <View style={{width: "100%", marginTop: "auto"}}>
              <TouchableHighlight
                    activeOpacity={0.9}
                    underlayColor="#DDDDDD"
                    style={[styles.buttonContainerSelected, {marginTop: 15}, styles.shadow]}
                    onPress={handleOnHomeButtonPress}>
                    <Text style={styles.buttonTextSelected}>
                    Home
                    </Text>
              </TouchableHighlight>
          </View>
        </View>
      );
    }