import type Screen from "constants/screen.enum";
import type PreambleInterface from "interface/preamble";

export default interface PreamblePayloadInterface {
	ident?: string;
	heading?: string | null;
	questions?: any[] | null;
	type: Screen.Preamble;
	translations: PreambleInterface[];
}
