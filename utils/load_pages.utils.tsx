import type {
	AdultExtroductoryPageType,
	AdultExtroductoryPagesType,
	FeedbackExtroductoryPageType,
	FeedbackExtroductoryPagesType,
	IntroductoryPageType,
	IntroductoryPagesType,
	KidExtroductoryPageType,
	KidExtroductoryPagesType,
	ModeType,
	QuestionPageType,
	QuestionPagesType,
} from "interface/union.type";
import { store } from "store/store";
import {
	clearExtroResponses,
	clearFeedbackResponses,
	clearGshsResponses,
	clearHbscResponses,
	clearQuestionResponses,
	clearResponseByIdent,
} from "store/responses/responsesSlice";
import { setLanguageOption } from "store/questions/questionsSlice";
import {
	addPage,
	setPage,
	addSectionTotalPages,
	resetSectionTitles,
	addSectionTitle,
	resetSectionTotalPages,
} from "store/settings/settingsSlice";
import { loadLanguagesOffline } from "./load.utils";
import Screen from "constants/screen.enum";
import Section from "constants/section.enum";
import Mode from "constants/mode.enum";
import { getScreenType } from "utils/type.utils";
import type { LanguageInterface, PageIndexInterface } from "interface/payload.type";
import MAIN_STUDY_LANG from "constants/main_study_lang";
import { type loadPagesFuncType } from "interface/function.type";
import { randomBoolean } from "./random";

const loadSectionPages = (): void => {
	const allPages: Record<number, PageIndexInterface> = store.getState().settings.pages;
	const phrases = store.getState().settings.phrases;
	store.dispatch(resetSectionTitles());
	store.dispatch(resetSectionTotalPages());

	const sectionTotalPages: Record<number, number> = {};
	const sectionTitles: Record<number, string> = {};

	for (const [key, page] of Object.entries(allPages)) {
		// collect section titles
		if (page.sectionPageNumber === 1) {
			if (page.sectionNumber === 0) {
				sectionTitles[page.sectionNumber] = phrases?.introduction;
			} else {
				const translatedPage = page.page.translations;
				if (translatedPage.heading !== undefined && translatedPage.heading !== null) {
					sectionTitles[page.sectionNumber] = translatedPage.heading;
				} else {
					sectionTitles[page.sectionNumber] = "";
				}
			}

			// reset app last page title
			if (page.section === Section.AppExtro) {
				sectionTitles[page.sectionNumber] = "";
			}
		}

		// collect section numbers
		if (page.sectionPageNumber === 1) {
			sectionTotalPages[page.sectionNumber] = 1;
		} else {
			sectionTotalPages[page.sectionNumber] = sectionTotalPages[page.sectionNumber] + 1;
		}
	}

	// load total pages
	for (const [key, value] of Object.entries(sectionTotalPages)) {
		store.dispatch(addSectionTotalPages({ sectionNumber: parseInt(key), totalPages: value }));
	}

	// load section titles
	for (const [key, value] of Object.entries(sectionTitles)) {
		store.dispatch(addSectionTitle({ sectionNumber: parseInt(key), sectionTitle: value }));
	}
};

const loadPages = (): void => {
	const questions = store.getState().questions;
	const introductoryPages: IntroductoryPagesType = questions.introductoryPages;
	const questionPages: QuestionPagesType = questions.questionPages;
	const languages: LanguageInterface[] = loadLanguagesOffline();

	// DO NOT RESET APP CONFIGURATIONS HERE

	// clear all responses
	// store.dispatch(resetResponses());

	// load offline languages
	store.dispatch(setLanguageOption(languages));

	let pageNumber = 1;
	let sectionNumber = 0;
	let sectionPageNumber = 1;

	// load introductory pages
	// console.log("load intro pages...");
	introductoryPages.forEach((page: IntroductoryPageType, sectionIndex: number) => {
		const sectionPageNumber = ++sectionIndex;

		// add page to section
		store.dispatch(
			addPage({
				key: pageNumber,
				page: {
					pageNumber,
					page,
					screen: page.type,
					sectionNumber,
					section: Section.Intro,
					sectionPageNumber,
				},
			}),
		);
		pageNumber++;
	});

	// load section question pages
	// console.log("load question and section pages...");
	questionPages.forEach((page: QuestionPageType) => {
		// add page to section
		if (getScreenType(page.type) === Screen.IntroQuestion) {
			sectionPageNumber = 1;
			sectionNumber++;
		}

		store.dispatch(
			addPage({
				key: pageNumber,
				page: {
					pageNumber,
					page,
					screen: page.type,
					section: Section.Question,
					sectionNumber,
					sectionPageNumber,
				},
			}),
		);

		sectionPageNumber++;
		pageNumber++;
	});

	// console.log("---------------------------------");
	// console.log("intro and question pages done...");
	// console.log(JSON.stringify(store.getState().settings.sectionTotalPages, null, 2));
};

const loadAgePage = (mode: ModeType): void => {
	// change age page
	const allPages: Record<number, PageIndexInterface> = store.getState().settings.pages;
	let newPages: Record<number, PageIndexInterface> = {};

	let agePage = store.getState().questions.kidAgePage;

	if (mode === Mode.Adult) {
		agePage = store.getState().questions.adultAgePage;
	}
	if (mode === Mode.Teen) {
		agePage = store.getState().questions.teenAgePage;
	}
	if (mode === Mode.Kid) {
		agePage = store.getState().questions.kidAgePage;
	}

	for (const [key, page] of Object.entries(allPages)) {
		if (page?.page?.ident === "age") {
			newPages = { ...newPages, [key]: { ...page, page: agePage } };
		} else {
			newPages = { ...newPages, [key]: page };
		}
	}

	// reload all pages, because there are pages that depend on the age
	store.dispatch(setPage(newPages));

	// force user to reenter their age when mode changes
	store.dispatch(clearResponseByIdent("age"));

	// nullify question responses
	store.dispatch(clearQuestionResponses());
	store.dispatch(clearHbscResponses());
	store.dispatch(clearGshsResponses());
	store.dispatch(clearExtroResponses());
	store.dispatch(clearFeedbackResponses());
};

const loadKidDemographicPages: loadPagesFuncType = (newPages) => {
	const questions = store.getState().questions;
	const kidExtroPages: KidExtroductoryPagesType = questions.kidExtroPages;

	const lastPagesIndex: number = parseInt(Object.keys(newPages).at(-1) ?? "1");
	const lastPage: PageIndexInterface = newPages[lastPagesIndex];

	let lastPageNumber: number = lastPage.pageNumber ?? 1;
	let lastSectionNumber: number = lastPage.sectionNumber ?? 1;
	const finalPages: Record<number, PageIndexInterface> = {};

	lastSectionNumber++;
	kidExtroPages.forEach((page: KidExtroductoryPageType, index: number) => {
		const pageNumber = ++lastPageNumber;

		finalPages[pageNumber] = {
			pageNumber,
			page,
			screen: page.type,
			section: Section.Extro,
			sectionNumber: lastSectionNumber,
			sectionPageNumber: ++index,
		};
	});
	return {
		pages: finalPages,
		sectionTotal: { [lastSectionNumber]: Object.keys(finalPages).length },
	};
};

const loadAdultDemographicPages: loadPagesFuncType = (newPages) => {
	const questions = store.getState().questions;
	const adultExtroPages: AdultExtroductoryPagesType = questions.adultExtroPages;

	const lastPagesIndex: number = parseInt(Object.keys(newPages).at(-1) ?? "1");
	const lastPage: PageIndexInterface = newPages[lastPagesIndex];

	let lastPageNumber: number = lastPage.pageNumber ?? 1;
	let lastSectionNumber: number = lastPage.sectionNumber ?? 1;
	const finalPages: Record<number, PageIndexInterface> = {};

	lastSectionNumber++;
	adultExtroPages.forEach((page: AdultExtroductoryPageType, index: number) => {
		const pageNumber = ++lastPageNumber;

		finalPages[pageNumber] = {
			pageNumber,
			page,
			screen: page.type,
			section: Section.Extro,
			sectionNumber: lastSectionNumber,
			sectionPageNumber: ++index,
		};
	});

	return {
		pages: finalPages,
		sectionTotal: { [lastSectionNumber]: Object.keys(finalPages).length },
	};
};

const loadFeedbackPages: loadPagesFuncType = (newPages) => {
	const questions = store.getState().questions;
	const feedbackPages: FeedbackExtroductoryPagesType = questions.feedbackExtroPages;

	const lastPagesIndex: number = parseInt(Object.keys(newPages).at(-1) ?? "1");
	const lastPage: PageIndexInterface = newPages[lastPagesIndex];

	let lastPageNumber: number = lastPage.pageNumber ?? 1;
	let lastSectionNumber: number = lastPage.sectionNumber ?? 1;
	const finalPages: Record<number, PageIndexInterface> = {};

	lastSectionNumber++;
	feedbackPages.forEach((page: FeedbackExtroductoryPageType, index: number) => {
		const pageNumber = ++lastPageNumber;

		finalPages[pageNumber] = {
			pageNumber,
			page,
			screen: page.type,
			section: Section.Feedback,
			sectionNumber: lastSectionNumber,
			sectionPageNumber: ++index,
		};
	});
	return {
		pages: finalPages,
		sectionTotal: { [lastSectionNumber]: Object.keys(finalPages).length },
	};
};

const loadHbscPages: loadPagesFuncType = (newPages) => {
	const questions = store.getState().questions;
	const HbscPages: QuestionPagesType = questions.hbscPages;

	const lastPagesIndex: number = parseInt(Object.keys(newPages).at(-1) ?? "1");
	const lastPage: PageIndexInterface = newPages[lastPagesIndex];

	let lastPageNumber: number = lastPage.pageNumber ?? 1;
	let lastSectionNumber: number = lastPage.sectionNumber ?? 1;
	const finalPages: Record<number, PageIndexInterface> = {};

	lastSectionNumber++;
	HbscPages.forEach((page: QuestionPageType, index: number) => {
		const pageNumber = ++lastPageNumber;

		finalPages[pageNumber] = {
			pageNumber,
			page,
			screen: page.type,
			section: Section.Hbsc,
			sectionNumber: lastSectionNumber,
			sectionPageNumber: ++index,
		};
	});
	return {
		pages: finalPages,
		sectionTotal: { [lastSectionNumber]: Object.keys(finalPages).length },
	};
};

const loadGshsPages: loadPagesFuncType = (newPages) => {
	const questions = store.getState().questions;
	const GshsPages: QuestionPagesType = questions.gshsPages;

	const lastPagesIndex: number = parseInt(Object.keys(newPages).at(-1) ?? "1");
	const lastPage: PageIndexInterface = newPages[lastPagesIndex];

	let lastPageNumber: number = lastPage.pageNumber ?? 1;
	let lastSectionNumber: number = lastPage.sectionNumber ?? 1;
	const finalPages: Record<number, PageIndexInterface> = {};

	lastSectionNumber++;
	GshsPages.forEach((page: QuestionPageType, index: number) => {
		const pageNumber = ++lastPageNumber;

		finalPages[pageNumber] = {
			pageNumber,
			page,
			screen: page.type,
			section: Section.Gshs,
			sectionNumber: lastSectionNumber,
			sectionPageNumber: ++index,
		};
	});

	return {
		pages: finalPages,
		sectionTotal: { [lastSectionNumber]: Object.keys(finalPages).length },
	};
};

const loadAppExtroPages: loadPagesFuncType = (newPages) => {
	const questions = store.getState().questions;
	const AppExtroPages: QuestionPagesType = questions.appExtroPages;

	const lastPagesIndex: number = parseInt(Object.keys(newPages).at(-1) ?? "1");
	const lastPage: PageIndexInterface = newPages[lastPagesIndex];

	let lastPageNumber: number = lastPage.pageNumber ?? 1;
	let lastSectionNumber: number = lastPage.sectionNumber ?? 1;
	const finalPages: Record<number, PageIndexInterface> = {};

	lastSectionNumber++;
	AppExtroPages.forEach((page: QuestionPageType, index: number) => {
		const pageNumber = ++lastPageNumber;

		finalPages[pageNumber] = {
			pageNumber,
			page,
			screen: page.type,
			section: Section.AppExtro,
			sectionNumber: lastSectionNumber,
			sectionPageNumber: ++index,
		};
	});

	return {
		pages: finalPages,
		sectionTotal: { [lastSectionNumber]: Object.keys(finalPages).length },
	};
};

const reloadExtroFeedbackPages = (mode: ModeType, language: string): void => {
	const settings = store.getState().settings;
	const allPages: Record<number, PageIndexInterface> = settings.pages;
	interface AccumulatedPageType {
		pages: PageIndexInterface[];
		sectionTotal: Record<number, number>;
	}

	let newPages: Record<number, PageIndexInterface> = {};

	if (allPages === undefined || allPages === null) {
		return;
	}

	// remove all extro, feedback, hbsc, gshs pages
	for (const [key, page] of Object.entries(allPages)) {
		if (
			page.section === Section.Extro ||
			page.section === Section.Feedback ||
			page.section === Section.Hbsc ||
			page.section === Section.Gshs ||
			page.section === Section.AppExtro
		) {
			continue;
		} else {
			newPages = { ...newPages, [key]: page };
		}
	}

	// collect extro pages
	let pages: Record<number, PageIndexInterface> = {};

	if (mode === Mode.Kid || mode === Mode.Teen) {
		// collect kid demographics pages
		({ pages } = loadKidDemographicPages(newPages) as AccumulatedPageType);
		newPages = { ...newPages, ...pages };
	} else {
		// collect adult demographics pages
		({ pages } = loadAdultDemographicPages(newPages) as AccumulatedPageType);
		newPages = { ...newPages, ...pages };
	}

	if (MAIN_STUDY_LANG.includes(language)) {
		// main study extro pages

		// only the adolescent will answer the hbsc and gshs questions
		if (mode === Mode.Teen) {
			if (process.env.EXPO_PUBLIC_ENVIRONMENT !== "production") {
				// load all the gshs and hbsc pages
				({ pages } = loadHbscPages(newPages) as AccumulatedPageType);
				newPages = { ...newPages, ...pages };
				({ pages } = loadGshsPages(newPages) as AccumulatedPageType);
				newPages = { ...newPages, ...pages };
			} else {
				// randomly add hsbc or gshs pages 35% of the time
				if (randomBoolean(0.35)) {
					if (randomBoolean(0.5)) {
						// collect hsbc pages
						({ pages } = loadHbscPages(newPages) as AccumulatedPageType);
						newPages = { ...newPages, ...pages };
					} else {
						// collect gshs pages
						({ pages } = loadGshsPages(newPages) as AccumulatedPageType);
						newPages = { ...newPages, ...pages };
					}
				}
			}
		}
	} else {
		// pilot study extro pages
		// collect feedback pages
		({ pages } = loadFeedbackPages(newPages) as AccumulatedPageType);
		newPages = { ...newPages, ...pages };
	}

	({ pages } = loadAppExtroPages(newPages) as AccumulatedPageType);
	newPages = { ...newPages, ...pages };

	store.dispatch(setPage(newPages));
};

export { loadPages, loadAgePage, reloadExtroFeedbackPages, loadSectionPages };
