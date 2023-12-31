import React, { createContext, useReducer } from "react";
import type RegionInterface from "../interface/region";
import type LanguageInterface from "../interface/language";
import Regions from "./data/regions";
import Languages from "./data/languages";
import IntroductoryPages from "./data/introductory-pages";
import type PagePayloadInterface from "../interface/directus/page-payload";
import type QuestionDropdownPayloadInterface from "../interface/directus/question-dropdown-payload";
import QuestionPages from "./data/question-pages";
import BackButton from "./data/buttons/back";
import CompleteButton from "./data/buttons/complete";
import ContinueButton from "./data/buttons/continue";
import GoButton from "./data/buttons/go";
import NextButton from "./data/buttons/next";
import StartedButton from "./data/buttons/started";
import ScreenType from "constants/screen_type";
import AgreementPhrase from "./data/phrase/agreement";
import DonePhrase from "./data/phrase/done";
import DontKnowPhrase from "./data/phrase/dont-know";
import IntroductionPhrase from "./data/phrase/introduction";
import TryAgainPhrase from "./data/phrase/try-again";
import SuccessPage from "./data/state-pages/success";
import ErrorPage from "./data/state-pages/error";

const INITIAL_STATE = {
	regionOption: Regions,
	languageOption: Languages,
	introductoryPages: IntroductoryPages,
	questionPages: QuestionPages,
	backButton: BackButton,
	completeButton: CompleteButton,
	continueButton: ContinueButton,
	goButton: GoButton,
	nextButton: NextButton,
	startedButton: StartedButton,
	agreementPhrase: AgreementPhrase,
	donePhrase: DonePhrase,
	dontKnowPhrase: DontKnowPhrase,
	introductionPhrase: IntroductionPhrase,
	tryAgainPhrase: TryAgainPhrase,
	successPage: SuccessPage,
	errorPage: ErrorPage,
};

export const QuestionContext = createContext({
	questionState: {
		regionOption: [],
		languageOption: [],
		introductoryPages: [],
		questionPages: [],
		backButton: [],
		completeButton: [],
		continueButton: [],
		goButton: [],
		nextButton: [],
		startedButton: [],
		agreementPhrase: [],
		donePhrase: [],
		dontKnowPhrase: [],
		introductionPhrase: [],
		tryAgainPhrase: [],
		successPage: {},
		errorPage: {},
	},
	identifyLastSectionExtroPage: () => {},
	setRegionOption: (newRegionOptions: RegionInterface[]) => {},
	setLanguageOption: (newLanguageOptions: LanguageInterface[]) => {},
	setIntroductoryPages: (
		newIntroductoryPages: Array<PagePayloadInterface | QuestionDropdownPayloadInterface> | [],
	) => {},
});

function questionReducer(state: any, action: any): any {
	switch (action.type) {
		case "SET_REGION_OPTION":
			return {
				...state,
				regionOption: action.payload,
			};
		case "SET_LANGUAGE_OPTION":
			return {
				...state,
				languageOption: action.payload,
			};
		case "SET_INTRODUCTORY_PAGES_OPTION":
			return {
				...state,
				introductoryPages: action.payload,
			};
		case "IDENTIFY_LAST_SECTION_EXTRO_PAGE": {
			const questionsPages = state.questionPages;
			const lastSectionExtroIndex = questionsPages.findLastIndex((page: any) => {
				return page.type === ScreenType.ExtroQuestion;
			});
			questionsPages[lastSectionExtroIndex].isFinal = true;
			return {
				...state,
				questionPages: questionsPages,
			};
		}
		default:
			return state;
	}
}

export default function QuestionContextProvider({
	children,
}: {
	children: React.ReactNode;
}): React.ReactElement {
	const [questionState, dispatch] = useReducer(questionReducer, INITIAL_STATE);

	function setRegionOption(newRegionOptions: RegionInterface[]): void {
		dispatch({
			type: "SET_REGION_OPTION",
			payload: newRegionOptions,
		});
	}

	function setLanguageOption(newLanguageOptions: LanguageInterface[]): void {
		dispatch({
			type: "SET_LANGUAGE_OPTION",
			payload: newLanguageOptions,
		});
	}

	function setIntroductoryPages(
		newIntroductoryPages: Array<PagePayloadInterface | QuestionDropdownPayloadInterface> | [],
	): void {
		dispatch({
			type: "SET_INTRODUCTORY_PAGES_OPTION",
			payload: newIntroductoryPages,
		});
	}

	function identifyLastSectionExtroPage(): void {
		dispatch({
			type: "IDENTIFY_LAST_SECTION_EXTRO_PAGE",
		});
	}

	const value: any = {
		questionState,
		setRegionOption,
		setLanguageOption,
		setIntroductoryPages,
		identifyLastSectionExtroPage,
	};

	return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>;
}
