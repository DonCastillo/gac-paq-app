import type { LanguageInterface } from "interface/payload.type";
import type { ImageDeviceInterface } from "./images";

export default interface SectionInterface {
	id?: string | number;
	question_section_id?: string | number;
	heading: string;
	subheading: string;
	languages_id?: LanguageInterface | null;
	images?: ImageDeviceInterface;
}
