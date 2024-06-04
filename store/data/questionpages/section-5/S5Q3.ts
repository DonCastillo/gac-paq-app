import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S5Q3: QuestionRadioPayloadInterface = {
	ident: "organized_3",
	name: "Question 20: On the days that you do these activities during the past week, how long did it usually last?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 20",
			label:
				"On the days that you do these activities during the past week, how long did it usually last?",
			kid_label:
				"On the days that you do these activities during the past week, how long did it usually last?",
			adult_label:
				"On the days that your child did these activities during the past week, how long did it usually last?",
			choices: [
				{
					label: "30 minutes or less per day",
					value: "30 minutes or less per day",
				},
				{
					label: "31 to 60 minutes per day",
					value: "31 to 60 minutes per day",
				},
				{
					label: "1 to 1 and a half hours per day",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "More than 1 and a half hours per day",
					value: "More than 1 and a half hours per day",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 20",
			label:
				"Lors des journées où tu as fait ces activités au cours de la dernière semaine, combien de temps duraient-elles en général?",
			kid_label:
				"Lors des journées où tu as fait ces activités au cours de la dernière semaine, combien de temps duraient-elles en général?",
			adult_label:
				"Combien de temps duraient généralement ces activités les jours où votre enfant les a faites au cours de la dernière semaine?",
			choices: [
				{
					label: "30 minutes ou moins par jour",
					value: "30 minutes or less per day",
				},
				{
					label: "31 à 60 minutes par jour",
					value: "31 to 60 minutes per day",
				},
				{
					label: "1 à 1 heure et demie par jour",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "Plus d'une heure et demie par jour",
					value: "More than 1 and a half hours per day",
				},
			],
		}
	},
};

export default S5Q3;
