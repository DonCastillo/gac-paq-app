import SectionType from "constants/section_type.enum";
import type {
	ClearResponseByIdentFuncType,
	NewResponseFuncType,
	ResponsesFuncType,
} from "interface/function.type";

/** Function Definition */
const newResponse: NewResponseFuncType = (state, action) => {
	const newResponse = {
		ident: action.payload.ident,
		label: action.payload.label,
		answer: action.payload.answer,
		pageNumber: action.payload.pageNumber,
		mode: action.payload.mode,
		section: action.payload.section,
		sectionNumber: action.payload.sectionNumber,
		sectionPageNumber: action.payload.sectionPageNumber,
	};
	let propertyName = "";

	if (newResponse.section === SectionType.Extro) {
		propertyName = `[${newResponse.mode}][${newResponse.section}][${newResponse.sectionNumber}][${newResponse.sectionPageNumber}]`;
	} else {
		propertyName = `[${newResponse.section}][${newResponse.sectionNumber}][${newResponse.sectionPageNumber}]`;
	}
	state[propertyName] = newResponse;
};

const clearResponseByIdent: ClearResponseByIdentFuncType = (state, action) => {
	const newState = {};
	for (const [key, value] of Object.entries(state)) {
		const responseValue = value;
		if (responseValue.ident !== action.payload) {
			newState[key] = value;
		}
	}
	state = newState;
};

const clearUnansweredResponses: ResponsesFuncType = (state) => {
	const newState = {};
	for (const [key, value] of Object.entries(state)) {
		const responseValue = value;
		if (
			responseValue.answer !== null &&
			responseValue.answer !== "" &&
			responseValue.answer !== undefined
		) {
			newState[key] = value;
		}
	}
	state = newState;
};

const clearQuestionResponses: ResponsesFuncType = (state) => {
	const newState = {};
	for (const [key, value] of Object.entries(state)) {
		const responseValue = value;
		if (responseValue.section !== SectionType.Question) {
			newState[key] = value;
		}
	}
	state = newState;
};

const clearIntroResponses: ResponsesFuncType = (state) => {
	const newState = {};
	for (const [key, value] of Object.entries(state)) {
		const responseValue = value;
		if (responseValue.section !== SectionType.Intro) {
			newState[key] = value;
		}
	}
	state = newState;
};

const clearFeedbackResponses: ResponsesFuncType = (state) => {
	const newState = {};
	for (const [key, value] of Object.entries(state)) {
		const responseValue = value;
		if (responseValue.section !== SectionType.Feedback) {
			newState[key] = value;
		}
	}
	state = newState;
};

const clearExtroResponses: ResponsesFuncType = (state) => {
	const newState = {};
	for (const [key, value] of Object.entries(state)) {
		const responseValue = value;
		if (responseValue.section !== SectionType.Extro) {
			newState[key] = value;
		}
	}
	state = newState;
};

const resetResponses: ResponsesFuncType = (state) => {
	state = {};
};

export default {
	newResponse,
	clearResponseByIdent,
	clearUnansweredResponses,
	clearQuestionResponses,
	clearIntroResponses,
	clearFeedbackResponses,
	clearExtroResponses,
	resetResponses,
};
