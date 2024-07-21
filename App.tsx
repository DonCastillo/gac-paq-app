import AppWrapper from "base_pages/AppWrapper";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "store/store";
import Reactotron from "reactotron-react-native";
import { defineSubmitStoredResponses, registerSubmitStoredResponses } from "utils/process.utils";

if (__DEV__) {
	// reference to ReactotronConfig
	require("./ReactotronConfig");
	console.log("Development mode");
	Reactotron.log("Hello, Reactotron!"); // log a message!
}


defineSubmitStoredResponses();

const App = (): React.ReactElement => {
	useEffect(() => { 
		registerSubmitStoredResponses().then(() => {
			console.log("Background task registered");
		}).catch((error) => {
			console.log("Background task registration failed: ", error);
		})
	}, [])
	return (
		<>
			<StatusBar hidden={true} />
			<Provider store={store}>
				<AppWrapper />
			</Provider>
		</>
	);
};

export default App;
