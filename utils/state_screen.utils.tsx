import React from "react";
import StateAdult from "base_pages/adult/StateAdult";
import GenericSplash from "base_pages/generic/GenericSplash";
import StateKid from "base_pages/kid/StateKid";
import Mode from "constants/mode.enum";
import State from "constants/state.enum";
import type { ScreenByModeFuncType } from "interface/function.type";

const SplashScreen: ScreenByModeFuncType = (mode) => {
	return mode === Mode.Kid ? <GenericSplash /> : <GenericSplash />;
};

const ErrorScreen: ScreenByModeFuncType = (mode) => {
	return mode === Mode.Kid ? <StateKid state={State.Error} /> : <StateAdult state={State.Error} />;
};

const SuccessScreen: ScreenByModeFuncType = (mode) => {
	return mode === Mode.Kid ? (
		<StateKid state={State.Success} />
	) : (
		<StateAdult state={State.Success} />
	);
};

export { SplashScreen, ErrorScreen, SuccessScreen };