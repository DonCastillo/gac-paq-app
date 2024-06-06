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
		"es-MX": {
			type: Question.QuestionRadioImage,
			heading: "Question 11",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus tareas del hogar o quehaceres?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus tareas del hogar o quehaceres?",
			adult_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que hace tu hijo la mayor parte del tiempo durante sus tareas?",
			choices: [
				{
					label: "Sin moverte",
					value: "0.1",
					images: {
						kid: Images.kids.options.chores.not_moving,
						adult: Images.adults.options.chores.not_moving,
					},
				},
				{
					label: "Esfuerzo fácil ",
					value: "0.3",
					images: {
						kid: Images.kids.options.chores.easy_effort,
						adult: Images.adults.options.chores.easy_effort,
					},
				},
				{
					label: "Esfuerzo medio o fuerte",
					value: "0.5",
					images: {
						kid: Images.kids.options.chores.medium_effort,
						adult: Images.adults.options.chores.medium_effort,
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
			heading: "Question 11",
			label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps lorsque tu accomplis tes tâches?",
			kid_label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps lorsque tu accomplis tes tâches?",
			adult_label:
				"Laquelle des images suivantes ressemble à ce que ton enfant fait la plupart du temps en accomplissant ses tâches?",
			choices: [
				{
					label: "Pas de mouvement",
					value: "0.1",
					images: {
						kid: Images.kids.options.chores.not_moving,
						adult: Images.adults.options.chores.not_moving,
					},
				},
				{
					label: "Peu d'effort",
					value: "0.3",
					images: {
						kid: Images.kids.options.chores.easy_effort,
						adult: Images.adults.options.chores.easy_effort,
					},
				},
				{
					label: "Un effort moyen ou intense",
					value: "0.5",
					images: {
						kid: Images.kids.options.chores.medium_effort,
						adult: Images.adults.options.chores.medium_effort,
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

export default S2Q4;
