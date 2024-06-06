import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioImagePayloadInterface } from "interface/payload.type";
import Images from "styles/images/index";

const S1Q7: QuestionRadioImagePayloadInterface = {
	ident: "school_7",
	name: "Question 7: Which of the following images shows what you do most of the time during your breaks?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 7",
			label:
				"Which of the following pictures looks like what you do most of the time during your breaks?",
			kid_label:
				"Which of the following pictures looks like what you do most of the time during your breaks?",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their breaks?",
			choices: [
				{
					label: "Not moving",
					value: "0.1",
					images: {
						kid: Images.kids.options.breaks.not_moving,
						adult: Images.adults.options.breaks.not_moving,
					},
				},
				{
					label: "Easy effort",
					value: "0.3",
					images: {
						kid: Images.kids.options.breaks.easy_effort,
						adult: Images.adults.options.breaks.easy_effort,
					},
				},
				{
					label: "Medium or hard effort",
					value: "0.5",
					images: {
						kid: Images.kids.options.breaks.medium_effort,
						adult: Images.adults.options.breaks.medium_effort,
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
		"es-MX": {
			type: Question.QuestionRadioImage,
			heading: "Question 7",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus recreos o descansos?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus recreos o descansos?",
			adult_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que hace la mayor parte del tiempo su hija o hijo durante sus recreos o descansos?",
			choices: [
				{
					label: "Sin moverte",
					value: "0.1",
					images: {
						kid: Images.kids.options.breaks.not_moving,
						adult: Images.adults.options.breaks.not_moving,
					},
				},
				{
					label: "Esfuerzo fácil",
					value: "0.3",
					images: {
						kid: Images.kids.options.breaks.easy_effort,
						adult: Images.adults.options.breaks.easy_effort,
					},
				},
				{
					label: "Esfuerzo medio o fuerte",
					value: "0.5",
					images: {
						kid: Images.kids.options.breaks.medium_effort,
						adult: Images.adults.options.breaks.medium_effort,
					},
				},
				{
					label: "No sé",
					value: "0",
					images: {
						kid: Images.general.donotknow,
						adult: Images.general.donotknow,
					},
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 7",
			label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps durant les pauses?",
			kid_label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps durant les pauses?",
			adult_label:
				"Laquelle des images suivantes ressemble à ce que ton enfant fait la plupart du temps durant les pauses?",
			choices: [
				{
					label: "Pas de mouvement",
					value: "0.1",
					images: {
						kid: Images.kids.options.breaks.not_moving,
						adult: Images.adults.options.breaks.not_moving,
					},
				},
				{
					label: "Peu d'effort",
					value: "0.3",
					images: {
						kid: Images.kids.options.breaks.easy_effort,
						adult: Images.adults.options.breaks.easy_effort,
					},
				},
				{
					label: "Un effort moyen ou intense",
					value: "0.5",
					images: {
						kid: Images.kids.options.breaks.medium_effort,
						adult: Images.adults.options.breaks.medium_effort,
					},
				},
				{
					label: "Je ne sais pas",
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

export default S1Q7;
