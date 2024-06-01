import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioImagePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S2Q4: QuestionRadioImagePayloadInterface = {
	ident: "household_4",
	name: "Question 11:	Which of the following images shows what you do most of the time during your chores?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 11",
			label:
				"Which of the following pictures looks like what you do most of the time during your chores?",
			kid_label:
				"Which of the following pictures looks like what you do most of the time during your chores?",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their chores?",
			choices: [
				{
					label: "Not moving",
					value: "0.1",
					images: {
						kid: Images.kids.options.chores.not_moving,
						adult: Images.adults.options.chores.not_moving,
					},
				},
				{
					label: "Easy effort",
					value: "0.3",
					images: {
						kid: Images.kids.options.chores.easy_effort,
						adult: Images.adults.options.chores.easy_effort,
					},
				},
				{
					label: "Medium or hard effort",
					value: "0.5",
					images: {
						kid: Images.kids.options.chores.medium_effort,
						adult: Images.adults.options.chores.medium_effort,
					},
				},
				{
					label: "Don't know",
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

export default S2Q4;
