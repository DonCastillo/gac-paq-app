import AppWrapper from "./base-pages/AppWrapper";
import React from "react";
import QuestionContextProvider from "./store/questions";
import SettingContextProvider from "./store/settings";
import ResponseContextProvider from "./store/responses";

export default function App(): React.ReactElement {
	return (
		<ResponseContextProvider>
			<QuestionContextProvider>
				<SettingContextProvider>
					<AppWrapper />
				</SettingContextProvider>
			</QuestionContextProvider>
		</ResponseContextProvider>
	);
}
