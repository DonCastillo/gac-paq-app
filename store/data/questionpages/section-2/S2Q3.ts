import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S2Q3: QuestionRadioPayloadInterface = {
	ident: "household_3",
	name: "Question 10: On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 10",
			label:
				"On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
			kid_label:
				"On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
			adult_label:
				"On the days when your child did chores during the past week, how much time did they spend doing chores throughout the day?",
			choices: [
				{
					label: "15 minutes or less per day",
					value: "15 minutes or less per day",
				},
				{
					label: "16 - 30 minutes per day",
					value: "16 - 30 minutes per day",
				},
				{
					label: "31 - 60 minutes per day",
					value: "31 - 60 minutes per day",
				},
				{
					label: "Over 60 minutes per day",
					value: "Over 60 minutes per day",
				},
			],
		},
	},
};

export default S2Q3;
