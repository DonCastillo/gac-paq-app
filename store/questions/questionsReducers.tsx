import type {
	SetLanguageOptionFuncType,
	SetRegionOptionFuncType,
	SetIntroductoryPagesFuncType,
	QuestionsFuncType,
	AddSectionPageFuncType,
} from "interface/function.type";
import ScreenType from "constants/screen_type.enum";

const setRegionOption: SetRegionOptionFuncType = (state, action) => {
	state.regionOption = action.payload;
};

const setLanguageOption: SetLanguageOptionFuncType = (state, action) => {
	state.languageOption = action.payload;
};

const setIntroductoryPages: SetIntroductoryPagesFuncType = (state, action) => {
	state.introductoryPages = action.payload;
};

const identifyLastSectionExtroPage: QuestionsFuncType = (state) => {
	const feedbackExtroPages = state.feedbackExtroPages;
	const lastSectionExtroIndex = feedbackExtroPages.findLastIndex((page: any) => {
		return page.type === ScreenType.ExtroQuestion;
	});
	feedbackExtroPages[lastSectionExtroIndex].isFinal = true;
	state.feedbackExtroPages = feedbackExtroPages;
};

const addSectionPage: AddSectionPageFuncType = (state, action) => {
	state.sectionPages.push(action.payload);
};

export default {
	setRegionOption,
	setLanguageOption,
	setIntroductoryPages,
	identifyLastSectionExtroPage,
	addSectionPage,
};
