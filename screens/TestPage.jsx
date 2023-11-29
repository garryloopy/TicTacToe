import {
    Text,
    View,
    Button
} from "react-native";

import {
    useState
} from "react";

import { useConfigContext } from "../_utils/context";

export default function TestPage() {
    const [val, setVal] = useState(0);
    const { themeId, setThemeId, soundId, setSoundId, currentTheme, setCurrentTheme } = useConfigContext();

    const handlePress = () => {
        setVal( val + 1);
        setThemeId(val);
    }

    return (
        <View>
            <Text>Test page</Text>
            <Text>{themeId}</Text>
            <Button title="Debug" onPress={handlePress}/>
        </View>
    )
}