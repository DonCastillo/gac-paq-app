import React, { createContext, useReducer } from "react";
import type ResponseInterface from "interface/response";
import SectionType from "constants/section_type";

export interface ResponseContextInterface {
	responses: Record<string, ResponseInterface>;
	addResponse: (response: ResponseInterface) => void;
	resetResponses: () => void;
	clearResponseByIdent: (ident: string) => void;
	clearUnansweredResponses: () => void;
	clearQuestionResponses: () => void;
	clearIntroResponses: () => void;
	clearFeedbackResponses: () => void;
	clearExtroResponses: () => void;
}

export const ResponseContext = createContext<ResponseContextInterface>({
	responses: {},
	addResponse: () => {},
	resetResponses: () => {},
	clearResponseByIdent: () => {},
	clearUnansweredResponses: () => {},
	clearQuestionResponses: () => {},
	clearIntroResponses: () => {},
	clearFeedbackResponses: () => {},
	clearExtroResponses: () => {},
});

function responseReducer(state: Record<string, ResponseInterface>, action: any): any {
	switch (action.type) {
		case "ADD_RESPONSE": {
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

			return {
				...state,
				[propertyName]: newResponse,
			};
		}
		case "CLEAR_RESPONSE_BY_IDENT": {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				if (value.ident !== action.payload) {
					newState[key] = value;
				}
			}
			return newState;
		}
		case "CLEAR_UNANSWERED_RESPONSES": {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				if (value.answer !== null && value.answer !== "" && value.answer !== undefined) {
					newState[key] = value;
				}
			}
			return newState;
		}
		case "CLEAR_QUESTION_RESPONSES": {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				if (value.section !== SectionType.Question) {
					newState[key] = value;
				}
			}
			return newState;
		}
		case "CLEAR_INTRO_RESPONSES": {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				if (value.section !== SectionType.Intro) {
					newState[key] = value;
				}
			}
			return newState;
		}
		case "CLEAR_FEEDBACK_RESPONSES": {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				if (value.section !== SectionType.Feedback) {
					newState[key] = value;
				}
			}
			return newState;
		}
		case "CLEAR_EXTRO_RESPONSES": {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				if (value.section !== SectionType.Extro) {
					newState[key] = value;
				}
			}
			return newState;
		}
		case "RESET_RESPONSES": {
			return {};
		}
		default:
			return state;
	}
}

export default function ResponseContextProvider({
	children,
}: {
	children: React.ReactNode;
}): React.ReactElement {
	const [responses, dispatch] = useReducer(responseReducer, {});

	function addResponse(newResponse: ResponseInterface): void {
		dispatch({
			type: "ADD_RESPONSE",
			payload: newResponse,
		});
	}

	function resetResponses(): void {
		dispatch({
			type: "RESET_RESPONSES",
		});
	}

	function clearResponseByIdent(ident: string): void {
		dispatch({
			type: "CLEAR_RESPONSE_BY_IDENT",
			payload: ident,
		});
	}

	function clearUnansweredResponses(): void {
		dispatch({
			type: "CLEAR_UNANSWERED_RESPONSES",
		});
	}

	function clearQuestionResponses(): void {
		dispatch({
			type: "CLEAR_QUESTION_RESPONSES",
		});
	}

	function clearIntroResponses(): void {
		dispatch({
			type: "CLEAR_INTRO_RESPONSES",
		});
	}

	function clearFeedbackResponses(): void {
		dispatch({
			type: "CLEAR_FEEDBACK_RESPONSES",
		});
	}

	function clearExtroResponses(): void {
		dispatch({
			type: "CLEAR_EXTRO_RESPONSES",
		});
	}

	const value: any = {
		responses,
		addResponse,
		resetResponses,
		clearResponseByIdent,
		clearUnansweredResponses,
		clearQuestionResponses,
		clearIntroResponses,
		clearFeedbackResponses,
		clearExtroResponses,
	};

	return <ResponseContext.Provider value={value}>{children}</ResponseContext.Provider>;
}
