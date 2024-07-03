import Section from "constants/section.enum";
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

	if (newResponse.section === Section.Extro) {
		propertyName = `[${newResponse.mode}][${newResponse.section}][${newResponse.sectionNumber}][${newResponse.sectionPageNumber}]`;
	} else {
		propertyName = `[${newResponse.section}][${newResponse.sectionNumber}][${newResponse.sectionPageNumber}]`;
	}
	state[propertyName] = newResponse;
};

const clearResponseByIdent: ClearResponseByIdentFuncType = (state, action) => {
	for (const [key, value] of Object.entries(state)) {
		if (value.ident === action.payload) {
			state[key].answer = null;
			return;
		}
	}
};

const clearUnansweredResponses: ResponsesFuncType = (state) => {
	for (const [key, value] of Object.entries(state)) {
		if (value.answer === null || value.answer === "" || value.answer === undefined) {
			delete state[key];
		}
	}
};

const clearQuestionResponses: ResponsesFuncType = (state) => {
	for (const [key, value] of Object.entries(state)) {
		if (value.section === Section.Question) {
			state[key].answer = null;
		}
	}
};

const clearIntroResponses: ResponsesFuncType = (state) => {
	for (const [key, value] of Object.entries(state)) {
		if (value.section === Section.Intro) {
			state[key].answer = null;
		}
	}
};

const clearFeedbackResponses: ResponsesFuncType = (state) => {
	for (const [key, value] of Object.entries(state)) {
		if (value.section === Section.Feedback) {
			state[key].answer = null;
		}
	}
};

const clearExtroResponses: ResponsesFuncType = (state) => {
	for (const [key, value] of Object.entries(state)) {
		if (value.section === Section.Extro) {
			state[key].answer = null;
		}
	}
};

const resetResponses: ResponsesFuncType = (state) => {
	for (const [key] of Object.entries(state)) {
		delete state[key];
	}
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
