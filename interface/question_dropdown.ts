import LanguageInterface from "./language";

interface Choice {
    text: string;
    value: string;
}

export default interface QuestionDropdownInterface {
    id?: string | number | null,
    question_dropdown_id?: string | number | null,
    heading: string;
    label: string;
    choices : Choice[]; 
    languages_id?: LanguageInterface
};