import ButtonInterface from "../../../interface/button";

const NextButton: ButtonInterface[] = [
    {
        id: 1,
        next_button_id: 1,
        label: "Next",
        languages_id: {
            name: "English",
            lang_code: "en-US",
        },
    },
    {
        id: 2,
        next_button_id: 1,
        label: "Siguiente",
        languages_id: {
            name: "Spanish",
            lang_code: "es-ES",
        },
    },
    {
        id: 3,
        next_button_id: 1,
        label: "Suivant",
        languages_id: {
            name: "French",
            lang_code: "fr-FR",
        },
    },
];

export default NextButton;
