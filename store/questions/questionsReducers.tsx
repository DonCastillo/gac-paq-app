import type {
	SetLanguageOptionFuncType,
	SetIntroductoryPagesFuncType,
} from "interface/function.type";

const setLanguageOption: SetLanguageOptionFuncType = (state, action) => {
	state.languageOption = action.payload;
};

const setIntroductoryPages: SetIntroductoryPagesFuncType = (state, action) => {
	state.introductoryPages = action.payload;
};

export default {
	setLanguageOption,
	setIntroductoryPages,
};
