import { nextPage, prevPage, skipPage } from "store/settings/settingsSlice";
import { getResponseByIdent } from "./response.utils";
import { clearResponseByIdent } from "store/responses/responsesSlice";
import { getPageNumberBasedOnIdent } from "./page.utils";
import Mode from "constants/mode.enum";
import { store } from "store/store";
import { BackHandler } from "react-native";

const proceedPage = (): void => {
	const currentIdent = store.getState().settings.currentPage.page.ident;
	const answerValue = getResponseByIdent(currentIdent) ?? null;
	const skipToPageNumber = skipTo(answerValue);
	if (skipToPageNumber > 0) {
		store.dispatch(skipPage(skipToPageNumber));
	} else {
		store.dispatch(nextPage());
	}
};

const skipTo = (answer: string | string[] | null): number => {
	const currentIdent = store.getState().settings.currentPage.page.ident;
	const pages = store.getState().settings.pages;
	const mode = store.getState().settings.mode;
	const language = store.getState().settings.language;

	let finalAnswer: string | string[] | null = null;
	if (Array.isArray(answer)) {
		finalAnswer = answer.length > 0 ? answer.map((ans) => ans.toString().toLowerCase()) : null;
	} else if (typeof answer === "string") {
		finalAnswer = answer !== "" ? answer.toString().toLowerCase() : null;
	} else {
		finalAnswer = null;
	}

	if (language === "sv-SE") {
		if (currentIdent === "child_ethnicity" && finalAnswer === "sweden") {
			store.dispatch(clearResponseByIdent("parent_ethnicity"));
			return getPageNumberBasedOnIdent("relationship_to_the_child", pages);
		}
	}

	if (language === "es-MX") {
		if (currentIdent === "child_ethnicity" && finalAnswer === "no") {
			store.dispatch(clearResponseByIdent("parent_ethnicity"));
			return getPageNumberBasedOnIdent("relationship_to_the_child", pages);
		}
	}

	// if responder indicates they did not attend school, skip entire SCHOOL section
	if (currentIdent === "school_1" && finalAnswer === "no") {
		store.dispatch(clearResponseByIdent("school_2"));
		store.dispatch(clearResponseByIdent("school_3"));
		store.dispatch(clearResponseByIdent("school_4"));
		store.dispatch(clearResponseByIdent("school_5"));
		store.dispatch(clearResponseByIdent("school_6"));
		store.dispatch(clearResponseByIdent("school_7"));
		return getPageNumberBasedOnIdent("school_extro", pages);
	}

	// if responder indicates they attended 0 physical educ classes, skip questions regarding physical educ
	if (currentIdent === "school_3" && finalAnswer === "0") {
		store.dispatch(clearResponseByIdent("school_4"));
		store.dispatch(clearResponseByIdent("school_5"));
		return getPageNumberBasedOnIdent("school_6", pages);
	}

	// if responder indicates they did not do active chores, skip entire HOUSEHOLD section
	if (currentIdent === "household_1" && finalAnswer === "no") {
		store.dispatch(clearResponseByIdent("household_2"));
		store.dispatch(clearResponseByIdent("household_3"));
		store.dispatch(clearResponseByIdent("household_4"));
		return getPageNumberBasedOnIdent("household_extro", pages);
	}

	// if responder age is between 12-17 or is an adult/parent, answer WORK section
	if (currentIdent === "household_extro") {
		const age = getResponseByIdent("age");
		const finalAge =
			age !== "" && age !== undefined && age !== null && !Array.isArray(age) ? parseInt(age) : -1;
		const isTeen = [12, 13, 14, 15, 16, 17].includes(finalAge);
		if ((finalAge !== -1 && isTeen && mode === Mode.Adult) || isTeen) {
			return getPageNumberBasedOnIdent("work_intro", pages);
		} else {
			return getPageNumberBasedOnIdent("transportation_intro", pages);
		}
	}

	// if responder indicates they did not work, skip entire WORK section
	if (currentIdent === "work_1" && finalAnswer === "no") {
		store.dispatch(clearResponseByIdent("work_2"));
		store.dispatch(clearResponseByIdent("work_3"));
		return getPageNumberBasedOnIdent("work_extro", pages);
	}

	// if in transportation intro
	if (currentIdent === "transportation_preamble") {
		const attendedSchool = getResponseByIdent("school_1")?.toString().toLowerCase();
		const attendedWork = getResponseByIdent("work_1")?.toString().toLowerCase();

		// if responder did not attend school or work, skip transportation questions related to school and work
		if (
			["no", null, undefined].includes(attendedSchool) &&
			["no", null, undefined].includes(attendedWork)
		) {
			store.dispatch(clearResponseByIdent("transportation_1"));
			store.dispatch(clearResponseByIdent("transportation_2"));
			store.dispatch(clearResponseByIdent("transportation_3"));
			store.dispatch(clearResponseByIdent("transportation_4"));
			store.dispatch(clearResponseByIdent("transportation_5"));
			store.dispatch(clearResponseByIdent("transportation_6"));
			return getPageNumberBasedOnIdent("transportation_7", pages);
		} else if (attendedWork === "yes" && ["no", null, undefined].includes(attendedSchool)) {
			store.dispatch(clearResponseByIdent("transportation_1"));
			store.dispatch(clearResponseByIdent("transportation_2"));
			store.dispatch(clearResponseByIdent("transportation_3"));
			return getPageNumberBasedOnIdent("transportation_4", pages);
		} else if (attendedSchool === "yes" && ["no", null, undefined].includes(attendedWork)) {
			store.dispatch(clearResponseByIdent("transportation_4"));
			store.dispatch(clearResponseByIdent("transportation_5"));
			store.dispatch(clearResponseByIdent("transportation_6"));
			return getPageNumberBasedOnIdent("transportation_1", pages);
		}
	}

	// if responder indicates they stayed home for school, skip transportation questions related to school
	if (currentIdent === "transportation_1" && finalAnswer === "stay home for school") {
		const attendedWork = getResponseByIdent("work_1")?.toString().toLowerCase();
		store.dispatch(clearResponseByIdent("transportation_2"));
		store.dispatch(clearResponseByIdent("transportation_3"));
		if (attendedWork === "yes") {
			return getPageNumberBasedOnIdent("transportation_4", pages);
		}
		return getPageNumberBasedOnIdent("transportation_7", pages);
	}

	if (currentIdent === "transportation_3") {
		const attendedWork = getResponseByIdent("work_1")?.toString().toLowerCase();
		if (attendedWork === "yes") {
			return getPageNumberBasedOnIdent("transportation_4", pages);
		}
		return getPageNumberBasedOnIdent("transportation_7", pages);
	}

	// if responder is in the transportation question asking if they wheel/walk to go to school/work
	if (currentIdent === "transportation_7") {
		// clear responses
		if (finalAnswer === null) {
			store.dispatch(clearResponseByIdent("transportation_8"));
			store.dispatch(clearResponseByIdent("transportation_9"));
			store.dispatch(clearResponseByIdent("transportation_10"));
			store.dispatch(clearResponseByIdent("transportation_11"));
		}
		if (finalAnswer !== null && finalAnswer?.includes("no")) {
			store.dispatch(clearResponseByIdent("transportation_8"));
			store.dispatch(clearResponseByIdent("transportation_9"));
			store.dispatch(clearResponseByIdent("transportation_10"));
			store.dispatch(clearResponseByIdent("transportation_11"));
		} else if (finalAnswer !== null && !finalAnswer?.includes("walked")) {
			store.dispatch(clearResponseByIdent("transportation_8"));
			store.dispatch(clearResponseByIdent("transportation_9"));
		} else if (finalAnswer !== null && !finalAnswer?.includes("wheeled")) {
			store.dispatch(clearResponseByIdent("transportation_10"));
			store.dispatch(clearResponseByIdent("transportation_11"));
		}

		// skip pages
		if (finalAnswer !== null && finalAnswer?.includes("no")) {
			return getPageNumberBasedOnIdent("transportation_extro", pages);
		} else if (finalAnswer !== null && finalAnswer?.includes("walked")) {
			return getPageNumberBasedOnIdent("transportation_8", pages);
		} else if (finalAnswer !== null && finalAnswer?.includes("wheeled")) {
			return getPageNumberBasedOnIdent("transportation_10", pages);
		}
	}

	if (currentIdent === "transportation_9") {
		let transpoMode = getResponseByIdent("transportation_7");
		transpoMode = Array.isArray(transpoMode)
			? transpoMode?.map((transmode) => transmode.toLowerCase())
			: null;

		if (transpoMode !== null && Boolean(transpoMode?.includes("wheeled"))) {
			return getPageNumberBasedOnIdent("transportation_10", pages);
		} else {
			return getPageNumberBasedOnIdent("transportation_extro", pages);
		}
	}

	// if responder indicates they are not involved in organized activities, skip entire ORGANIZED section
	if (currentIdent === "organized_1" && finalAnswer === "no") {
		store.dispatch(clearResponseByIdent("organized_2"));
		store.dispatch(clearResponseByIdent("organized_3"));
		return getPageNumberBasedOnIdent("organized_extro", pages);
	}
	return 0;
};

const sysBackButtonDisable = (): any => {
	const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
		return true;
	});
	return () => backHandler.remove();
};

const sysBackButtonRegPage = (): any => {
	const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
		store.dispatch(prevPage());
		return true;
	});
	return () => backHandler.remove();
};

export { proceedPage, skipTo, sysBackButtonDisable, sysBackButtonRegPage };
