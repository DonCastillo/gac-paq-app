import React, { createContext, useReducer } from "react";
import type ResponseInterface from "interface/response";
import Section from "constants/section.enum";

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
	getResponseByIdent: (ident: string) => string | string[] | null;
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
	getResponseByIdent: () => null,
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

			if (newResponse.section === Section.Extro) {
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
				if (value.section !== Section.Question) {
					newState[key] = value;
				}
			}
			return newState;
		}
		case "CLEAR_INTRO_RESPONSES": {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				if (value.section !== Section.Intro) {
					newState[key] = value;
				}
			}
			return newState;
		}
		case "CLEAR_FEEDBACK_RESPONSES": {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				if (value.section !== Section.Feedback) {
					newState[key] = value;
				}
			}
			return newState;
		}
		case "CLEAR_EXTRO_RESPONSES": {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				if (value.section !== Section.Extro) {
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

	function getResponseByIdent(ident: string): string | string[] | null {
		if (ident === null || ident === "") return null;
		if (Object.keys(responses).length === 0) return null;
		const finalResponse: ResponseInterface | undefined = Object.values(responses).find(
			(response: ResponseInterface) => response?.ident === ident,
		) as ResponseInterface;
		if (finalResponse === undefined || finalResponse === null) {
			return null;
		}
		if (
			finalResponse?.answer === null ||
			finalResponse?.answer === "" ||
			finalResponse?.answer === undefined
		) {
			return null;
		}

		if (finalResponse?.answer?.includes(" | ")) {
			return finalResponse?.answer.split(" | ");
		}
		return finalResponse?.answer;
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
		getResponseByIdent,
	};

	return <ResponseContext.Provider value={value}>{children}</ResponseContext.Provider>;
}
