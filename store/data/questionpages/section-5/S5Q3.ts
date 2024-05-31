import Screen from "constants/screen.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S5Q3: QuestionRadioPayloadInterface = {
	ident: "organized_3",
	name: "Question 20: On the days that you do these activities during the past week, how long did it usually last?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionRadio,
			heading: "Question 20",
			label:
				"On the days that you do these activities during the past week, how long did it usually last?",
			kid_label:
				"On the days that you do these activities during the past week, how long did it usually last?",
			adult_label:
				"On the days that your child did these activities during the past week, how long did it usually last?",
			choices: [
				{
					text: "30 minutes or less per day",
					value: "30 minutes or less per day",
				},
				{
					text: "31 to 60 minutes per day",
					value: "31 to 60 minutes per day",
				},
				{
					text: "1 to 1 and a half hours per day",
					value: "1 to 1 and a half hours per day",
				},
				{
					text: "More than 1 and a half hours per day",
					value: "More than 1 and a half hours per day",
				},
			],
		},
	},
};

export default S5Q3;
