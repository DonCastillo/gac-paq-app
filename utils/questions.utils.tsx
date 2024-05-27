import QuestionType from "constants/question_type";

function getQuestionType(questionPage: any): QuestionType {
	if (Object.prototype.hasOwnProperty.call(questionPage, "question_dropdown_id") === true) {
		return QuestionType.QuestionDropdown;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_text_id") === true) {
		return QuestionType.QuestionText;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_input_id") === true) {
		return QuestionType.QuestionInput;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_textarea_id") === true) {
		return QuestionType.QuestionTextarea;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_slider_id") === true) {
		return QuestionType.QuestionSlider;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_radio_id") === true) {
		return QuestionType.QuestionRadio;
	} else if (Object.prototype.hasOwnProperty.call(questionPage, "question_checkbox_id") === true) {
		return QuestionType.QuestionCheckbox;
	} else if (
		Object.prototype.hasOwnProperty.call(questionPage, "question_radio_image_id") === true
	) {
		return QuestionType.QuestionRadioImage;
	} else if (
		Object.prototype.hasOwnProperty.call(questionPage, "question_satisfaction_image_id") === true
	) {
		return QuestionType.QuestionSatisfactionImage;
	} else if (
		Object.prototype.hasOwnProperty.call(questionPage, "region_question_dropdown_id") === true
	) {
		return QuestionType.QuestionRegion;
	} else {
		return QuestionType.QuestionInput;
	}
}

export { getQuestionType };
