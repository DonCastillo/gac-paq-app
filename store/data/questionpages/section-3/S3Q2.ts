import ScreenType from "constants/screen_type.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S3Q2: QuestionRadioPayloadInterface = {
	ident: "work_2",
	name: "Question 13: In the past week, how many hours have you spent volunteering and/or working?",
	type: ScreenType.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionRadio,
			heading: "Question 13",
			label: "In the past week, how many hours have you spent volunteering and/or working?",
			kid_label: "In the past week, how many hours have you spent volunteering and/or working?",
			adult_label:
				"In the past week, how many hours did your child spend volunteering and/or working?",
			choices: [
				{
					text: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					text: "1 to less than 2 hours per day",
					value: "1 to less than 2 hours per day",
				},
				{
					text: "2 to less than 3 hours per day",
					value: "2 to less than 3 hours per day",
				},
				{
					text: "3 to less than 4 hours per day",
					value: "3 to less than 4 hours per day",
				},
				{
					text: "4 hours or more per day",
					value: "4 hours or more per day",
				},
			],
		},
	},
};

export default S3Q2;
