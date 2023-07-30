import { createContext, useEffect, useReducer, useState } from "react";
import Mode from "../constants/mode";
import Colors from "./data/colors";

/**
 * by default the app should be set as:
 *      mode: kid,
 */
const TOTAL_COLORS = 8;
const INITIAL_STATE = {
    mode: Mode.Kid,
    language: "en-us",
    directusAccessToken: "",
    colorIndex: 0,
    colorTheme: {
        color100: Colors[Mode.Kid][0].color100,
        color200: Colors[Mode.Kid][0].color200
    }
}

export const SettingContext = createContext({
    settingState: {},
    setMode: (newMode: Mode.Adult | Mode.Kid) => {},
    setLanguage: (newLanguage: string) => {},
    setDirectusAccessToken: (newToken: string) => {},
    nextColor: () => {},
    prevColor: () => {} 
});

function settingReducer(state: any, action: any) {
    switch(action.type) {
        case 'SET_MODE':
            return { ...state, mode: action.payload };
        case 'SET_LANGUAGE':
            return { ...state, language: action.payload };
        case 'SET_DIRECTUS_ACCESS_TOKEN':
            return { ...state, directusAccessToken: action.payload };
        case 'SET_COLOR_THEME':
            return { ...state, colorTheme: action.payload };
        case 'SET_COLOR_INDEX':
            return { ...state, colorIndex: action.payload };
        case 'NEXT_COLOR':
            const newColorIndex1 = (state.colorIndex++) % TOTAL_COLORS;
            const newColorTheme1 = Colors[state.mode][newColorIndex1];
            return { ...state, colorIndex: newColorIndex1, colorTheme: newColorTheme1 };
        case 'PREV_COLOR':
            const newColorIndex2 = state.colorIndex > 0 ? (state.colorIndex--) % TOTAL_COLORS : 0;
            const newColorTheme2 = Colors[state.mode][newColorIndex2];
            return { ...state, colorIndex: newColorIndex2, colorTheme: newColorTheme2 };
        default:
            return state;
    }
}

export default function SettingContextProvider({ children }) {
    const [ settingState, dispatch ] = useReducer(settingReducer, INITIAL_STATE);

    function setMode(newMode: Mode.Adult | Mode.Kid) {
        dispatch({
            type: 'SET_MODE',
            payload: newMode,
        })
    }

    function setLanguage(newLanguage: string) {
        dispatch({
            type: 'SET_LANGUAGE',
            payload: newLanguage,
        })
    } 

    function setDirectusAccessToken(newDirectusAccessToken: string) {
        dispatch({
            type: 'SET_DIRECTUS_ACCESS_TOKEN',
            payload: newDirectusAccessToken
        })
    }

    function nextColor() {
        dispatch({
            type: 'NEXT_COLOR'
        })
    }

    function prevColor() {
        dispatch({
            type: 'PREV_COLOR'
        })
    }


    const value: any = {
        settingState,
        setMode,
        setLanguage,
        setDirectusAccessToken,
        nextColor,
        prevColor
    };


    return (
        <SettingContext.Provider value={value}>
            {children}
        </SettingContext.Provider>
    );
}
