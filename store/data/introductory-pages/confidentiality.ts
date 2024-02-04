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
	],
};

export default ConfidentialityPage;
