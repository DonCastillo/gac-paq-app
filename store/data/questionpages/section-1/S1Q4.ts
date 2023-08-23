import ScreenType from "../../../../constants/screen_type";
import QuestionRadioPayloadInterface from "../../../../interface/directus/question-radio-payload";
import QuestionSliderPayloadInterface from "../../../../interface/directus/question-slider-payload";

const S1Q4: QuestionRadioPayloadInterface = {
    name: "Question 4: How long are your physical education classes?",
    type: ScreenType.SingleQuestion,
    translations: [
        {
            id: 7,
            question_radio_id: 5,
            heading: "Question 4",
            label: "How long are your physical education classes",
            choices: [
                {
                    text: "Less than 30 minutes",
                    value: "Less than 30 minutes",
                },
                {
                    text: "30-45 minutes",
                    value: "30-45 minutes",
                },
                {
                    text: "46-60 minutes",
                    value: "46-60 minutes",
                },
                {
                    text: "Over 60 minutes",
                    value: "Over 60 minutes",
                },
                {
                    text: "I don’t know",
                    value: "I don’t know",
                },
            ],
            languages_id: {
                name: "English",
                lang_code: "en-US",
            },
        },
        {
            id: 42,
            question_radio_id: 5,
            heading: "Pregunta 4",
            label: "¿Cuánto duran tus clases de educación física?",
            choices: [
                {
                    text: "Menos de 30 minutos",
                    value: "Less than 30 minutes",
                },
                {
                    text: "30-45 minutos",
                    value: "30-45 minutes",
                },
                {
                    text: "46-60 minutos",
                    value: "46-60 minutes",
                },
                {
                    text: "Más de 60 minutos",
                    value: "Over 60 minutes",
                },
                {
                    text: "No lo sé or No sé",
                    value: "I don’t know",
                },
            ],
            languages_id: {
                name: "Spanish",
                lang_code: "es-ES",
            },
        },
        {
            id: 43,
            question_radio_id: 5,
            heading: "Question 4",
            label: "Combien de temps durent vos cours d'éducation physique ?",
            choices: [
                {
                    text: "Moins de 30 minutes",
                    value: "Less than 30 minutes",
                },
                {
                    text: "30 à 45 minutes",
                    value: "30-45 minutes",
                },
                {
                    text: "46 à 60 minutes",
                    value: "46-60 minutes",
                },
                {
                    text: "Plus de 60 minutes",
                    value: "Over 60 minutes",
                },
                {
                    text: "Je ne sais pas",
                    value: "I don’t know",
                },
            ],
            languages_id: {
                name: "French",
                lang_code: "fr-FR",
            },
        },
    ],
};

export default S1Q4;
