import type ScreenType from "constants/screen_type";
import type PageInterface from "interface/page";

export default interface PagePayloadInterface {
	ident?: string;
	title?: string | null;
	name?: string | null;
	type: ScreenType.Page;
	translations: PageInterface[];
}
