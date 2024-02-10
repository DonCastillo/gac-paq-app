import React, { createContext, useReducer } from "react";
import type ResponseInterface from "interface/response";

interface ResponseContextInterface {
	responses: Record<string, ResponseInterface>;
	addResponse: (response: ResponseInterface) => void;
	resetResponses: () => void;
}

export const ResponseContext = createContext<ResponseContextInterface>({
	responses: {},
	addResponse: (response: ResponseInterface) => {},
	resetResponses: () => {},
});

function responseReducer(state: any, action: any): any {
	switch (action.type) {
		case "ADD_RESPONSE": {
			const newResponse = {
				label: action.payload.label,
				answer: action.payload.answer,
				pageNumber: action.payload.pageNumber,
				mode: action.payload.mode,
				sectionNumber: action.payload.sectionNumber,
				sectionPageNumber: action.payload.sectionPageNumber,
			};

			let propertyName = "";
			if (newResponse.sectionNumber !== null && newResponse.sectionPageNumber !== null) {
				propertyName = `[${newResponse.mode}][${newResponse.sectionNumber}][${newResponse.sectionPageNumber}]`;
			} else {
				propertyName = `[${newResponse.mode}][${newResponse.label}]`;
			}
			return {
				...state,
				[propertyName]: newResponse,
			};
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

	const value: any = {
		responses,
		addResponse,
		resetResponses,
	};

	return <ResponseContext.Provider value={value}>{children}</ResponseContext.Provider>;
}
