import type ScreenType from "constants/screen_type.enum";
import type SingleCheckboxInterface from "interface/single_checkbox";

export default interface SingleCheckboxPayloadInterface {
	title?: string | null;
	name?: string | null;
	type: ScreenType.SingleCheckbox;
	translations: SingleCheckboxInterface[];
}
