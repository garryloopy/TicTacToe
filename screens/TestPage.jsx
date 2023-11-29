import {
    Text,
    View,
    Button
} from "react-native";

import {
    useState,
    useEffect
} from "react";

import { useConfigContext } from "../_utils/context";


export default function TestPage() {
    const { themeId, setThemeId, soundId, setSoundId, currentTheme, setCurrentTheme } = useConfigContext();

    return (
        <View>
            <Text>Test page</Text>
            <Button title="Debug"/>
        </View>
    )
}