import type ScreenType from "constants/screen_type";
import type SectionType from "constants/section_type";

export interface PageInterface {
	screen: ScreenType | null;
	page: any | null;
	pageNumber: number | null;
	section:
		| SectionType.Intro
		| SectionType.Question
		| SectionType.Extro
		| SectionType.Feedback
		| null;
	sectionNumber: number | null;
	sectionPageNumber: number | null;
}

const defaultPage: PageInterface = {
	page: {
		name: null,
		type: null,
		translations: [],
	},
	pageNumber: null,
	screen: null,
	section: null,
	sectionNumber: null,
	sectionPageNumber: null,
};

export default defaultPage;
