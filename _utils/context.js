"use client";

import { useContext, createContext, useState, useEffect } from "react";

import { getAllThemes, getThemeById } from "../components/themeManager";

import { getAllSounds, getSoundById } from "../components/soundManager";

const ConfigContext = createContext();

export const ConfigContextProvider = ({children}) => {
    const [themeId, setThemeId] = useState(0);
    const [soundId, setSoundId] = useState(-1);

    const [availableThemes, setAvailableThemes] = useState(getAllThemes());
    const [availableSounds, setAvailableSounds] = useState(getAllSounds());

    const [singlePlay, setSinglePlay] = useState(false);

    const [currentTheme, setCurrentTheme] = useState(getThemeById(0).theme)
    const [currentSound, setCurrentSound] = useState(null);

    useEffect(
        () => {
            setCurrentTheme(getThemeById(themeId).theme)
        }, [themeId]
    )

    useEffect(
        () => {
            setCurrentSound(getSoundById(soundId));
        }, [soundId]
    )

    return (
        <ConfigContext.Provider value={
            { 
                themeId, setThemeId, 
                soundId, setSoundId, 
                currentTheme, setCurrentTheme, 
                singlePlay, setSinglePlay, 
                availableThemes, setAvailableThemes, 
                availableSounds, setAvailableSounds,
                currentSound, setCurrentSound
            }}>
            {children}
        </ConfigContext.Provider>
    )
}


export const useConfigContext = () => {
    return useContext(ConfigContext);
}