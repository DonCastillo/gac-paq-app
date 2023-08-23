import ScreenType from "../../../constants/screen_type";
import QuestionDropdownPayloadInterface from "../../../interface/directus/question-dropdown-payload";

const LocationPage: QuestionDropdownPayloadInterface = {
    name: "Location",
    type: ScreenType.SingleQuestion,
    translations: [
        {
            id: 1,
            question_dropdown_id: 1,
            heading: "Where are you?",
            label: "Where are you?",
            choices: [
                {
                    text: "US",
                    value: "US",
                },
                {
                    text: "CA",
                    value: "CA",
                },
                {
                    text: "MX",
                    value: "MX",
                },
                {
                    text: "JP",
                    value: "JP",
                },
            ],
            languages_id: {
                name: "English",
                lang_code: "en-US",
            },
        },
        {
            id: 2,
            question_dropdown_id: 1,
            heading: "¿Dónde estás?",
            label: "¿Dónde estás?",
            choices: [
                {
                    text: "US",
                    value: "US",
                },
                {
                    text: "CA",
                    value: "CA",
                },
                {
                    text: "MX",
                    value: "MX",
                },
                {
                    text: "JP",
                    value: "JP",
                },
            ],
            languages_id: {
                name: "Spanish",
                lang_code: "es-ES",
            },
        },
        {
            id: 3,
            question_dropdown_id: 1,
            heading: "Où es-tu?",
            label: "Où es-tu?",
            choices: [
                {
                    text: "US",
                    value: "US",
                },
                {
                    text: "CA",
                    value: "CA",
                },
                {
                    text: "MX",
                    value: "MX",
                },
                {
                    text: "JP",
                    value: "JP",
                },
            ],
            languages_id: {
                name: "French",
                lang_code: "fr-FR",
            },
        },
    ],
};

export default LocationPage;
