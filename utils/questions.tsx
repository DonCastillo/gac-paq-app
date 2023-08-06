import Mode from "../constants/mode";
import QuestionType from "../constants/question_type";
import QuestionDropdownInterface from "../interface/question_dropdown";

function getQuestionType(questionPage: {}) {
    if (questionPage.hasOwnProperty("question_dropdown_id")) {
        return QuestionType.QuestionDropdown;
    } else if (questionPage.hasOwnProperty("question_text_id")) {
        return QuestionType.QuestionText;
    } else if (questionPage.hasOwnProperty("question_slider_id")) {
        return QuestionType.QuestionSlider;
    } else if (questionPage.hasOwnProperty("question_radio_id")) {
        return QuestionType.QuestionRadio;
    } else if (questionPage.hasOwnProperty("question_checkbox_id")) {
        return QuestionType.QuestionCheckbox;
    } else if (questionPage.hasOwnProperty("question_radio_image_id")) {
        return QuestionType.QuestionRadioImage;
    } else {
    }
}


function getQuestionComponent(mode: Mode | string, questionType: QuestionType) {
    if (mode === Mode.Adult && questionType === QuestionType.QuestionCheckbox)
        return <></>;
    else if (mode === Mode.Adult && questionType === QuestionType.QuestionDropdown)
        return <></>;
    else if (mode === Mode.Adult && questionType === QuestionType.QuestionRadio)
        return <></>;
    else if (mode === Mode.Adult && questionType === QuestionType.QuestionRadioImage)
        return <></>;
    else if (mode === Mode.Adult && questionType === QuestionType.QuestionSlider)
        return <></>;
    else if (mode === Mode.Adult && questionType === QuestionType.QuestionText)
        return <></>;
    else if (mode === Mode.Kid && questionType === QuestionType.QuestionCheckbox)
        return <></>;
    else if (mode === Mode.Kid && questionType === QuestionType.QuestionDropdown)
        return <></>;
    else if (mode === Mode.Kid && questionType === QuestionType.QuestionRadio)
        return <></>;
    else if (mode === Mode.Kid && questionType === QuestionType.QuestionRadioImage)
        return <></>;
    else if (mode === Mode.Kid && questionType === QuestionType.QuestionSlider)
        return <></>
    else if (mode === Mode.Kid && questionType === QuestionType.QuestionText)
        return <></>;
    else
        return <></>
}

export {getQuestionType, getQuestionComponent};