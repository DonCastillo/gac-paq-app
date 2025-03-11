import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { LangQuestionTextareaPayloadInterface } from "interface/payload.type";

const Comment: LangQuestionTextareaPayloadInterface = {
	ident: "app_use_comment",
	name: "app_use_comment",
	type: Screen.SingleQuestion,
	column_name: "comment",
	audio_ident: "comment",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionTextarea,
			heading: "Feedback",
			placeholder: "Enter your comment here",
			label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			adult_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_sublabel: "If yes, please write them in the box below",
			adult_sublabel: "If yes, please write them in the box below",
		},
		"mi-NZ": {
			type: Question.QuestionTextarea,
			heading: "Kōrero urupare",
			placeholder: "Tāpiri tō kōrero ki konei",
			label: "He kōrero rānei, he huatau rānei āu mō te taupānga, o ngā pātai rānei i tukuna ai?",
			kid_label:
				"He kōrero rānei, he huatau rānei āu mō te taupānga, o ngā pātai rānei i tukuna ai?",
			adult_label:
				"He āwhina, he whakaaro rānei āu mō te taupānga, mō ngā pātai rānei i uia e mātou?",
			kid_sublabel: "Mēnā i whakaae, tuhia ki pouaka ki raro",
			adult_sublabel: "Mēnā e whakaae ana, tēnā tuhia i te pouaka i raro nei",
		},
		"en-NZ": {
			type: Question.QuestionTextarea,
			heading: "Feedback",
			placeholder: "Enter your comment here",
			label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			adult_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_sublabel: "If yes, please write them in the box below",
			adult_sublabel: "If yes, please write them in the box below",
		},
		"cz-CR": {
			type: Question.QuestionTextarea,
			heading: "Zpětná vazba",
			placeholder: "Zde zadejte svůj komentář",
			label: "Máš nějaké poznámky nebo návrhy k aplikaci nebo k položeným otázkám?",
			kid_label: "Máš nějaké poznámky nebo návrhy k aplikaci nebo k položeným otázkám?",
			adult_label: "Máte nějaké poznámky nebo návrhy k aplikaci nebo položeným otázkám?",
			kid_sublabel: "Pokud ano, napiš je do tohoto pole.",
			adult_sublabel: "Pokud ano, napište je do tohoto pole.",
		},
		"es-CO": {
			type: Question.QuestionTextarea,
			heading: "Comentarios",
			placeholder: "Escribe aquí tu comentario",
			label:
				"¿Tiene algún comentario o sugerencia acerca de la aplicación o el cuestionario que acaba de contestar?",
			kid_label:
				"¿Tiene algún comentario o sugerencia acerca de la aplicación o el cuestionario que acaba de contestar?",
			adult_label:
				"¿Tiene algún comentario o sugerencia acerca de la aplicación o el cuestionario que acaba de contestar?",
			kid_sublabel: "Si es así por favor escríbalas en el siguiente cuadro",
			adult_sublabel: "Si es así por favor escríbalas en el siguiente cuadro",
		},
		"es-CL": {
			type: Question.QuestionTextarea,
			heading: "Comentarios",
			placeholder: "Escribe aquí tu comentario",
			label:
				"¿Tiene algún comentario o sugerencia acerca de la aplicación o el cuestionario que acaba de contestar?",
			kid_label:
				"¿Tiene algún comentario o sugerencia acerca de la aplicación o el cuestionario que acaba de contestar?",
			adult_label:
				"¿Tiene algún comentario o sugerencia acerca de la aplicación o el cuestionario que acaba de contestar?",
			kid_sublabel: "Si es así por favor escríbalas en el siguiente cuadro",
			adult_sublabel: "Si es así por favor escríbalas en el siguiente cuadro",
		},
		"en-MW": {
			type: Question.QuestionTextarea,
			heading: "Feedback",
			placeholder: "Enter your comment here",
			label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			adult_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_sublabel: "If yes, please write them in the box below",
			adult_sublabel: "If yes, please write them in the box below",
		},
		"en-NG": {
			type: Question.QuestionTextarea,
			heading: "Feedback",
			placeholder: "Enter your comment here",
			label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			adult_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_sublabel: "If yes, please write them in the box below",
			adult_sublabel: "If yes, please write them in the box below",
		},
		"ch-MW": {
			type: Question.QuestionTextarea,
			heading: "Ndemanga",
			placeholder: "Lembani ndemanga yanu apa",
			label:
				"Kodi muli ndi ndemanga kapena malingaliro okhudza pulogalamuyi kapena mafunso omwe takufunsani?",
			kid_label:
				"Kodi muli ndi ndemanga kapena malingaliro okhudza pulogalamuyi kapena mafunso omwe takufunsani?",
			adult_label:
				"Kodi muli ndi ndemanga kapena malingaliro okhudza pulogalamuyi kapena mafunso omwe takufunsani?",
			kid_sublabel: "Ngati inde, chonde zilembeni m'bokosi lomwe lili pansipa",
			adult_sublabel: "Ngati inde, chonde zilembeni m'bokosi lomwe lili pansipa",
		},
		"ma-IN": {
			type: Question.QuestionTextarea,
			heading: "प्रतिसाद",
			placeholder: "तुमची टिप्पणी येथे नोंदवा",
			label:
				"ॲपबद्दल किंवा आम्ही विचारलेल्या प्रश्नांबद्दल तुमच्या काही टिप्पण्या किंवा सूचना आहेत का?",
			kid_label:
				"ॲपबद्दल किंवा आम्ही विचारलेल्या प्रश्नांबद्दल तुमच्या काही टिप्पण्या किंवा सूचना आहेत का?",
			adult_label:
				"ॲपबद्दल किंवा आम्ही विचारलेल्या प्रश्नांबद्दल तुमच्या काही टिप्पण्या किंवा सूचना आहेत का?",
			kid_sublabel: "होय असल्यास, कृपया त्या खालील बॉक्समध्ये लिहा",
			adult_sublabel: "होय असल्यास, कृपया त्या खालील बॉक्समध्ये लिहा",
		},
		"hi-IN": {
			type: Question.QuestionTextarea,
			heading: "प्रतिक्रिया",
			placeholder: "अपनी टिप्पणी यहां दर्ज करें",
			label:
				"क्या आपके पास ऐप या हमारे द्वारा पूछे गए प्रश्नों के बारे में कोई टिप्पणी या सुझाव है?",
			kid_label:
				"क्या आपके पास ऐप या हमारे द्वारा पूछे गए प्रश्नों के बारे में कोई टिप्पणी या सुझाव है?",
			adult_label:
				"क्या आपके पास ऐप या हमारे द्वारा पूछे गए प्रश्नों के बारे में कोई टिप्पणी या सुझाव है?",
			kid_sublabel: "यदि हां, तो कृपया उन्हें नीचे दिए गए बॉक्स में लिखें",
			adult_sublabel: "यदि हां, तो कृपया उन्हें नीचे दिए गए बॉक्स में लिखें",
		},
		"en-AE": {
			type: Question.QuestionTextarea,
			heading: "Feedback",
			placeholder: "Enter your comment here",
			label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			adult_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_sublabel: "If yes, please write them in the box below",
			adult_sublabel: "If yes, please write them in the box below",
		},
		"ar-AE": {
			type: Question.QuestionTextarea,
			heading: "تعليقات",
			placeholder: "أدخل تعليقك هنا",
			label: "هل لديك أي تعليقات أو اقتراحات حول التطبيق أو الأسئلة التي طرحناها؟",
			kid_label: "هل لديك أي تعليقات أو اقتراحات حول التطبيق أو الأسئلة التي طرحناها؟",
			adult_label: "هل لديك أي تعليقات أو اقتراحات حول التطبيق أو الأسئلة التي طرحناها؟",
			kid_sublabel: "إذا كانت الإجابة نعم، يرجى كتابتها في المربع أدناه.",
			adult_sublabel: "إذا كانت الإجابة نعم، يرجى كتابتها في المربع أدناه.",
		},
		"ne-NP": {
			type: Question.QuestionTextarea,
			heading: "प्रतिक्रिया",
			placeholder: "तपाइको प्रतिकृया यहाँ लेख्नुहोस्",
			label: "app वा हामिले सोधेका प्रश्नहरु सम्बन्धि तपाईंको केहि शुझाव वा प्रश्न छ?",
			kid_label: "app वा हामिले सोधेका प्रश्नहरु सम्बन्धि तपाईंको केहि शुझाव वा प्रश्न छ?",
			adult_label: "app वा हामिले सोधेका प्रश्नहरु सम्बन्धि तपाईंको केहि शुझाव वा प्रश्न छ?",
			kid_sublabel: "छ भने, तलको बाकसमा लेख्नुहोस् ।",
			adult_sublabel: "छ भने, तलको बाकसमा लेख्नुहोस् ।",
		},
		"pt-BR": {
			type: Question.QuestionTextarea,
			heading: "Comentários",
			placeholder: "Digite seu comentário aqui",
			label:
				"Você tem algum comentário ou sugestão sobre o aplicativo ou as perguntas que fizemos?",
			kid_label:
				"Você tem algum comentário ou sugestão sobre o aplicativo ou as perguntas que fizemos?",
			adult_label:
				"Você tem algum comentário ou sugestão sobre o aplicativo ou as perguntas que fizemos?",
			kid_sublabel: "Se sim, por favor escreva-os na caixa abaixo",
			adult_sublabel: "Se sim, por favor escreva-os na caixa abaixo",
		},
		"sv-SE": {
			type: Question.QuestionTextarea,
			heading: "Feedback",
			placeholder: "Skriv din kommentar här",
			label:
				"Har du några andra kommentarer eller förslag om appen eller frågorna som vi har ställt?",
			kid_label:
				"Har du några andra kommentarer eller förslag om appen eller frågorna som vi har ställt?",
			adult_label:
				"Har du några andra kommentarer eller förslag om appen eller frågorna som vi har ställt?",
			kid_sublabel: "Om ja, skriv dem nedan",
			adult_sublabel: "Om ja, skriv dem nedan",
		},
		"th-TH": {
			type: Question.QuestionTextarea,
			heading: "ข้อเสนอแนะ",
			placeholder: "ใส่ความคิดเห็นของคุณได้ที่นี่",
			label:
				"น้องมีข้อคิดเห็นหรือข้อเสนอแนะเกี่ยวกับแอปนี้ หรือเกี่ยวกับคำถามที่เราถามน้องไปหรือไม่",
			kid_label:
				"น้องมีข้อคิดเห็นหรือข้อเสนอแนะเกี่ยวกับแอปนี้ หรือเกี่ยวกับคำถามที่เราถามน้องไปหรือไม่",
			adult_label:
				"คุณมีข้อคิดเห็นหรือข้อเสนอแนะเกี่ยวกับแอปนี้ หรือเกี่ยวกับคำถามที่เราถามคุณไปหรือไม่",
			kid_sublabel: "ถ้ามี ขอให้พิมพ์ลงในช่องด้านล่าง",
			adult_sublabel: "ถ้ามี ขอให้พิมพ์ลงในช่องด้านล่าง",
		},
		"zh-CN": {
			type: Question.QuestionTextarea,
			heading: "反馈",
			placeholder: "请填写您的评论或建议",
			label: "您对本应用或我们的问题有评论或建议吗?",
			kid_label: "您对本应用或我们的问题有评论或建议吗?",
			adult_label: "您对本应用或我们的问题有评论或建议吗?",
			kid_sublabel: "如有，请写在下面方框里",
			adult_sublabel: "如有，请写在下面方框里",
		},
		"es-ES": {
			type: Question.QuestionTextarea,
			heading: "Comentarios",
			placeholder: "Escribe aquí tu comentario",
			label:
				"¿Tienes algún comentario o sugerencia acerca de la aplicación o el cuestionario que acabas de contestar?",
			kid_label:
				"¿Tienes algún comentario o sugerencia acerca de la aplicación o el cuestionario que acabas de contestar?",
			adult_label:
				"¿Tiene algún comentario o sugerencia acerca de la aplicación o el cuestionario que acaba de contestar?",
			kid_sublabel: "Si es así escríbelas en el siguiente cuadro por favor",
			adult_sublabel: "Si es así por favor escríbalas en el siguiente cuadro",
		},
		"es-MX": {
			type: Question.QuestionTextarea,
			heading: "Comentarios",
			placeholder: "Escribe tus comentarios aquí",
			label:
				"¿Tienes algún comentario o sugerencia acerca de la aplicación o el cuestionario que acabas de contestar?",
			kid_label:
				"¿Tienes algún comentario o sugerencia acerca de la aplicación o el cuestionario que acabas de contestar?",
			adult_label:
				"¿Tienes algún comentario o sugerencia acerca de la aplicación o el cuestionario que acabas de contestar?",
			kid_sublabel: "Si es así, escríbelas en el siguiente cuadro, por favor:",
			adult_sublabel: "Si es así, escríbelas en el siguiente cuadro, por favor:",
		},
		"fr-CA": {
			type: Question.QuestionTextarea,
			heading: "Commentaires",
			placeholder: "Écris ton commentaire ici",
			label:
				"As-tu des commentaires ou suggestions à propos de l'application ou à propos des questions que nous avons posées?",
			kid_label:
				"As-tu des commentaires ou suggestions à propos de l'application ou à propos des questions que nous avons posées?",
			adult_label:
				"Avez-vous des commentaires ou suggestions à propos de l'application ou des questions que nous avons posées?",
			kid_sublabel: "Si oui, veuillez les écrire dans la boîte ci-dessous.",
			adult_sublabel: "Si oui, veuillez les écrire dans la boîte ci-dessous.",
		},
	},
};

export default Comment;
