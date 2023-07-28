import { createContext } from "react";
import RegionInterface from "../interface/region";
import LanguageInterface from "../interface/language";

export const QuestionContext = createContext({
    regionOption: [],
    languageOption: [],
    setRegionOption: (regionOptions: RegionInterface[]) => {},
    setLanguageOption: (languageOptions: LanguageInterface[]) => {}
})