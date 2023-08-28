import ButtonInterface from "../../../interface/button";

const CompleteButton: ButtonInterface[] = [
    {
        id: 1,
        complete_button_id: 1,
        label: "Complete",
        languages_id: {
            name: "English",
            lang_code: "en-US",
        },
    },
    {
        id: 2,
        complete_button_id: 1,
        label: "Completar",
        languages_id: {
            name: "Spanish",
            lang_code: "es-ES",
        },
    },
    {
        id: 3,
        complete_button_id: 1,
        label: "Complet",
        languages_id: {
            name: "French",
            lang_code: "fr-FR",
        },
    },
];

export default CompleteButton;
