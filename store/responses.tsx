import React, { createContext, useReducer } from "react";

interface response {
	pageNumber: number;
	label: string;
	answer: string | null;
}

export const ResponseContext = createContext({
	responses: {},
	addResponse: (response: response) => {},
});

function responseReducer(state: any, action: any): any {
	switch (action.type) {
		case "ADD_RESPONSE": {
			const newResponse = {
				label: action.payload.label,
				answer: action.payload.answer,
				pageNumber: action.payload.pageNumber,
			};
			return {
				...state,
				[action.payload.label]: newResponse,
			};
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

	function addResponse(newResponse: response): void {
		dispatch({
			type: "ADD_RESPONSE",
			payload: newResponse,
		});
	}

	const value: any = {
		responses,
		addResponse,
	};

	return <ResponseContext.Provider value={value}>{children}</ResponseContext.Provider>;
}
