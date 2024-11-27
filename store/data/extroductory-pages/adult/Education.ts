import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const Education: LangQuestionRadioPayloadInterface = {
	ident: "highest_level_of_education",
	name: "highest_level_of_education",
	type: Screen.SingleQuestion,
	column_name: "education",
	audio_ident: "education",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label: "What is the highest level of education completed by a member of your household?",
			kid_label: "What is the highest level of education completed by a member of your household?",
			adult_label:
				"What is the highest level of education completed by a member of your household?",
			choices: [
				{
					label: "No formal schooling",
					value: "No formal schooling",
				},
				{
					label: "Primary school",
					value: "Primary school",
				},
				{
					label: "Secondary or high school",
					value: "Secondary or high school",
				},
				{
					label: "Vocational/college education",
					value: "Vocational/college education",
				},
				{
					label: "Tertiary/university education",
					value: "Tertiary/university education",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 29",
			label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			kid_label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			adult_label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			choices: [
				{
					label: "Sin educación formal",
					value: "No formal schooling",
				},
				{
					label: "Primaria",
					value: "Primary school",
				},
				{
					label: "Secundaria o bachillerato",
					value: "Secondary or high school",
				},
				{
					label: "Técnico o tecnólogo",
					value: "Vocational/college education",
				},
				{
					label: "Profesional o formación universitaria",
					value: "Tertiary/university education",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to answer",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label: "What is the highest level of education completed by a member of your household?",
			kid_label: "What is the highest level of education completed by a member of your household?",
			adult_label:
				"What is the highest level of education completed by a member of your household?",
			choices: [
				{
					label: "No formal schooling",
					value: "No formal schooling",
				},
				{
					label: "Primary school",
					value: "Primary school",
				},
				{
					label: "Secondary or high school",
					value: "Secondary or high school",
				},
				{
					label: "Vocational/college education",
					value: "Vocational/college education",
				},
				{
					label: "Tertiary/university education",
					value: "Tertiary/university education",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label: "What is the highest level of education completed by a member of your household?",
			kid_label: "What is the highest level of education completed by a member of your household?",
			adult_label:
				"What is the highest level of education completed by a member of your household?",
			choices: [
				{
					label: "No formal schooling",
					value: "No formal schooling",
				},
				{
					label: "Primary school",
					value: "Primary school",
				},
				{
					label: "Secondary or high school",
					value: "Secondary or high school",
				},
				{
					label: "Vocational/college education",
					value: "Vocational/college education",
				},
				{
					label: "Tertiary/university education",
					value: "Tertiary/university education",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 29",
			label: "Kodi m’banja mwanu munthu amene anaphunzira kwambiri anafika nawo pati maphunzirowo?",
			kid_label:
				"Kodi m’banja mwanu munthu amene anaphunzira kwambiri anafika nawo pati maphunzirowo?",
			adult_label:
				"Kodi m’banja mwanu munthu amene anaphunzira kwambiri anafika nawo pati maphunzirowo?",
			choices: [
				{
					label: "Palibe anapita ku sukulu",
					value: "No formal schooling",
				},
				{
					label: "Anamaliza primary",
					value: "Primary school",
				},
				{
					label: "Anamaliza secondary",
					value: "Secondary or high school",
				},
				{
					label: "Anamaliza ku technical college",
					value: "Vocational/college education",
				},
				{
					label: "Anamaliza ku university",
					value: "Tertiary/university education",
				},
				{
					label: "Ndasankha kusayankha",
					value: "Prefer not to answer",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २९",
			label: "तुमच्या घरातील सदस्याने पूर्ण केलेला सर्वोच्च शैक्षणिक स्तर कोणता?",
			kid_label: "तुमच्या घरातील सदस्याने पूर्ण केलेला सर्वोच्च शैक्षणिक स्तर कोणता?",
			adult_label: "तुमच्या घरातील सदस्याने पूर्ण केलेला सर्वोच्च शैक्षणिक स्तर कोणता?",
			choices: [
				{
					label: "औपचारिक शालेय शिक्षण झालेले नाही",
					value: "No formal schooling",
				},
				{
					label: "प्राथमिक शालेय शिक्षण",
					value: "Primary school",
				},
				{
					label: "माध्यमिक किंवा उच्च माध्यमिक शालेय शिक्षण",
					value: "Secondary or high school",
				},
				{
					label: "व्यावसायिक/ महाविद्यालयीन शिक्षण",
					value: "Vocational/college education",
				},
				{
					label: "तृतीय स्तर / विद्यापीठ शिक्षण",
					value: "Tertiary/university education",
				},
				{
					label: "मला नाही सांगायचे",
					value: "Prefer not to answer",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २९",
			label: "आपके घर के किसी सदस्य द्वारा पूरी की गई शिक्षा का उच्चतम स्तर क्या है?",
			kid_label: "आपके घर के किसी सदस्य द्वारा पूरी की गई शिक्षा का उच्चतम स्तर क्या है?",
			adult_label: "आपके घर के किसी सदस्य द्वारा पूरी की गई शिक्षा का उच्चतम स्तर क्या है?",
			choices: [
				{
					label: "कोई औपचारिक स्कूली शिक्षा नहीं",
					value: "No formal schooling",
				},
				{
					label: "प्राथमिक स्कूल",
					value: "Primary school",
				},
				{
					label: "माध्यमिक या उच्च विद्यालय",
					value: "Secondary or high school",
				},
				{
					label: "व्यावसायिक/कॉलेज शिक्षा",
					value: "Vocational/college education",
				},
				{
					label: "तृतीयक/विश्वविद्यालयी शिक्षा",
					value: "Tertiary/university education",
				},
				{
					label: "जवाब नहीं देना पसंद करेंगे",
					value: "Prefer not to answer",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label: "What is the highest level of education completed by a member of your household?",
			kid_label: "What is the highest level of education completed by a member of your household?",
			adult_label:
				"What is the highest level of education completed by a member of your household?",
			choices: [
				{
					label: "No formal schooling",
					value: "No formal schooling",
				},
				{
					label: "Primary school",
					value: "Primary school",
				},
				{
					label: "Secondary or high school",
					value: "Secondary or high school",
				},
				{
					label: "Vocational/college education",
					value: "Vocational/college education",
				},
				{
					label: "Tertiary/university education",
					value: "Tertiary/university education",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [٢٩]",
			label: "ما هو أعلى مستوى تعليمي تم تحصيله من قِبل أحد أفراد أسرتك؟",
			kid_label: "ما هو أعلى مستوى تعليمي تم تحصيله من قِبل أحد أفراد أسرتك؟",
			adult_label: "ما هو أعلى مستوى تعليمي تم تحصيله من قِبل أحد أفراد أسرتك؟",
			choices: [
				{
					label: "غير متعلم",
					value: "No formal schooling",
				},
				{
					label: "ابتدائي",
					value: "Primary school",
				},
				{
					label: "ثانوي",
					value: "Secondary or high school",
				},
				{
					label: "مهني (دبلوم)",
					value: "Vocational/college education",
				},
				{
					label: "جامعي (بكالوريوس/ ماجستير/ دكتوراه)",
					value: "Tertiary/university education",
				},
				{
					label: "أفضّل عدم الإجابة",
					value: "Prefer not to answer",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २९",
			label: "तपाइ को परिवारमा सबै भन्दा धेरै पढेको सदस्यको शैक्षिक योग्यता कती हो?",
			kid_label: "तपाइ को परिवारमा सबै भन्दा धेरै पढेको सदस्यको शैक्षिक योग्यता कती हो?",
			adult_label: "तपाइ को परिवारमा सबै भन्दा धेरै पढेको सदस्यको शैक्षिक योग्यता कती हो?",
			choices: [
				{
					label: "औपचारिक शिक्षा छैन",
					value: "No formal schooling",
				},
				{
					label: "राथमिक तह",
					value: "Primary school",
				},
				{
					label: "निम्न माध्यमिक वा हाइस्कुल",
					value: "Secondary or high school",
				},
				{
					label: "प्राबिधिक शिक्षा",
					value: "Vocational/college education",
				},
				{
					label: "विस्वविद्यालय शिक्षा",
					value: "Tertiary/university education",
				},
				{
					label: "भन्न चाहन्न",
					value: "Prefer not to answer",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 29",
			label: "Qual é o maior grau de educação completado por um membro de sua casa?",
			kid_label: "Qual é o maior grau de educação completado por um membro de sua casa?",
			adult_label: "Qual é o maior grau de educação completado por um membro de sua casa?",
			choices: [
				{
					label: "Sem educação formal",
					value: "No formal schooling",
				},
				{
					label: "Ensino fundamental",
					value: "Primary school",
				},
				{
					label: "Ensino médio",
					value: "Secondary or high school",
				},
				{
					label: "Educação profissional",
					value: "Vocational/college education",
				},
				{
					label: "Ensino superior/universitário",
					value: "Tertiary/university education",
				},
				{
					label: "Prefiro não responder",
					value: "Prefer not to answer",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 29",
			label: "Vilken är den högsta utbildningsnivå någon i ert hushåll har genomfört?",
			kid_label: "Vilken är den högsta utbildningsnivå någon i ert hushåll har genomfört?",
			adult_label: "Vilken är den högsta utbildningsnivå någon i ert hushåll har genomfört?",
			choices: [
				{
					label: "Ingen",
					value: "No formal schooling",
				},
				{
					label: "Grundskola",
					value: "Primary school",
				},
				{
					label: "Gymnasium",
					value: "Secondary or high school",
				},
				{
					label: "Yrkes-/högskoleutbildning",
					value: "Vocational/college education",
				},
				{
					label: "Universitetsutbildning",
					value: "Tertiary/university education",
				},
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to answer",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 29",
			label: "การศึกษาสูงสุดของสมาชิกในครอบครัวของคุณอยู่ในระดับใด?",
			kid_label: "การศึกษาสูงสุดของสมาชิกในครอบครัวของคุณอยู่ในระดับใด?",
			adult_label: "การศึกษาสูงสุดของสมาชิกในครอบครัวของคุณอยู่ในระดับใด?",
			choices: [
				{
					label: "ไม่ได้เรียนหนังสือ",
					value: "No formal schooling",
				},
				{
					label: "ระดับประถมศึกษา",
					value: "Primary school",
				},
				{
					label: "ระดับมัธยมศึกษาตอนต้นหรือตอนปลาย",
					value: "Secondary or high school",
				},
				{
					label: "ศึกษาสายอาชีพ/ระดับวิทยาลัย",
					value: "Vocational/college education",
				},
				{
					label: "ระดับอุดมศึกษา/มหาวิทยาลัย",
					value: "Tertiary/university education",
				},
				{
					label: "ไม่ต้องการตอบ",
					value: "Prefer not to answer",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 29",
			label: "您的家庭成员完成的最高教育水平是?",
			kid_label: "您的家庭成员完成的最高教育水平是?",
			adult_label: "您的家庭成员完成的最高教育水平是?",
			choices: [
				{
					label: "没有受过正规教育",
					value: "No formal schooling",
				},
				{
					label: "小学",
					value: "Primary school",
				},
				{
					label: "中学",
					value: "Secondary or high school",
				},
				{
					label: "高职高专",
					value: "Vocational/college education",
				},
				{
					label: "高等/大学教育",
					value: "Tertiary/university education",
				},
				{
					label: "不想回答",
					value: "Prefer not to answer",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 29",
			label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			kid_label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			adult_label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			choices: [
				{
					label: "Sin educación formal",
					value: "No formal schooling",
				},
				{
					label: "Primaria",
					value: "Primary school",
				},
				{
					label: "Secundaria o bachillerato",
					value: "Secondary or high school",
				},
				{
					label: "Técnico o tecnólogo",
					value: "Vocational/college education",
				},
				{
					label: "Profesional o formación universitaria",
					value: "Tertiary/university education",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to answer",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 29",
			label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			kid_label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			adult_label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			choices: [
				{
					label: "Sin educación formal",
					value: "No formal schooling",
				},
				{
					label: "Primaria",
					value: "Primary school",
				},
				{
					label: "Secundaria o bachillerato",
					value: "Secondary or high school",
				},
				{
					label: "Técnico o tecnólogo",
					value: "Vocational/college education",
				},
				{
					label: "Profesional o formación universitaria",
					value: "Tertiary/university education",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to answer",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label: "Quel est le plus haut niveau de scolarité complété par un membre de votre ménage?",
			kid_label:
				"Quel est le plus haut niveau de scolarité complété par un membre de votre ménage?",
			adult_label:
				"Quel est le plus haut niveau de scolarité complété par un membre de votre ménage?",
			choices: [
				{
					label: "Aucune scolarité",
					value: "No formal schooling",
				},
				{
					label: "École primaire",
					value: "Primary school",
				},
				{
					label: "École secondaire",
					value: "Secondary or high school",
				},
				{
					label: "Éducation collégiale ou technique",
					value: "Vocational/college education",
				},
				{
					label: "Éducation universitaire",
					value: "Tertiary/university education",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default Education;
