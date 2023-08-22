import { createContext, useEffect, useReducer, useState } from "react";
import Mode from "../constants/mode";
import Colors from "./data/colors";
import { getPage } from "../utils/page";

/**
 * by default the app should be set as:
 *      mode: kid,
 */

interface page {
    component: any,
    page: any,
    pageNumber: number 
}

const nullPage = {
    component: null,
    page: {
        name: null,
        type: null,
        translations: []
    },
    pageNumber: null,
    screen: null,
}

const DEFAULT_MODE = Mode.Kid;
const DEFAULT_COLOR_INDEX = 0;
const TOTAL_COLORS = 8;

const INITIAL_STATE = {
    mode: DEFAULT_MODE,
    language: null,
    directusAccessToken: "",
    currentPageNumber: 0,
    currentPage: nullPage,
    nextPage: nullPage,
    totalPage: 0,
    colorIndex: DEFAULT_COLOR_INDEX,
    colorTheme: {
        color100: Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].color100,
        color200: Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].color200
    },
    pages: [],
}

export const SettingContext = createContext({
    settingState: INITIAL_STATE,
    setMode: (newMode: Mode.Adult | Mode.Kid) => {},
    setLanguage: (newLanguage: string) => {},
    setDirectusAccessToken: (newToken: string) => {},
    nextColor: () => {},
    prevColor: () => {},
    nextPage: () => {},
    prevPage: () => {},
    addPage: (obj: any) => {},
    initializeNextPage: () => {}
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
        case 'NEXT_PAGE':
            const currentpageNumber1 = state.currentPageNumber + 1;
            const currentPage1 =  getPage(currentpageNumber1, state.pages);
            const nextPage1 = getPage(currentpageNumber1 + 1, state.pages);
            return { ...state, currentPageNumber: currentpageNumber1, currentPage: currentPage1, nextPage: nextPage1 };
        case 'PREV_PAGE':
            if(state.currentPageNumber <= 0) {
                return state;
            }
            const currentpageNumber2 = state.currentPageNumber - 1;
            const currentPage2 =  getPage(currentpageNumber2, state.pages);
            const nextPage2 = getPage(state.currentPageNumber, state.pages);
            return { ...state, currentPageNumber: state.currentpageNumber2, currentPage: currentPage2, nextPage: nextPage2 };
        case 'SET_TOTAL_PAGE':
            return { ...state, totalPage: action.payload };
        case 'ADD_PAGE':
            return { ...state, pages: [...state.pages, action.payload] };
        case 'INITIALIZE_NEXT_PAGE':
            const nextPage = getPage(1, state.pages);
            return {...state, nextPage: nextPage};
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

    function nextPage() {
        dispatch({
            type: 'NEXT_PAGE'
        })
    }

    function prevPage() {
        dispatch({
            type: 'PREV_PAGE'
        })
    }

    function addPage(obj: any) {
        dispatch({
            type: 'ADD_PAGE',
            payload: obj
        })
    }

    function initializeNextPage() {
        dispatch({
            type: 'INITIALIZE_NEXT_PAGE'
        })
    }



    const value: any = {
        settingState,
        setMode,
        setLanguage,
        setDirectusAccessToken,
        nextColor,
        prevColor,
        nextPage,
        prevPage,
        addPage,
        initializeNextPage
    };


    return (
        <SettingContext.Provider value={value}>
            {children}
        </SettingContext.Provider>
    );
}
