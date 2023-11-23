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
        
    }
);

export default function GamePage({ route, navigation }) {
    const { horizontalLineColor, verticalLineColor } = route.params || {};
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleOnHomePress = () => {
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setModalVisible(false);
      navigation.navigate("Home");
    };
  
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          visible={modalVisible}
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Are you sure you want to go home?</Text>
              <View style={styles.buttonContainer}>
                <Button title="Yes" onPress={handleCloseModal} />
                <Button title="No" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </View>
        </Modal>
  
        <Game />
        <Button title="Home" onPress={handleOnHomePress} />
      </View>
    );
  }