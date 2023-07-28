import PagePayloadInterface from "../../../interface/directus/page-payload";

const WelcomePage: PagePayloadInterface = {
    title: "Welcome Page",
    translations: [
        {
            id: 1,
            pages_id: 1,
            heading: "Welcome!",
            button_text: "Let's get started",
            description:
                "Physical activity is essential for healthy child development, yet 80% of youth are not active enough and we lack information about activity levels of young children.",
            languages_id: {
                name: "English",
                lang_code: "en-US",
            },
        },
        {
            id: 2,
            pages_id: 1,
            heading: "¡Bienvenido!",
            button_text: "¡Empecemos!",
            description:
                "La actividad física es esencial para el desarrollo saludable de los niños, sin embargo, el 80% de los jóvenes no son lo suficientemente activos y carecemos de información sobre los niveles de actividad de los niños pequeños.",
            languages_id: {
                name: "Spanish",
                lang_code: "es-ES",
            },
        },
        {
            id: 3,
            pages_id: 1,
            heading: "Bienvenue !",
            button_text: "Commençons!",
            description:
                "L'activité physique est essentielle pour le développement sain de l'enfant, pourtant 80 % des jeunes ne sont pas assez actifs et nous manquons d'informations sur les niveaux d'activité des jeunes enfants.",
            languages_id: {
                name: "French",
                lang_code: "fr-FR",
            },
        },
    ],
};

export default WelcomePage;
