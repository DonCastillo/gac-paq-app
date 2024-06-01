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
import Mode from "constants/mode.enum";
import Screen from "constants/screen.enum";
import Section from "constants/section.enum";
import LanguageKid from "base_pages/kid/LanguageKid";
import LanguageAdult from "base_pages/adult/LanguageAdult";
import GenericLanguage from "base_pages/generic/GenericLanguage";
import GenericPage from "base_pages/generic/GenericPage";
import GenericSingleQuestion from "base_pages/generic/GenericSingleQuestion";
import PreambleKid from "base_pages/kid/PreambleKid";
import PreambleAdult from "base_pages/adult/PreambleAdult";
import type { ModeType } from "interface/union.type";

const getScreen = (
	mode: ModeType,
	screenType: Screen | string,
	sectionType?: SectionType | string,
): React.ReactElement => {
	// all language screens are generic
	if (mode === undefined && screenType === Screen.Language) return <GenericLanguage />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screenType === Screen.Language)
		return <LanguageAdult />;
	else if (mode === Mode.Kid && screenType === Screen.Language) return <LanguageKid />;
	// regular page screens
	else if (mode === undefined && screenType === Screen.Page) return <GenericPage />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screenType === Screen.Page)
		return <PageAdult />;
	else if (mode === Mode.Kid && screenType === Screen.Page) return <PageKid />;
	// question intro
	else if (
		mode === undefined &&
		sectionType === Section.Intro &&
		screenType === Screen.SingleQuestion
	)
		return <GenericSingleQuestion />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		sectionType === Section.Intro &&
		screenType === Screen.SingleQuestion
	)
		return <IntroQuestionSingleAdult />;
	else if (
		mode === Mode.Kid &&
		sectionType === Section.Intro &&
		screenType === Screen.SingleQuestion
	)
		return <IntroQuestionSingleKid />;
	// preamble
	else if (
		mode === undefined &&
		sectionType === Section.Question &&
		screenType === Screen.Preamble
	) {
		return <PreambleAdult />;
	} else if (
		mode === Mode.Kid &&
		sectionType === Section.Question &&
		screenType === Screen.Preamble
	) {
		return <PreambleKid />;
	} else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		sectionType === Section.Question &&
		screenType === Screen.Preamble
	) {
		return <PreambleAdult />;
	}
	// question question
	else if (
		mode === undefined &&
		sectionType === Section.Question &&
		screenType === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		sectionType === Section.Question &&
		screenType === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		mode === Mode.Kid &&
		sectionType === Section.Question &&
		screenType === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleKid />;
	// question extro
	else if (
		mode === undefined &&
		sectionType === Section.Extro &&
		screenType === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		sectionType === Section.Extro &&
		screenType === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		mode === Mode.Kid &&
		sectionType === Section.Extro &&
		screenType === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleKid />;
	// question feedback
	else if (
		mode === undefined &&
		sectionType === Section.Feedback &&
		screenType === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		sectionType === Section.Feedback &&
		screenType === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (
		mode === Mode.Kid &&
		sectionType === Section.Feedback &&
		screenType === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleKid />;
	// question section intro
	else if (mode === undefined && screenType === Screen.IntroQuestion) return <QuestionIntroAdult />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screenType === Screen.IntroQuestion)
		return <QuestionIntroAdult />;
	else if (mode === Mode.Kid && screenType === Screen.IntroQuestion) return <QuestionIntroKid />;
	// question section extro
	else if (mode === undefined && screenType === Screen.ExtroQuestion) return <QuestionExtroAdult />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screenType === Screen.ExtroQuestion)
		return <QuestionExtroAdult />;
	else if (mode === Mode.Kid && screenType === Screen.ExtroQuestion) return <QuestionExtroKid />;
	else return <></>;
};

export { getScreen };
