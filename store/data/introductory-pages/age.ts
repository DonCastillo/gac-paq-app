import ScreenType from "constants/screen_type";
import type QuestionDropdownPayloadInterface from "../../../interface/directus/question-dropdown-payload";

const AgePage: QuestionDropdownPayloadInterface = {
	name: "Who's taking this questionnaire?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 4,
			question_dropdown_id: 2,
			heading: "Who's taking this questionnaire?",
			label: "Who's taking this questionnaire?",
			choices: [
				{
					text: "Child",
					value: "child",
				},
				{
					text: "Teen",
					value: "teen",
				},
				{
					text: "Parent",
					value: "adult",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
		{
			id: 5,
			question_dropdown_id: 2,
			heading: "¿Quién está contestando este cuestionario?",
			label: "¿Quién está contestando este cuestionario?",
			choices: [
				{
					text: "Niño",
					value: "child",
				},
				{
					text: "Adolescente",
					value: "teen",
				},
				{
					text: "Padre / Madre",
					value: "adult",
				},
			],
			languages_id: {
				name: "Spanish - Spain",
				lang_code: "es-ES",
			},
		},
		{
			id: 6,
			question_dropdown_id: 2,
			heading: "Qui remplit ce questionnaire ?",
			label: "Qui remplit ce questionnaire ?",
			choices: [
				{
					text: "Enfant",
					value: "child",
				},
				{
					text: "Adolescent",
					value: "teen",
				},
				{
					text: "Parent",
					value: "adult",
				},
			],
			languages_id: {
				name: "French - Canada",
				lang_code: "fr-CA",
			},
		},
	],
};

export default AgePage;
