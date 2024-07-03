import { createSlice } from "@reduxjs/toolkit";
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
import type {
	Transportation7Interface,
	Transportation8_10Interface,
	Transportation9_11Interface,
} from "interface/question17";
import reducersActions from "./questionsReducers";
import type { LangButtonInterface } from "interface/button";
import type { LangPhraseInterface } from "interface/phrase";
import type {
	LanguageInterface,
	PagePayloadInterface,
	QuestionDropdownPayloadInterface,
	SectionPayloadInterface,
} from "interface/payload.type";
import type {
	AdultExtroductoryPagesType,
	FeedbackExtroductoryPagesType,
	IntroductoryPagesType,
	KidExtroductoryPagesType,
	QuestionPagesType,
} from "interface/union.type";
import FeedbackPhrase from "store/data/phrase/feedback";

export interface QuestionSliceInterface {
	languageOption: LanguageInterface[];
	introductoryPages: IntroductoryPagesType;
	questionPages: QuestionPagesType;
	kidExtroPages: KidExtroductoryPagesType;
	adultExtroPages: AdultExtroductoryPagesType;
	kidAgePage: QuestionDropdownPayloadInterface;
	teenAgePage: QuestionDropdownPayloadInterface;
	adultAgePage: QuestionDropdownPayloadInterface;
	feedbackExtroPages: FeedbackExtroductoryPagesType;
	backButton: LangButtonInterface;
	completeButton: LangButtonInterface;
	continueButton: LangButtonInterface;
	goButton: LangButtonInterface;
	nextButton: LangButtonInterface;
	startedButton: LangButtonInterface;
	agreementPhrase: LangPhraseInterface;
	donePhrase: LangPhraseInterface;
	dontKnowPhrase: LangPhraseInterface;
	introductionPhrase: LangPhraseInterface;
	tryAgainPhrase: LangPhraseInterface;
	feedbackPhrase: LangPhraseInterface;
	successPage: PagePayloadInterface;
	errorPage: PagePayloadInterface;
	Transportation7: Transportation7Interface;
	Transportation8_10: Transportation8_10Interface;
	Transportation9_11: Transportation9_11Interface;
	sectionPages: SectionPayloadInterface[];
}

const questionsSlice = createSlice({
	name: "questions",
	initialState: {
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
		feedbackPhrase: FeedbackPhrase,
		successPage: SuccessPage,
		errorPage: ErrorPage,
		Transportation7: Transportation7 satisfies Transportation7Interface,
		Transportation8_10: Transportation8_10 satisfies Transportation8_10Interface,
		Transportation9_11: Transportation9_11 satisfies Transportation9_11Interface,
		sectionPages: [],
	} satisfies QuestionSliceInterface,
	reducers: {
		setLanguageOption: reducersActions.setLanguageOption,
		setIntroductoryPages: reducersActions.setIntroductoryPages,
		identifyLastSectionExtroPage: reducersActions.identifyLastSectionExtroPage,
		addSectionPage: reducersActions.addSectionPage,
	},
	selectors: {
		getLanguageOption: (state: QuestionSliceInterface) => state.languageOption,
		getIntroductoryPages: (state: QuestionSliceInterface) => state.introductoryPages,
		getQuestionPages: (state: QuestionSliceInterface) => state.questionPages,
		getKidExtroPages: (state: QuestionSliceInterface) => state.kidExtroPages,
		getAdultExtroPages: (state: QuestionSliceInterface) => state.adultExtroPages,
		getKidAgePage: (state: QuestionSliceInterface) => state.kidAgePage,
		getTeenAgePage: (state: QuestionSliceInterface) => state.teenAgePage,
		getAdultAgePage: (state: QuestionSliceInterface) => state.adultAgePage,
		getFeedbackExtroPages: (state: QuestionSliceInterface) => state.feedbackExtroPages,
		getBackButton: (state: QuestionSliceInterface) => state.backButton,
		getCompleteButton: (state: QuestionSliceInterface) => state.completeButton,
		getContinueButton: (state: QuestionSliceInterface) => state.continueButton,
		getGoButton: (state: QuestionSliceInterface) => state.goButton,
		getNextButton: (state: QuestionSliceInterface) => state.nextButton,
		getStartedButton: (state: QuestionSliceInterface) => state.startedButton,
		getAgreementPhrase: (state: QuestionSliceInterface) => state.agreementPhrase,
		getDonePhrase: (state: QuestionSliceInterface) => state.donePhrase,
		getDontKnowPhrase: (state: QuestionSliceInterface) => state.dontKnowPhrase,
		getIntroductionPhrase: (state: QuestionSliceInterface) => state.introductionPhrase,
		getTryAgainPhrase: (state: QuestionSliceInterface) => state.tryAgainPhrase,
		getFeedbackPhrase: (state: QuestionSliceInterface) => state.feedbackPhrase,
		getSuccessPage: (state: QuestionSliceInterface) => state.successPage,
		getErrorPage: (state: QuestionSliceInterface) => state.errorPage,
		getTransportation7: (state: QuestionSliceInterface) => state.Transportation7,
		getTransportation8_10: (state: QuestionSliceInterface) => state.Transportation8_10,
		getTransportation9_11: (state: QuestionSliceInterface) => state.Transportation9_11,
		getSectionPages: (state: QuestionSliceInterface) => state.sectionPages,
	},
});
export const {
	setLanguageOption,
	setIntroductoryPages,
	identifyLastSectionExtroPage,
	addSectionPage,
} = questionsSlice.actions;

export const {
	getSectionPages,
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
	getFeedbackPhrase,
	getSuccessPage,
	getErrorPage,
	getTransportation7,
	getTransportation8_10,
	getTransportation9_11,
} = questionsSlice.selectors;

export default questionsSlice.reducer;
