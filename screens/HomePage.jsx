import {
    Button,
    View,
    Text,
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default function HomePage( {navigation} ) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                This is the home page
            </Text>
            <Button title="Single play" 
                    onPress={() => navigation.navigate("Game")}/>
            <Button title="Duo play" 
                    onPress={() => navigation.navigate("Game Duo")}/>
            <Button title="Settings"
                    onPress={() => navigation.navigate("Settings")}/>
        </View>
    )
}

