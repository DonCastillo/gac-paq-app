import type LanguageInterface from "interface/language";
import type ImageInterface from "./images";

export default interface ExtroInterface {
	id?: string | number;
	extro_section_id?: string | number;
	heading: string;
	subheading: string | null;
	languages_id?: LanguageInterface | null;
	images?: ImageInterface
}
