import ScreenType from "../../../constants/screen_type";
import QuestionDropdownPayloadInterface from "../../../interface/directus/question-dropdown-payload";

const AgePage: QuestionDropdownPayloadInterface = {
    name: "Who's taking this questionnaire?",
    type: ScreenType.Question,
    translations: [
        {
            id: 4,
            question_dropdown_id: 2,
            heading: "Who's taking this questionnaire?",
            label: "Who's taking this questionnaire?",
            choices: [
                {
                    text: "Child / Teen",
                    value: "child",
                },
                {
                    text: "Parent",
                    value: "adult",
                },
            ],
            languages_id: {
                name: "English",
                lang_code: "en-US",
            },
        },
        {
            id: 5,
            question_dropdown_id: 2,
            heading: "¿Quién está contestando este cuestionario?",
            label: "¿Quién está contestando este cuestionario?",
            choices: [
                {
                    text: "Niño / Adolescente",
                    value: "child",
                },
                {
                    text: "Padre / Madre",
                    value: "adult",
                },
            ],
            languages_id: {
                name: "Spanish",
                lang_code: "es-ES",
            },
        },
        {
            id: 6,
            question_dropdown_id: 2,
            heading: "Qui remplit ce questionnaire ?",
            label: "Qui remplit ce questionnaire ?",
            choices: [
                {
                    text: "Enfant / Adolescent",
                    value: "child",
                },
                {
                    text: "Parent",
                    value: "adult",
                },
            ],
            languages_id: {
                name: "French",
                lang_code: "fr-FR",
            },
        },
    ],
};

export default AgePage;
