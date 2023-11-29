import Game from "../components/game"
import {
    View,
    TouchableHighlight,
    Modal,
    Text,
    StyleSheet,
} from "react-native";

import {
    useState,
    useEffect
} from "react";

import { getThemeById } from "../components/themeManager";
 

export default function GamePage( {navigation, route} ) {
    // Used to represent which theme id and single play functionality is passed from the previous route/page, if none: default to id 0 and single play false
    const { themeId, singlePlay } = route.params || { themeId: 0, singlePlay: false };

    // Represents current theme
    const [currentTheme, setCurrentTheme] = useState(getThemeById(themeId).theme);
    
    // Change current theme each the current theme id changes
    useEffect(() => {
      setCurrentTheme(getThemeById(themeId).theme);
    }, [themeId]);

    /**
     * Represents styling for modal
     */
    const modalStyles = StyleSheet.create(
        {
            centeredViewModal: {
                marginTop: "auto",
                marginBottom: "auto"
            },
            modalView: {
                marginRight: 45,
                marginLeft: 45,
                marginTop: "auto",
                marginBottom: "auto",
                backgroundColor: currentTheme.buttonModalBackground.color,
                borderRadius: 20,
                padding: 35,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
            },
            modalText: {
                backgroundColor: currentTheme.buttonBackground.color,
                paddingVertical: 10,
                paddingLeft: "auto",
                paddingRight: "auto",
                borderRadius: 4
            },
            modalHeading: {
                color: currentTheme.textHeader.color,
                textAlign: "center",
                marginBottom: 20,
                fontSize: 20,
                fontWeight: "600"
            }
        }
    )

    /**
     * Represents styling for the overall page
     */
    const styles = StyleSheet.create(
        {
            textHeading: {
                textAlign: "center",
                marginBottom: 10,
                fontSize: 25,
                fontWeight: "bold",
                color: currentTheme.textHeader.color
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
                marginBottom: 34,
                width: "100%",
                borderBottomColor: currentTheme.homeHeader.color,
            },
            centeredView: {
                paddingTop: 25,
                paddingHorizontal: 20,
                marginBottom: "auto",
                backgroundColor: currentTheme.backgroundColor.color,
                flex: 1
            },
            buttonContainer: {
                marginRight: 80,
                marginLeft: 80,
                marginBottom: 10,
                backgroundColor: currentTheme.buttonBackground.color,
                padding: 10,
                borderRadius: 4
            },
            buttonText: {
                textAlign: "center",
                color: currentTheme.buttonText.color,
                fontSize: 15,
                fontWeight: "500"
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
        }
    );

    /**
     * State for modal visibility
     */
    const [modalVisible, setModalVisible] = useState(false);

    /**
     * Handler for pressing home button
     */
    const handleOnHomePress = () => {
        // Show modal
        setModalVisible(true);
    }

    /**
     * Handler for closing modal
     */
    const handleCloseModal = () => {
        // Close modal
        setModalVisible(false);
    }

    const navigateToHome = () => {
        navigation.navigate("Home", { themeId: themeId });
    }



    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}>
                <View style={modalStyles.centeredViewModal}>
                    <View style={modalStyles.modalView}>
                        <Text style={modalStyles.modalHeading}>Are you sure you want to go home?</Text>
                        <View style={{gap: 10}}>
                            <TouchableHighlight style={ [modalStyles.modalText, styles.shadow] }
                                        activeOpacity={0.9}
                                        underlayColor="#DDDDDD"
                                       onPressOut={navigateToHome}>
                                <Text style={styles.buttonText}>YES</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={ [modalStyles.modalText, styles.shadow] }
                                        activeOpacity={0.9}
                                        underlayColor="#DDDDDD"
                                       onPressOut={handleCloseModal}>
                                <Text style={styles.buttonText}>NO</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>

            
            <View style={styles.headerContainer}>
                <Text style={styles.heading}>{singlePlay ? "Single Play" : "Duo Play"}</Text>
            </View>

            <Game singlePlay={singlePlay}
                  theme={currentTheme}/>

            <TouchableHighlight
                activeOpacity={0.9}
                underlayColor="#DDDDDD"
                style={[
                    styles.buttonContainer,
                    styles.shadow,
                    {
                        marginTop: 12,
                    }
                ]}
                onPressOut={handleOnHomePress}
            >
                <Text style={styles.buttonText}>HOME</Text>
            </TouchableHighlight>
        </View>
    )
}