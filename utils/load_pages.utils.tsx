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
	clearQuestionResponses,
	clearResponseByIdent,
} from "store/responses/responsesSlice";
import {
	addSectionPage,
	identifyLastSectionExtroPage,
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

const loadPages = (): void => {
	const questions = store.getState().questions;
	const introductoryPages: IntroductoryPagesType = questions.introductoryPages;
	const questionPages: QuestionPagesType = questions.questionPages;
	const kidExtroPages: KidExtroductoryPagesType = questions.kidExtroPages;
	const feedbackExtroPages: FeedbackExtroductoryPagesType = questions.feedbackExtroPages;
	const languages: LanguageInterface[] = loadLanguagesOffline();

	// DO NOT RESET APP CONFIGURATIONS HERE

	// clear all responses
	// store.dispatch(resetResponses());

	// load offline languages
	store.dispatch(setLanguageOption(languages));

	// determine the last section extro page
	store.dispatch(identifyLastSectionExtroPage());

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
			store.dispatch(addSectionPage(page as SectionPayloadInterface));
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

		// add section total pages
		store.dispatch(addSectionTotalPages({ sectionNumber, totalPages: sectionPageNumber }));
		sectionPageNumber++;
		pageNumber++;
	});

	// load default extro pages (kids)
	sectionNumber++;
	kidExtroPages.forEach((page: KidExtroductoryPageType, sectionIndex: number) => {
		const sectionPageNumber = ++sectionIndex;

		// add page to section
		if (getScreenType(page.type) === Screen.IntroQuestion) {
			store.dispatch(addSectionPage(page as SectionPayloadInterface));
		}

		store.dispatch(
			addPage({
				key: pageNumber,
				page: {
					pageNumber,
					page,
					screen: page.type,
					section: Section.Extro,
					sectionNumber,
					sectionPageNumber,
				},
			}),
		);

		// add section total pages
		store.dispatch(addSectionTotalPages({ sectionNumber, totalPages: sectionPageNumber }));
		pageNumber++;
	});

	// load feedback pages
	sectionNumber++;
	feedbackExtroPages.forEach((page: FeedbackExtroductoryPageType, sectionIndex: number) => {
		const sectionPageNumber = ++sectionIndex;

		store.dispatch(
			addPage({
				key: pageNumber,
				page: {
					pageNumber,
					page,
					screen: page.type,
					section: Section.Feedback,
					sectionNumber,
					sectionPageNumber,
				},
			}),
		);

		// add section total pages
		store.dispatch(addSectionTotalPages({ sectionNumber, totalPages: sectionPageNumber }));
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
	store.dispatch(clearExtroResponses());
	store.dispatch(clearFeedbackResponses());
};

const reloadExtroFeedbackPages = (): void => {
	const questions = store.getState().questions;
	const settings = store.getState().settings;
	const adultExtroPages: AdultExtroductoryPagesType = questions.adultExtroPages;
	const kidExtroPages: KidExtroductoryPagesType = questions.kidExtroPages;
	const feedbackPages: FeedbackExtroductoryPagesType = questions.feedbackExtroPages;
	const allPages: Record<number, PageIndexInterface> = settings.pages;
	const mode: ModeType = settings.mode;

	let newPages: Record<number, PageIndexInterface> = {};
	let newSectionTotalPages: Record<number, number> = {};

	if (allPages === undefined || allPages === null) {
		return;
	}

	// remove all extro and feedback pages
	for (const [key, page] of Object.entries(allPages)) {
		if (page.section === Section.Extro || page.section === Section.Feedback) {
			continue;
		} else {
			newPages = { ...newPages, [key]: page };
		}
	}

	const lastPagesIndex: number = parseInt(Object.keys(newPages).at(-1) ?? "1");
	const lastPage: PageIndexInterface = newPages[lastPagesIndex];

	let lastPageNumber: number = lastPage.pageNumber ?? 1;
	let lastSectionNumber: number = lastPage.sectionNumber ?? 1;
	let finalExtroPages: PageIndexInterface[] = [];
	let finalFeedbackPages: PageIndexInterface[] = [];

	// load all extro pages
	lastSectionNumber++;
	if (mode === Mode.Kid || mode === Mode.Teen) {
		finalExtroPages = kidExtroPages.map((page: KidExtroductoryPageType, index: number) => {
			return {
				pageNumber: ++lastPageNumber,
				page,
				screen: page.type,
				section: Section.Extro,
				sectionNumber: lastSectionNumber,
				sectionPageNumber: ++index,
			};
		});
	} else {
		finalExtroPages = adultExtroPages.map((page: AdultExtroductoryPageType, index: number) => {
			return {
				pageNumber: ++lastPageNumber,
				page,
				screen: page.type,
				section: Section.Extro,
				sectionNumber: lastSectionNumber,
				sectionPageNumber: ++index,
			};
		});
	}

	newSectionTotalPages = {
		...newSectionTotalPages,
		[lastSectionNumber]: finalExtroPages.length,
	};

	// load all feedback pages
	lastSectionNumber++;
	finalFeedbackPages = feedbackPages.map((page: FeedbackExtroductoryPageType, index: number) => {
		return {
			pageNumber: ++lastPageNumber,
			page,
			screen: page.type,
			section: Section.Feedback,
			sectionNumber: lastSectionNumber,
			sectionPageNumber: ++index,
		};
	});
	newSectionTotalPages = {
		...newSectionTotalPages,
		[lastSectionNumber]: finalFeedbackPages.length,
	};

	finalExtroPages.forEach((page: PageIndexInterface) => {
		newPages = { ...newPages, [page.pageNumber ?? 1]: page };
	});
	finalFeedbackPages.forEach((page: PageIndexInterface) => {
		newPages = { ...newPages, [page.pageNumber ?? 1]: page };
	});

	store.dispatch(setPage(newPages));
	for (const [key, value] of Object.entries(newSectionTotalPages)) {
		store.dispatch(addSectionTotalPages({ sectionNumber: parseInt(key), totalPages: value }));
	}
};

export { loadPages, loadAgePage, reloadExtroFeedbackPages };
