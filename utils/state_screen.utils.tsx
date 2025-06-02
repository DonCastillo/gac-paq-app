import React, { useEffect } from "react";
import StateAdult from "base_pages/adult/StateAdult";
import GenericSplash from "base_pages/generic/GenericSplash";
import StateKid from "base_pages/kid/StateKid";
import Mode from "constants/mode.enum";
import State from "constants/state.enum";
import type { ScreenByModeFuncType } from "interface/function.type";
import { store } from "store/store";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen: ScreenByModeFuncType = () => {
	const mode = store.getState().settings.mode;

	useEffect(() => {
		const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
			return true;
		});
		return () => backHandler.remove();
	}, []);

	return mode === Mode.Kid ? <GenericSplash key={Mode.Kid} /> : <GenericSplash key={Mode.Adult} />;
};

const ErrorScreen: ScreenByModeFuncType = () => {
	const mode = store.getState().settings.mode;
	const navigation = useNavigation();

	useEffect(() => {
		const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
			navigation.navigate("RegularPageScreen");
			return true;
		});
		return () => backHandler.remove();
	}, []);

	return mode === Mode.Kid ? <StateKid state={State.Error} /> : <StateAdult state={State.Error} />;
};

const SuccessScreen: ScreenByModeFuncType = () => {
	const mode = store.getState().settings.mode;

	useEffect(() => {
		const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
			return true;
		});
		return () => backHandler.remove();
	}, []);

	return mode === Mode.Kid ? (
		<StateKid state={State.Success} />
	) : (
		<StateAdult state={State.Success} />
	);
};

export { SplashScreen, ErrorScreen, SuccessScreen };
