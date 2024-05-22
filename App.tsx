import AppWrapper from "base_pages/AppWrapper";
import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";

export default function App(): React.ReactElement {
	return (
		<Provider store={store}>
			<AppWrapper />
		</Provider>
	);
}
