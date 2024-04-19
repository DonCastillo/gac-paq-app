import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const GenderKid: QuestionRadioPayloadInterface = {
	name: "child_sex",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 4,
			question_radio_id: 2,
			heading: "",
			label: "Are you a…",
			kid_label: "Are you a…",
			adult_label: "Are you a…",
			choices: [
				{
					text: "Boy",
					value: "Boy",
				},
				{
					text: "Girl",
					value: "Girl",
				},
				{
					text: "Other",
					value: "Other",
				},
				{
					text: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default GenderKid;
