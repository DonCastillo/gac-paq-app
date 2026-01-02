import FWBtnShadowed from "@/components/derived-buttons/FWBtnShadowed";
import BackAndTryAgainNav from "@/components/generic/navigation/BackAndTryAgainNav";
import Mode from "@/constants/mode.enum";
import { getPhrases, reset } from "@/store/settings/settingsSlice";
import State from "@constants/state.enum";
import useCharacter from "@hooks/useCharacter";
import useSubmitResponseHandler from "@hooks/useResubmitResponse";
import useStatePageTranslations from "@hooks/useStatePageTranslations";
import { PageInterface } from "@interface/payload.type";
import { translateText } from "@utils/translate.utils";
import { router, useLocalSearchParams } from "expo-router";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useButtonContext } from "../common/ButtonContext";

interface StateContextType {
	translatedPage: PageInterface | null;
	setTranslatedPage: (page: PageInterface | null) => void;
	successType: string;
	state: State;
	heading: string;
	description: string;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

interface Props {
	children: ReactNode;
	state: State;
}
const StateProvider = ({ children, state }: Props) => {
	const dispatch = useDispatch();
	const params = useLocalSearchParams();
	const { mode } = useCharacter();
	const phrases = useSelector(getPhrases);

	const [componentState] = useState<State>(state);
	const [successType] = useState<string>((params.success_type as string) ?? "");
	const { translatedPage, setTranslatedPage } = useStatePageTranslations(componentState, successType);
	const { setButtonComponent } = useButtonContext();
	const { submitResponseHandler } = useSubmitResponseHandler();

	// set image, state icon, and state page on state change
	useEffect(() => {
		buttonChange();
	}, [componentState]);

	function resetApp(): void {
		dispatch(reset());
		router.replace("/splash/");
	}

	const buttonChange = (): void => {
		if (componentState === State.Success) {
			setButtonComponent(
				<FWBtnShadowed
					label={phrases.done}
					onPress={resetApp}
					colorTheme="#FFCB66"
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndTryAgainNav
					onPrev={() => router.replace("/questionnaire")}
					onNext={async () => await submitResponseHandler()}
					colorTheme={mode === Mode.Kid ? "#FFCB66" : "#FFF"}
				/>,
			);
		}
	};

	const value: StateContextType = {
		translatedPage,
		setTranslatedPage,
		successType,
		state: componentState,
		heading: translatedPage?.heading ?? "",
		description: translateText(translatedPage?.description, mode) ?? "",
	};

	return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

/**
 * Hook to access the LanguageKid context values.
 * Must be used within a LanguageKidProvider.
 */
const useStateContext = (): StateContextType => {
	const context = useContext(StateContext);
	if (context === undefined) {
		throw new Error("useStateContext must be used within a LanguageKidProvider");
	}
	return context;
};

export { StateProvider, useStateContext };
