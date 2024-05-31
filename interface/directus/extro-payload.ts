import type Screen from "constants/screen.enum";
import type ExtroInterface from "interface/extro";

export default interface ExtroPayloadInterface {
	ident?: string;
	name?: string | null;
	isFinal?: boolean;
	type: Screen.ExtroQuestion;
	translations: ExtroInterface[];
}
