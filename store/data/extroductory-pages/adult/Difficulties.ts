import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionCheckboxPayloadInterface } from "interface/payload.type";

const Difficulties: QuestionCheckboxPayloadInterface = {
	ident: "child_difficulties",
	name: "child_difficulties",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 25",
			label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			adult_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_sublabel: "Select all that apply",
			adult_sublabel: "Select all that apply",
			choices: [
				{
					label: "Hearing",
					value: "Hearing",
				},
				{
					label: "Seeing",
					value: "Seeing",
				},
				{
					label: "Speech",
					value: "Speech",
				},
				{
					label: "Mobility",
					value: "Mobility",
				},
				{
					label: "Agility",
					value: "Agility",
				},
				{
					label: "Pain",
					value: "Pain",
				},
				{
					label: "Memory",
					value: "Memory",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to say",
					value: "Prefer not to say",
				},
				{
					label: "None of the above, they don't have difficulties",
					value: "None of the above",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 25",
			label:
				"Veuillez indiquer si votre enfant rencontre des difficultés avec n'importe lequel des éléments suivants dans ses activités quotidiennes",
			kid_label:
				"Veuillez indiquer si votre enfant rencontre des difficultés avec n'importe lequel des éléments suivants dans ses activités quotidiennes",
			adult_label:
				"Veuillez indiquer si votre enfant rencontre des difficultés avec n'importe lequel des éléments suivants dans ses activités quotidiennes",
			kid_sublabel: "sélectionnez toutes les réponses qui s'appliquent",
			adult_sublabel: "sélectionnez toutes les réponses qui s'appliquent",
			choices: [
				{
					label: "Audition",
					value: "Hearing",
				},
				{
					label: "Vision",
					value: "Seeing",
				},
				{
					label: "Parole",
					value: "Speech",
				},
				{
					label: "Mobilité",
					value: "Mobility",
				},
				{
					label: "Agilité",
					value: "Agility",
				},
				{
					label: "Douleur",
					value: "Pain",
				},
				{
					label: "Mémoire",
					value: "Memory",
				},
				{
					label: "Autre",
					value: "Other",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to say",
				},
				{
					label: "Aucune de ces réponses, il (elle) n'a pas de difficultés",
					value: "None of the above",
				},
			],
		},
	},
};

export default Difficulties;
