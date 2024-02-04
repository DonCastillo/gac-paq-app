import React, { createContext, useReducer } from "react";
import type RegionInterface from "interface/region";
import type LanguageInterface from "interface/language";
import Regions from "store/data/regions";
import Languages from "store/data/languages";
import IntroductoryPages from "store/data/introductory-pages";
import type PagePayloadInterface from "interface/directus/page-payload";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import QuestionPages from "store/data/question-pages";
import BackButton from "store/data/buttons/back";
import CompleteButton from "store/data/buttons/complete";
import ContinueButton from "store/data/buttons/continue";
import GoButton from "store/data/buttons/go";
import NextButton from "store/data/buttons/next";
import StartedButton from "store/data/buttons/started";
import ScreenType from "constants/screen_type";
import AgreementPhrase from "store/data/phrase/agreement";
import DonePhrase from "store/data/phrase/done";
import DontKnowPhrase from "store/data/phrase/dont-know";
import IntroductionPhrase from "store/data/phrase/introduction";
import TryAgainPhrase from "store/data/phrase/try-again";
import SuccessPage from "store/data/state-pages/success";
import ErrorPage from "store/data/state-pages/error";
import { AdultExtroductoryPages, KidExtroductoryPages } from "./data/extroductory-pages";

const INITIAL_STATE = {
	regionOption: Regions,
	languageOption: Languages,
	introductoryPages: IntroductoryPages,
	questionPages: QuestionPages,
	kidExtroPages: KidExtroductoryPages,
	adultExtroPages: AdultExtroductoryPages,
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
		kidExtroPages: [],
		adultExtroPages: [],
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
