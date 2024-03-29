import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S5Q3: QuestionRadioPayloadInterface = {
	name: "Question 20: On the days that you do these activities during the past week, how long did it usually last?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_radio_id: 5,
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
					text: "31-60 minutes per day",
					value: "31-60 minutes per day",
				},
				{
					text: "1-1.5 hours per day",
					value: "1-1.5 hours per day",
				},
				{
					text: "More than 1.5 hours per day",
					value: "More than 1.5 hours per day",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S5Q3;
