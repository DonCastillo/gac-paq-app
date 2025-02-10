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
import {
	addSectionPage,
	resetSectionPages,
	setLanguageOption,
} from "store/questions/questionsSlice";
import { addPage, setPage, addSectionTotalPages } from "store/settings/settingsSlice";
import { loadLanguagesOffline } from "./load.utils";
import Screen from "constants/screen.enum";
import Section from "constants/section.enum";
import Mode from "constants/mode.enum";
import { getScreenType } from "utils/type.utils";
import type {
	LanguageInterface,
	PageIndexInterface,
	SectionPayloadInterface,
} from "interface/payload.type";
import MAIN_STUDY_LANG from "constants/main_study_lang";
import { type loadPagesFuncType } from "interface/function.type";

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

	// clear section pages
	store.dispatch(resetSectionPages());

	let pageNumber = 1;
	let sectionNumber = 0;
	let sectionPageNumber = 1;

	// load introductory pages
	console.log("load intro pages...");
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
		// add section total pages
		store.dispatch(addSectionTotalPages({ sectionNumber, totalPages: sectionPageNumber }));
		pageNumber++;
	});

	// load section question pages
	console.log("load question and section pages...");
	questionPages.forEach((page: QuestionPageType) => {
		// add page to section
		if (getScreenType(page.type) === Screen.IntroQuestion) {
			sectionPageNumber = 1;
			sectionNumber++;
			// store.dispatch(addSectionPage(page as SectionPayloadInterface));
			if (getScreenType(page.type) === Screen.IntroQuestion) {
				store.dispatch(addSectionPage({ sectionNumber, page: page as SectionPayloadInterface }));
			}
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

		// add section total pages
		store.dispatch(addSectionTotalPages({ sectionNumber, totalPages: sectionPageNumber }));
		sectionPageNumber++;
		pageNumber++;
	});
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

		// add page to section
		if (getScreenType(page.type) === Screen.IntroQuestion) {
			store.dispatch(
				addSectionPage({ sectionNumber: lastSectionNumber, page: page as SectionPayloadInterface }),
			);
		}

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

		// add page to section
		if (getScreenType(page.type) === Screen.IntroQuestion) {
			store.dispatch(
				addSectionPage({ sectionNumber: lastSectionNumber, page: page as SectionPayloadInterface }),
			);
		}

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

		// add page to section
		if (getScreenType(page.type) === Screen.IntroQuestion) {
			store.dispatch(
				addSectionPage({ sectionNumber: lastSectionNumber, page: page as SectionPayloadInterface }),
			);
		}

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

		// add page to section
		if (getScreenType(page.type) === Screen.IntroQuestion) {
			store.dispatch(
				addSectionPage({ sectionNumber: lastSectionNumber, page: page as SectionPayloadInterface }),
			);
		}

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

		// add page to section
		if (getScreenType(page.type) === Screen.IntroQuestion) {
			store.dispatch(
				addSectionPage({ sectionNumber: lastSectionNumber, page: page as SectionPayloadInterface }),
			);
		}

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
	let newSectionTotalPages: Record<number, number> = {};

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
	let sectionTotal: Record<number, number> = {};

	if (mode === Mode.Kid || mode === Mode.Teen) {
		// collect kid demographics pages
		({ pages, sectionTotal } = loadKidDemographicPages(newPages) as AccumulatedPageType);
		newPages = { ...newPages, ...pages };
		newSectionTotalPages = { ...newSectionTotalPages, ...sectionTotal };
	} else {
		// collect adult demographics pages
		({ pages, sectionTotal } = loadAdultDemographicPages(newPages) as AccumulatedPageType);
		newPages = { ...newPages, ...pages };
		newSectionTotalPages = { ...newSectionTotalPages, ...sectionTotal };
	}

	if (MAIN_STUDY_LANG.includes(language)) {
		// main study extro pages

		// collect hsbc pages
		({ pages, sectionTotal } = loadHbscPages(newPages) as AccumulatedPageType);
		newPages = { ...newPages, ...pages };
		newSectionTotalPages = { ...newSectionTotalPages, ...sectionTotal };

		// collect gshs pages
		({ pages, sectionTotal } = loadGshsPages(newPages) as AccumulatedPageType);
		newPages = { ...newPages, ...pages };
		newSectionTotalPages = { ...newSectionTotalPages, ...sectionTotal };
	} else {
		// pilot study extro pages
		// collect feedback pages
		({ pages, sectionTotal } = loadFeedbackPages(newPages) as AccumulatedPageType);
		newPages = { ...newPages, ...pages };
		newSectionTotalPages = { ...newSectionTotalPages, ...sectionTotal };
	}

	({ pages, sectionTotal } = loadAppExtroPages(newPages) as AccumulatedPageType);
	newPages = { ...newPages, ...pages };
	newSectionTotalPages = { ...newSectionTotalPages, ...sectionTotal };

	console.log("************************************************");
	console.log("final pages: ", newPages);
	console.log("final sectionTotal: ", newSectionTotalPages);

	store.dispatch(setPage(newPages));
	for (const [key, value] of Object.entries(newSectionTotalPages)) {
		store.dispatch(addSectionTotalPages({ sectionNumber: parseInt(key), totalPages: value }));
	}
};

export { loadPages, loadAgePage, reloadExtroFeedbackPages };
