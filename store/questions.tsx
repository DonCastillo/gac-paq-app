import { createContext, useState } from "react";
import RegionInterface from "../interface/region";
import LanguageInterface from "../interface/language";
import Regions from "./data/regions";
import Languages from "./data/languages";
import IntroductoryPages from "./data/introductory-pages";
import PagePayloadInterface from "../interface/directus/page-payload";
import QuestionDropdownPayloadInterface from "../interface/directus/question-dropdown-payload";

export const QuestionContext = createContext({
    regionOption: [],
    languageOption: [],
    introductoryPages: [],
    setRegionOption: (regionOptions: RegionInterface[]) => {},
    setLanguageOption: (languageOptions: LanguageInterface[]) => {},
    setIntroductoryPages: (introductoryPages: (PagePayloadInterface | QuestionDropdownPayloadInterface)[] | []) => {}
})

export default function QuestionContextProvider({children}) {
    const [regionOption, setRegionOption] = useState(Regions);
    const [languageOption, setLanguageOption] = useState(Languages);
    const [introductoryPages, setIntroductoryPages]= useState(IntroductoryPages);

    const value = {
        regionOption,
        languageOption,
        introductoryPages,
        setRegionOption,
        setLanguageOption,
        setIntroductoryPages
    };

    return (<QuestionContext.Provider value={value}>
        {children}
    </QuestionContext.Provider>);
}