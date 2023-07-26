import LanguageInterface from "./language";

interface Choice {
    text: string;
    value: string;
}

export default interface QuestionDropdownInterface {
    heading: string;
    label: string;
    choices : Choice[]; 
    languages_id?: LanguageInterface
};