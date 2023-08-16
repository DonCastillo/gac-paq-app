import LanguageInterface from "./language";

export default interface SectionInterface {
    id?: string | number | null,
    question_section_id?: string | number | null,    
    heading: string;
    subheading: string;
    languages_id?: LanguageInterface | {}
};