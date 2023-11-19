import { 
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Modal
} from "react-native";

import { 
  useState 
} from "react";

import MyComponent from "./components/mycomponent";

const data = [];
for (let i = 1; i < 10; i++) {
  const item = {
    id: i, 
    text: `Item ${i}`
  }
  data.push(item);
}

const styles = StyleSheet.create(
  {
      container : {
        display: "flex",
        gap: 2,
        flex: 1,
        justifyContent: "center"
      },
      text: {
          fontSize: 18,
          color: "blue",
          textAlign: "center"
      },
      button : {
        backgroundColor: "blue",
        color: "white"
      },
      redButton: {
        backgroundColor: "red",
        color: "white"
      },
      image: {
        width: 200,
        height: 200
      }
  }
);

const windowDimensions = Dimensions.get("window");
const dynamicStyles = windowDimensions.width < 768 ? styles.redButton: { };

export default function App() {
  const [count, setCounter] = useState(0);
  const [inputText, setInputText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderItem = ( {item} ) => <Text>{item.text}</Text>
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <View style={styles.container}>
      <View>
        <Button title="Open modal" onPress={() => setIsModalVisible(!isModalVisible)} />
        <Modal visible={isModalVisible}
              animationType="slide"
              onRequestClose={toggleModal}>
                <View>  
                  <Text>This is a modal!</Text>
                  <Button title="Close modal" onPress={toggleModal}/>
                </View>
          
        </Modal>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Increment counter</Text>
        <Button style={{...styles.button, ...dynamicStyles}}
                title="Increment by 1"
                onPress={() => setCounter(count + 1)}
                />
        <Button style={{...styles.button, ...dynamicStyles}}
        title="Reset"
        onPress={() => setCounter(0)}
        />
        <Text style={styles.text}>{count}</Text>
      </View>
      
      <View>
        <MyComponent />
        <TextInput value={inputText}
                   onChangeText={(text) => setInputText(text)}
                   placeholder="Enter text..."
                   secureTextEntry={true}
        />
        <Image source={require("./images/Thanus.png")} style={styles.image} />
      </View>

      <View>
        <Text>Scrollview</Text>
        <ScrollView>
          <Text>Line 1</Text>
          <Text>Line 2</Text>
          <Text>Line 3</Text>
          <Text>Line 4</Text>
        </ScrollView>
      </View>

      <View>
        <Text>Flatlist</Text>
        <FlatList data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
        />
      </View>

    </View>
  )
}