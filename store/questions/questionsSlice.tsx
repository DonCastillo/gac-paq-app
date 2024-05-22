import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import Regions from "store/data/regions";
import Languages from "store/data/languages";
import IntroductoryPages from "store/data/introductory-pages";
import QuestionPages from "store/data/question-pages";
import {
	AdultExtroductoryPages,
	FeedbackExtroductoryPages,
	KidExtroductoryPages,
} from "store/data/extroductory-pages";
import DemographicKidPage from "store/data/introductory-pages/demographic_kid_age";
import DemographicTeenPage from "store/data/introductory-pages/demographic_teen_age";
import DemographicAdultPage from "store/data/introductory-pages/demographic_adult";
import BackButton from "store/data/buttons/back";
import CompleteButton from "store/data/buttons/complete";
import ContinueButton from "store/data/buttons/continue";
import GoButton from "store/data/buttons/go";
import NextButton from "store/data/buttons/next";
import StartedButton from "store/data/buttons/started";
import AgreementPhrase from "store/data/phrase/agreement";
import DonePhrase from "store/data/phrase/done";
import DontKnowPhrase from "store/data/phrase/dont-know";
import IntroductionPhrase from "store/data/phrase/introduction";
import TryAgainPhrase from "store/data/phrase/try-again";
import SuccessPage from "store/data/state-pages/success";
import ErrorPage from "store/data/state-pages/error";
import Transportation7 from "store/data/questionpages/section-4/transportation_7/S4Q7a";
import Transportation8_10 from "store/data/questionpages/section-4/transportation_7/S4Q8_10";
import Transportation9_11 from "store/data/questionpages/section-4/transportation_7/S4Q9_11";
import type RegionInterface from "interface/region";
import type LanguageInterface from "interface/language";
import type PagePayloadInterface from "interface/directus/page-payload";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import ScreenType from "constants/screen_type";
import type SectionPayloadInterface from "interface/directus/section-payload";
import type {
	Transportation7Interface,
	Transportation8_10Interface,
	Transportation9_11Interface,
} from "interface/question17";

const questionsSlice = createSlice({
	name: "questions",
	initialState: {
		regionOption: Regions,
		languageOption: Languages,
		introductoryPages: IntroductoryPages,
		questionPages: QuestionPages,
		kidExtroPages: KidExtroductoryPages,
		adultExtroPages: AdultExtroductoryPages,
		kidAgePage: DemographicKidPage,
		teenAgePage: DemographicTeenPage,
		adultAgePage: DemographicAdultPage,
		feedbackExtroPages: FeedbackExtroductoryPages,
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
		Transportation7: Transportation7 satisfies Transportation7Interface,
		Transportation8_10: Transportation8_10 satisfies Transportation8_10Interface,
		Transportation9_11: Transportation9_11 satisfies Transportation9_11Interface,
		sectionPages: [],
	} satisfies any,
	reducers: {
		setRegionOption: (state: any, action: PayloadAction<RegionInterface[]>) => {
			state.regionOption = action.payload;
		},
		setLanguageOption: (state: any, action: PayloadAction<LanguageInterface[]>) => {
			state.languageOption = action.payload;
		},
		setIntroductoryPages: (
			state: any,
			action: PayloadAction<Array<PagePayloadInterface | QuestionDropdownPayloadInterface>>,
		) => {
			state.introductoryPages = action.payload;
		},
		identifyLastSectionExtroPage: (state: any) => {
			const feedbackExtroPages = state.feedbackExtroPages;
			const lastSectionExtroIndex = feedbackExtroPages.findLastIndex((page: any) => {
				return page.type === ScreenType.ExtroQuestion;
			});
			feedbackExtroPages[lastSectionExtroIndex].isFinal = true;
			state.feedbackExtroPages = feedbackExtroPages;
		},
		addSectionPage: (state: any, action: PayloadAction<SectionPayloadInterface>) => {
			state.sectionPages.push(action.payload);
		},
	},
	selectors: {
		getRegionOption: (state: any) => state.regionOption,
		getLanguageOption: (state: any) => state.languageOption,
		getIntroductoryPages: (state: any) => state.introductoryPages,
		getQuestionPages: (state: any) => state.questionPages,
		getKidExtroPages: (state: any) => state.kidExtroPages,
		getAdultExtroPages: (state: any) => state.adultExtroPages,
		getKidAgePage: (state: any) => state.kidAgePage,
		getTeenAgePage: (state: any) => state.teenAgePage,
		getAdultAgePage: (state: any) => state.adultAgePage,
		getFeedbackExtroPages: (state: any) => state.feedbackExtroPages,
		getBackButton: (state: any) => state.backButton,
		getCompleteButton: (state: any) => state.completeButton,
		getContinueButton: (state: any) => state.continueButton,
		getGoButton: (state: any) => state.goButton,
		getNextButton: (state: any) => state.nextButton,
		getStartedButton: (state: any) => state.startedButton,
		getAgreementPhrase: (state: any) => state.agreementPhrase,
		getDonePhrase: (state: any) => state.donePhrase,
		getDontKnowPhrase: (state: any) => state.dontKnowPhrase,
		getIntroductionPhrase: (state: any) => state.introductionPhrase,
		getTryAgainPhrase: (state: any) => state.tryAgainPhrase,
		getSuccessPage: (state: any) => state.successPage,
		getErrorPage: (state: any) => state.errorPage,
		getTransportation7: (state: any) => state.Transportation7,
		getTransportation8_10: (state: any) => state.Transportation8_10,
		getTransportation9_11: (state: any) => state.Transportation9_11,
		getSectionPages: (state: any) => state.sectionPages,
	},
});
export const {
	setRegionOption,
	setLanguageOption,
	setIntroductoryPages,
	identifyLastSectionExtroPage,
	addSectionPage,
} = questionsSlice.actions;

export const {
	getSectionPages,
	getRegionOption,
	getLanguageOption,
	getIntroductoryPages,
	getQuestionPages,
	getKidExtroPages,
	getAdultExtroPages,
	getKidAgePage,
	getTeenAgePage,
	getAdultAgePage,
	getFeedbackExtroPages,
	getBackButton,
	getCompleteButton,
	getContinueButton,
	getGoButton,
	getNextButton,
	getStartedButton,
	getAgreementPhrase,
	getDonePhrase,
	getDontKnowPhrase,
	getIntroductionPhrase,
	getTryAgainPhrase,
	getSuccessPage,
	getErrorPage,
	getTransportation7,
	getTransportation8_10,
	getTransportation9_11,
} = questionsSlice.selectors;

export default questionsSlice.reducer;
