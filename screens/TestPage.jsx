import {
    Text,
    View,
    Button
} from "react-native";

import { playSoundById, stopAllSounds } from "../components/soundManager";


export default function TestPage() {
    const handleDebugButton = () => {
        playSoundById(0);
    }
    const handleDebugButton2 = () => {
        stopAllSounds();
    }

    return (
        <View>
            <Text>Play sound id 1</Text>
            <Button title="Play" onPress={handleDebugButton}/>
            <Text>Stop all sound</Text>
            <Button title="Stop" onPress={handleDebugButton2}/>
        </View>
    )
}