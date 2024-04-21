import ScreenType from "constants/screen_type";
import type QuestionInputPayloadInterface from "interface/directus/question-input-payload";

const AccelerometerPage: QuestionInputPayloadInterface = {
	ident: "accelerometer",
	name: "Please enter your Accelerometer ID",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 5,
			question_input_id: 5,
			heading: "Welcome!",
			label: "Please enter your Accelerometer ID",
			kid_label: "Please enter your Accelerometer ID",
			adult_label: "Please enter your Accelerometer ID",
			placeholder: "Accelerometer ID Serial Number",
			type: "text",
			sort: null,
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default AccelerometerPage;
