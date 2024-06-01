import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioImagePayloadInterface } from "interface/payload.type";
import Images from "styles/images/index";

const S1Q5: QuestionRadioImagePayloadInterface = {
	ident: "school_5",
	name: "Question 5: Which of the following images shows what you do most of the time in physical education class?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionSatisfactionImage,
			heading: "Question 5",
			label:
				"Which of the following pictures looks like what you do most of the time in physical education class?",
			kid_label:
				"Which of the following pictures looks like what you do most of the time in physical education class?",
			adult_label:
				"Which of the following images resembles what your child does most of the time in physical education class?",
			choices: [
				{
					text: "Not moving",
					value: "0.1",
					images: {
						kid: Images.kids.options.physical_education.not_moving,
						adult: Images.adults.options.physical_education.not_moving,
					},
				},
				{
					text: "Easy effort",
					value: "0.3",
					images: {
						kid: Images.kids.options.physical_education.easy_effort,
						adult: Images.adults.options.physical_education.easy_effort,
					},
				},
				{
					text: "Medium or hard effort",
					value: "0.5",
					images: {
						kid: Images.kids.options.physical_education.medium_effort,
						adult: Images.adults.options.physical_education.medium_effort,
					},
				},
				{
					text: "Don't know",
					value: "0",
					images: {
						kid: Images.general.donotknow,
						adult: Images.general.donotknow,
					},
				},
			],
		},
	},
};

export default S1Q5;
