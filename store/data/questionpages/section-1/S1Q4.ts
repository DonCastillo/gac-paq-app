import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q4: QuestionRadioPayloadInterface = {
	ident: "school_4",
	name: "Question 4: How long are your physical education classes?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 4",
			label: "How long are your physical education classes?",
			kid_label: "How long are your physical education classes?",
			adult_label: "How long are your child's physical education classes?",
			choices: [
				{
					label: "Less than 30 minutes per class",
					value: "Less than 30 minutes per class",
				},
				{
					label: "30 - 45 minutes per class",
					value: "30 - 45 minutes per class",
				},
				{
					label: "46 - 60 minutes per class",
					value: "46 - 60 minutes per class",
				},
				{
					label: "Over 60 minutes per class",
					value: "Over 60 minutes per class",
				},
				{
					label: "Don't know",
					value: "Don't know",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 4",
			label: "Combien de temps durent tes cours d'éducation physique?",
			kid_label: "Combien de temps durent tes cours d'éducation physique?",
			adult_label: "Combien de temps durent les cours d'éducation physique de ton enfant?",
			choices: [
				{
					label: "Moins de 30 minutes par cours",
					value: "Moins de 30 minutes par cours",
				},
				{
					label: "30 - 45 minutes par cours",
					value: "30 - 45 minutes par cours",
				},
				{
					label: "46 - 60 minutes par cours",
					value: "46 - 60 minutes par cours",
				},
				{
					label: "Plus de 60 minutes par cours",
					value: "Plus de 60 minutes par cours",
				},
				{
					label: "Je ne sais pas",
					value: "Je ne sais pas",
				},
			],
		},
	},
};

export default S1Q4;
