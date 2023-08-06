import ScreenType from "../../../constants/screen_type";
import PagePayloadInterface from "../../../interface/directus/page-payload";

const AboutPage: PagePayloadInterface = {
    title: "About Page",
    name: "About Page",
    type: ScreenType.Page,
    translations: [
        {
            id: 4,
            pages_id: 2,
            heading: "gacpaq",
            button_text: "Continue",
            description:
                "Our goal is to address the lack of information on activity levels, particularly among young children, and the limitations of current questionnaires that neglect certain types of physical activity. By collecting data on active play, we can compare activity levels within and between countries to identify effective strategies for promoting physical activity. Our study involves expert and public reviews, translations, pilot studies, and a large-scale data collection across diverse urban and rural areas. By comparing our questionnaire data with movement sensors, we aim to create a more accurate global measurement of physical activity, contributing to healthier lifestyles worldwide.",
            languages_id: {
                name: "English",
                lang_code: "en-US",
            },
        },
        {
            id: 5,
            pages_id: 2,
            heading: "gacpaq",
            button_text: "Seguir",
            description:
                "Nuestro objetivo es abordar la falta de información sobre los niveles de actividad, especialmente entre los niños pequeños, y las limitaciones de los cuestionarios actuales que descuidan ciertos tipos de actividad física. Al recopilar datos sobre el juego activo, podemos comparar los niveles de actividad dentro y entre países para identificar estrategias efectivas para promover la actividad física. Nuestro estudio involucra revisiones de expertos y del público, traducciones, estudios piloto y una amplia recopilación de datos en diversas áreas urbanas y rurales. Al comparar nuestros datos del cuestionario con sensores de movimiento, aspiramos a crear una medición global más precisa de la actividad física, contribuyendo a estilos de vida más saludables en todo el mundo.",
            languages_id: {
                name: "Spanish",
                lang_code: "es-ES",
            },
        },
        {
            id: 6,
            pages_id: 2,
            heading: "gacpaq",
            button_text: "Continuer",
            description:
                "Notre objectif est de remédier au manque d'informations sur les niveaux d'activité, notamment chez les jeunes enfants, ainsi que les limites des questionnaires actuels qui négligent certains types d'activité physique. En collectant des données sur le jeu actif, nous pouvons comparer les niveaux d'activité au sein des différents pays pour identifier des stratégies efficaces de promotion de l'activité physique. Notre étude comprend des évaluations d'experts et du public, des traductions, des études pilotes et une collecte de données à grande échelle dans diverses zones urbaines et rurales. En comparant nos données de questionnaire avec des capteurs de mouvement, nous visons à créer une mesure mondiale plus précise de l'activité physique, contribuant ainsi à des modes de vie plus sains à l'échelle mondiale.",
            languages_id: {
                name: "French",
                lang_code: "fr-FR",
            },
        },
    ],
};

export default AboutPage;
