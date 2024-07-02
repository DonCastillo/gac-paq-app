import type {
	SetLanguageOptionFuncType,
	SetIntroductoryPagesFuncType,
	QuestionsFuncType,
	AddSectionPageFuncType,
} from "interface/function.type";
import Screen from "constants/screen.enum";

const setLanguageOption: SetLanguageOptionFuncType = (state, action) => {
	state.languageOption = action.payload;
};

const setIntroductoryPages: SetIntroductoryPagesFuncType = (state, action) => {
	state.introductoryPages = action.payload;
};

const identifyLastSectionExtroPage: QuestionsFuncType = (state) => {
	const feedbackExtroPages = state.feedbackExtroPages;
	const lastSectionExtroIndex = feedbackExtroPages.findLastIndex((page: any) => {
		return page.type === Screen.ExtroQuestion;
	});
	if (feedbackExtroPages[lastSectionExtroIndex].type === Screen.ExtroQuestion) {
		feedbackExtroPages[lastSectionExtroIndex].isFinal = true;
	}
	state.feedbackExtroPages = feedbackExtroPages;
};

const addSectionPage: AddSectionPageFuncType = (state, action) => {
	state.sectionPages.push(action.payload);
};

export default {
	setLanguageOption,
	setIntroductoryPages,
	identifyLastSectionExtroPage,
	addSectionPage,
};
