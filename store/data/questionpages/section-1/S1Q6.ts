import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q6: QuestionRadioPayloadInterface = {
	ident: "school_6",
	name: "Question 6: On a normal school day, how much break time do you have?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 6",
			label: "On a normal school day, how much break time do you have?",
			kid_label: "On a normal school day, how much break time do you have?",
			adult_label: "On a normal school day, how much break time does your child have?",
			kid_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			adult_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			choices: [
				{
					label: "0 minutes",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutes",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutes",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "More than 60 minutes",
					value: "More than 60 minutes",
				},
				{
					label: "Don't know",
					value: "Don't know",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 6",
			label: "Lors d'une journée d'école normale, combien as-tu de temps de pause?",
			kid_label: "Lors d'une journée d'école normale, combien as-tu de temps de pause?",
			adult_label:
				"Au cours d'une journée normale d'école, combien de temps de pause a ton enfant?",
			kid_sublabel:
				"Ici, il faut additionner les durées - par exemple, deux récréations/pauses de 15 minutes par jour et 30 minutes pour dîner donnent 60 minutes.",
			adult_sublabel:
				"Ici, il faut additionner les durées - par exemple, deux récréations/pauses de 15 minutes par jour et 30 minutes pour dîner donnent 60 minutes.",
			choices: [
				{
					label: "0 minutes",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutes",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutes",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "Plus de 60 minutes",
					value: "More than 60 minutes",
				},
				{
					label: "Je ne sais pas",
					value: "Je ne sais pas",
				},
			],
		},
	},
};

export default S1Q6;
