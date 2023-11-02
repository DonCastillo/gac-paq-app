import type ScreenType from "../../constants/screen_type";
import type ExtroInterface from "../extro";

export default interface ExtroPayloadInterface {
	name?: string | null;
	isFinal?: boolean;
	type: ScreenType.ExtroQuestion;
	translations: ExtroInterface[];
}
