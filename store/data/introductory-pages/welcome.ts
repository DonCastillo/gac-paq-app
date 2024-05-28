import ScreenType from "constants/screen_type.enum";
import type { PagePayloadInterface } from "interface/payload.type";

const WelcomePage: PagePayloadInterface = {
	ident: "welcome",
	title: "Welcome Page",
	name: "Welcome Page",
	type: ScreenType.Page,
	translations: {
		"en-CA": {
			heading: "Welcome!",
			description:
				"Physical activity is essential for healthy child development, yet 80% of youth are not active enough and we lack information about activity levels of young children.",
		},
	},
};

export default WelcomePage;
