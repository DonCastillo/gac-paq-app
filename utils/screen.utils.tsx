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
import type { ModeType, ScreenType, SectionType } from "interface/union.type";

const getScreen = (
	mode: ModeType,
	screen: ScreenType | string,
	section: SectionType | string,
): React.ReactElement => {
	// all language screens are generic
	if (mode === undefined && screen === Screen.Language) return <GenericLanguage />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screen === Screen.Language)
		return <LanguageAdult />;
	else if (mode === Mode.Kid && screen === Screen.Language) return <LanguageKid />;
	// regular page screens
	else if (mode === undefined && screen === Screen.Page) return <GenericPage />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screen === Screen.Page)
		return <PageAdult />;
	else if (mode === Mode.Kid && screen === Screen.Page) return <PageKid />;
	// question intro
	else if (mode === undefined && section === Section.Intro && screen === Screen.SingleQuestion)
		return <GenericSingleQuestion />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		section === Section.Intro &&
		screen === Screen.SingleQuestion
	)
		return <IntroQuestionSingleAdult />;
	else if (mode === Mode.Kid && section === Section.Intro && screen === Screen.SingleQuestion)
		return <IntroQuestionSingleKid />;
	// preamble
	else if (mode === undefined && section === Section.Question && screen === Screen.Preamble) {
		return <PreambleAdult />;
	} else if (mode === Mode.Kid && section === Section.Question && screen === Screen.Preamble) {
		return <PreambleKid />;
	} else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		section === Section.Question &&
		screen === Screen.Preamble
	) {
		return <PreambleAdult />;
	}
	// question question
	else if (mode === undefined && section === Section.Question && screen === Screen.SingleQuestion)
		return <QuestionQuestionSingleAdult />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		section === Section.Question &&
		screen === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (mode === Mode.Kid && section === Section.Question && screen === Screen.SingleQuestion)
		return <QuestionQuestionSingleKid />;
	// question extro
	else if (mode === undefined && section === Section.Extro && screen === Screen.SingleQuestion)
		return <QuestionQuestionSingleAdult />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		section === Section.Extro &&
		screen === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (mode === Mode.Kid && section === Section.Extro && screen === Screen.SingleQuestion)
		return <QuestionQuestionSingleKid />;
	// question feedback
	else if (mode === undefined && section === Section.Feedback && screen === Screen.SingleQuestion)
		return <QuestionQuestionSingleAdult />;
	else if (
		(mode === Mode.Adult || mode === Mode.Teen) &&
		section === Section.Feedback &&
		screen === Screen.SingleQuestion
	)
		return <QuestionQuestionSingleAdult />;
	else if (mode === Mode.Kid && section === Section.Feedback && screen === Screen.SingleQuestion)
		return <QuestionQuestionSingleKid />;
	// question section intro
	else if (mode === undefined && screen === Screen.IntroQuestion) return <QuestionIntroAdult />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screen === Screen.IntroQuestion)
		return <QuestionIntroAdult />;
	else if (mode === Mode.Kid && screen === Screen.IntroQuestion) return <QuestionIntroKid />;
	// question section extro
	else if (mode === undefined && screen === Screen.ExtroQuestion) return <QuestionExtroAdult />;
	else if ((mode === Mode.Adult || mode === Mode.Teen) && screen === Screen.ExtroQuestion)
		return <QuestionExtroAdult />;
	else if (mode === Mode.Kid && screen === Screen.ExtroQuestion) return <QuestionExtroKid />;
	else return <></>;
};

export { getScreen };
