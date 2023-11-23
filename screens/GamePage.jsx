import Game from "../components/game"
import {
    View,
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
            marginTop: "auto",
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
        text: {
            textAlign: "center",
            marginBottom: 20
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
        setModalVisible2(false);
        setModalVisible3(false);
        setModalVisible4(false);
        setModalVisible5(false);
        setModalVisible6(false);
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
                        <Button title="Yes" onPress={() => setModalVisible2(true)} />
                        <Button title="No" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                visible={modalVisible2}
                transparent={true}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Are you REALLY sure you want to go home?</Text>
                        <Button title="Yes" onPress={() => setModalVisible3(true)} />
                        <Button title="No" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                visible={modalVisible3}
                transparent={true}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Are you REALLY REALLY sure you want to go home?</Text>
                        <Button title="Yes" onPress={() => setModalVisible4(true)} />
                        <Button title="No" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                visible={modalVisible4}
                transparent={true}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Are you REALLY REALLY REALLY REALLY REALLY REALLY sure you want to go home?</Text>
                        <Button title="Yes" onPress={() => setModalVisible5(true)} />
                        <Button title="No" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                visible={modalVisible5}
                transparent={true}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Are you REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLY sure you want to go home?</Text>
                        <Button title="Yes" onPress={() => setModalVisible6(true)} />
                        <Button title="No" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                visible={modalVisible6}
                transparent={true}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Are you REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLY 
                            sure you want to go home?</Text>
                        <Button title="Yes" onPress={() => navigation.navigate("Home")} />
                        <Button title="No" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>

            <Text style={styles.text}>This is the game page</Text>
            <Text style={styles.text}>Single Play</Text>
            <Game singlePlay={true}/>
            <Button title="Home"
                    onPress={handleOnHomePress} />
        </View>
    )
}