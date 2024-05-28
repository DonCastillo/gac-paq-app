import type ScreenType from "constants/screen_type.enum";

export interface PageInterface {
	heading: string;
	description: string | null;
}

export type LangPageInterface = Record<string, PageInterface>;

export interface PagePayloadInterface {
	ident: string;
	title: string;
	name: string;
	type: ScreenType.Page;
	translations: LangPageInterface;
}
