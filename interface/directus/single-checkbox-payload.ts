import type ScreenType from "constants/screen_type";
import type SingleCheckboxInterface from "../single_checkbox";

export default interface SingleCheckboxPayloadInterface {
	title?: string | null;
	name?: string | null;
	type: ScreenType.SingleCheckbox;
	translations: SingleCheckboxInterface[];
}
