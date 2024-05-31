import ScreenType from "constants/screen_type.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionRadioImagePayloadInterface } from "interface/payload.type";
import Images from "styles/images/index";

const S1Q7: QuestionRadioImagePayloadInterface = {
	ident: "school_7",
	name: "Question 7: Which of the following images shows what you do most of the time during your breaks?",
	type: ScreenType.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionSatisfactionImage,
			heading: "Question 7",
			label:
				"Which of the following pictures looks like what you do most of the time during your breaks?",
			kid_label:
				"Which of the following pictures looks like what you do most of the time during your breaks?",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their breaks?",
			choices: [
				{
					text: "Not moving",
					value: "0.1",
					images: {
						kid: Images.kids.options.breaks.not_moving,
						adult: Images.adults.options.breaks.not_moving,
					},
				},
				{
					text: "Easy effort",
					value: "0.3",
					images: {
						kid: Images.kids.options.breaks.easy_effort,
						adult: Images.adults.options.breaks.easy_effort,
					},
				},
				{
					text: "Medium or hard effort",
					value: "0.5",
					images: {
						kid: Images.kids.options.breaks.medium_effort,
						adult: Images.adults.options.breaks.medium_effort,
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
	}
};

export default S1Q7;
