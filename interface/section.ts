import type LanguageInterface from "interface/language";

export default interface SectionInterface {
	id?: string | number;
	question_section_id?: string | number;
	heading: string;
	subheading: string;
	languages_id?: LanguageInterface | null;
}
