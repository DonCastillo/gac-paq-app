import ScreenType from "constants/screen_type";
import type PagePayloadInterface from "interface/directus/page-payload";

const GreatJobPage: PagePayloadInterface = {
	title: "Great Job",
	name: "Great Job",
	type: ScreenType.Page,
	translations: [
		{
			id: 7,
			pages_id: 3,
			heading: "Great Job",
			description: null,
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default GreatJobPage;
