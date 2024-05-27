import ScreenType from "constants/screen_type.enum";
import SectionType from "constants/section_type.enum";
import AboutPage from "store/data/introductory-pages/about";
import LanguagePage from "store/data/introductory-pages/language";

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

export const currentDefaultPage: PageInterface = {
	page: LanguagePage,
	pageNumber: 1,
	screen: ScreenType.Language,
	section: SectionType.Intro,
	sectionNumber: 0,
	sectionPageNumber: 1,
};

export const nextDefaultPage: PageInterface = {
	page: AboutPage,
	pageNumber: 2,
	screen: ScreenType.Page,
	section: SectionType.Intro,
	sectionNumber: 0,
	sectionPageNumber: 2,
};
