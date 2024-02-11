import type ScreenType from "constants/screen_type";
import type SectionInterface from "interface/section";

export default interface SectionPayloadInterface {
	heading?: string | null;
	questions?: any[] | null;
	type: ScreenType.IntroQuestion;
	translations: SectionInterface[];
}
