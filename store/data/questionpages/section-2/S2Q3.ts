import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S2Q3: QuestionRadioPayloadInterface = {
	name: "Question 10: On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_radio_id: 3,
			label:
				"On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
			kid_label:
				"On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
			adult_label:
				"On the days when your child did chores during the past week, how much time did they spend doing chores throughout the day?",
			heading: "Question 10",
			choices: [
				{
					text: "15 minutes or less per day",
					value: "15 minutes or less per day",
				},
				{
					text: "16-30 minutes per day",
					value: "16-30 minutes per day",
				},
				{
					text: "31-60 minutes per day",
					value: "31-60 minutes per day",
				},
				{
					text: "Over 60 minutes per day",
					value: "Over 60 minutes per day",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S2Q3;
