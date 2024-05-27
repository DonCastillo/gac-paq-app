import type ScreenType from "constants/screen_type.enum";
import type SectionInterface from "interface/section";

export default interface SectionPayloadInterface {
	ident?: string;
	heading?: string | null;
	questions?: any[] | null;
	type: ScreenType.IntroQuestion;
	translations: SectionInterface[];
}
