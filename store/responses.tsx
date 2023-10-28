import { createContext, useReducer } from "react";

interface response {
	pageNumber: number | null;
	label: string | null;
	answer: string | null;
}

export const ResponseContext = createContext({
	responses: {},
	addResponse: (response: response) => {},
});

function responseReducer(state: any, action: any) {
	switch (action.type) {
		case "ADD_RESPONSE":
			const newResponse = {
				label: action.payload.label,
				answer: action.payload.answer,
				pageNumber: action.payload.pageNumber,
			};
			return {
				...state,
				[action.payload.label]: newResponse,
			};
		default:
			return state;
	}
}

export default function ResponseContextProvider({ children }) {
	const [responses, dispatch] = useReducer(responseReducer, {});

	function addResponse(newResponse: response) {
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
