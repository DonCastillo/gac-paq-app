import Screen from "constants/screen.enum";
import SectionType from "constants/section_type.enum";

const getScreenType = (screenType: string): ScreenType => {
	if (screenType === "page") {
		return Screen.Page;
	} else if (screenType === "language") {
		return Screen.Language;
	} else if (screenType === "region") {
		return Screen.Region;
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

const getSectionType = (sectionType: string): SectionType => {
	if (sectionType === "intro") {
		return SectionType.Intro;
	} else if (sectionType === "extro") {
		return SectionType.Extro;
	} else {
		return SectionType.Question;
	}
};

export { getScreenType, getSectionType };
