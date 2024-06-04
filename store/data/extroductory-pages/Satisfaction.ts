import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { QuestionRadioImagePayloadInterface } from "interface/payload.type";
import Images from "styles/images/index";

const Satisfaction: QuestionRadioImagePayloadInterface = {
	ident: "app_use_satisfaction",
	name: "app_use_satisfaction",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionSatisfactionImage,
			heading: "Feedback",
			label: "How satisfied are you with the app?",
			kid_label: "How satisfied are you with the app?",
			adult_label: "How satisfied are you with the app?",
			adult_sublabel: "Click on the image (emoji) that best represents your satisfaction.",
			kid_sublabel: "Click on the image (emoji) that best represents your satisfaction.",
			choices: [
				{
					label: "Strongly dissatisfied",
					value: "Strongly dissatisfied",
					images: {
						kid: Images.generic.rating.very_dissatisfied,
						adult: Images.generic.rating.very_dissatisfied,
					},
				},
				{
					label: "Dissatisfied",
					value: "Dissatisfied",
					images: {
						kid: Images.generic.rating.dissatisfied,
						adult: Images.generic.rating.dissatisfied,
					},
				},
				{
					label: "Neutral",
					value: "Neutral",
					images: {
						kid: Images.generic.rating.neutral,
						adult: Images.generic.rating.neutral,
					},
				},
				{
					label: "Satisfied",
					value: "Satisfied",
					images: {
						kid: Images.generic.rating.satisfied,
						adult: Images.generic.rating.satisfied,
					},
				},
				{
					label: "Strongly Satisfied",
					value: "Strongly Satisfied",
					images: {
						kid: Images.generic.rating.very_satisfied,
						adult: Images.generic.rating.very_satisfied,
					},
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionSatisfactionImage,
			heading: "Feedback",
			label: "Quel penses-tu de l'application?",
			kid_label: "Quel penses-tu de l'application?",
			adult_label: "How satisfied are you with the app?",
			adult_sublabel: "Clique sur l'image (émoji) qui représente le mieux ta satisfaction.",
			kid_sublabel: "Clique sur l'image (émoji) qui représente le mieux ta satisfaction.",
			choices: [
				{
					label: "Très insatisfait",
					value: "Strongly dissatisfied",
					images: {
						kid: Images.generic.rating.very_dissatisfied,
						adult: Images.generic.rating.very_dissatisfied,
					},
				},
				{
					label: "Insatisfait",
					value: "Dissatisfied",
					images: {
						kid: Images.generic.rating.dissatisfied,
						adult: Images.generic.rating.dissatisfied,
					},
				},
				{
					label: "Neutre",
					value: "Neutral",
					images: {
						kid: Images.generic.rating.neutral,
						adult: Images.generic.rating.neutral,
					},
				},
				{
					label: "Satisfait",
					value: "Satisfied",
					images: {
						kid: Images.generic.rating.satisfied,
						adult: Images.generic.rating.satisfied,
					},
				},
				{
					label: "Très satisfait",
					value: "Strongly Satisfied",
					images: {
						kid: Images.generic.rating.very_satisfied,
						adult: Images.generic.rating.very_satisfied,
					},
				},
			],
		},
	},
};

export default Satisfaction;
