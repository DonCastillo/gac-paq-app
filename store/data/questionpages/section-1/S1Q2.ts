import ScreenType from "../../../../constants/screen_type";
import QuestionRadioPayloadInterface from "../../../../interface/directus/question-radio-payload";

const S1Q2: QuestionRadioPayloadInterface = {
    name: "Question 2: How many days did you attend school in the past week?",
    type: ScreenType.SingleQuestion,
    translations: [
        {
            id: 6,
            question_radio_id: 4,
            heading: "Question 2",
            label: "How many days did you attend school in the past week?",
            choices: [
                {
                    text: "1 Day",
                    value: "1",
                },
                {
                    text: "2 Days",
                    value: "2",
                },
                {
                    text: "3 Days",
                    value: "3",
                },
                {
                    text: "4 Days",
                    value: "4",
                },
                {
                    text: "5 Days",
                    value: "5",
                },
                {
                    text: "6 Days",
                    value: "6",
                },
                {
                    text: "7 Days",
                    value: "7",
                },
            ],
            languages_id: {
                name: "English",
                lang_code: "en-US",
            },
        },
        {
            id: 40,
            question_radio_id: 4,
            heading: "Pregunta 2",
            label: "¿Cuántos días asististe a la escuela la semana pasada?",
            choices: [
                {
                    text: "1 día",
                    value: "1",
                },
                {
                    text: "2 días",
                    value: "2",
                },
                {
                    text: "3 días",
                    value: "3",
                },
                {
                    text: "4 días",
                    value: "4",
                },
                {
                    text: "5 días",
                    value: "5",
                },
                {
                    text: "6 días",
                    value: "6",
                },
                {
                    text: "7 días",
                    value: "7",
                },
            ],
            languages_id: {
                name: "Spanish",
                lang_code: "es-ES",
            },
        },
        {
            id: 41,
            question_radio_id: 4,
            heading: "Question 2",
            label: "Combien de jours avez-vous fréquenté l'école la semaine dernière ?",
            choices: [
                {
                    text: "1 jour",
                    value: "1",
                },
                {
                    text: "2 jours",
                    value: "2",
                },
                {
                    text: "3 jours",
                    value: "3",
                },
                {
                    text: "4 jours",
                    value: "4",
                },
                {
                    text: "5 jours",
                    value: "5",
                },
                {
                    text: "6 jours",
                    value: "6",
                },
                {
                    text: "7 jours",
                    value: "7",
                },
            ],
            languages_id: {
                name: "French",
                lang_code: "fr-FR",
            },
        },
    ],
};

export default S1Q2;
