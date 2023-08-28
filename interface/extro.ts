import LanguageInterface from "./language";

export default interface ExtroInterface {
    id?: string | number | null,
    extro_section_id?: string | number | null,    
    heading: string;
    subheading: string | null;
    image: string | null;
    languages_id?: LanguageInterface | {}
};