import ScreenType from "constants/screen_type.enum";
import type { PagePayloadInterface } from "interface/payload.type";

const AboutPage: PagePayloadInterface = {
	ident: "welcome",
	title: "Welcome To GAC-PAQ",
	name: "Welcome To GAC-PAQ",
	type: ScreenType.Page,
	translations: {
		"en-CA": {
			heading: "Welcome To \nGAC-PAQ",
			description:
				"Our goal is to address the lack of information on activity levels, particularly among young children, and the limitations of current questionnaires that neglect certain types of physical activity. By collecting data on active play, we can compare activity levels within and between countries to identify effective strategies for promoting physical activity. Our study involves expert and public reviews, translations, pilot studies, and a large-scale data collection across diverse urban and rural areas. By comparing our questionnaire data with movement sensors, we aim to create a more accurate global measurement of physical activity, contributing to healthier lifestyles worldwide.",
		},
	},
};

export default AboutPage;
