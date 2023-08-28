import ButtonInterface from "../../../interface/button";

const ContinueButton: ButtonInterface[] = [
    {
        id: 1,
        continue_button_id: 1,
        label: "Continue",
        languages_id: {
            name: "English",
            lang_code: "en-US",
        },
    },
    {
        id: 2,
        continue_button_id: 1,
        label: "Continuar",
        languages_id: {
            name: "Spanish",
            lang_code: "es-ES",
        },
    },
    {
        id: 3,
        continue_button_id: 1,
        label: "Continuer",
        languages_id: {
            name: "French",
            lang_code: "fr-FR",
        },
    },
];

export default ContinueButton;
