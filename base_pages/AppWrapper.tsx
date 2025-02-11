import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import RegularPageScreen from "screens/RegularPageScreen";
import * as ScreenOrientation from "expo-screen-orientation";
import { getDeviceInfo, getInitialDeviceInfo } from "utils/responsive.utils";
import type DeviceInterface from "interface/dimensions";
import fonts from "styles/fonts";
import { useDispatch, useSelector } from "react-redux";
import {
	getLanguage,
	getMode,
	setDevice,
	setIsConnected,
	setIsLoading,
} from "store/settings/settingsSlice";
import { ErrorScreen, SplashScreen, SuccessScreen } from "utils/state_screen.utils";
import { loadPages } from "utils/load_pages.utils";
import LoadingScreenAdult from "./adult/LoadingScreenAdult";
import NetInfo from "@react-native-community/netinfo";
import { sendResponseQueue } from "utils/response.utils";
import {
	loadQuestionData,
	removeQuestionData,
	storeQuestionData,
} from "store/questions/questionsThunk";
import { resetResponses } from "store/responses/responsesSlice";
import { changeMode } from "utils/mode.utils";
import { getNarrationPayload } from "store/settings/settingsThunk";
import { loadPhrases } from "utils/load.utils";

const Stack = createNativeStackNavigator();

const AppWrapper = (): React.ReactElement => {
	const [fontsLoaded, fontError] = useFonts(fonts);
	const [hasNetwork, setHasNetwork] = useState<boolean>(false);
	const mode = useSelector(getMode);
	const language = useSelector(getLanguage);
	const settings = useSelector((state: any) => state.settings);
	const responses = useSelector((state: any) => state.responses);
	const questions = useSelector((state: any) => state.questions);
	// console.log("app wrapper: ", language)

	// console.log("expo admin urlL: ", process.env.EXPO_PUBLIC_ADMIN_API_URL);
	// console.log("expo token: ", process.env.EXPO_PUBLIC_ADMIN_TOKEN);
	// console.log("expo node env: ", process.env);

	const dispatch = useDispatch();

	// set device dimensions
	useEffect(() => {
		const getInitialDeviceInfoAsync = async (): Promise<DeviceInterface> => {
			return await getInitialDeviceInfo();
		};
		getInitialDeviceInfoAsync()
			.then((initialDeviceInfo) => dispatch(setDevice(initialDeviceInfo)))
			.catch(console.error);

		const orientationListener = ScreenOrientation.addOrientationChangeListener(
			(orientationInfo) => {
				const newDeviceInfo = getDeviceInfo(orientationInfo.orientationInfo.orientation);
				dispatch(setDevice(newDeviceInfo));
			},
		);
		return () => {
			ScreenOrientation.removeOrientationChangeListener(orientationListener);
		};
	}, []);

	// check if there is an internet connection
	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener((state) => {
			setHasNetwork(state.isConnected ?? false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		dispatch(setIsConnected(hasNetwork));
		if (hasNetwork) {
			dispatch(getNarrationPayload({ mode, language }));
			sendResponseQueue()
				.then((res) => res)
				.catch((err) => err);
		}
	}, [hasNetwork]);

	// load app
	useEffect(() => {
		const loadApp = async (): Promise<void> => {
			dispatch(setIsLoading(true));
			await dispatch(removeQuestionData());
			await dispatch(storeQuestionData());
			await dispatch(loadQuestionData(language));
			dispatch(resetResponses());
			loadPhrases();
			loadPages();
			changeMode(mode, language);
			dispatch(setIsLoading(false));
		};
		loadApp()
			.then(() => {
				console.log("app initially loaded ...");
			})
			.catch((err) => {
				console.log("error loading app", err);
			});
	}, []);

	if (!fontsLoaded) {
		return <LoadingScreenAdult />;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					animation: "none",
				}}
			>
				<Stack.Screen
					name="SplashScreen"
					component={SplashScreen as React.FunctionComponent}
				/>
				<Stack.Screen
					name="RegularPageScreen"
					component={RegularPageScreen as React.FunctionComponent}
				/>
				<Stack.Screen
					name="SuccessScreen"
					component={SuccessScreen as React.FunctionComponent}
					initialParams={{ success_type: "offline" }}
				/>
				<Stack.Screen
					name="ErrorScreen"
					component={ErrorScreen as React.FunctionComponent}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppWrapper;
