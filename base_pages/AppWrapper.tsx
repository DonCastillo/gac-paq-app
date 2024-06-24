import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import RegularPageScreen from "screens/RegularPageScreen";
import * as ScreenOrientation from "expo-screen-orientation";
import { getDeviceInfo, getInitialDeviceInfo } from "utils/responsive.utils";
import type DeviceInterface from "interface/dimensions";
import fonts from "styles/fonts";
import { useDispatch, useSelector } from "react-redux";
import { setDevice } from "store/settings/settingsSlice";
import { ErrorScreen, SplashScreen, SuccessScreen } from "utils/state_screen.utils";
import { loadApp } from "utils/load_pages.utils";

const Stack = createNativeStackNavigator();

const AppWrapper = (): React.ReactElement => {
	const [fontsLoaded, fontError] = useFonts(fonts);
	const settings = useSelector((state: any) => state.settings);
	const responses = useSelector((state: any) => state.responses);
	const questions = useSelector((state: any) => state.questions);

	console.log("expo admin urlL: ", process.env.EXPO_PUBLIC_ADMIN_API_URL);
	console.log("expo token: ", process.env.EXPO_PUBLIC_ADMIN_TOKEN);
	console.log("expo node env: ", process.env);

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

	// load app
	useEffect(() => {
		loadApp();
	}, []);

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
