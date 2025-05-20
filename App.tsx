import AppWrapper from "base_pages/AppWrapper";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "store/store";
import Reactotron from "reactotron-react-native";
import {
	defineSubmitStoredResponsesBackground,
	registerSubmitStoredResponsesBackground,
} from "utils/process.utils";
import { MenuProvider } from "react-native-popup-menu";

if (__DEV__) {
	// reference to ReactotronConfig
	require("./ReactotronConfig");
	console.log("Development mode");
	Reactotron.log("Hello, Reactotron!"); // log a message!
}

defineSubmitStoredResponsesBackground();

const App = (): React.ReactElement => {
	useEffect(() => {
		registerSubmitStoredResponsesBackground()
			.then(() => {
				console.log("Background task registered");
			})
			.catch((error) => {
				console.log("Background task registration failed: ", error);
			});
	}, []);
	return (
		<MenuProvider>
			<StatusBar hidden={true} />
			<Provider store={store}>
				<AppWrapper />
			</Provider>
		</MenuProvider>
	);
};

export default App;
