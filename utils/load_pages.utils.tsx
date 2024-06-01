import type { PageInterface } from "store/settings/defaultPage";
import type { ModeType, RawPageType } from "interface/union.type";
import { store } from "store/store";
import {
	clearExtroResponses,
	clearFeedbackResponses,
	clearQuestionResponses,
	clearResponseByIdent,
	clearUnansweredResponses,
	resetResponses,
} from "store/responses/responsesSlice";
import {
	addSectionPage,
	identifyLastSectionExtroPage,
	setLanguageOption,
} from "store/questions/questionsSlice";
import { addPage, setPage, addSectionTotalPages } from "store/settings/settingsSlice";
import { loadLanguagesOffline } from "./load.utils";
import Screen from "constants/screen.enum";
import Section from "constants/section.enum";
import Mode from "constants/mode.enum";
import { getScreenType } from "utils/type.utils";

const loadApp = (): void => {
	const introductoryPages = store.getState().questions.introductoryPages;
	const questionPages = store.getState().questions.questionPages;
	const kidExtroPages = store.getState().questions.kidExtroPages;
	const feedbackExtroPages = store.getState().questions.feedbackExtroPages;
	const languages = loadLanguagesOffline();

	// clear all responses
	store.dispatch(resetResponses());

	// load offline languages
	store.dispatch(setLanguageOption(languages));

	// determine the last section extro page
	store.dispatch(identifyLastSectionExtroPage());

	let pageNumber = 1;
	let sectionNumber = 0;
	let sectionPageNumber = 1;

	// load introductory pages
	console.log("load intro pages...");
	introductoryPages.forEach((page: any, sectionIndex: number) => {
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
	questionPages.forEach((page: any) => {
		// add page to section
		if (getScreenType(page.type) === Screen.IntroQuestion) {
			store.dispatch(addSectionPage(page));
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
	kidExtroPages.forEach((page: any, sectionIndex: number) => {
		const sectionPageNumber = ++sectionIndex;

		// add page to section
		if (getScreenType(page.type) === Screen.IntroQuestion) {
			store.dispatch(addSectionPage(page));
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
	feedbackExtroPages.forEach((page: any, sectionIndex: number) => {
		const sectionPageNumber = ++sectionIndex;

		// add page to section
		if (getScreenType(page.type) === Screen.IntroQuestion) {
			store.dispatch(addSectionPage(page));
		}

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

	console.log("done loading pages...");
};

const loadAgePage = (mode: ModeType): void => {
	// change age page
	const allPages: Record<number, PageInterface> = store.getState().settings.pages;
	let newPages: Record<number, PageInterface> = {};

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

	store.dispatch(setPage(newPages));

	// clear responses
	store.dispatch(clearResponseByIdent("age"));
	store.dispatch(clearUnansweredResponses());
	store.dispatch(clearQuestionResponses());
	store.dispatch(clearExtroResponses());
	store.dispatch(clearFeedbackResponses());
};

const reloadExtroFeedbackPages = (): void => {
	const adultExtroPages = store.getState().questions.adultExtroPages as RawPageType[];
	const kidExtroPages = store.getState().questions.kidExtroPages as RawPageType[];
	const feedbackPages = store.getState().questions.feedbackExtroPages as RawPageType[];
	const allPages = store.getState().settings.pages;
	const mode = store.getState().settings.mode;

	let newPages: Record<number, PageInterface> = {};
	let newSectionTotalPages: Record<number, number> = {};

	// remove all extro and feedback pages
	for (const [key, page] of Object.entries(allPages)) {
		if ((page as any).section === Section.Extro || (page as any).section === Section.Feedback) {
			continue;
		} else {
			newPages = { ...newPages, [key]: page };
		}
	}

	const lastPagesIndex: number = parseInt(Object.keys(newPages).at(-1) ?? "1");
	const lastPage: PageInterface = newPages[lastPagesIndex];

	let lastPageNumber: number = lastPage.pageNumber ?? 1;
	let lastSectionNumber: number = lastPage.sectionNumber ?? 1;
	let finalExtroPages: any[] = [];
	let finalFeedbackPages: PageInterface[] = [];

	// load all extro pages
	lastSectionNumber++;
	if (mode === Mode.Kid || mode === Mode.Teen) {
		finalExtroPages = kidExtroPages.map((page: RawPageType, index: number) => {
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
		finalExtroPages = adultExtroPages.map((page: RawPageType, index: number) => {
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
	finalFeedbackPages = feedbackPages.map((page: RawPageType, index: number) => {
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

	finalExtroPages.forEach((page: PageInterface) => {
		newPages = { ...newPages, [page.pageNumber ?? 1]: page };
	});
	finalFeedbackPages.forEach((page: PageInterface) => {
		newPages = { ...newPages, [page.pageNumber ?? 1]: page };
	});

	store.dispatch(setPage(newPages));
	for (const [key, value] of Object.entries(newSectionTotalPages)) {
		store.dispatch(addSectionTotalPages({ sectionNumber: parseInt(key), totalPages: value }));
	}
};

export { loadApp, loadAgePage, reloadExtroFeedbackPages };
