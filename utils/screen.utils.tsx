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
import ScreenType from "constants/screen_type.enum";
import SectionType from "constants/section_type.enum";
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
	screenType: ScreenType | string,
	sectionType?: SectionType | string,
): React.ReactElement => {
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
};

export { getScreen };
