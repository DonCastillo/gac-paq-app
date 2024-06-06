import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioImagePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S3Q3: QuestionRadioImagePayloadInterface = {
	ident: "work_3",
	name: "Question 14:	Which of the following images shows what you do most of the time while volunteering and/or working?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 14",
			label:
				"Which of the following pictures looks like what you do most of the time while volunteering and/or working?",
			kid_label:
				"Which of the following pictures looks like what you do most of the time while volunteering and/or working?",
			adult_label:
				"Which of the following images resembles what your child does most of the time while volunteering and/or working?",
			choices: [
				{
					label: "Not moving",
					value: "0.1",
					images: {
						kid: Images.kids.options.volunteering.not_moving,
						adult: Images.adults.options.volunteering.not_moving,
					},
				},
				{
					label: "Easy effort",
					value: "0.3",
					images: {
						kid: Images.kids.options.volunteering.easy_effort,
						adult: Images.adults.options.volunteering.easy_effort,
					},
				},
				{
					label: "Medium or hard effort",
					value: "0.5",
					images: {
						kid: Images.kids.options.volunteering.medium_effort,
						adult: Images.adults.options.volunteering.medium_effort,
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
			heading: "Question 14",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo mientras eres voluntario y/o trabajas?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo mientras eres voluntario y/o trabajas?",
			adult_label:
				"¿Cuál de las siguientes opciones se parece más a lo que hace la mayor parte del tiempo su hija o hijo mientras es voluntario y/o trabaja?",
			choices: [
				{
					label: "Sin moverte",
					value: "0.1",
					images: {
						kid: Images.kids.options.volunteering.not_moving,
						adult: Images.adults.options.volunteering.not_moving,
					},
				},
				{
					label: "Esfuerzo fácil",
					value: "0.3",
					images: {
						kid: Images.kids.options.volunteering.easy_effort,
						adult: Images.adults.options.volunteering.easy_effort,
					},
				},
				{
					label: "Esfuerzo medio o fuerte",
					value: "0.5",
					images: {
						kid: Images.kids.options.volunteering.medium_effort,
						adult: Images.adults.options.volunteering.medium_effort,
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
			heading: "Question 14",
			label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps lorsque tu fais du bénévolat et/ou travailles?",
			kid_label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps lorsque tu fais du bénévolat et/ou travailles?",
			adult_label:
				"Laquelle des images suivantes ressemble à ce que ton enfant fait la plupart du temps en travaillant et/ou en faisant du bénévolat?",
			choices: [
				{
					label: "Pas de mouvement",
					value: "0.1",
					images: {
						kid: Images.kids.options.volunteering.not_moving,
						adult: Images.adults.options.volunteering.not_moving,
					},
				},
				{
					label: "Peu d'effort",
					value: "0.3",
					images: {
						kid: Images.kids.options.volunteering.easy_effort,
						adult: Images.adults.options.volunteering.easy_effort,
					},
				},
				{
					label: "Un effort moyen ou intense",
					value: "0.5",
					images: {
						kid: Images.kids.options.volunteering.medium_effort,
						adult: Images.adults.options.volunteering.medium_effort,
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

export default S3Q3;
