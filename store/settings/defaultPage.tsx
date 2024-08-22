import Screen from "constants/screen.enum";
import Section from "constants/section.enum";
import type { PageIndexInterface } from "interface/payload.type";
import AboutPage from "store/data/introductory-pages/about";
import LanguagePage from "store/data/introductory-pages/language";

export const currentDefaultPage: PageIndexInterface = {
	page: { ...LanguagePage, translations: LanguagePage.translations["en-CA"] },
	pageNumber: 1,
	screen: Screen.Language,
	section: Section.Intro,
	sectionNumber: 0,
	sectionPageNumber: 1,
};

export const nextDefaultPage: PageIndexInterface = {
	page: { ...AboutPage, translations: AboutPage.translations["en-CA"] },
	pageNumber: 2,
	screen: Screen.Page,
	section: Section.Intro,
	sectionNumber: 0,
	sectionPageNumber: 2,
};
