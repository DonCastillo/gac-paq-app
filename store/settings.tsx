import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Mode from "../constants/mode";
import Colors from "./data/colors";
import { getPage } from "../utils/page";
import ScreenType from "../constants/screen_type";
import SectionType from "../constants/section_type";
import { translateButton } from "../utils/translate";
import { QuestionContext } from "./questions";
import ButtonLabel from "../constants/button_label";

/**
 * by default the app should be set as:
 *      mode: kid,
 */
interface pageInterface {
    screen: ScreenType | null,
    page: any | null | {},
    pageNumber: number | null,
    section: SectionType.Intro | SectionType.Question | null,
    sectionNumber: number | null,
    sectionPageNumber: number | null
}

interface buttonInterface {
    back: string,
    complete: string,
    continue: string,
    go: string,
    next: string,
    started: string
}

const defaultPage : pageInterface = {
    page: {
        name: null,
        type: null,
        translations: []
    },
    pageNumber: null,
    screen: null,
    section: null,
    sectionNumber: null,
    sectionPageNumber: null
}

const defaultButton : buttonInterface = {
    back: ButtonLabel.Back,
    complete: ButtonLabel.Complete,
    continue: ButtonLabel.Continue,
    go: ButtonLabel.Go,
    next: ButtonLabel.Next,
    started: ButtonLabel.Started
}

const DEFAULT_MODE = Mode.Kid;
const DEFAULT_COLOR_INDEX = 0;
const TOTAL_COLORS = 8;

const INITIAL_STATE = {
    mode: DEFAULT_MODE,
    language: null,
    directusAccessToken: "",
    currentPageNumber: 0,
    currentPage: defaultPage,
    nextPage: defaultPage,
    buttons: defaultButton,
    totalPage: null,
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
    addPage: (obj: pageInterface) => {},
    initializeNextPage: () => {},
    initializeCurrentPage: () => {},
    translateButtons: (obj: buttonInterface) => {},
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
        case 'INITIALIZE_CURRENT_PAGE':
            const currentPageNumber = state.currentPageNumber;
            const currentPage = getPage(state.currentPageNumber, state.pages);
            const nextPage = getPage(state.currentPageNumber + 1, state.pages);
            return { ...state, currentPageNumber: currentPageNumber, currentPage: currentPage, nextPage: nextPage };
        case 'SET_BUTTONS':
            return { ...state, buttons: action.payload };
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
        dispatch({
            type: 'SET_BUTTONS'
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

    function addPage(obj: pageInterface) {
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

    function initializeCurrentPage() {
        dispatch({
            type: 'INITIALIZE_CURRENT_PAGE'
        })
    }

    function translateButtons(obj: buttonInterface) {
        dispatch({
            type: 'SET_BUTTONS',
            payload: obj
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
        initializeNextPage,
        initializeCurrentPage,
        translateButtons
    };


    return (
        <SettingContext.Provider value={value}>
            {children}
        </SettingContext.Provider>
    );
}
