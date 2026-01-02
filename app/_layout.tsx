import { LoadingProvider } from "@/contexts/common/LoadingContext";
import App from "@base_pages/App";
import useBackgroundTaskRegistration from "@hooks/useBackgroundTaskRegistration";
import { store } from "@store/store";
import { defineSubmitStoredResponsesBackground } from "@utils/process.utils";
import { StatusBar } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { Provider } from "react-redux";
import Reactotron from "reactotron-react-native";

if (__DEV__) {
	require("./../ReactotronConfig");
	console.log("Development mode");
	Reactotron.log("Hello, Reactotron!");
}
console.log("------- start -------");
defineSubmitStoredResponsesBackground();

export default function RootLayout() {
	useBackgroundTaskRegistration();
	return (
		<Provider store={store}>
			<LoadingProvider>
				<MenuProvider>
					<StatusBar hidden={true} />
					<App />
				</MenuProvider>
			</LoadingProvider>
		</Provider>
	);
}
