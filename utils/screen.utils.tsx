import {
	LanguageAdultPage,
	OpeningQuestionAdultPage,
	PreambleAdultPage,
	QuestionnaireAdultExtroPage,
	QuestionnaireAdultIntroPage,
	QuestionnaireAdultQuestionPage,
	TextAdultPage,
} from "@base_pages/adult";
import { GenericLanguagePage, GenericQuestionnairePage, GenericTextPage } from "@base_pages/generic";
import {
	LanguageKidPage,
	OpeningQuestionKidPage,
	PreambleKidPage,
	QuestionnaireKidExtroPage,
	QuestionnaireKidIntroPage,
	QuestionnaireKidQuestionPage,
	TextKidPage,
} from "@base_pages/kid";
import Mode from "@constants/mode.enum";
import Screen from "@constants/screen.enum";
import Section from "@constants/section.enum";
import type { ModeType, ScreenType, SectionType } from "@interface/union.type";
import React from "react";

const getScreen = (mode: ModeType, screen: ScreenType | string, section: SectionType | string): React.ReactElement => {
	switch (mode) {
		case Mode.Kid: {
			switch (screen) {
				case Screen.Language:
					return <LanguageKidPage />;
				case Screen.Page:
					return <TextKidPage />;
				case Screen.Preamble:
					return <PreambleKidPage />;
				case Screen.IntroQuestion:
					return <QuestionnaireKidIntroPage />;
				case Screen.ExtroQuestion:
					return <QuestionnaireKidExtroPage />;
				case Screen.SingleQuestion: {
					switch (section) {
						case Section.Intro:
							return <OpeningQuestionKidPage />;
						case Section.Question:
						case Section.Hbsc:
						case Section.Gshs:
						case Section.Extro:
						case Section.Feedback:
							return <QuestionnaireKidQuestionPage />;
						default:
							return <></>;
					}
				}
				default:
					return <></>;
			}
		}

		case Mode.Adult:
		case Mode.Teen: {
			switch (screen) {
				case Screen.Language:
					return <LanguageAdultPage />;
				case Screen.Page:
					return <TextAdultPage />;
				case Screen.Preamble:
					return <PreambleAdultPage />;
				case Screen.IntroQuestion:
					return <QuestionnaireAdultIntroPage />;
				case Screen.ExtroQuestion:
					return <QuestionnaireAdultExtroPage />;
				case Screen.SingleQuestion: {
					switch (section) {
						case Section.Intro:
							return <OpeningQuestionAdultPage />;
						case Section.Question:
						case Section.Hbsc:
						case Section.Gshs:
						case Section.Extro:
						case Section.Feedback:
							return <QuestionnaireAdultQuestionPage />;
						default:
							return <></>;
					}
				}
				default:
					return <></>;
			}
		}

		case undefined: {
			switch (screen) {
				case Screen.Language:
					return <GenericLanguagePage />;
				case Screen.Page:
					return <GenericTextPage />;
				case Screen.Preamble:
					return <PreambleAdultPage />;
				case Screen.IntroQuestion:
					return <QuestionnaireAdultIntroPage />;
				case Screen.ExtroQuestion:
					return <QuestionnaireAdultExtroPage />;
				case Screen.SingleQuestion: {
					switch (section) {
						case Section.Intro:
							return <GenericQuestionnairePage />;
						case Section.Question:
						case Section.Hbsc:
						case Section.Gshs:
						case Section.Extro:
						case Section.Feedback:
							return <QuestionnaireAdultQuestionPage />;
						default:
							return <></>;
					}
				}
				default:
					return <></>;
			}
		}
	}
};

export { getScreen };
