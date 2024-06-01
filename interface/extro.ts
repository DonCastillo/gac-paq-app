import type ImageInterface from "./images";
import type { LanguageInterface } from "interface/payload.type";

export default interface ExtroInterface {
	id?: string | number;
	extro_section_id?: string | number;
	heading: string;
	subheading: string | null;
	languages_id?: LanguageInterface | null;
	images?: ImageInterface;
}
