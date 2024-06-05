import Screen from "constants/screen.enum";
import type { PagePayloadInterface } from "interface/payload.type";

const AboutPage: PagePayloadInterface = {
	ident: "welcome",
	title: "Welcome To GAC-PAQ",
	name: "Welcome To GAC-PAQ",
	type: Screen.Page,
	translations: {
		"en-CA": {
			heading: "Welcome To \nGAC-PAQ",
			description:
				"Our goal is to address the lack of information on activity levels, particularly among young children, and the limitations of current questionnaires that neglect certain types of physical activity. By collecting data on active play, we can compare activity levels within and between countries to identify effective strategies for promoting physical activity. Our study involves expert and public reviews, translations, pilot studies, and a large-scale data collection across diverse urban and rural areas. By comparing our questionnaire data with movement sensors, we aim to create a more accurate global measurement of physical activity, contributing to healthier lifestyles worldwide.",
		},
		"es-MX": {
			heading: "Bienvenido a \nGAC-PAQ",
			description:
				"Nuestro objetivo es abordar la falta de información sobre los niveles de actividad, especialmente entre los niños pequeños, y las limitaciones de los cuestionarios actuales que descuidan ciertos tipos de actividad física. Al recopilar datos sobre el juego activo, podemos comparar los niveles de actividad dentro y entre países para identificar estrategias efectivas para promover la actividad física. Nuestro estudio implica revisiones de expertos y públicas, traducciones, estudios piloto y una recopilación de datos a gran escala en diversas áreas urbanas y rurales. Al comparar nuestros datos de cuestionarios con sensores de movimiento, nuestro objetivo es crear una medición global más precisa de la actividad física, contribuyendo a estilos de vida más saludables en todo el mundo.",
		},
		"fr-CA": {
			heading: "Bienvenue à \nGAC-PAQ",
			description:
				"Notre objectif est de combler le manque d'information sur les niveaux d'activité, en particulier chez les jeunes enfants, et les limites des questionnaires actuels qui négligent certains types d'activité physique. En collectant des données sur le jeu actif, nous pouvons comparer les niveaux d'activité au sein et entre les pays pour identifier des stratégies efficaces de promotion de l'activité physique. Notre étude implique des examens d'experts et du public, des traductions, des études pilotes et une collecte de données à grande échelle dans diverses zones urbaines et rurales. En comparant nos données de questionnaire avec des capteurs de mouvement, nous visons à créer une mesure mondiale plus précise de l'activité physique, contribuant à des modes de vie plus sains dans le monde entier.",
		},
	},
};

export default AboutPage;
