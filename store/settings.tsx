import { createContext, useEffect, useState } from "react";
import Mode from "../constants/mode";
import Colors from "./data/colors";

/**
 * by default the app should be set as:
 *      mode: kid,
 */

export const SettingContext = createContext({
    mode: "",
    language: "",
    directusAccessToken: "",
    setMode: (mode: Mode.Adult | Mode.Kid) => {},
    setLanguage: (language: string) => {},
});

export default function SettingContextProvider({ children }) {
    const totalColors = 8; //
    const [mode, setMode] = useState(Mode.Kid);
    const [language, setLanguage] = useState("en-us");
    const [colorIndex, setColorIndex] = useState(0);
    const [colorTheme, setColorTheme] = useState({});
    const [directusAccessToken, setDirectusAccessToken] = useState("");


    function nextColor() {
        setColorIndex(currColorIndex => (currColorIndex++) % totalColors);
    }

    function prevColor() {
        setColorIndex(currColorIndex => {
            if (currColorIndex > 0) {
                return (currColorIndex--) % totalColors;
            } else {
                return 0;
            }
        });
    }

    setColorTheme(currColorTheme => Colors[mode][colorIndex]);

    const value = {
        mode,
        language,
        setMode,
        setLanguage,
        nextColor,
        prevColor,
        colorTheme,
        directusAccessToken,
    };
    return (
        <SettingContext.Provider value={value}>
            {children}
        </SettingContext.Provider>
    );
}
