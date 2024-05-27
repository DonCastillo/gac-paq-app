import React from "react";
import StateAdult from "base_pages/adult/StateAdult";
import GenericSplash from "base_pages/generic/GenericSplash";
import StateKid from "base_pages/kid/StateKid";
import Mode from "constants/mode.enum";
import StateType from "constants/state_type.enum";
import type { ScreenByModeFuncType } from "interface/function.type";

const SplashScreen: ScreenByModeFuncType = (mode) => {
	return mode === Mode.Kid ? <GenericSplash /> : <GenericSplash />;
};

const ErrorScreen: ScreenByModeFuncType = (mode) => {
	return mode === Mode.Kid ? (
		<StateKid state={StateType.Error} />
	) : (
		<StateAdult state={StateType.Error} />
	);
};

const SuccessScreen: ScreenByModeFuncType = (mode) => {
	return mode === Mode.Kid ? (
		<StateKid state={StateType.Success} />
	) : (
		<StateAdult state={StateType.Success} />
	);
};

export { SplashScreen, ErrorScreen, SuccessScreen };
