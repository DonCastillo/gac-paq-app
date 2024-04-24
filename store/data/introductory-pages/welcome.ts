import ScreenType from "constants/screen_type";
import type PagePayloadInterface from "interface/directus/page-payload";

const WelcomePage: PagePayloadInterface = {
	ident: "welcome",
	title: "Welcome Page",
	name: "Welcome Page",
	type: ScreenType.Page,
	translations: [
		{
			id: 1,
			pages_id: 1,
			heading: "Welcome!",
			description:
				"Physical activity is essential for healthy child development, yet 80% of youth are not active enough and we lack information about activity levels of young children.",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default WelcomePage;
