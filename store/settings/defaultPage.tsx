import Screen from "constants/screen.enum";
import Section from "constants/section.enum";
import AboutPage from "store/data/introductory-pages/about";
import LanguagePage from "store/data/introductory-pages/language";

export interface PageInterface {
	page: any | null;
	pageNumber: number | null;
	screen: Screen | null;
	section: Section.Intro | Section.Question | Section.Extro | Section.Feedback | null;
	sectionNumber: number | null;
	sectionPageNumber: number | null;
}

export const currentDefaultPage: PageInterface = {
	page: LanguagePage,
	pageNumber: 1,
	screen: Screen.Language,
	section: Section.Intro,
	sectionNumber: 0,
	sectionPageNumber: 1,
};

export const nextDefaultPage: PageInterface = {
	page: AboutPage,
	pageNumber: 2,
	screen: Screen.Page,
	section: Section.Intro,
	sectionNumber: 0,
	sectionPageNumber: 2,
};
