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
		Transportation7,
		Transportation8_10,
		Transportation9_11,
		sectionPages: [],
	},
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
});
export const {
	setRegionOption,
	setLanguageOption,
	setIntroductoryPages,
	identifyLastSectionExtroPage,
	addSectionPage,
} = questionsSlice.actions;
export default questionsSlice.reducer;
