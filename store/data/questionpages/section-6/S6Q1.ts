import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S6Q1: LangQuestionRadioPayloadInterface = {
	ident: "play_1",
	name: "Question 21:	In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
	type: Screen.SingleQuestion,
	column_name: "21.0 Play",
	audio_ident: "play_1",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 21",
			label:
				"In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
			kid_label:
				"In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
			adult_label:
				"In the past week, on a normal day, how much time did your child spend playing actively, just for fun?",
			kid_sublabel:
				"These activities are not done for competing or training. Examples include playing ball games for fun, playing in a swimming pool, jumping on a trampoline, tag, hide and seek, playing in the sandbox, building forts or treehouses.",
			adult_sublabel:
				"These activities are not done for competing or training. Examples include playing ball games for fun, playing in a swimming pool, jumping on a trampoline, tag, hide and seek, playing in the sandbox, building forts or treehouses.",
			choices: [
				{
					label: "None",
					value: "None",
				},
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to less than 2 hours per day",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 to less than 3 hours per day",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 to less than 4 hours per day",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 hours or more per day",
					value: "4 hours or more per day",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 21",
			label:
				"En la última semana, en un día promedio, ¿cuánto tiempo pasaste jugando activamente, solo por diversión?",
			kid_label:
				"En la última semana, en un día promedio, ¿cuánto tiempo pasaste jugando activamente, solo por diversión?",
			adult_label:
				"En la última semana, en un día promedio, ¿cuánto tiempo pasó su hija o hijo jugando activamente, solo por diversión?",
			choices: [
				{
					label: "Nada",
					value: "None",
				},
				{
					label: "Menos de 1 hora por día",
					value: "Less than 1 hour per day",
				},
				{
					label: "De 1 a menos de 2 horas por día",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "De 2 a menos de 3 horas por día",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "De 3 a menos de 4 horas por día",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 horas o más por día",
					value: "4 hours or more per day",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 21",
			label:
				"In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
			kid_label:
				"In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
			adult_label:
				"In the past week, on a normal day, how much time did your child spend playing actively, just for fun?",
			kid_sublabel:
				"These activities are not done for competing or training. Examples include playing ball games for fun, playing in a swimming pool, jumping on a trampoline, tag, hide and seek, playing in the sandbox, building forts or treehouses.",
			adult_sublabel:
				"These activities are not done for competing or training. Examples include playing ball games for fun, playing in a swimming pool, jumping on a trampoline, tag, hide and seek, playing in the sandbox, building forts or treehouses.",
			choices: [
				{
					label: "None",
					value: "None",
				},
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to less than 2 hours per day",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 to less than 3 hours per day",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 to less than 4 hours per day",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 hours or more per day",
					value: "4 hours or more per day",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 21",
			label:
				"M’sabata yapitayi, ndi nthawi yochuluka bwanji pa tsiku yomwe unasewera masewero othamangathamanga pongosangalala chabe?",
			kid_label:
				"M’sabata yapitayi, ndi nthawi yochuluka bwanji pa tsiku yomwe unasewera masewero othamangathamanga pongosangalala chabe?",
			adult_label:
				"M’sabata yapitayi, ndi nthawi yochuluka bwanji pa tsiku yomwe mwana wanu anasewera masewero othamangathamanga pongosangalala chabe?",
			kid_sublabel:
				"Awa simasewero omwe amachitika popanga mpikisano kapena training. Zitsanzo zili ngati kusewera ndi mpira, chipako, chibisalilano, Fulaye, kupanga zawana ndi zina.",
			adult_sublabel:
				"Awa simasewero omwe amachitika popanga mpikisano kapena training. Zitsanzo zili ngati kusewera ndi mpira, chipako, chibisalilano, Fulaye, kupanga zawana ndi zina.",
			choices: [
				{
					label: "Sunasewereko",
					value: "None",
					label_mode: {
						kid: "Sunasewereko",
						adult: "Sanasewere",
					},
				},
				{
					label: "Osafika ola limodzi pa tsiku",
					value: "Less than 1 hour per day",
					label_mode: {
						kid: "Osafika ola limodzi pa tsiku",
						adult: "Osafika 1 hour pa tsiku",
					},
				},
				{
					label: "Ola limodzi koma osafika 2 hours patsiku",
					value: "1 to less than 2 hours per day",
					label_mode: {
						kid: "Ola limodzi koma osafika 2 hours patsiku",
						adult: "1 hour koma osafika 2 hours patsiku",
					},
				},
				{
					label: "Maola awiri koma osafika 3 hours patsiku",
					value: "2 to less than 3 hours per day",
					label_mode: {
						kid: "Maola awiri koma osafika 3 hours patsiku",
						adult: "2 hours koma osafika 3 hours patsiku",
					},
				},
				{
					label: "Kupitilira maola atatu koma osafika 4 hours patsiku",
					value: "3 to less than 4 hours per day",
					label_mode: {
						kid: "Kupitilira maola atatu koma osafika 4 hours patsiku",
						adult: "3 hours koma osafika 4 hours patsiku",
					},
				},
				{
					label: "Kupitilira maola 4 patsiku",
					value: "4 hours or more per day",
					label_mode: {
						kid: "Kupitilira maola 4 patsiku",
						adult: "Kupitilira maola 4 kapena 4 hours patsiku",
					},
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २१",
			label:
				"गेल्या आठवड्यात, कोणत्याही सर्वसामान्य दिवशी, तुम्ही किती वेळ केवळ मजेसाठी सक्रियपणे खेळलात?",
			kid_label:
				"गेल्या आठवड्यात, कोणत्याही सर्वसामान्य दिवशी, तुम्ही किती वेळ केवळ मजेसाठी सक्रियपणे खेळलात?",
			adult_label:
				"मागील आठवड्यात, कोणत्याही सर्वसामान्य दिवशी, तुमचे मूल किती वेळ केवळ मजेसाठी सक्रियपणे खेळले?",
			kid_sublabel:
				"या हालचाली स्पर्धेसाठी अथवा प्रशिक्षणासाठी केल्या जात नाहीत. उदा. बॉल गेम्स खेळणे, स्विमिंग पूलमध्ये खेळणे, ट्रॅम्पोलिनवर उड्या मारणे, लपाछपी, वाळूत खेळणे, किल्ले अथवा ट्री हाऊस बनवणे इ.",
			adult_sublabel:
				"या हालचाली स्पर्धेसाठी अथवा प्रशिक्षणासाठी केल्या जात नाहीत. उदा. बॉल गेम्स खेळणे, स्विमिंग पूलमध्ये खेळणे, ट्रॅम्पोलिनवर उड्या  मारणे, लपाछपी, वाळूत खेळणे, किल्ले अथवा ट्री हाऊस बनवणे इ.",
			choices: [
				{
					label: "अजिबात नाही",
					value: "None",
				},
				{
					label: "दररोज एक तास किंवा त्यापेक्षा कमी",
					value: "An hour or less per day",
				},
				{
					label: "दररोज साधारण २ तास",
					value: "Approximately 2 hours per day",
				},
				{
					label: "दररोज  साधारण ३ तास",
					value: "Approximately 3 hours per day",
				},
				{
					label: "दररोज ४ किंवा अधिक तास",
					value: "4 hours or more per day",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २१",
			label:
				"पिछले सप्ताह में, एक सामान्य दिन में, आपने केवल मनोरंजन के लिए, सक्रिय रूप से खेलने में कितना समय बिताया?",
			kid_label:
				"पिछले सप्ताह में, एक सामान्य दिन में, आपने केवल मनोरंजन के लिए, सक्रिय रूप से खेलने में कितना समय बिताया?",
			adult_label:
				"पिछले सप्ताह में, एक सामान्य दिन में, आपके बच्चे ने केवल मनोरंजन के लिए, सक्रिय रूप से खेलने में कितना समय बिताया?",
			kid_sublabel:
				"ये वे गतिविधियाँ हैं जो प्रतिस्पर्धा या प्रशिक्षण के लिए नहीं की गईं। उदाहरणों में मनोरंजन के लिए बॉल गेम्स खेलना, स्विमिंग पूल में खेलना, ट्रैम्पोलिन पर कूदना, पकड़म-पकड़ाई खेलना, लुका-छिपी खेलना, सैंडबॉक्स में खेलना, किले या ट्री हाउस बनाना आदि शामिल हैं।",
			adult_sublabel:
				"ये वे गतिविधियाँ हैं जो प्रतिस्पर्धा या प्रशिक्षण के लिए नहीं की गईं। उदाहरणों में मनोरंजन के लिए बॉल गेम्स खेलना, स्विमिंग पूल में खेलना, ट्रैम्पोलिन पर कूदना, पकड़म-पकड़ाई खेलना, लुका-छिपी खेलना, सैंडबॉक्स में खेलना, किले या ट्री हाउस बनाना आदि शामिल हैं।",
			choices: [
				{
					label: "कुछ भी नहीं",
					value: "None",
				},
				{
					label: "प्रति दिन 1 घंटे से कम",
					value: "Less than 1 hour per day",
				},
				{
					label: "प्रति दिन 1 से 2 घंटे",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "प्रति दिन 2 से 3 घंटे ",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "प्रति दिन 3 से 4 घंटे",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "प्रति दिन 4 घंटे या अधिक",
					value: "4 hours or more per day",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 21",
			label:
				"In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
			kid_label:
				"In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
			adult_label:
				"In the past week, on a normal day, how much time did your child spend playing actively, just for fun?",
			kid_sublabel:
				"These activities are not done for competing or training. Examples include playing ball games for fun, playing in a swimming pool, jumping on a trampoline, hide and seek, etc.",
			adult_sublabel:
				"These activities are not done for competing or training. Examples include playing ball games for fun, playing in a swimming pool, jumping on a trampoline, hide and seek, etc.",
			choices: [
				{
					label: "None",
					value: "None",
				},
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to less than 2 hours per day",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 to less than 3 hours per day",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 to less than 4 hours per day",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 hours or more per day",
					value: "4 hours or more per day",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "السؤال 21",
			label: "خلال الأسبوع الماضي، في الأيام العادية، كم من الوقت قضيت في اللعب بنشاط، للمتعة فقط؟",
			kid_label:
				"خلال الأسبوع الماضي، في الأيام العادية، كم من الوقت قضيت في اللعب بنشاط، للمتعة فقط؟",
			adult_label:
				"خلال الأسبوع الماضي، في الأيام العادية، كم من الوقت قضى طفلك باللعب بنشاط، للمتعة فقط؟",
			kid_sublabel:
				".هذه الأنشطة ليست للتنافس أو التدريب. ومن الأمثلة على ذلك اللعب بالكرة للمرح واللعب في المسبح والقفز على الترامبولين ولعبة الغميضة وغيرها",
			adult_sublabel:
				".هذه الأنشطة ليست للتنافس أو التدريب. ومن الأمثلة على ذلك اللعب بالكرة للمرح واللعب في المسبح والقفز على الترامبولين ولعبة الغميضة وغيرها",
			choices: [
				{
					label: "لا شيء",
					value: "None",
				},
				{
					label: "أقل من ساعة في اليوم",
					value: "Less than 1 hour per day",
				},
				{
					label: "ما بين ساعة وأقل من ساعتين في اليوم",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "ما بين ساعتين وأقل من 3 ساعات في اليوم",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "ما بين 3 ساعات وأقل من 4 ساعات في اليوم",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "ساعات أو أكثر في اليوم" + "4",
					value: "4 hours or more per day",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २१",
			label:
				"पछिल्लो (गएको/ बितेको) हप्ता, एक सामान्य दिनमा, तपाईं रमाइलोको लागि सक्रिय रुपमा कति समय खेल्नुभयो?",
			kid_label:
				"पछिल्लो (गएको/ बितेको) हप्ता, एक सामान्य दिनमा, तपाईं रमाइलोको लागि सक्रिय रुपमा कति समय खेल्नुभयो?",
			adult_label:
				"पछिल्लो (गएको/ बितेको) हप्ता, एक सामान्य दिनमा, रमाइलोको लागि तपाईंको छोरा वा छोरीले सक्रिय रुपमा कति समय खेल्नुभयो?",
			kid_sublabel:
				"हामीले यसमा कुनै प्रतिस्पर्धा वा तालिमका गतिविधिबारे उल्लेख नगरेको कुरा app ले प्रस्ट पार्नेछ l बालबालिकाहरुलाई त्यस काममा लाग्ने उपयुक्त समय बताउन लगाईनेछ l उदाहरणमा भकुण्डो खेलहरु, लुकामारी, बालुवाको बाकसमा खेल्ने, साना रुखघरहरु बनाउने आदि पर्दछन् l",
			adult_sublabel:
				"हामीले यसमा कुनै प्रतिस्पर्धा वा तालिमका गतिविधिबारे उल्लेख नगरेको कुरा app ले प्रस्ट पार्नेछ l अभिभावकहरुलाई त्यस काममा लाग्ने अनुकुल समय बताउन लगाईनेछ l उदाहरणमा भकुण्डो खेलहरु, लुकामारी, बालुवाको बाकसमा खेल्ने, साना रुखघरहरु बनाउने आदि पर्दछन् l",
			choices: [
				{
					label: "कुनै पनि नगरेको",
					value: "None",
				},
				{
					label: "प्रत्येक दिन एक घण्टा भन्दा कम",
					value: "Less than 1 hour per day",
				},
				{
					label: "प्रत्येक दिन एक घण्टा देखि दुई घण्टा भन्दा कम",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "प्रत्येक दिन दुई घण्टा देखि तीन घण्टा भन्दा कम",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "प्रत्येक दिन तीन घण्टा देखि चार घण्टा भन्दा कम",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "प्रत्येक दिन चार घण्टा वा बढी",
					value: "4 hours or more per day",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 21",
			label:
				"Na última semana, em um dia normal, quanto tempo você passou jogando ou brincando ativamente, apenas por diversão? Essas atividades não são realizadas para competição ou treinamento. Exemplos incluem jogar bola por diversão, brincar de pula-pula, brincar na piscina, brincar de pega-pega, esconde-esconde, brincar correndo na rua ou no parque por diversão.",
			kid_label:
				"Na última semana, em um dia normal, quanto tempo você passou jogando ou brincando ativamente, apenas por diversão? Essas atividades não são realizadas para competição ou treinamento. Exemplos incluem jogar bola por diversão, brincar de pula-pula, brincar na piscina, brincar de pega-pega, esconde-esconde, brincar correndo na rua ou no parque por diversão.",
			adult_label:
				"Na última semana, em um dia normal, quanto tempo a criança ou adolescente que você é responsável passou jogando ou brincando ativamente, apenas por diversão? Essas atividades não são realizadas para competição ou treinamento. Exemplos incluem jogar bola por diversão, brincar de pula-pula, brincar na piscina, brincar de pega-pega, esconde-esconde, brincar correndo na rua ou no parque por diversão.",
			choices: [
				{
					label: "Nenhum",
					value: "None",
				},
				{
					label: "Menos que 1 hora por dia",
					value: "Less than 1 hour per day",
				},
				{
					label: "De 1 hora até menos que 2 horas por dia",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "De 2 horas até menos que 3 horas por dia",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "De 3 horas até menos que 4 horas por dia",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 horas ou mais por dia",
					value: "4 hours or more per day",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 21",
			label:
				"Hur mycket tid rörde du dig, på din fritid (ej sport) under en vanlig dag den senaste veckan?",
			kid_label:
				"Hur mycket tid rörde du dig, på din fritid (ej sport) under en vanlig dag den senaste veckan?",
			adult_label:
				"Hur mycket tid var ditt barn aktiv på fritiden (ej organiserat idrott eller transport) under en vanlig dag den senaste veckan?",
			choices: [
				{
					label: "Ingen",
					value: "None",
				},
				{
					label: "Mindre än 1 timme per dag",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 till mindre än 2 timmar per dag",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 till mindre än 3 timmar per dag",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 till mindre än 4 timmar per dag",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 timmar eller mer per dag",
					value: "4 hours or more per day",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 21",
			label: "สัปดาห์ที่แล้ว น้องใช้เวลากับการเล่นออกแรงเพื่อความสนุกสนานมากน้อยเพียงใด?",
			kid_label: "สัปดาห์ที่แล้ว น้องใช้เวลากับการเล่นออกแรงเพื่อความสนุกสนานมากน้อยเพียงใด?",
			adult_label:
				"สัปดาห์ที่แล้ว บุตรหลานของคุณใช้เวลากับการเล่นออกแรงเพื่อความสนุกสนานมากน้อยเพียงใด?",
			kid_sublabel:
				"กิจกรรมในที่นี้จะไม่รวมถึงกิจกรรมที่ทำเพื่อการแข่งขันหรือฝึกซ้อม ตัวอย่างกิจกรรม เช่น การเล่นบอลเพื่อความสนุกสนาน การเล่นในสระว่ายน้ำ การกระโดดเล่นบนแทรมโพลีน การเล่นวิ่งไล่จับ การเล่นซ่อนหา การเล่นในกระบะทราย การสร้างป้อมหรือบ้านต้นไม้ เป็นต้น",
			adult_sublabel:
				"กิจกรรมในที่นี้จะไม่รวมถึงกิจกรรมที่ทำเพื่อการแข่งขันหรือฝึกซ้อม ตัวอย่างกิจกรรม เช่น การเล่นบอลเพื่อความสนุกสนาน การเล่นในสระว่ายน้ำ การกระโดดเล่นบนแทรมโพลีน การเล่นวิ่งไล่จับ การเล่นซ่อนหา การเล่นในกระบะทราย การสร้างป้อมหรือบ้านต้นไม้ เป็นต้น",
			choices: [
				{
					label: "ไม่มีเลย",
					value: "None",
				},
				{
					label: "น้อยกว่า 1 ชั่วโมง (ต่อวัน)",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 ชั่วโมงแต่ไม่ถึง 2 ชั่วโมง (ต่อวัน)",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 ชั่วโมงแต่ไม่ถึง 3 ชั่วโมง (ต่อวัน)",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 ชั่วโมงแต่ไม่ถึง 4 ชั่วโมง (ต่อวัน)",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 ชั่วโมงขึ้นไป (ต่อวัน)",
					value: "4 hours or more per day",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 21",
			label: "在过去一周里，你每天仅仅是为了玩耍而进行的活动平均有多长时间？",
			kid_label: "在过去一周里，你每天仅仅是为了玩耍而进行的活动平均有多长时间？",
			adult_label: "在过去一周里，您的孩子每天仅仅是为了玩耍而进行的活动平均有多长时间？",
			choices: [
				{
					label: "无",
					value: "None",
				},
				{
					label: "每天少于1小时",
					value: "Less than 1 hour per day",
				},
				{
					label: "每天1-2小时",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "每天2-3小时",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "每天3-4小时",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "每天4小时及以上",
					value: "4 hours or more per day",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 21",
			label:
				"Durante la semana pasada, en un día normal, ¿cuánto tiempo pasaste jugando activamente, solo por diversión?",
			kid_label:
				"Durante la semana pasada, en un día normal, ¿cuánto tiempo pasaste jugando activamente, solo por diversión?",
			adult_label:
				"Durante la semana pasada, en un día normal, ¿cuánto tiempo pasó su hija o hijo jugando activamente, solo por diversión?",
			choices: [
				{
					label: "Nada",
					value: "None",
				},
				{
					label: "Menos de 1 hora al día",
					value: "Less than 1 hour per day",
				},
				{
					label: "De 1 a menos de 2 horas al día",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "De 2 a menos de 3 horas al día",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "De 3 a menos de 4 horas al día",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 horas o más al día",
					value: "4 hours or more per day",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 21",
			label:
				"En la última semana, en un día normal, ¿cuánto tiempo pasaste jugando activamente, solo por diversión?",
			kid_label:
				"En la última semana, en un día normal, ¿cuánto tiempo pasaste jugando activamente, solo por diversión?",
			adult_label:
				"En la última semana, en un día normal, ¿cuánto tiempo pasó su hija o hijo jugando activamente, solo por diversión?",
			kid_sublabel:
				"Estas actividades no se realizan para competir o entrenar. Algunos ejemplos incluyen juegos de pelota por diversión, jugar en una piscina, saltar en camas elásticas o brincolines, jugar escondidas, jugar en el arenero, construir casas en los árboles, etc.",
			adult_sublabel:
				"Estas actividades no se realizan para competir o entrenar. Algunos ejemplos incluyen juegos de pelota por diversión, jugar en una piscina, saltar en camas elásticas o brincolines, jugar escondidas, jugar en el arenero, construir casas en los árboles, etc.",
			choices: [
				{
					label: "Nada",
					value: "None",
				},
				{
					label: "Menos de 1 hora al día",
					value: "Less than 1 hour per day",
				},
				{
					label: "De 1 a menos de 2 horas al día",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "De 2 a menos de 3 horas al día",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "De 3 a menos de 4 horas al día",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 horas o más al día",
					value: "4 hours or more per day",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 21",
			label:
				"Durant la dernière semaine, lors d'une journée normale, combien de temps as-tu passé à jouer activement, juste pour le plaisir?",
			kid_label:
				"Durant la dernière semaine, lors d'une journée normale, combien de temps as-tu passé à jouer activement, juste pour le plaisir?",
			adult_label:
				"Durant la dernière semaine, lors d'une journée normale, combien de temps ton enfant a-t-il (elle) passé à jouer activement, juste pour le plaisir?",
			kid_sublabel:
				"Ces activités ne sont pas pratiquées pour la compétition ou l'entraînement. Les exemples incluent jouer au ballon, jouer dans une piscine, sauter sur un trampoline, jouer à la tague, à cache-cache ou dans un carré de sable, construire des forts ou des cabanes dans les arbres, etc.",
			adult_sublabel:
				"Ces activités ne sont pas pratiquées pour la compétition ou l'entraînement. Les exemples incluent jouer au ballon, jouer dans une piscine, sauter sur un trampoline, jouer à la tague, à cache-cache ou dans un carré de sable, construire des forts ou des cabanes dans les arbres, etc.",
			choices: [
				{
					label: "Pas du tout",
					value: "None",
				},
				{
					label: "Moins d'une heure par jour",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 à moins de 2 heures par jour",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 à moins de 3 heures par jour",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 à moins de 4 heures par jour",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 heures ou plus par jour",
					value: "4 hours or more per day",
				},
			],
		},
	},
};

export default S6Q1;
