import ScreenType from "constants/screen_type.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionRadioImagePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S3Q3: QuestionRadioImagePayloadInterface = {
	ident: "work_3",
	name: "Question 14:	Which of the following images shows what you do most of the time while volunteering and/or working?",
	type: ScreenType.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionRadioImage,
			heading: "Question 14",
			label:
				"Which of the following pictures looks like what you do most of the time while volunteering and/or working?",
			kid_label:
				"Which of the following pictures looks like what you do most of the time while volunteering and/or working?",
			adult_label:
				"Which of the following images resembles what your child does most of the time while volunteering and/or working?",
			choices: [
				{
					text: "Not moving",
					value: "0.1",
					images: {
						kid: Images.kids.options.volunteering.not_moving,
						adult: Images.adults.options.volunteering.not_moving,
					},
				},
				{
					text: "Easy effort",
					value: "0.3",
					images: {
						kid: Images.kids.options.volunteering.easy_effort,
						adult: Images.adults.options.volunteering.easy_effort,
					},
				},
				{
					text: "Medium or hard effort",
					value: "0.5",
					images: {
						kid: Images.kids.options.volunteering.medium_effort,
						adult: Images.adults.options.volunteering.medium_effort,
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

export default S3Q3;
