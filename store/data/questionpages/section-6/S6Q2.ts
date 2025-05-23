import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S6Q2: LangQuestionRadioPayloadInterface = {
	ident: "play_2",
	name: "Question 22: In the past week, how many days per week did you do activities that make your muscles stronger?",
	type: Screen.SingleQuestion,
	column_name: "22.0 Play",
	audio_ident: "play_2",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 22",
			label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			kid_label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			adult_label:
				"In the past week, how many days per week did your child do activities that make their muscles stronger?",
			kid_sublabel:
				"Examples include gymnastics, climbing, push-ups, weightlifting, or using monkey bars.",
			adult_sublabel:
				"Examples include gymnastics, climbing, push-ups, weightlifting, or using monkey bars.",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"mi-NZ": {
			type: Question.QuestionRadio,
			heading: "Pātai 22",
			label:
				"I te wiki kua hipa, e hia ngā rā ia wiki i mahi ai koe i ngā ngohe e whakakaha ake ana i ngā uaua?",
			kid_label:
				"I te wiki kua hipa, e hia ngā rā ia wiki i mahi ai koe i ngā ngohe e whakakaha ake ana i ngā uaua?",
			adult_label:
				"I te wiki kua hipa, e hia ngā rā ia wiki i mahi ai tāu tamaiti i ngā ngohe e whakakaha ana i ngā uaua?",
			kid_sublabel:
				"Ko ngā tauira, ko te takaporepore, ko te kake, ko ngā pana-tū, ko te hiki maitai, ko te pae makimaki rānei.",
			adult_sublabel:
				"Hei tauira ko te takaporepore, ko te kake, ko ngā pana tū, ko te hiki maitai, ko te pae makimaki rānei.",
			choices: [
				{
					label: "O ngā rā",
					value: "0",
				},
				{
					label: "1 te rā",
					value: "1",
				},
				{
					label: "E 2 ngā rā",
					value: "2",
				},
				{
					label: "E 3 ngā rā",
					value: "3",
				},
				{
					label: "E 4 ngā rā",
					value: "4",
				},
				{
					label: "E 5 ngā rā",
					value: "5",
				},
				{
					label: "E 6 ngā rā",
					value: "6",
				},
				{
					label: "E 7 ngā rā",
					value: "7",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 22",
			label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			kid_label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			adult_label:
				"In the past week, how many days per week did your child do activities that make their muscles stronger?",
			kid_sublabel:
				"Examples include gymnastics, climbing, push-ups, weightlifting, or using monkey bars.",
			adult_sublabel:
				"Examples include gymnastics, climbing, push-ups, weightlifting, or using monkey bars.",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"cz-CR": {
			type: Question.QuestionRadio,
			heading: "Otázka 22",
			label:
				"Kolik dnů v minulém týdnu ses věnoval(a) aktivitám, které měly charakter posilování svalů?",
			kid_label:
				"Kolik dnů v minulém týdnu ses věnoval(a) aktivitám, které měly charakter posilování svalů?",
			adult_label:
				"Kolik dnů v minulém týdnu se vaše dítě věnovalo aktivitám, které měly charakter posilování svalů?",
			kid_sublabel:
				"Příkladem může být gymnastika, šplh, shyby, posilování s činkami, aktivity na prolézačkách.",
			adult_sublabel:
				"Příkladem může být gymnastika, šplh, shyby, posilování s činkami, aktivity na prolézačkách.",
			choices: [
				{
					label: "0 den",
					value: "0",
				},
				{
					label: "1 den",
					value: "1",
				},
				{
					label: "2 dny",
					value: "2",
				},
				{
					label: "3 dny",
					value: "3",
				},
				{
					label: "4 dny",
					value: "4",
				},
				{
					label: "5 dní",
					value: "5",
				},
				{
					label: "6 dní",
					value: "6",
				},
				{
					label: "7 dní",
					value: "7",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 22",
			label:
				"En la última semana, ¿cuántos días de la semana realizaste actividades que te fortalecieron físicamente?",
			kid_label:
				"En la última semana, ¿cuántos días de la semana realizaste actividades que te fortalecieron físicamente?",
			adult_label:
				"En la última semana, ¿cuántos días de la semana realizó su hija o hijo actividades que le fortalecieron físicamente?",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"es-CL": {
			type: Question.QuestionRadio,
			heading: "Pregunta 22",
			label:
				"En la última semana, ¿cuántos días de la semana realizaste actividades que te fortalecieron físicamente?",
			kid_label:
				"En la última semana, ¿cuántos días de la semana realizaste actividades que te fortalecieron físicamente?",
			adult_label:
				"En la última semana, ¿cuántos días de la semana realizó su hija o hijo actividades que le fortalecieron físicamente?",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 22",
			label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			kid_label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			adult_label:
				"In the past week, how many days per week did your child do activities that make their muscles stronger?",
			kid_sublabel:
				"Examples include gymnastics, climbing, push-ups, weightlifting, or using monkey bars.",
			adult_sublabel:
				"Examples include gymnastics, climbing, push-ups, weightlifting, or using monkey bars.",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 22",
			label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			kid_label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			adult_label:
				"In the past week, how many days per week did your child do activities that make their muscles stronger?",
			kid_sublabel:
				"Examples include gymnastics, climbing, push-ups, weightlifting, or using monkey bars.",
			adult_sublabel:
				"Examples include gymnastics, climbing, push-ups, weightlifting, or using monkey bars.",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 22",
			label:
				"M’sabata yapitayi ndi masiku angati omwe unachita zinthu zomwe zingakuthandize Kukhala ndi thupi lamphamvu?",
			kid_label:
				"M’sabata yapitayi ndi masiku angati omwe unachita zinthu zomwe zingakuthandize Kukhala ndi thupi lamphamvu?",
			adult_label:
				"M’sabata yapitayi ndi masiku angati omwe mwana wanu anachita zinthu zomwe zingamuthandize kukhala wamphamvu?",
			kid_sublabel:
				"Zitsanzo ndi masewero olimbitsa thupi, ma push up, kapena kunyamula ma weti ndi zina.",
			adult_sublabel:
				"Zitsanzo ndi masewero olimbitsa thupi, ma push up, kapena kunyamula ma weti ndi zina.",
			choices: [
				{
					label: "Masiku 0",
					value: "0",
				},
				{
					label: "Tsiku limodzi",
					value: "1",
				},
				{
					label: "Masiku awiri",
					value: "2",
				},
				{
					label: "Masiku atatu",
					value: "3",
				},
				{
					label: "Masiku 4",
					value: "4",
				},
				{
					label: "Masiku 5",
					value: "5",
				},
				{
					label: "Masiku 6",
					value: "6",
				},
				{
					label: "Masiku 7",
					value: "7",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २२",
			label: "मागील आठवड्यात, तुम्ही किती दिवस अशा हालचाली केल्या ज्यांनी तुम्हाला मजबूत बनवले?",
			kid_label:
				"मागील आठवड्यात, तुम्ही किती दिवस अशा हालचाली केल्या ज्यांनी तुम्हाला मजबूत बनवले?",
			adult_label:
				"मागील आठवड्यात, तुमच्या मुलाने किती दिवस अशा हालचाली केल्या ज्यांनी त्याला/ तिला मजबूत बनवले?",
			kid_sublabel: "जिम्नॅस्टिकस, टेकडी चढणे, जोर-बैठक मारणे, वेटलिफ्टिंग, मंकी बार्सवर खेळणे इ.",
			adult_sublabel:
				"उदा. जिम्नॅस्टिक्स, टेकडी चढणे, जोर बैठका मारणे, वेटलिफ्टिंग, मंकी बार्सवर खेळणे इ.",
			choices: [
				{
					label: "० दिवस",
					value: "0",
				},
				{
					label: "१ दिवस",
					value: "1",
				},
				{
					label: "२ दिवस",
					value: "2",
				},
				{
					label: "३ दिवस",
					value: "3",
				},
				{
					label: "४ दिवस",
					value: "4",
				},
				{
					label: "५ दिवस",
					value: "5",
				},
				{
					label: "६ दिवस",
					value: "6",
				},
				{
					label: "७ दिवस",
					value: "7",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २२",
			label:
				"पिछले सप्ताह में, आपने  कितने दिन ऐसी गतिविधियाँ कीं जो आपकी मांसपेशियों को मजबूत बनाती हैं?",
			kid_label:
				"पिछले सप्ताह में, आपने  कितने दिन ऐसी गतिविधियाँ कीं जो आपकी मांसपेशियों को मजबूत बनाती हैं?",
			adult_label:
				"पिछले सप्ताह में, आपके बच्चे ने कितने दिन ऐसी गतिविधियाँ कीं जो उसकी मांसपेशियों को मजबूत बनाती हैं?",
			kid_sublabel:
				"उदाहरणों में जिमनास्टिक्स, चढ़ाई, पुश-अप्स, भारोत्तोलन या मंकी बार्स का उपयोग शामिल हैं।",
			adult_sublabel:
				"उदाहरणों में जिमनास्टिक्स, चढ़ाई, पुश-अप्स, भारोत्तोलन या मंकी बार्स का उपयोग शामिल हैं।",
			choices: [
				{
					label: "0 दिन",
					value: "0",
				},
				{
					label: "1 दिन",
					value: "1",
				},
				{
					label: "2 दिन",
					value: "2",
				},
				{
					label: "3 दिन",
					value: "3",
				},
				{
					label: "4 दिन",
					value: "4",
				},
				{
					label: "5 दिन",
					value: "5",
				},
				{
					label: "6 दिन",
					value: "6",
				},
				{
					label: "7 दिन",
					value: "7",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 22",
			label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			kid_label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			adult_label:
				"In the past week, how many days per week did your child do activities that make their muscles stronger?",
			kid_sublabel: "Examples include gymnastics, climbing, weightlifting, etc.",
			adult_sublabel: "Examples include gymnastics, climbing, weightlifting, etc.",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [٢٢]",
			label: "خلال الأسبوع الماضي، كم عدد الأيام التي قمت فيها بأنشطة تقوّي العضلات؟",
			kid_label: "خلال الأسبوع الماضي، كم عدد الأيام التي قمت فيها بأنشطة تقوّي العضلات؟",
			adult_label: "خلال الأسبوع الماضي، كم عدد الأيام التي قام فيها طفلك بأنشطة تقوّي العضلات؟",
			kid_sublabel: "من الأمثلة على ذلك الجمباز والتسلق وتمارين الأثقال وغيرها.",
			adult_sublabel: "من الأمثلة على ذلك الجمباز والتسلق وتمارين الأثقال وغيرها.",
			choices: [
				{
					label: "لا شيء (٠)",
					value: "0",
				},
				{
					label: "يوم واحد (١)",
					value: "1",
				},
				{
					label: "يومين (٢)",
					value: "2",
				},
				{
					label: "ثلاثة أيام (٣)",
					value: "3",
				},
				{
					label: "أربعة أيام (٤)",
					value: "4",
				},
				{
					label: "خمسة أيام (٥)",
					value: "5",
				},
				{
					label: "ستة أيام (٦)",
					value: "6",
				},
				{
					label: "سبعة أيام (٧)",
					value: "7",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २२",
			label:
				"पछिल्लो (गएको/ बितेको) हप्ता, तपाईं कति दिन आफु (माम्सपेसि) लाई थप बलियो बनाउने गतिविधिहरुमा लाग्नुभयो?",
			kid_label:
				"पछिल्लो (गएको/ बितेको) हप्ता, तपाईं कति दिन आफु (माम्सपेसि) लाई थप बलियो बनाउने गतिविधिहरुमा लाग्नुभयो?",
			adult_label:
				"पछिल्लो (गएको/ बितेको) हप्ता, तपाईंको छोरा वा छोरीले कति दिन आफु (माम्सपेसि) लाई थप बलियो बनाउने गतिविधिहरुमा लाग्नुभयो?",
			choices: [
				{
					label: "० दिन",
					value: "0",
				},
				{
					label: "१ दिन",
					value: "1",
				},
				{
					label: "२ दिन",
					value: "2",
				},
				{
					label: "३ दिन",
					value: "3",
				},
				{
					label: "४ दिन",
					value: "4",
				},
				{
					label: "५ दिन",
					value: "5",
				},
				{
					label: "६ दिन",
					value: "6",
				},
				{
					label: "७ दिन",
					value: "7",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 22",
			label:
				"Na última semana, quantos dias você fez atividades que deixaram seus músculos mais fortes? Exemplos incluem ginástica, escalada, flexões, levantamento de peso, pendurar-se em barras.",
			kid_label:
				"Na última semana, quantos dias você fez atividades que deixaram seus músculos mais fortes? Exemplos incluem ginástica, escalada, flexões, levantamento de peso, pendurar-se em barras.",
			adult_label:
				"Na última semana, quantos dias a criança ou adolescente que você é responsável fez atividades que deixaram os músculos mais fortes? Exemplos incluem ginástica, escalada, flexões, levantamento de peso, pendurar-se em barras.",
			choices: [
				{
					label: "0 dias",
					value: "0",
				},
				{
					label: "1 dia",
					value: "1",
				},
				{
					label: "2 dias",
					value: "2",
				},
				{
					label: "3 dias",
					value: "3",
				},
				{
					label: "4 dias",
					value: "4",
				},
				{
					label: "5 dias",
					value: "5",
				},
				{
					label: "6 dias",
					value: "6",
				},
				{
					label: "7 dias",
					value: "7",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 22",
			label:
				"Hur många dagar gjorde du någon aktivitet som gör att dina muskler blir starkare under den senaste veckan?",
			kid_label:
				"Hur många dagar gjorde du någon aktivitet som gör att dina muskler blir starkare under den senaste veckan?",
			adult_label:
				"Hur många dagar gjorde ditt barn någon aktivitet som gör musklerna starkare under den senaste veckan?",
			choices: [
				{
					label: "0 dagar",
					value: "0",
				},
				{
					label: "En dag",
					value: "1",
				},
				{
					label: "2 dagar",
					value: "2",
				},
				{
					label: "3 dagar",
					value: "3",
				},
				{
					label: "4 dagar",
					value: "4",
				},
				{
					label: "5 dagar",
					value: "5",
				},
				{
					label: "6 dagar",
					value: "6",
				},
				{
					label: "7 dagar",
					value: "7",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "ข้อ 22",
			label: "สัปดาห์ที่แล้ว น้องได้ทำกิจกรรมที่ทำให้กล้ามเนื้อแข็งแรงขึ้น กี่วัน?",
			kid_label: "สัปดาห์ที่แล้ว น้องได้ทำกิจกรรมที่ทำให้กล้ามเนื้อแข็งแรงขึ้น กี่วัน?",
			adult_label: "สัปดาห์ที่แล้ว บุตรหลานของคุณได้ทำกิจกรรมที่ทำให้กล้ามเนื้อแข็งแรงขึ้น กี่วัน?",
			kid_sublabel: "ตัวอย่างเช่น ยิมนาสติก ปีนเขา วิดพื้น ยกเวท หรือโหนบาร์ เป็นต้น",
			adult_sublabel: "ตัวอย่างเช่น ยิมนาสติก ปีนเขา วิดพื้น ยกเวท หรือโหนบาร์ เป็นต้น",
			choices: [
				{
					label: "0 วัน",
					value: "0",
				},
				{
					label: "1 วัน",
					value: "1",
				},
				{
					label: "2 วัน",
					value: "2",
				},
				{
					label: "3 วัน",
					value: "3",
				},
				{
					label: "4 วัน",
					value: "4",
				},
				{
					label: "5 วัน",
					value: "5",
				},
				{
					label: "6 วัน",
					value: "6",
				},
				{
					label: "7 วัน",
					value: "7",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 22",
			label: "在过去一周里，你有几天会做一些能让你变得更强壮的活动？",
			kid_label: "在过去一周里，你有几天会做一些能让你变得更强壮的活动？",
			adult_label: "在过去一周里，您的孩子有几天或做一些能让他们变得更强壮的活动？",
			choices: [
				{
					label: "0天",
					value: "0",
				},
				{
					label: "1天",
					value: "1",
				},
				{
					label: "2天",
					value: "2",
				},
				{
					label: "3天",
					value: "3",
				},
				{
					label: "4天",
					value: "4",
				},
				{
					label: "5天",
					value: "5",
				},
				{
					label: "6天",
					value: "6",
				},
				{
					label: "7天",
					value: "7",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 22",
			label:
				"Durante la semana pasada, ¿cuántos días realizaste actividades que fortalecieron tus músculos?",
			kid_label:
				"Durante la semana pasada, ¿cuántos días realizaste actividades que fortalecieron tus músculos?",
			adult_label:
				"Durante la semana pasada, ¿cuántos días de la semana realizó su hija o hijo actividades que le fortalecieron sus músculos?",
			kid_sublabel:
				"Algunos ejemplos incluyen niños/jovenes haciendo gimnasia, escalando, flexiones, levantando pesas o usando barras.",
			adult_sublabel:
				"Algunos ejemplos incluyen niños/jovenes haciendo gimnasia, escalando, flexiones, levantando pesas o usando barras.",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 22",
			label:
				"En la última semana, ¿cuántos días realizaste actividades que fortalecieron tus músculos?",
			kid_label:
				"En la última semana, ¿cuántos días realizaste actividades que fortalecieron tus músculos?",
			adult_label:
				"En la última semana, ¿cuántos días de la semana realizó su hija o hijo actividades que le fortalecieron sus músculos?",
			kid_sublabel:
				"Algunos ejemplos incluyen niños, niñas o jóvenes haciendo gimnasia, escalando, haciendo lagartijas, levantando pesas o usando el pasamanos.",
			adult_sublabel:
				"Algunos ejemplos incluyen niños, niñas o jóvenes haciendo gimnasia, escalando, haciendo lagartijas, levantando pesas o usando el pasamanos.",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 22",
			label:
				"Au cours de la dernière semaine, combien de jours as-tu pratiqué des activités qui rendent tes muscles plus forts?",
			kid_label:
				"Au cours de la dernière semaine, combien de jours as-tu pratiqué des activités qui rendent tes muscles plus forts?",
			adult_label:
				"Au cours de la dernière semaine, combien de jours ton enfant a-t-il (elle) pratiqué des activités qui rendent ses muscles plus forts?",
			kid_sublabel:
				"Les exemples incluent la gymnastique, l'escalade, les pompes (ou push-ups), l'haltérophilie ou utiliser des barres de singe.",
			adult_sublabel:
				"Les exemples incluent la gymnastique, l'escalade, les pompes (ou push-ups), l'haltérophilie ou utiliser des barres de singe.",
			choices: [
				{
					label: "0 jour",
					value: "0",
				},
				{
					label: "1 jour",
					value: "1",
				},
				{
					label: "2 jours",
					value: "2",
				},
				{
					label: "3 jours",
					value: "3",
				},
				{
					label: "4 jours",
					value: "4",
				},
				{
					label: "5 jours",
					value: "5",
				},
				{
					label: "6 jours",
					value: "6",
				},
				{
					label: "7 jours",
					value: "7",
				},
			],
		},
	},
};

export default S6Q2;
