import Question from "constants/question.enum";

function getQuestionType(questionPage: any): Question {
	if (Object.prototype.hasOwnProperty.call(questionPage, "question_dropdown_id") === true) {
		return Question.QuestionDropdown;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_text_id") === true) {
		return Question.QuestionText;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_input_id") === true) {
		return Question.QuestionInput;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_textarea_id") === true) {
		return Question.QuestionTextarea;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_slider_id") === true) {
		return Question.QuestionSlider;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_radio_id") === true) {
		return Question.QuestionRadio;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_checkbox_id") === true) {
		return Question.QuestionCheckbox;
	} else if (
		Object.prototype.hasOwnProperty.call(questionPage, "question_radio_image_id") === true
	) {
		return Question.QuestionRadioImage;
	} else if (
		Object.prototype.hasOwnProperty.call(questionPage, "question_satisfaction_image_id") === true
	) {
		return Question.QuestionSatisfactionImage;
	} else {
		return Question.QuestionInput;
	}
}

export { getQuestionType };
