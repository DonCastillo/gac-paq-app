import { createSlice } from "@reduxjs/toolkit";
import Languages from "store/data/languages";
import IntroductoryPages from "store/data/introductory-pages";
import QuestionPages from "store/data/question-pages";
import {
	AdultExtroductoryPages,
	AppExtroPage,
	FeedbackExtroductoryPages,
	GSHSPages,
	HBSCPages,
	KidExtroductoryPages,
} from "store/data/extroductory-pages";
import DemographicKidPage from "store/data/introductory-pages/demographic_kid_age";
import DemographicTeenPage from "store/data/introductory-pages/demographic_teen_age";
import DemographicAdultPage from "store/data/introductory-pages/demographic_adult";
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
	ModeActivityInterface,
	ModeActivityTransportationInterface,
} from "interface/question17";
import reducersActions from "./questionsReducers";
import type { PhraseInterface } from "interface/phrase";
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
import SelectPhrase from "store/data/phrase/select";
import OfflineSuccessPage from "store/data/state-pages/offline-success";
import PleaseSpecifyPhrase from "store/data/phrase/please-specify";
import { loadQuestionData, removeQuestionData, storeQuestionData } from "./questionsThunk";
import {
	translatePage,
	translateArrayOfPages,
	translatePhrase,
} from "utils/translate_questions.utils";
import BackPhrase from "store/data/phrase/back";
import CompletePhrase from "store/data/phrase/complete";
import NextPhrase from "store/data/phrase/next";
import SubmitPhrase from "store/data/phrase/submit";
import NoPendingSubmissionsPhrase from "store/data/phrase/no_pending_submissions";
import NothingToSubmitPhrase from "store/data/phrase/nothing_to_submit";
import PendingSubmissionsPhrase from "store/data/phrase/pending_submissions";
import ResponsesSubmittedPhrase from "store/data/phrase/responses_submitted";

const defaultLanguage = "en-CA";
export interface QuestionSliceInterface {
	languageOption: LanguageInterface[];
	introductoryPages: IntroductoryPagesType;
	questionPages: QuestionPagesType;
	hbscPages: QuestionPagesType;
	gshsPages: QuestionPagesType;
	kidExtroPages: KidExtroductoryPagesType;
	adultExtroPages: AdultExtroductoryPagesType;
	appExtroPages: QuestionPagesType;
	kidAgePage: QuestionDropdownPayloadInterface;
	teenAgePage: QuestionDropdownPayloadInterface;
	adultAgePage: QuestionDropdownPayloadInterface;
	feedbackExtroPages: FeedbackExtroductoryPagesType;
	backPhrase: PhraseInterface;
	completePhrase: PhraseInterface;
	donePhrase: PhraseInterface;
	dontKnowPhrase: PhraseInterface;
	feedbackPhrase: PhraseInterface;
	introductionPhrase: PhraseInterface;
	nextPhrase: PhraseInterface;
	pleaseSpecifyPhrase: PhraseInterface;
	selectPhrase: PhraseInterface;
	tryAgainPhrase: PhraseInterface;
	submitPhrase: PhraseInterface;
	noPendingSubmissionsPhrase: PhraseInterface;
	nothingToSubmitPhrase: PhraseInterface;
	pendingSubmissionsPhrase: PhraseInterface;
	responsesSubmittedPhrase: PhraseInterface;
	successPage: PagePayloadInterface;
	offlineSuccessPage: PagePayloadInterface;
	errorPage: PagePayloadInterface;
	Transportation7: ModeActivityInterface;
	Transportation8_10: ModeActivityTransportationInterface;
	Transportation9_11: ModeActivityTransportationInterface;
	sectionPages: Record<number, SectionPayloadInterface>;
	optionLetters: string[];
	optionNumbers: string[];
}

const questionsSlice = createSlice({
	name: "questions",
	initialState: {
		languageOption: Languages satisfies LanguageInterface[],
		introductoryPages: translateArrayOfPages(
			IntroductoryPages,
			defaultLanguage,
		) as IntroductoryPagesType,
		questionPages: translateArrayOfPages(QuestionPages, defaultLanguage) as QuestionPagesType,
		hbscPages: translateArrayOfPages(HBSCPages, defaultLanguage) as QuestionPagesType,
		gshsPages: translateArrayOfPages(GSHSPages, defaultLanguage) as QuestionPagesType,
		appExtroPages: translateArrayOfPages(AppExtroPage, defaultLanguage) as QuestionPagesType,
		kidExtroPages: translateArrayOfPages(
			KidExtroductoryPages,
			defaultLanguage,
		) as KidExtroductoryPagesType,
		adultExtroPages: translateArrayOfPages(
			AdultExtroductoryPages,
			defaultLanguage,
		) as AdultExtroductoryPagesType,
		kidAgePage: translatePage(
			DemographicKidPage,
			defaultLanguage,
		) satisfies QuestionDropdownPayloadInterface,
		teenAgePage: translatePage(
			DemographicTeenPage,
			defaultLanguage,
		) satisfies QuestionDropdownPayloadInterface,
		adultAgePage: translatePage(
			DemographicAdultPage,
			defaultLanguage,
		) satisfies QuestionDropdownPayloadInterface,
		feedbackExtroPages: translateArrayOfPages(
			FeedbackExtroductoryPages,
			defaultLanguage,
		) as FeedbackExtroductoryPagesType,
		backPhrase: translatePhrase(BackPhrase, defaultLanguage) satisfies PhraseInterface,
		completePhrase: translatePhrase(CompletePhrase, defaultLanguage) satisfies PhraseInterface,
		donePhrase: translatePhrase(DonePhrase, defaultLanguage) satisfies PhraseInterface,
		dontKnowPhrase: translatePhrase(DontKnowPhrase, defaultLanguage) satisfies PhraseInterface,
		feedbackPhrase: translatePhrase(FeedbackPhrase, defaultLanguage) satisfies PhraseInterface,
		introductionPhrase: translatePhrase(
			IntroductionPhrase,
			defaultLanguage,
		) satisfies PhraseInterface,
		nextPhrase: translatePhrase(NextPhrase, defaultLanguage) satisfies PhraseInterface,
		pleaseSpecifyPhrase: translatePhrase(
			PleaseSpecifyPhrase,
			defaultLanguage,
		) satisfies PhraseInterface,
		selectPhrase: translatePhrase(SelectPhrase, defaultLanguage) satisfies PhraseInterface,
		tryAgainPhrase: translatePhrase(TryAgainPhrase, defaultLanguage) satisfies PhraseInterface,
		submitPhrase: translatePhrase(SubmitPhrase, defaultLanguage) satisfies PhraseInterface,
		noPendingSubmissionsPhrase: translatePhrase(
			NoPendingSubmissionsPhrase,
			defaultLanguage,
		) satisfies PhraseInterface,
		nothingToSubmitPhrase: translatePhrase(
			NothingToSubmitPhrase,
			defaultLanguage,
		) satisfies PhraseInterface,
		pendingSubmissionsPhrase: translatePhrase(
			PendingSubmissionsPhrase,
			defaultLanguage,
		) satisfies PhraseInterface,
		responsesSubmittedPhrase: translatePhrase(
			ResponsesSubmittedPhrase,
			defaultLanguage,
		) satisfies PhraseInterface,
		successPage: translatePage(SuccessPage, defaultLanguage) satisfies PagePayloadInterface,
		offlineSuccessPage: translatePage(
			OfflineSuccessPage,
			defaultLanguage,
		) satisfies PagePayloadInterface,
		errorPage: translatePage(ErrorPage, defaultLanguage) satisfies PagePayloadInterface,
		Transportation7: Transportation7[defaultLanguage] satisfies ModeActivityInterface,
		Transportation8_10: Transportation8_10[
			defaultLanguage
		] satisfies ModeActivityTransportationInterface,
		Transportation9_11: Transportation9_11[
			defaultLanguage
		] satisfies ModeActivityTransportationInterface,
		sectionPages: {},
		optionLetters: [],
		optionNumbers: [],
	} satisfies QuestionSliceInterface,
	reducers: {
		setLanguageOption: reducersActions.setLanguageOption,
		setIntroductoryPages: reducersActions.setIntroductoryPages,
	},
	selectors: {
		getLanguageOption: (state: QuestionSliceInterface) => state.languageOption,
		getIntroductoryPages: (state: QuestionSliceInterface) => state.introductoryPages,
		getQuestionPages: (state: QuestionSliceInterface) => state.questionPages,
		getHBSCPages: (state: QuestionSliceInterface) => state.hbscPages,
		getGSHSPages: (state: QuestionSliceInterface) => state.gshsPages,
		getAppExtroPages: (state: QuestionSliceInterface) => state.appExtroPages,
		getKidExtroPages: (state: QuestionSliceInterface) => state.kidExtroPages,
		getAdultExtroPages: (state: QuestionSliceInterface) => state.adultExtroPages,
		getKidAgePage: (state: QuestionSliceInterface) => state.kidAgePage,
		getTeenAgePage: (state: QuestionSliceInterface) => state.teenAgePage,
		getAdultAgePage: (state: QuestionSliceInterface) => state.adultAgePage,
		getFeedbackExtroPages: (state: QuestionSliceInterface) => state.feedbackExtroPages,
		getBackPhrase: (state: QuestionSliceInterface) => state.backPhrase,
		getCompletePhrase: (state: QuestionSliceInterface) => state.completePhrase,
		getDonePhrase: (state: QuestionSliceInterface) => state.donePhrase,
		getDontKnowPhrase: (state: QuestionSliceInterface) => state.dontKnowPhrase,
		getFeedbackPhrase: (state: QuestionSliceInterface) => state.feedbackPhrase,
		getIntroductionPhrase: (state: QuestionSliceInterface) => state.introductionPhrase,
		getNextPhrase: (state: QuestionSliceInterface) => state.nextPhrase,
		getPleaseSpecifyPhrase: (state: QuestionSliceInterface) => state.pleaseSpecifyPhrase,
		getSelectPhrase: (state: QuestionSliceInterface) => state.selectPhrase,
		getTryAgainPhrase: (state: QuestionSliceInterface) => state.tryAgainPhrase,
		getSubmitPhrase: (state: QuestionSliceInterface) => state.submitPhrase,
		getNoPendingSubmissionsPhrase: (state: QuestionSliceInterface) =>
			state.noPendingSubmissionsPhrase,
		getNothingToSubmitPhrase: (state: QuestionSliceInterface) => state.nothingToSubmitPhrase,
		getPendingSubmissionsPhrase: (state: QuestionSliceInterface) => state.pendingSubmissionsPhrase,
		getResponsesSubmittedPhrase: (state: QuestionSliceInterface) => state.responsesSubmittedPhrase,
		getSuccessPage: (state: QuestionSliceInterface) => state.successPage,
		getOfflineSuccessPage: (state: QuestionSliceInterface) => state.offlineSuccessPage,
		getErrorPage: (state: QuestionSliceInterface) => state.errorPage,
		getTransportation7: (state: QuestionSliceInterface) => state.Transportation7,
		getTransportation8_10: (state: QuestionSliceInterface) => state.Transportation8_10,
		getTransportation9_11: (state: QuestionSliceInterface) => state.Transportation9_11,
		getSectionPages: (state: QuestionSliceInterface) => state.sectionPages,
		getOptionLetters: (state: QuestionSliceInterface) => state.optionLetters,
		getOptionNumbers: (state: QuestionSliceInterface) => state.optionNumbers,
	},
	extraReducers: (builder) => {
		builder.addCase(storeQuestionData.fulfilled, (state, action) => {
			console.log("question saving fulfilled...");
		});
		builder.addCase(storeQuestionData.pending, (state, action) => {
			console.log("question saving pending...");
		});
		builder.addCase(storeQuestionData.rejected, (state, action) => {
			console.log("question saving rejected...");
		});
		builder.addCase(removeQuestionData.fulfilled, (state, action) => {
			console.log("question removing fulfilled...");
		});
		builder.addCase(removeQuestionData.pending, (state, action) => {
			console.log("question removing pending...");
		});
		builder.addCase(removeQuestionData.rejected, (state, action) => {
			console.log("question removing rejected...");
		});
		builder.addCase(loadQuestionData.fulfilled, (state, action) => {
			console.log("question loaded fulfilled...");
			return { ...state, ...action.payload };
		});
		builder.addCase(loadQuestionData.pending, (state, action) => {
			console.log("question loaded pending...");
			state = {};
		});
		builder.addCase(loadQuestionData.rejected, (state, action) => {
			console.log("question loaded rejected...");
			state = {};
		});
	},
});
export const { setLanguageOption, setIntroductoryPages } = questionsSlice.actions;

export const {
	getSectionPages,
	getOptionLetters,
	getOptionNumbers,
	getLanguageOption,
	getIntroductoryPages,
	getQuestionPages,
	getHBSCPages,
	getGSHSPages,
	getAppExtroPages,
	getKidExtroPages,
	getAdultExtroPages,
	getKidAgePage,
	getTeenAgePage,
	getAdultAgePage,
	getFeedbackExtroPages,
	getBackPhrase,
	getCompletePhrase,
	getDonePhrase,
	getDontKnowPhrase,
	getFeedbackPhrase,
	getIntroductionPhrase,
	getNextPhrase,
	getPleaseSpecifyPhrase,
	getSelectPhrase,
	getTryAgainPhrase,
	getSubmitPhrase,
	getNoPendingSubmissionsPhrase,
	getNothingToSubmitPhrase,
	getPendingSubmissionsPhrase,
	getResponsesSubmittedPhrase,
	getSuccessPage,
	getOfflineSuccessPage,
	getErrorPage,
	getTransportation7,
	getTransportation8_10,
	getTransportation9_11,
} = questionsSlice.selectors;

export default questionsSlice.reducer;
