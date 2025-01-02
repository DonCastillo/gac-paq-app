import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { LangQuestionRadioImagePayloadInterface } from "interface/payload.type";

const Satisfaction: LangQuestionRadioImagePayloadInterface = {
	ident: "app_use_satisfaction",
	name: "app_use_satisfaction",
	type: Screen.SingleQuestion,
	column_name: "app_satisfaction",
	audio_ident: "rating",
	audio_autoplay: true,
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
		"cz-CR": {
			type: Question.QuestionSatisfactionImage,
			heading: "Zpětná vazba",
			label: "Jak jsi spokojen(a) s aplikací?",
			kid_label: "Jak jsi spokojen(a) s aplikací?",
			adult_label: "Jak jste spokojen(a) s aplikací?",
			adult_sublabel: "Klikni na obrázek (emotikon), který vystihuje úroveň tvé spokojenosti.",
			kid_sublabel: "Klikněte na obrázek (emotikon), který vystihuje úroveň vaší spokojenosti.",
			choices: [
				{
					label: "Silně nespokojen(a)",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "Nespokojen(a)",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "Neutrální",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "Spokojen(a)",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "Velmi spokojen(a)",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionSatisfactionImage,
			heading: "Comentarios",
			label: "¿Cómo de satisfecho se siente con la aplicación?",
			kid_label: "¿Cómo de satisfecho se siente con la aplicación?",
			adult_label: "¿Cómo de satisfecho se siente con la aplicación?",
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
		"en-MW": {
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
		"en-NG": {
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
		"ch-MW": {
			type: Question.QuestionSatisfactionImage,
			heading: "Ndemanga",
			label: "Mwakhutitsidwa bwanji ndi pulogalamuyi?",
			kid_label: "Mwakhutitsidwa bwanji ndi pulogalamuyi?",
			adult_label: "Mwakhutitsidwa bwanji ndi pulogalamuyi?",
			adult_sublabel: "Dinani pa chithunzi kapena emoji yomwe ikuyimira bwino kukhutira kwanu.",
			kid_sublabel: "Dinani pa chithunzi kapena emoji yomwe ikuyimira bwino kukhutira kwanu.",
			choices: [
				{
					label: "Khalidwe kotsutsana kwambiri",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "Khalidwe kotsutsana",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "Chotsutsa",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "Khalidwe kothokozetsa",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "Khalidwe kothokozetsa kwambiri",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionSatisfactionImage,
			heading: "प्रतिसाद",
			label: "तुम्ही या ॲपबाबत कितपत समाधानी आहात?",
			kid_label: "तुम्ही या ॲपबाबत कितपत समाधानी आहात?",
			adult_label: "तुम्ही या ॲपबाबत कितपत समाधानी आहात?",
			adult_sublabel: "तुमचे समाधान योग्यरित्या व्यक्त करणाऱ्या चित्रावर (इमोजीवर) क्लिक करा.",
			kid_sublabel: "तुमचे समाधान योग्यरित्या व्यक्त करणाऱ्या चित्रावर (इमोजीवर) क्लिक करा.",
			choices: [
				{
					label: "खूप असंतुष्ट",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "असंतुष्ट",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "तटस्थ",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "संतुष्ट",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "खूप संतुष्ट",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionSatisfactionImage,
			heading: "प्रतिक्रिया",
			label: "आप ऐप से कितने संतुष्ट हैं?",
			kid_label: "आप ऐप से कितने संतुष्ट हैं?",
			adult_label: "आप ऐप से कितने संतुष्ट हैं?",
			adult_sublabel:
				"उस चित्र (इमोजी) पर क्लिक करें जो आपकी संतुष्टि का सबसे अच्छा प्रतिनिधित्व करता है।",
			kid_sublabel:
				"उस चित्र (इमोजी) पर क्लिक करें जो आपकी संतुष्टि का सबसे अच्छा प्रतिनिधित्व करता है।",
			choices: [
				{
					label: "पूरी तरह से असंतुष्ट",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "असंतुष्ट",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "तटस्थ",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "संतुष्ट",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "पूरी तरह से संतुष्ट",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionSatisfactionImage,
			heading: "Feedback",
			label: "How satisfied are you with the app? ",
			kid_label: "How satisfied are you with the app? ",
			adult_label: "How satisfied are you with the app? ",
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
		"ar-AE": {
			type: Question.QuestionSatisfactionImage,
			heading: "ملاحظات",
			label: "ما مدى رضاك عن التطبيق؟",
			kid_label: "ما مدى رضاك عن التطبيق؟",
			adult_label: "ما مدى رضاك عن التطبيق؟",
			adult_sublabel: "حدد الصورة (الرمز التعبيري) التي تمثل مدى رضاك بأفضل وجه.",
			kid_sublabel: "حدد الصورة (الرمز التعبيري) التي تمثل مدى رضاك بأفضل وجه.",
			choices: [
				{
					label: "غير راضٍ على الإطلاق",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "غير راضٍ",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "محايد",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "راضٍ",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "راضٍ جدًا",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionSatisfactionImage,
			heading: "प्रतिक्रिया",
			label: "तपाईं यो app बाट कत्तिको सन्तुस्ट हुनुहुन्छ वा सोधिएका प्रश्नहरु कस्तो लाग्यो?",
			kid_label: "तपाईं यो app बाट कत्तिको सन्तुस्ट हुनुहुन्छ वा सोधिएका प्रश्नहरु कस्तो लाग्यो?",
			adult_label: "तपाईं यो app बाट कत्तिको सन्तुस्ट हुनुहुन्छ वा सोधिएका प्रश्नहरु कस्तो लाग्यो?",
			adult_sublabel: "तपाइको सन्तुस्टिलाइ कुन इमोजिले प्रतिनिधित्व गर्छ, चिन्न लगाउनुहोस् ।",
			kid_sublabel: "तपाइको सन्तुस्टिलाइ कुन इमोजिले प्रतिनिधित्व गर्छ, चिन्न लगाउनुहोस् ।",
			choices: [
				{
					label: "धेरै असन्तुष्ट",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "असन्तुष्ट",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "तटस्थ",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "सन्तुष्ट",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "धेरै सन्तुष्ट",
					value: "Strongly satisfied",
					image_ident: "very_satisfied",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionSatisfactionImage,
			heading: "Comentários",
			label: "O quanto satisfeito(a) você está com o aplicativo?",
			kid_label: "O quanto satisfeito(a) você está com o aplicativo?",
			adult_label: "O quanto satisfeito(a) você está com o aplicativo?",
			adult_sublabel: "Clica na imagem (emoji) que melhor representa a sua satisfação.",
			kid_sublabel: "Clica na imagem (emoji) que melhor representa a sua satisfação.",
			choices: [
				{
					label: "Muito insatisfeito(a)",
					value: "Strongly dissatisfied",
					image_ident: "very_dissatisfied",
				},
				{
					label: "Insatisfeito(a)",
					value: "Dissatisfied",
					image_ident: "dissatisfied",
				},
				{
					label: "Neutro(a)",
					value: "Neutral",
					image_ident: "neutral",
				},
				{
					label: "Satisfeito(a)",
					value: "Satisfied",
					image_ident: "satisfied",
				},
				{
					label: "Muito satisfeito(a)",
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
			adult_label: "คุณรู้สึกพอใจกับการใช้แอปนี้มากน้อยเพียงใด?",
			adult_sublabel: "คลิกที่ภาพ (อิโมจิ) ที่ตรงกับระดับความพึงพอใจของคุณมากที่สุด",
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
		"es-ES": {
			type: Question.QuestionSatisfactionImage,
			heading: "Comentarios",
			label: "¿Cuál es tu nivel de satisfacción con la aplicación?",
			kid_label: "¿Cuál es tu nivel de satisfacción con la aplicación?",
			adult_label: "¿Cómo de satisfecho se siente con la aplicación?",
			adult_sublabel: "Seleccione la imagen (carita) que mejor represente su satisfacción.",
			kid_sublabel: "Selecciona la imagen (carita) que mejor represente tu satisfacción.",
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
		"es-MX": {
			type: Question.QuestionSatisfactionImage,
			heading: "Comentarios",
			label: "¿Cuál es tu nivel de satisfacción con la aplicación?",
			kid_label: "¿Cuál es tu nivel de satisfacción con la aplicación?",
			adult_label: "¿Cuál es tu nivel de satisfacción con la aplicación?",
			adult_sublabel: "Selecciona la imagen (emoji) que mejor represente tu satisfacción.",
			kid_sublabel: "Selecciona la imagen (emoji) que mejor represente tu satisfacción.",
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
