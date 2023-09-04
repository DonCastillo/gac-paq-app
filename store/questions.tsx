import { createContext, useReducer, useState } from "react";
import RegionInterface from "../interface/region";
import LanguageInterface from "../interface/language";
import Regions from "./data/regions";
import Languages from "./data/languages";
import IntroductoryPages from "./data/introductory-pages";
import PagePayloadInterface from "../interface/directus/page-payload";
import QuestionDropdownPayloadInterface from "../interface/directus/question-dropdown-payload";
import QuestionPages from "./data/question-pages";
import BackButton from "./data/buttons/back";
import CompleteButton from "./data/buttons/complete";
import ContinueButton from "./data/buttons/continue";
import GoButton from "./data/buttons/go";
import NextButton from "./data/buttons/next";
import StartedButton from "./data/buttons/started";

const INITIAL_STATE = {
    regionOption: Regions,
    languageOption: Languages,
    introductoryPages: IntroductoryPages,
    questionPages: QuestionPages,
    backButton: BackButton,
    completeButton: CompleteButton,
    continueButton: ContinueButton,
    goButton: GoButton,
    nextButton: NextButton,
    startedButton: StartedButton
}

export const QuestionContext = createContext({
    questionState: {
        regionOption: [],
        languageOption: [],
        introductoryPages: [],
        questionPages: [],
        backButton: [],
        completeButton: [],
        continueButton: [],
        goButton: [],
        nextButton: [],
        startedButton: []
    },
    setRegionOption: (newRegionOptions: RegionInterface[]) => {},
    setLanguageOption: (newLanguageOptions: LanguageInterface[]) => {},
    setIntroductoryPages: (newIntroductoryPages: (PagePayloadInterface | QuestionDropdownPayloadInterface)[] | []) => {}
})

function questionReducer(state: any, action: any) {
    switch(action.type) {
        case 'SET_REGION_OPTION':
            return { ...state, regionOption: action.payload }
        case 'SET_LANGUAGE_OPTION':
            return { ...state, languageOption: action.payload }
        case 'SET_INTRODUCTORY_PAGES_OPTION':
            return { ...state, introductoryPages: action.payload }
        default:
            return state;
    }
}


export default function QuestionContextProvider({ children }) {
    const [ questionState, dispatch ] = useReducer(questionReducer, INITIAL_STATE);

    function setRegionOption(newRegionOptions: RegionInterface[]) {
        dispatch({
            type: 'SET_REGION_OPTION',
            payload: newRegionOptions
        })
    } 

    function setLanguageOption(newLanguageOptions: LanguageInterface[]) {
        dispatch({
            type: 'SET_LANGUAGE_OPTION',
            payload: newLanguageOptions
        })
    } 

    function setIntroductoryPages(newIntroductoryPages: (PagePayloadInterface | QuestionDropdownPayloadInterface)[] | []) {
        dispatch({
            type: 'SET_INTRODUCTORY_PAGES_OPTION',
            payload: newIntroductoryPages
        })
    }


    const value: any = {
        questionState,
        setRegionOption,
        setLanguageOption,
        setIntroductoryPages
    };

    return (<QuestionContext.Provider value={value}>
        {children}
    </QuestionContext.Provider>);
}