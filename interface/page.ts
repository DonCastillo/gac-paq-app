import LanguageInterface from "./language";

export default interface PageInterface {
    heading: string;
    description: string;
    button_text: string;
    languages_id?: LanguageInterface
};