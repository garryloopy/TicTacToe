"use client";

import { useContext, createContext, useState, useEffect } from "react";

import { getAllThemes, getThemeById } from "../components/themeManager";

import { getAllSounds, getSoundById } from "../components/soundManager";

const ConfigContext = createContext();

/**
 * Represents a context provider for the configurations of the app, such as theme and sounds.
 * @param {ReactComponentElement} children The react component to wrap the context provider around   
 * @returns A context provider for the configurations
 */
export const ConfigContextProvider = ({children}) => {
    // Theme and sound id
    const [themeId, setThemeId] = useState(0);
    const [soundId, setSoundId] = useState(-1);

    // Available themes and sounds
    const [availableThemes, setAvailableThemes] = useState(getAllThemes());
    const [availableSounds, setAvailableSounds] = useState(getAllSounds());

    // Single play
    const [singlePlay, setSinglePlay] = useState(false);

    // Current theme and sound
    const [currentTheme, setCurrentTheme] = useState(getThemeById(0).theme)
    const [currentSound, setCurrentSound] = useState(null);

    // Every time the themeId changes, change the current theme to the corresponding theme id
    useEffect(
        () => {
            setCurrentTheme(getThemeById(themeId).theme)
        }, [themeId]
    )
    
    // Every time the sound id changes, change the current sound to the corresponding sound id
    useEffect(
        () => {
            setCurrentSound(getSoundById(soundId));
        }, [soundId]
    )
    // TEST

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