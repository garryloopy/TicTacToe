import Game from "../components/game"
import {
    View,
    TouchableHighlight,
    Button,
    Modal,
    Text,
    StyleSheet
} from "react-native";

import {
    useState
} from "react";

const styles = StyleSheet.create(
    {
        centeredView: {
            marginTop: 50,
            marginBottom: "auto"
        },
        modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
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
            
        }
        
    }
);

export default function GamePage( {navigation} ) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);
    const [modalVisible6, setModalVisible6] = useState(false);

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
                onRequestClose={() => setModalVisible(!modalVisible)}>
                
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Are you sure you want to go home?</Text>
                        <Button title="Yes" onPress={() => navigation.navigate("Home")} />
                        <Button title="No" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>

            
            <Text style={styles.textHeading}>Single Play</Text>
            <Game singlePlay={true}/>
            <TouchableHighlight
                style={styles.buttonContainer}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.buttonText}>HOME</Text>
            </TouchableHighlight>
        </View>
    )
}