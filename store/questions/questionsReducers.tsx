import type {
	SetLanguageOptionFuncType,
	SetIntroductoryPagesFuncType,
	QuestionsFuncType,
	AddSectionPageFuncType,
} from "interface/function.type";

const setLanguageOption: SetLanguageOptionFuncType = (state, action) => {
	state.languageOption = action.payload;
};

const setIntroductoryPages: SetIntroductoryPagesFuncType = (state, action) => {
	state.introductoryPages = action.payload;
};

const addSectionPage: AddSectionPageFuncType = (state, action) => {
	const { sectionNumber, page } = action.payload;
	state.sectionPages[sectionNumber] = page;
};

const resetSectionPages: QuestionsFuncType = (state) => {
	state.sectionPages = {};
};

export default {
	setLanguageOption,
	setIntroductoryPages,
	addSectionPage,
	resetSectionPages,
};
