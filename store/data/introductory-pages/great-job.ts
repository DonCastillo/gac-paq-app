import ScreenType from "constants/screen_type.enum";
import type { PagePayloadInterface } from "interface/payload.type";

const GreatJobPage: PagePayloadInterface = {
	ident: "great_job",
	title: "Great Job",
	name: "Great Job",
	type: ScreenType.Page,
	translations: {
		"en-CA": {
			heading: "Great Job",
			description: null,
		},
	},
};

export default GreatJobPage;
