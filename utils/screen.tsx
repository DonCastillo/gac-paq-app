import React from "react";
import PageAdult from "base_pages/adult/PageAdult";
import QuestionExtroAdult from "base_pages/adult/QuestionExtroAdult";
import QuestionIntroAdult from "base_pages/adult/QuestionIntroAdult";
import SplashAdult from "base_pages/adult/SplashAdult";
import PageKid from "base_pages/kid/PageKid";
import QuestionExtroKid from "base_pages/kid/QuestionExtroKid";
import QuestionIntroKid from "base_pages/kid/QuestionIntroKid";
import { default as IntroQuestionSingleKid } from "base_pages/kid/intro/QuestionSingleKid";
import { default as IntroQuestionSingleAdult } from "base_pages/adult/intro/QuestionSingleAdult";
import { default as QuestionQuestionSingleKid } from "base_pages/kid/question/QuestionSingleKid";
import { default as QuestionQuestionSingleAdult } from "base_pages/adult/question/QuestionSingleAdult";
import SplashKid from "base_pages/kid/SplashKid";
import Mode from "constants/mode";
import ScreenType from "constants/screen_type";
import SectionType from "constants/section_type";
import LanguageKid from "base_pages/kid/LanguageKid";
import LanguageAdult from "base_pages/adult/LanguageAdult";
import GenericLanguage from "base_pages/generic/GenericLanguage";
import GenericPage from "base_pages/generic/GenericPage";
import GenericSingleCheckbox from "base_pages/generic/GenericSingleCheckbox";
import GenericSingleQuestion from "base_pages/generic/GenericSingleQuestion";

function getScreen(
	mode: Mode | string | undefined,
	screenType: ScreenType | string,
	sectionType?: SectionType | string,
): React.ReactElement {
	// all language screens are generic
	if (mode === undefined && screenType === ScreenType.Language) return <GenericLanguage />;
	else if (mode === Mode.Adult && screenType === ScreenType.Language) return <LanguageAdult />;
	else if (mode === Mode.Kid && screenType === ScreenType.Language) return <LanguageKid />;
	// all intro screens are generic
	else if (sectionType === SectionType.Intro && screenType === ScreenType.Page)
		return <GenericPage />;
	else if (sectionType === SectionType.Intro && screenType === ScreenType.SingleCheckbox)
		return <GenericSingleCheckbox />;
	else if (sectionType === SectionType.Intro && screenType === ScreenType.SingleQuestion)
		return <GenericSingleQuestion />;
	else if (mode === Mode.Adult && screenType === ScreenType.Page) return <PageAdult />;
	else if (mode === Mode.Kid && screenType === ScreenType.Page) return <PageKid />;
	else if (
		mode === Mode.Adult &&
		screenType === ScreenType.SingleQuestion &&
		sectionType === SectionType.Intro
	)
		return <IntroQuestionSingleAdult />;
	else if (
		mode === Mode.Kid &&
		screenType === ScreenType.SingleQuestion &&
		sectionType === SectionType.Intro
	)
		return <IntroQuestionSingleKid />;
	else if (
		mode === Mode.Adult &&
		screenType === ScreenType.SingleQuestion &&
		sectionType === SectionType.Question
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		mode === Mode.Kid &&
		screenType === ScreenType.SingleQuestion &&
		sectionType === SectionType.Question
	)
		return <QuestionQuestionSingleKid />;
	else if (mode === Mode.Adult && screenType === ScreenType.IntroQuestion)
		return <QuestionIntroAdult />;
	else if (mode === Mode.Kid && screenType === ScreenType.IntroQuestion)
		return <QuestionIntroKid />;
	else if (mode === Mode.Adult && screenType === ScreenType.ExtroQuestion)
		return <QuestionExtroAdult />;
	else if (mode === Mode.Kid && screenType === ScreenType.ExtroQuestion)
		return <QuestionExtroKid />;
	else return <></>;
}

function getScreenType(screenType: string): ScreenType {
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
	} else {
		return ScreenType.Page;
	}
}

export { getScreen, getScreenType };
