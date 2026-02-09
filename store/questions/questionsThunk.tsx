import type { CountryInterface, LanguageInterface } from "@interface/payload.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { readAppData, removeAppData, saveAppData } from "@utils/app_data_storage.utils";
import {
	translateArrayOfPages,
	translateOptionLetters,
	translateOptionNumbers,
	translatePage,
	translatePhrase,
} from "@utils/translate_questions.utils";
import { type QuestionSliceInterface } from "./questionsSlice";

export const storeQuestionData = createAsyncThunk("questions/storeQuestionData", async (_, { getState, dispatch }) => {
	await saveAppData();
});

export const removeQuestionData = createAsyncThunk("questions/removeQuestionData", async (_, { getState, dispatch }) => {
	await removeAppData();
});

export const loadQuestionData = createAsyncThunk(
	"questions/loadQuestionData",
	async (language: string | undefined | null, { getState, dispatch }) => {
		const finalLanguage = language ?? "en-CA";

		const data = await readAppData();

		if (data === null && data === undefined) return {};

		const introductoryPages = translateArrayOfPages(data.introductoryPages, finalLanguage);
		const questionPages = translateArrayOfPages(data.questionPages, finalLanguage);
		const kidExtroPages = translateArrayOfPages(data.kidExtroPages, finalLanguage);
		const adultExtroPages = translateArrayOfPages(data.adultExtroPages, finalLanguage);
		const feedbackExtroPages = translateArrayOfPages(data.feedbackExtroPages, finalLanguage);
		const hbscPages = translateArrayOfPages(data.hbscPages, finalLanguage);
		const gshsPages = translateArrayOfPages(data.gshsPages, finalLanguage);
		const appExtroPages = translateArrayOfPages(data.appExtroPages, finalLanguage);
		const kidAgePage = translatePage(data.kidAgePage, finalLanguage);
		const teenAgePage = translatePage(data.teenAgePage, finalLanguage);
		const adultAgePage = translatePage(data.adultAgePage, finalLanguage);
		const backPhrase = translatePhrase(data.backPhrase, finalLanguage);
		const completePhrase = translatePhrase(data.completePhrase, finalLanguage);
		const donePhrase = translatePhrase(data.donePhrase, finalLanguage);
		const dontKnowPhrase = translatePhrase(data.dontKnowPhrase, finalLanguage);
		const feedbackPhrase = translatePhrase(data.feedbackPhrase, finalLanguage);
		const introductionPhrase = translatePhrase(data.introductionPhrase, finalLanguage);
		const nextPhrase = translatePhrase(data.nextPhrase, finalLanguage);
		const pleaseSpecifyPhrase = translatePhrase(data.pleaseSpecifyPhrase, finalLanguage);
		const selectPhrase = translatePhrase(data.selectPhrase, finalLanguage);
		const tryAgainPhrase = translatePhrase(data.tryAgainPhrase, finalLanguage);
		const submitPhrase = translatePhrase(data.submitPhrase, finalLanguage);
		const noPendingSubmissionsPhrase = translatePhrase(data.noPendingSubmissionsPhrase, finalLanguage);
		const nothingToSubmitPhrase = translatePhrase(data.nothingToSubmitPhrase, finalLanguage);
		const pendingSubmissionsPhrase = translatePhrase(data.pendingSubmissionsPhrase, finalLanguage);
		const responsesSubmittedPhrase = translatePhrase(data.responsesSubmittedPhrase, finalLanguage);
		const successPage = translatePage(data.successPage, finalLanguage);
		const offlineSuccessPage = translatePage(data.offlineSuccessPage, finalLanguage);
		const errorPage = translatePage(data.errorPage, finalLanguage);
		const Transportation7 = data.Transportation7[finalLanguage];
		const Transportation8_10 = data.Transportation8_10[finalLanguage];
		const Transportation9_11 = data.Transportation9_11[finalLanguage];
		const optionLetters = translateOptionLetters(data.optionLetters, finalLanguage);
		const optionNumbers = translateOptionNumbers(data.optionNumbers, finalLanguage);

		const questionData = {
			languageOption: data.languageOption as LanguageInterface[],
			countryOption: data.countryOption as CountryInterface[],
			introductoryPages,
			questionPages,
			hbscPages,
			gshsPages,
			appExtroPages,
			kidExtroPages,
			adultExtroPages,
			kidAgePage,
			teenAgePage,
			adultAgePage,
			feedbackExtroPages,
			backPhrase,
			completePhrase,
			donePhrase,
			dontKnowPhrase,
			feedbackPhrase,
			introductionPhrase,
			nextPhrase,
			pleaseSpecifyPhrase,
			selectPhrase,
			tryAgainPhrase,
			submitPhrase,
			noPendingSubmissionsPhrase,
			nothingToSubmitPhrase,
			pendingSubmissionsPhrase,
			responsesSubmittedPhrase,
			successPage,
			offlineSuccessPage,
			errorPage,
			Transportation7,
			Transportation8_10,
			Transportation9_11,
			sectionPages: {},
			optionLetters,
			optionNumbers,
		} satisfies QuestionSliceInterface;

		return questionData;
	},
);
