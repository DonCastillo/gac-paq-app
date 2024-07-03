import AppWrapper from "base_pages/AppWrapper";
import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";

const App = (): React.ReactElement => {
	return (
		<Provider store={store}>
			<AppWrapper />
		</Provider>
	);
};

export default App;
