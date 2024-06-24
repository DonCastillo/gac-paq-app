import Mode from "constants/mode.enum";
import Question from "constants/question.enum";
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
	} else if (sectionType === "feedback") {
		return Section.Feedback;
	} else {
		return Section.Question;
	}
};

const getQuestionType = (questionType: string): Question => {
	if (questionType === "question_radio") {
		return Question.QuestionRadio;
	} else if (questionType === "question_slider") {
		return Question.QuestionSlider;
	} else if (questionType === "question_input") {
		return Question.QuestionInput;
	} else if (questionType === "question_textarea") {
		return Question.QuestionTextarea;
	} else if (questionType === "question_checkbox") {
		return Question.QuestionCheckbox;
	} else if (questionType === "question_dropdown") {
		return Question.QuestionDropdown;
	} else if (questionType === "question_radio_image") {
		return Question.QuestionRadioImage;
	} else if (questionType === "question_language") {
		return Question.QuestionLanguage;
	} else if (questionType === "question_satisfaction_image") {
		return Question.QuestionSatisfactionImage;
	} else {
		return Question.QuestionInput;
	}
};

const getModeType = (modeType: string): Mode => {
	if (modeType === "kid" || modeType === "child") {
		return Mode.Kid;
	} else if (modeType === "teen" || modeType === "adolescent") {
		return Mode.Teen;
	} else if (modeType === "adult" || modeType === "parent") {
		return Mode.Adult;
	}
	return Mode.Kid;
};

export { getScreenType, getSectionType, getQuestionType, getModeType };
