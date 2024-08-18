import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { LangQuestionRadioImagePayloadInterface } from "interface/payload.type";

const Satisfaction: LangQuestionRadioImagePayloadInterface = {
	ident: "app_use_satisfaction",
	name: "app_use_satisfaction",
	type: Screen.SingleQuestion,
	column_name: "app_satisfaction",
	audio_ident: "rating",
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
					image_ident: "very_dissatisfied",
				},
				{
					label: "Dissatisfied",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "Neutral",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "Satisfied",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "Strongly satisfied",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionSatisfactionImage,
			heading: "Feedback",
			label: "Hur nöjd är du med appen?",
			kid_label: "Hur nöjd är du med appen?",
			adult_label: "Hur nöjd är du med appen?",
			adult_sublabel: "Klicka på bilden (emoji) som visar bäst hur nöjd du är med appen.",
			kid_sublabel: "Klicka på bilden (emoji) som visar bäst hur nöjd du är med appen.",
			choices: [
				{
					label: "Mycket missnöjd",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "Missnöjd",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "Neutral",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "Nöjd",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "Mycket nöjd",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionSatisfactionImage,
			heading: "ข้อเสนอแนะ",
			label: "น้องรู้สึกพอใจกับการใช้แอปนี้มากน้อยเพียงใด?",
			kid_label: "น้องรู้สึกพอใจกับการใช้แอปนี้มากน้อยเพียงใด?",
			adult_label: "น้องรู้สึกพอใจกับการใช้แอปนี้มากน้อยเพียงใด?",
			adult_sublabel: "คลิกที่ภาพ (อิโมจิ) ที่ตรงกับระดับความพึงพอใจของน้องมากที่สุด",
			kid_sublabel: "คลิกที่ภาพ (อิโมจิ) ที่ตรงกับระดับความพึงพอใจของน้องมากที่สุด",
			choices: [
				{
					label: "ไม่พอใจมาก",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "ไม่พอใจ",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "เฉยๆ",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "พอใจ",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "พอใจมาก",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionSatisfactionImage,
			heading: "反馈",
			label: "对本应用的满意程度如何?",
			kid_label: "对本应用的满意程度如何?",
			adult_label: "对本应用的满意程度如何?",
			adult_sublabel: "请选择最能代表您的满意度的图片（表情）。",
			kid_sublabel: "请选择最能代表您的满意度的图片（表情）。",
			choices: [
				{
					label: "非常不满意",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "不满意",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "中立",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "满意",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "非常满意",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionSatisfactionImage,
			heading: "Comentarios",
			label: "¿Qué tan satisfecho se siente con la aplicación?",
			kid_label: "¿Qué tan satisfecho se siente con la aplicación?",
			adult_label: "¿Qué tan satisfecho se siente con la aplicación?",
			adult_sublabel: "Seleccione la imagen (carita) que mejor represente su satisfacción.",
			kid_sublabel: "Seleccione la imagen (carita) que mejor represente su satisfacción.",
			choices: [
				{
					label: "Muy insatisfecho",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "Insatisfecho",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "Neutral",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "Satisfecho",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "Muy satisfecho",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionSatisfactionImage,
			heading: "Commentaires",
			label: "Que penses-tu de l'application?",
			kid_label: "Que penses-tu de l'application?",
			adult_label: "Que pensez-vous de l'application?",
			adult_sublabel: "Cliquez sur l'image (émoji) qui représente le mieux votre satisfaction.",
			kid_sublabel: "Clique sur l'image (émoji) qui représente le mieux ta satisfaction.",
			choices: [
				{
					label: "Très insatisfait",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "Insatisfait",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "Neutre",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "Satisfait",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "Très satisfait",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
	},
};

export default Satisfaction;
