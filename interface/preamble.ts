import type LanguageInterface from "interface/language";
import type { ImageDeviceInterface } from "./images";

export default interface PreambleInterface {
	id?: string | number;
	question_section_id?: string | number;
	heading: string;
	subheading: string;
	description: {
		kid: string;
		adult: string;
	};
	languages_id?: LanguageInterface | null;
	images?: ImageDeviceInterface;
}
