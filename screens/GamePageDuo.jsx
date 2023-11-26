import Game from "../components/game"
import {
    View,
    TouchableHighlight,
    Button,
    Modal,
    Text,
    StyleSheet,
    Pressable
} from "react-native";

import {
    useState,
    useEffect
} from "react";

import { getThemeById } from "../components/themeManager";
 

export default function GamePage( {navigation, route} ) {
    // Used to represent which theme id is passed from the previous route/page, if none: default to id 0
    const { themeId } = route.params || { themeId: 0 };

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
                borderRadius: 2
            },
            modalHeading: {
                color: currentTheme.textHeader.color,
                textAlign: "center",
                marginBottom: 20,
                fontSize: 15,
                fontWeight: "bold"
            },
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
                color: currentTheme.textHeader.color,
            },
            centeredView: {
                marginTop: 25,
                marginBottom: "auto",
                backgroundColor: currentTheme.backgroundColor.color,
                
            },
            buttonContainer: {
                marginRight: 80,
                marginLeft: 80,
                marginBottom: 10,
                backgroundColor: currentTheme.buttonBackground.color,
                padding: 10,
            },
            buttonText: {
                textAlign: "center",
                color: currentTheme.buttonText.color,
            },
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
                onRequestClose={() => setModalVisible(false)}
                style={modalStyles.themeBackground}
                >
                <View style={modalStyles.centeredViewModal}>
                    <View style={modalStyles.modalView}>
                        <Text style={modalStyles.modalHeading}>Are you sure you want to go home?</Text>
                        <View style={{gap: 10}}>
                            <Pressable style={ modalStyles.modalText }
                                       onPress={navigateToHome}>
                                <Text style={styles.buttonText}>YES</Text>
                            </Pressable>

                            <Pressable style={ modalStyles.modalText }
                                       onPress={handleCloseModal}>
                                <Text style={styles.buttonText}>NO</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            
            <Text style={styles.textHeading}>Duo Play</Text>

            <Game singlePlay={false}
                  theme={currentTheme}/>

            <TouchableHighlight
                style={[
                    styles.buttonContainer,
                    {
                        marginTop: 12
                    }
                ]}
                onPress={handleOnHomePress}
            >
                <Text style={styles.buttonText}>HOME</Text>
            </TouchableHighlight>
        </View>
    )
}