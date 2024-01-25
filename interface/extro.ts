import type LanguageInterface from "interface/language";

export default interface ExtroInterface {
	id?: string | number;
	extro_section_id?: string | number;
	heading: string;
	subheading: string | null;
	image: string | null;
	languages_id?: LanguageInterface | null;
}
