import Screen from "@constants/screen.enum";
import Section from "@constants/section.enum";
import type { PageIndexInterface } from "@interface/payload.type";
import CountryPage from "@store/data/introductory-pages/country";
import LanguagePage from "@store/data/introductory-pages/language";

export const currentDefaultPage: PageIndexInterface = {
	page: { ...CountryPage, translations: CountryPage.translations["en-CA"] },
	pageNumber: 1,
	screen: Screen.Country,
	section: Section.Intro,
	sectionNumber: 0,
	sectionPageNumber: 1,
};

export const nextDefaultPage: PageIndexInterface = {
	page: { ...LanguagePage, translations: LanguagePage.translations["en-CA"] },
	pageNumber: 2,
	screen: Screen.Language,
	section: Section.Intro,
	sectionNumber: 0,
	sectionPageNumber: 2,
};
