import {
    Button,
    TouchableHighlight,
    View,
    Text,
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: "auto",
        marginBottom: "auto",
    },
    text: {
        fontSize: 30,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "#008000", 
        textShadowColor: '#39FF14', // black shadow
        textShadowOffset: { width: 3, height: 4 },
        textShadowRadius: 1
    },
    ButtonContainer: {
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        backgroundColor: "#32CD32",
        padding: 10,
    },
    ButtonContainer2: {
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        backgroundColor: "green",
        padding: 10,
    },
    
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    }
});

export default function HomePage( {navigation} ) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                TIC TAC TOE
            </Text>
            
            <TouchableHighlight
                style={styles.ButtonContainer}
                onPress={() => navigation.navigate("Game")}
            >
                <Text style={styles.buttonText}>Single play</Text>
            </TouchableHighlight>
            
            <TouchableHighlight
                style={styles.ButtonContainer2}
                onPress={() => navigation.navigate("Game Duo")}
            >
                <Text style={styles.buttonText}>Duo play</Text>
            </TouchableHighlight>
            
            <TouchableHighlight
                style={styles.ButtonContainer}
                onPress={() => navigation.navigate("Settings")}
            >
                <Text style={styles.buttonText}>Settings</Text>
            </TouchableHighlight>
        </View>
    )
}

