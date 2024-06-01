import Screen from "constants/screen.enum";
import Section from "constants/section.enum";

const getScreenType = (screenType: string): Screen => {
	if (screenType === "page") {
		return Screen.Page;
	} else if (screenType === "language") {
		return Screen.Language;
	} else if (screenType === "splash") {
		return Screen.Splash;
	} else if (screenType === "question_single") {
		return Screen.SingleQuestion;
	} else if (screenType === "question_intro") {
		return Screen.IntroQuestion;
	} else if (screenType === "question_extro") {
		return Screen.ExtroQuestion;
	} else if (screenType === "single_checkbox") {
		return Screen.SingleCheckbox;
	} else if (screenType === "preamble") {
		return Screen.Preamble;
	} else {
		return Screen.Page;
	}
};

const getSectionType = (sectionType: string): Section => {
	if (sectionType === "intro") {
		return Section.Intro;
	} else if (sectionType === "extro") {
		return Section.Extro;
	} else {
		return Section.Question;
	}
};

export { getScreenType, getSectionType };
