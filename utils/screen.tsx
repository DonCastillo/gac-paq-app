import React from "react";
import PageAdult from "base_pages/adult/PageAdult";
import QuestionExtroAdult from "base_pages/adult/QuestionExtroAdult";
import QuestionIntroAdult from "base_pages/adult/QuestionIntroAdult";
import PageKid from "base_pages/kid/PageKid";
import QuestionExtroKid from "base_pages/kid/QuestionExtroKid";
import QuestionIntroKid from "base_pages/kid/QuestionIntroKid";
import IntroQuestionSingleKid from "base_pages/kid/intro/QuestionSingleKid";
import IntroQuestionSingleAdult from "base_pages/adult/intro/QuestionSingleAdult";
import QuestionQuestionSingleKid from "base_pages/kid/question/QuestionSingleKid";
import QuestionQuestionSingleAdult from "base_pages/adult/question/QuestionSingleAdult";
import Mode from "constants/mode";
import ScreenType from "constants/screen_type";
import SectionType from "constants/section_type";
import LanguageKid from "base_pages/kid/LanguageKid";
import LanguageAdult from "base_pages/adult/LanguageAdult";
import GenericLanguage from "base_pages/generic/GenericLanguage";
import GenericPage from "base_pages/generic/GenericPage";
import GenericSingleCheckbox from "base_pages/generic/GenericSingleCheckbox";
import GenericSingleQuestion from "base_pages/generic/GenericSingleQuestion";
import SingleCheckboxKid from "base_pages/kid/SingleCheckboxKid";
import SingleCheckboxAdult from "base_pages/adult/SingleCheckboxAdult";
import PreambleKid from "base_pages/kid/PreambleKid";
import PreambleAdult from "base_pages/adult/PreambleAdult";

function getScreen(
	mode: Mode | string | undefined,
	screenType: ScreenType | string,
	sectionType?: SectionType | string,
): React.ReactElement {
	// all language screens are generic
	if (mode === undefined && screenType === ScreenType.Language) return <GenericLanguage />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screenType === ScreenType.Language)
		return <LanguageAdult />;
	else if (mode === Mode.Kid && screenType === ScreenType.Language) return <LanguageKid />;
	// regular page screens
	else if (mode === undefined && screenType === ScreenType.Page) return <GenericPage />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screenType === ScreenType.Page)
		return <PageAdult />;
	else if (mode === Mode.Kid && screenType === ScreenType.Page) return <PageKid />;
	// single checkbox screens
	else if (
		mode === undefined &&
		sectionType === SectionType.Intro &&
		screenType === ScreenType.SingleCheckbox
	)
		return <GenericSingleCheckbox />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		sectionType === SectionType.Intro &&
		screenType === ScreenType.SingleCheckbox
	)
		return <SingleCheckboxAdult />;
	else if (
		mode === Mode.Kid &&
		sectionType === SectionType.Intro &&
		screenType === ScreenType.SingleCheckbox
	)
		return <SingleCheckboxKid />;
	// question intro
	else if (
		mode === undefined &&
		sectionType === SectionType.Intro &&
		screenType === ScreenType.SingleQuestion
	)
		return <GenericSingleQuestion />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		sectionType === SectionType.Intro &&
		screenType === ScreenType.SingleQuestion
	)
		return <IntroQuestionSingleAdult />;
	else if (
		mode === Mode.Kid &&
		sectionType === SectionType.Intro &&
		screenType === ScreenType.SingleQuestion
	)
		return <IntroQuestionSingleKid />;
	// preamble
	else if (
		mode === undefined &&
		sectionType === SectionType.Question &&
		screenType === ScreenType.Preamble
	) {
		return <PreambleAdult />;
	} else if (
		mode === Mode.Kid &&
		sectionType === SectionType.Question &&
		screenType === ScreenType.Preamble
	) {
		return <PreambleKid />;
	} else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		sectionType === SectionType.Question &&
		screenType === ScreenType.Preamble
	) {
		return <PreambleAdult />;
	}
	// question question
	else if (
		mode === undefined &&
		sectionType === SectionType.Question &&
		screenType === ScreenType.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		sectionType === SectionType.Question &&
		screenType === ScreenType.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		mode === Mode.Kid &&
		sectionType === SectionType.Question &&
		screenType === ScreenType.SingleQuestion
	)
		return <QuestionQuestionSingleKid />;
	// question extro
	else if (
		mode === undefined &&
		sectionType === SectionType.Extro &&
		screenType === ScreenType.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		sectionType === SectionType.Extro &&
		screenType === ScreenType.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		mode === Mode.Kid &&
		sectionType === SectionType.Extro &&
		screenType === ScreenType.SingleQuestion
	)
		return <QuestionQuestionSingleKid />;
	// question feedback
	else if (
		mode === undefined &&
		sectionType === SectionType.Feedback &&
		screenType === ScreenType.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		sectionType === SectionType.Feedback &&
		screenType === ScreenType.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		mode === Mode.Kid &&
		sectionType === SectionType.Feedback &&
		screenType === ScreenType.SingleQuestion
	)
		return <QuestionQuestionSingleKid />;
	// question section intro
	else if (mode === undefined && screenType === ScreenType.IntroQuestion)
		return <QuestionIntroAdult />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screenType === ScreenType.IntroQuestion)
		return <QuestionIntroAdult />;
	else if (mode === Mode.Kid && screenType === ScreenType.IntroQuestion)
		return <QuestionIntroKid />;
	// question section extro
	else if (mode === undefined && screenType === ScreenType.ExtroQuestion)
		return <QuestionExtroAdult />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screenType === ScreenType.ExtroQuestion)
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
	} else if (screenType === "preamble") {
		return ScreenType.Preamble;
	} else {
		return ScreenType.Page;
	}
}

export { getScreen, getScreenType };
