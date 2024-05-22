import type RegionInterface from "interface/region";
import { FlagIcons } from "styles/flags";
import Regions from "store/data/regions";
import type LanguageInterface from "interface/language";
import Languages from "store/data/languages";
import { store } from "store/store";
import SectionType from "constants/section_type";
import Mode from "constants/mode";
import { setPage, setSectionTotalPages, type RawPageType } from "store/settings/settingsSlice";
import type { PageInterface } from "store/settings/defaultPage";

function loadRegionsOffline(): RegionInterface[] {
	return Regions.map((region: RegionInterface) => {
		return {
			...region,
			flag: region.code !== "" ? FlagIcons[region.code.toLowerCase()] : null,
		};
	});
}

function loadLanguagesOffline(): LanguageInterface[] {
	return Languages.map((language: LanguageInterface) => {
		return {
			...language,
			flag:
				language.flag_code !== "" && language.flag_code !== undefined
					? FlagIcons[language.flag_code.toLowerCase()]
					: null,
		};
	});
}

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
		if (
			(page as any).section === SectionType.Extro ||
			(page as any).section === SectionType.Feedback
		) {
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
				section: SectionType.Extro,
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
				section: SectionType.Extro,
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
			section: SectionType.Feedback,
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
		store.dispatch(setSectionTotalPages({ sectionNumber: parseInt(key), totalPages: value }));
	}
};

export { loadRegionsOffline, loadLanguagesOffline, reloadExtroFeedbackPages };
