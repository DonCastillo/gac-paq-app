import ScreenType from "constants/screen_type";
import type SingleCheckboxPayloadInterface from "interface/directus/single-checkbox-payload";

const ConfidentialityPage: SingleCheckboxPayloadInterface = {
	title: "Confidentiality Page",
	name: "Confidentiality Page",
	type: ScreenType.SingleCheckbox,
	translations: [
		{
			id: 4,
			single_checkbox_id: 2,
			heading: "Confidentiality",
			checkbox_label: "Yes, I Understand & Agree.",
			description:
				"Before using it to collect data on physical activity, You and your child(ren) information you share will remain strictly confidential and will be used solely for this research. We will securely store your data as part of the study at the University of Lethbridge. We keep data stored for a minimum of 5 years after the end of the study.\n\nThis questionnaire is in collaboration with researchers in 14 countries, Helping us collect better data on physical activity among children and youth around the world.\n\nYou and your children have decide to be in the study however, you can change your mind and stop being in the study at any time, you can withdraw from the study by contacting Dr. Larouche.\n\nIf you have any questions about your rights as a research participant, you may contact Dr. Larouche at richard.larouche@uleth.ca.\n\nIf you withdraw, you can also request that we delete all data collected from you during the month following the interview.",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
		{
			id: 5,
			single_checkbox_id: 2,
			heading: "Confidencialidad",
			checkbox_label: "Sí, entiendo y estoy de acuerdo.",
			description:
				"Antes de utilizarlo para recopilar datos sobre la actividad física, la información que usted y su(s) hijo(s) comparten se mantendrá estrictamente confidencial y se utilizará exclusivamente para esta investigación. Almacenaremos de manera segura sus datos como parte del estudio en la Universidad de Lethbridge. Mantendremos almacenados los datos durante un mínimo de 5 años después de la finalización del estudio.\n\nEste cuestionario se realiza en colaboración con investigadores de 14 países, lo que nos ayuda a recopilar mejores datos sobre la actividad física en niños y jóvenes de todo el mundo.\n\nUsted y sus hijos han decidido participar en el estudio; sin embargo, pueden cambiar de opinión y dejar de participar en el estudio en cualquier momento. Pueden retirarse del estudio poniéndose en contacto con el Dr. Larouche.\n\nSi tiene alguna pregunta sobre sus derechos como participante en la investigación, puede ponerse en contacto con el Dr. Larouche en richard.larouche@uleth.ca.\n\nSi decide retirarse, también puede solicitar que eliminemos todos los datos recopilados de usted durante el mes siguiente a la entrevista.",
			languages_id: {
				name: "Spanish - Spain",
				lang_code: "es-ES",
			},
		},
		{
			id: 6,
			single_checkbox_id: 2,
			heading: "Confidentialité",
			checkbox_label: "Oui, je comprends et j'accepte.",
			description:
				"Avant de l'utiliser pour recueillir des données sur l'activité physique, les informations que vous et votre/vos enfant(s) partagez resteront strictement confidentielles et seront utilisées uniquement à des fins de recherche. Nous stockerons vos données de manière sécurisée dans le cadre de l'étude à l'Université de Lethbridge. Nous conservons les données stockées pendant un minimum de 5 ans après la fin de l'étude.\n\nCe questionnaire est réalisé en collaboration avec des chercheurs de 14 pays, ce qui nous aide à recueillir de meilleures données sur l'activité physique des enfants et des jeunes du monde entier.\n\nVous et vos enfants avez décidé de participer à l'étude. Cependant, vous pouvez changer d'avis à tout moment et décider de ne plus y participer. Vous pouvez vous retirer de l'étude en contactant le Dr. Larouche.\n\nSi vous avez des questions concernant vos droits en tant que participant à la recherche, vous pouvez contacter le Dr. Larouche à l'adresse richard.larouche@uleth.ca.\n\nEn cas de retrait, vous pouvez également demander la suppression de toutes les données collectées auprès de vous dans le mois suivant l'entretien.",
			languages_id: {
				name: "French - Canada",
				lang_code: "fr-CA",
			},
		},
	],
};

export default ConfidentialityPage;
