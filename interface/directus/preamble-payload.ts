import type ScreenType from "constants/screen_type.enum";
import type PreambleInterface from "interface/preamble";

export default interface PreamblePayloadInterface {
	ident?: string;
	heading?: string | null;
	questions?: any[] | null;
	type: ScreenType.Preamble;
	translations: PreambleInterface[];
}
