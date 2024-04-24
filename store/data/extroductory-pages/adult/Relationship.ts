import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const Relationship: QuestionRadioPayloadInterface = {
	ident: "relationship_to_the_child",
	name: "relationship_to_the_child",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_id: 8,
			heading: "Question 23",
			label: "What is your relationship to the child?",
			kid_label: "What is your relationship to the child?",
			adult_label: "What is your relationship to the child?",
			choices: [
				{
					text: "Father",
					value: "Father",
				},
				{
					text: "Mother",
					value: "Mother",
				},
				{
					text: "Grandfather",
					value: "Grandfather",
				},
				{
					text: "Grandmother",
					value: "Grandmother",
				},
				{
					text: "Tutor or guardian",
					value: "Tutor or guardian",
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

export default Relationship;
