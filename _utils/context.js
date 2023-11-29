"use client";

import { useContext, createContext, useState, useEffect } from "react";

import { getThemeById } from "../components/themeManager";

const ConfigContext = createContext();

export const ConfigContextProvider = ({children}) => {
    const [themeId, setThemeId] = useState(0);
    const [soundId, setSoundId] = useState(0);

    const [singlePlay, setSinglePlay] = useState(false);

    const [currentTheme, setCurrentTheme] = useState(getThemeById(0).theme)

    useEffect(
        () => {
            setCurrentTheme(getThemeById(themeId).theme)
        }, [themeId]
    )

    return (
        <ConfigContext.Provider value={{themeId, setThemeId, soundId, setSoundId, currentTheme, setCurrentTheme, singlePlay, setSinglePlay}}>
            {children}
        </ConfigContext.Provider>
    )
}


export const useConfigContext = () => {
    return useContext(ConfigContext);
}