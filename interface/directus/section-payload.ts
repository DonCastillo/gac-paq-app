import type Screen from "constants/screen.enum";
import type SectionInterface from "interface/section";

export default interface SectionPayloadInterface {
	ident?: string;
	heading?: string | null;
	questions?: any[] | null;
	type: Screen.IntroQuestion;
	translations: SectionInterface[];
}
