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
    useState
} from "react";

const styles = StyleSheet.create(
    {
        centeredView: {
            marginTop: 25,
            marginBottom: "auto"
        },
        centeredViewModal: {
            marginTop: "auto",
            marginBottom: "auto"
        },
        modalView: {
            marginRight: 45,
            marginLeft: 45,
            marginTop: "auto",
            marginBottom: "auto",
            backgroundColor: 'white',
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
        textHeading: {
            textAlign: "center",
            marginBottom: 10,
            fontSize: 25,
            fontWeight: "bold",
            color: "green"
        },
        text: {
            textAlign: "center",
            marginBottom: 20,
            fontSize: 15,
            fontWeight: "bold"
        },
        buttonContainer: {
            marginRight: 80,
            marginLeft: 80,
            marginBottom: 10,
            backgroundColor: "#32CD32",
            padding: 10,
        },
        buttonText: {
            textAlign: "center",
            color: "white",
        },
        modalText: {
            backgroundColor: "#32CD32",
            paddingVertical: 10,
            paddingLeft: "auto",
            paddingRight: "auto",
            borderRadius: 2
        }
        
    }
);

export default function GamePage( {navigation} ) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOnHomePress = () => {
        setModalVisible(true);
    }

    const handleCloseModal = () => {
        setModalVisible(false);
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.centeredViewModal}>
                    <View style={styles.modalView}>
                        <Text style={styles.text}>Are you sure you want to go home?</Text>
                        <View style={{gap: 10}}>
                            <Pressable style={ styles.modalText }
                                       onPress={() => navigation.navigate("Home")}>
                                <Text style={styles.buttonText}>YES</Text>
                            </Pressable>

                            <Pressable style={ styles.modalText }
                                       onPress={handleCloseModal}>
                                <Text style={styles.buttonText}>NO</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            
            <Text style={styles.textHeading}>Single Play</Text>

            <Game singlePlay={false}/>

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