import LanguageInterface from "./language";

export default interface QuestionDropdownLanguageInterface {
    id?: string | number | null,
    region_question_dropdown_id?: string | number | null,
    heading: string;
    label: string;
    languages_id?: LanguageInterface
};