import ScreenType from "constants/screen_type.enum";
import SectionType from "constants/section_type.enum";

const getScreenType = (screenType: string): ScreenType => {
	if (screenType === "page") {
		return ScreenType.Page;
	} else if (screenType === "language") {
		return ScreenType.Language;
	} else if (screenType === "region") {
		return ScreenType.Region;
	} else if (screenType === "splash") {
		return ScreenType.Splash;
	} else if (screenType === "question_single") {
		return ScreenType.SingleQuestion;
	} else if (screenType === "question_intro") {
		return ScreenType.IntroQuestion;
	} else if (screenType === "question_extro") {
		return ScreenType.ExtroQuestion;
	} else if (screenType === "single_checkbox") {
		return ScreenType.SingleCheckbox;
	} else if (screenType === "preamble") {
		return ScreenType.Preamble;
	} else {
		return ScreenType.Page;
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
