import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionCheckboxPayloadInterface } from "interface/payload.type";

const S4Q7: LangQuestionCheckboxPayloadInterface = {
	ident: "transportation_7",
	name: "Question 17:	In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
	column_name: "17.0 Tran",
	audio_ident: "transportation_7",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 17",
			label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			adult_label:
				"In the past week, did your child walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_sublabel: "Please select all responses that apply to you.",
			adult_sublabel: "Please select all responses that apply to your child.",
			choices: [
				{
					label: "Yes, I walked",
					value: "Walked",
					label_mode: {
						kid: "Yes, I walked",
						adult: "Yes, they walked",
					},
				},
				{
					label: "Yes, I wheeled",
					value: "Wheeled",
					label_mode: {
						kid: "Yes, I wheeled",
						adult: "Yes, they wheeled",
					},
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionCheckbox,
			heading: "Pregunta 17",
			label:
				"En la última semana, ¿has caminado o te has desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines) a lugares distintos del colegio o el trabajo (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			kid_label:
				"En la última semana, ¿has caminado o te has desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines) a lugares distintos del colegio o el trabajo (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			adult_label:
				"En la última semana su hija o hijo, ¿ha caminado o se ha desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines) a lugares distintos del colegio o el trabajo (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			kid_sublabel: "Por favor, seleccione todas las respuestas que le correspondan.",
			adult_sublabel: "Por favor, seleccione todas las respuestas que le correspondan.",
			choices: [
				{
					label: "Sí, caminé",
					value: "Walked",
					label_mode: {
						kid: "Sí, caminé",
						adult: "Sí, caminó",
					},
				},
				{
					label: "Sí, me desplacé sobre ruedas",
					value: "Wheeled",
					label_mode: {
						kid: "Sí, me desplacé sobre ruedas",
						adult: "Sí, se desplazó sobre ruedas",
					},
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionCheckbox,
			heading: "Question 17",
			label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			adult_label:
				"In the past week, did your child walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_sublabel: "Please select all responses that apply to you.",
			adult_sublabel: "Please select all responses that apply to your child.",
			choices: [
				{
					label: "Yes, I walked",
					value: "Walked",
					label_mode: {
						kid: "Yes, I walked",
						adult: "Yes, they walked",
					},
				},
				{
					label: "Yes, I wheeled",
					value: "Wheeled",
					label_mode: {
						kid: "Yes, I wheeled",
						adult: "Yes, they wheeled",
					},
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionCheckbox,
			heading: "Question 17",
			label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			adult_label:
				"In the past week, did your child walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_sublabel: "Please select all responses that apply to you.",
			adult_sublabel: "Please select all responses that apply to your child.",
			choices: [
				{
					label: "Yes, I walked",
					value: "Walked",
					label_mode: {
						kid: "Yes, I walked",
						adult: "Yes, they walked",
					},
				},
				{
					label: "Yes, I wheeled",
					value: "Wheeled",
					label_mode: {
						kid: "Yes, I wheeled",
						adult: "Yes, they wheeled",
					},
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionCheckbox,
			heading: "Funso 17",
			label:
				"M’sabata yapitayi, kodi unayenda wapansi, kapena kupalasa njinga kupita kumalo ena osati ku sukulu kapena kuntchito (Monga kwa anzanu, ku paki/ malo osewererako, ku shopu)?",
			kid_label:
				"M’sabata yapitayi, kodi unayenda wapansi, kapena kupalasa njinga kupita kumalo ena osati ku sukulu kapena kuntchito (Monga kwa anzanu, ku paki/ malo osewererako, ku shopu)?",
			adult_label:
				"M’sabata yapitayi, kodi mwana wanu anayenda wapansi, kapena kupalasa njinga kupita kumalo ena osati ku sukulu kapena kuntchito (Monga kwa anzake, ku paki/ malo osewererako, ku shopu)?",
			kid_sublabel: "Ukhoza kusankha mayankho onse omwe akukukhuza.",
			adult_sublabel: "Mukhoza kusankha mayankho onse omwe akukukhudza mwana wanu.",
			choices: [
				{
					label: "Inde ndinaenda",
					value: "Walked",
					label_mode: {
						kid: "Inde ndinaenda",
						adult: "Inde anaenda",
					},
				},
				{
					label: "Inde ndinapalasa njinga",
					value: "Wheeled",
					label_mode: {
						kid: "Inde ndinapalasa njinga",
						adult: "Inde anapalasa njinga",
					},
				},
				{
					label: "Ayi",
					value: "no",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionCheckbox,
			heading: "प्रश्न १७",
			label:
				"गेल्या आठवड्यात, तुम्ही शाळा किंवा कामाशिवाय इतर ठिकाणी (उदा. मित्राच्या घरी, बागेत, दुकानात) जाण्यासाठी सक्रिय पद्धतींचा वापर केला का? (उदा. चालणे, सायकल चालवणे, चाकांच्या साधनांचा वापर करणे इ.)",
			kid_label:
				"गेल्या आठवड्यात, तुम्ही शाळा किंवा कामाशिवाय इतर ठिकाणी (उदा. मित्राच्या घरी, बागेत, दुकानात) जाण्यासाठी सक्रिय पद्धतींचा वापर केला का? (उदा. चालणे, सायकल चालवणे, चाकांच्या साधनांचा वापर करणे इ.)",
			adult_label:
				"गेल्या आठवड्यात, तुमच्या मुलाने शाळा किंवा कामाशिवाय इतर ठिकाणी (उदा. मित्राच्या घरी, बागेत, दुकानात) जाण्यासाठी सक्रिय पद्धतींचा वापर केला का (उदा. चालणे, सायकल चालवणे, चाकांच्या साधनांचा वापर करणे इ.)",
			kid_sublabel: "कृपया तुम्हाला लागू होणारे सर्व प्रतिसाद निवडा",
			adult_sublabel: "कृपया त्याला/ तिला लागू होणारे सर्व प्रतिसाद निवडा",
			choices: [
				{
					label: "होय, मी चालत जातो/जाते",
					value: "Walked",
					label_mode: {
						kid: "होय, मी चालत जातो/जाते",
						adult: "होय, माझे मूल चालत गेले",
					},
				},
				{
					label: "होय, मी बाईकने जातो/जाते",
					value: "Other",
					label_mode: {
						kid: "होय, मी बाईकने जातो/जाते",
						adult: "होय, माझे मूल बाईकने गेले",
					},
				},
				{
					label: "होय, मी वेगळीच सक्रिय पद्धत वापरली. कृपया पद्धत नमूद करा",
					value: "Wheeled",
					label_mode: {
						kid: "होय, मी वेगळीच सक्रिय पद्धत वापरली. कृपया पद्धत नमूद करा",
						adult: "माझ्या मुलाने वेगळीच सक्रिय पद्धत वापरली. कृपया पद्धत नमूद करा",
					},
				},
				{
					label: "नाही",
					value: "no",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionCheckbox,
			heading: "प्रश्न १७",
			label:
				"पिछले सप्ताह में, क्या आप स्कूल या नौकरी के अलावा अन्य स्थानों (उदाहरण के लिए, किसी मित्र का घर, कोई पार्क, कोई दुकान) पर जाने के लिए पैदल या व्हीलिंग करके गए थे?",
			kid_label:
				"पिछले सप्ताह में, क्या आप स्कूल या नौकरी के अलावा अन्य स्थानों (उदाहरण के लिए, किसी मित्र का घर, कोई पार्क, कोई दुकान) पर जाने के लिए पैदल या व्हीलिंग करके गए थे?",
			adult_label:
				"पिछले सप्ताह में, क्या आपका बच्चा स्कूल या काम के अलावा अन्य स्थान जाने के लिए पैदल या व्हीलिंग करके गया था (उदाहरण के लिए, किसी दोस्त का घर, कोई पार्क, कोई दुकान)?",
			kid_sublabel: "कृपया उन सभी प्रतिक्रियाओं का चयन करें जो आप पर लागू होती हैं।",
			adult_sublabel: "कृपया उन सभी प्रतिक्रियाओं का चयन करें जो आपके बच्चे पर लागू होती हैं।",
			choices: [
				{
					label: "हां, मैं पैदल चलकर गया था",
					value: "Walked",
					label_mode: {
						kid: "हां, मैं पैदल चलकर गया था",
						adult: "हाँ, वह  पैदल चलकर गया था",
					},
				},
				{
					label: "हाँ, मैं व्हीलिंग करके गया था",
					value: "Wheeled",
					label_mode: {
						kid: "हाँ, मैं व्हीलिंग करके गया था",
						adult: "हाँ, वह व्हीलिंग करके गया था",
					},
				},
				{
					label: "नहीं",
					value: "no",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionCheckbox,
			heading: "Question 17",
			label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			adult_label:
				"In the past week, did your child walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_sublabel: "Please select all responses that apply to you.",
			adult_sublabel: "Please select all responses that apply to your child.",
			choices: [
				{
					label: "Yes, I walked",
					value: "Walked",
					label_mode: {
						kid: "Yes, I walked",
						adult: "Yes, they walked",
					},
				},
				{
					label: "Yes, I wheeled",
					value: "Wheeled",
					label_mode: {
						kid: "Yes, I wheeled",
						adult: "Yes, they wheeled",
					},
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionCheckbox,
			heading: "سؤال [١٧]",
			label:
				"خلال الأسبوع الماضي، هل قمت بالمشي أو استخدام العجلات للذهاب إلى أماكن أخرى غير المدرسة أو العمل (مثل منازل الأصدقاء أو الأقارب، الحديقة، والمتجر، وغيرها)؟",
			kid_label:
				"خلال الأسبوع الماضي، هل قمت بالمشي أو استخدام العجلات للذهاب إلى أماكن أخرى غير المدرسة أو العمل (مثل منازل الأصدقاء أو الأقارب، الحديقة، والمتجر، وغيرها)؟",
			adult_label:
				"خلال الأسبوع الماضي، هل قام طفلك بالمشي أو استخدام العجلات للذهاب إلى أماكن أخرى غير المدرسة أو العمل (مثل منازل الأصدقاء أو الأقارب، الحديقة، المتجر، وغيرها)؟",
			kid_sublabel: "يرجى تحديد جميع الخيارات التي تنطبق عليك.",
			adult_sublabel: "يرجى تحديد جميع الخيارات التي تنطبق عليه.",
			choices: [
				{
					label: "‌نعم، قام بالمشي",
					value: "Walked",
					label_mode: {
						kid: "‌نعم، قام بالمشي",
						adult: "نعم، قام بالمشي",
					},
				},
				{
					label: "‌نعم، قام باستخدام العجلات",
					value: "Wheeled",
					label_mode: {
						kid: "‌نعم، قام باستخدام العجلات",
						adult: "نعم، قام باستخدام العجلات",
					},
				},
				{
					label: "لا",
					value: "no",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionCheckbox,
			heading: "प्रश्न १७",
			label:
				"पछिल्लो (गएको/ बितेको) हप्तामा के तपाईंले यात्रा गर्ने प्रमुख माध्यम मार्फत (जस्तै: हिंड्ने, साइकल चलाउने, व्हिलिंग गर्ने) विध्यालय वा कामबाहेक अन्य ठाउँहरु जानुभयो? (जस्तै: साथीको घर, पार्क, पसल)?",
			kid_label:
				"पछिल्लो (गएको/ बितेको) हप्तामा के तपाईंले यात्रा गर्ने प्रमुख माध्यम मार्फत (जस्तै: हिंड्ने, साइकल चलाउने, व्हिलिंग गर्ने) विध्यालय वा कामबाहेक अन्य ठाउँहरु जानुभयो? (जस्तै: साथीको घर, पार्क, पसल)?",
			adult_label:
				"पछिल्लो (गएको/ बितेको) हप्तामा के तपाईंको छोरा वा छोरी, विध्यालय वा कामबाहेक अन्य ठाउँहरुमा हिडेर वा साइकल चलाएर जानुभयो (जस्तै: साथीको घर, पार्क, पसल)?",
			kid_sublabel: "कृपया लागु हुने सबै विकल्पहरु छान्नुहोला l",
			adult_sublabel: "कृपया लागु हुने सबै विकल्पहरु छान्नुहोला l",
			choices: [
				{
					label: "हो, म हिंडे",
					value: "Walked",
					label_mode: {
						kid: "हो, म हिंडे",
						adult: "हो, ऊ हिड्यो/ उनि हिडिन्",
					},
				},
				{
					label: "हो, मैले बाइक चलाए",
					value: "Wheeled",
					label_mode: {
						kid: "हो, मैले बाइक चलाए",
						adult: "हो, उसले साइकल चलायो/ उनले साइकल चलाइन्",
					},
				},
				{
					label: "कतै पनि गईन",
					value: "no",
					label_mode: {
						kid: "कतै पनि गईन",
						adult: "कतै पनि गएन/गइनन्",
					},
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionCheckbox,
			heading: "Questão 17",
			label:
				"Na última semana, você caminhou ou usou outro meio de transporte ativo, por exemplo, bicicleta, cadeira de rodas, skate, patinete, patins, para ir a outros lugares além da escola ou trabalho, como por exemplo, casa de um amigo, um parque, uma loja?",
			kid_label:
				"Na última semana, você caminhou ou usou outro meio de transporte ativo, por exemplo, bicicleta, cadeira de rodas, skate, patinete, patins, para ir a outros lugares além da escola ou trabalho, como por exemplo, casa de um amigo, um parque, uma loja?",
			adult_label:
				"Na última semana, a criança ou adolescente que você é responsável caminhou ou usou outro meio de transporte ativo, por exemplo, bicicleta, cadeira de rodas, skate, patinete, patins, para ir a outros lugares além da escola ou trabalho, como por exemplo, casa de um amigo, um parque, uma loja?",
			kid_sublabel: "Selecione todas as respostas que se aplicam a você.",
			adult_sublabel: "Selecione todas as respostas que se aplicam a ele ou ela.",
			choices: [
				{
					label: "Sim, eu fui caminhando",
					value: "Walked",
					label_mode: {
						kid: "Sim, eu fui caminhando",
						adult: "Sim, ele(a) foi caminhando",
					},
				},
				{
					label: "Sim, eu fui de bicicleta ou outro meio de transporte ativo",
					value: "Wheeled",
					label_mode: {
						kid: "Sim, eu fui de bicicleta ou outro meio de transporte ativo",
						adult: "Sim, ele(a) foi de bicicleta ou outro meio de transporte ativo",
					},
				},
				{
					label: "Não",
					value: "no",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionCheckbox,
			heading: "Fråga 17",
			label:
				"Gick eller cyklade (eller åkte rullstol, e-cykel, sparkcykel eller rollerblades) du till någon annan plats än skola eller arbete under den senaste veckan (till exempel till en kompis, till parken eller en butik)?",
			kid_label:
				"Gick eller cyklade (eller åkte rullstol, e-cykel, sparkcykel eller rollerblades) du till någon annan plats än skola eller arbete under den senaste veckan (till exempel till en kompis, till parken eller en butik)?",
			adult_label:
				"Gick eller cyklade (eller åkte rullstol, e-cykel, sparkcykel eller rollerblades) ditt barn till någon annan plats än skola eller arbete under den senaste veckan (till exempel till en kompis, till parken eller en butik)?",
			kid_sublabel: "Välj alla alternativ du gjort.",
			adult_sublabel: "Välj alla alternativ ditt barn har gjort.",
			choices: [
				{
					label: "Ja, jag har gått",
					value: "Walked",
					label_mode: {
						kid: "Ja, jag har gått",
						adult: "Ja, mitt barn har gått",
					},
				},
				{
					label: "Ja jag har cyklat (eller åkt rullstol, e-cykel, sparkcykel eller rollerblades)",
					value: "Wheeled",
					label_mode: {
						kid: "Ja jag har cyklat (eller åkt rullstol, e-cykel, sparkcykel eller rollerblades)",
						adult:
							"Ja mitt barn har cyklat (eller åkt rullstol, e-cykel, sparkcykel eller rollerblades)",
					},
				},
				{
					label: "Nej",
					value: "no",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionCheckbox,
			heading: "ข้อ 17",
			label:
				"สัปดาห์ที่แล้ว น้องได้เดินหรือใช้อุปกรณ์หรือรถที่มีล้อ หรือล้อเลื่อนที่ใช้การออกแรงของร่างกาย เพื่อไปสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานหรือไม่?  (เช่น บ้านเพื่อน สวนสาธารณะ ร้านขายของ)",
			kid_label:
				"สัปดาห์ที่แล้ว น้องได้เดินหรือใช้อุปกรณ์หรือรถที่มีล้อ หรือล้อเลื่อนที่ใช้การออกแรงของร่างกาย เพื่อไปสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานหรือไม่?  (เช่น บ้านเพื่อน สวนสาธารณะ ร้านขายของ)",
			adult_label:
				"สัปดาห์ที่แล้ว บุตรหลานของคุณได้เดินหรือใช้อุปกรณ์หรือรถที่มีล้อ หรือล้อเลื่อนที่ใช้การออกแรงของร่างกาย เพื่อไปสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานหรือไม่?  (เช่น บ้านเพื่อน สวนสาธารณะ ร้านขายของ)",
			kid_sublabel: "ขอให้เลือกคำตอบทั้งหมดที่ตรงกับน้อง",
			adult_sublabel: "ขอให้เลือกคำตอบทั้งหมดที่ตรงกับบุตรหลานของคุณ",
			choices: [
				{
					label: "ใช่ ฉันเดิน",
					value: "Walked",
					label_mode: {
						kid: "ใช่ ฉันเดิน",
						adult: "ใช่ บุตรหลานของฉันเดิน",
					},
				},
				{
					label: "ใช่ ฉันใช้อุปกรณ์หรือรถที่มีล้อ หรือล้อเลื่อนที่ใช้การออกแรงของร่างกาย",
					value: "Wheeled",
					label_mode: {
						kid: "ใช่ ฉันใช้อุปกรณ์หรือรถที่มีล้อ หรือล้อเลื่อนที่ใช้การออกแรงของร่างกาย",
						adult:
							"ใช่ บุตรหลานของฉันใช้อุปกรณ์หรือรถที่มีล้อ หรือล้อเลื่อนที่ใช้การออกแรงของร่างกาย",
					},
				},
				{
					label: "ไม่",
					value: "no",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionCheckbox,
			heading: "问题 17",
			label:
				"在过去一周里，你是否采用积极交通方式（如步行和骑自行车）去学校或工作以外的地方(如朋友家、公园、商店)?",
			kid_label:
				"在过去一周里，你是否采用积极交通方式（如步行和骑自行车）去学校或工作以外的地方(如朋友家、公园、商店)?",
			adult_label:
				"在过去一周里，您的孩子是否采用积极交通方式（如步行或骑自行车）去学校或工作以外的地方(如朋友家、公园、商店)?",
			kid_sublabel: "请选择所有适用于你的答案。",
			adult_sublabel: "请选择所有适用于您的孩子的答案。",
			choices: [
				{
					label: "是的，我步行去",
					value: "Walked",
					label_mode: {
						kid: "是的，我步行去",
						adult: "是的，他/她步行去",
					},
				},
				{
					label: "是的，我骑自行车去",
					value: "Wheeled",
					label_mode: {
						kid: "是的，我骑自行车去",
						adult: "是的，他/她骑自行车去",
					},
				},
				{
					label: "否",
					value: "no",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionCheckbox,
			heading: "Pregunta 17",
			label:
				"Durante la semana pasada, ¿has caminado o te has desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patinete, patines) a lugares distintos al trabajo o voluntariado, la escuela o colegio (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			kid_label:
				"Durante la semana pasada, ¿has caminado o te has desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patinete, patines) a lugares distintos al trabajo o voluntariado, la escuela o colegio (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			adult_label:
				"Durante la semana pasada, ¿su hija o hijo ha caminado o se ha desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patinete, patines) a lugares distintos al trabajo o voluntariado, la escuela o colegio (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			kid_sublabel: "Por favor, selecciona todas las respuestas que correspondan",
			adult_sublabel: "Por favor, seleccione todas las respuestas que le correspondan",
			choices: [
				{
					label: "Sí, caminé",
					value: "Walked",
					label_mode: {
						kid: "Sí, caminé",
						adult: "Sí, caminó",
					},
				},
				{
					label: "Sí, me desplacé sobre ruedas",
					value: "Wheeled",
					label_mode: {
						kid: "Sí, me desplacé sobre ruedas",
						adult: "Sí, se desplazó sobre ruedas",
					},
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionCheckbox,
			heading: "Pregunta 17",
			label:
				"En la última semana, ¿has caminado o te has desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines) a lugares distintos del trabajo, la escuela o colegio (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			kid_label:
				"En la última semana, ¿has caminado o te has desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines) a lugares distintos del trabajo, la escuela o colegio (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			adult_label:
				"En la última semana, ¿su hija o hijo ha caminado o se ha desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines) a lugares distintos de trabajo, la escuela o colegio (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			kid_sublabel: "Por favor, selecciona todas las respuestas que correspondan",
			adult_sublabel: "Por favor, selecciona todas las respuestas que correspondan",
			choices: [
				{
					label: "Sí, caminé",
					value: "Walked",
					label_mode: {
						kid: "Sí, caminé",
						adult: "Sí, caminó",
					},
				},
				{
					label: "Sí, me desplacé sobre ruedas",
					value: "Wheeled",
					label_mode: {
						kid: "Sí, me desplacé sobre ruedas",
						adult: "Sí, se desplazó sobre ruedas",
					},
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 17",
			label:
				"Au cours de la dernière semaine, as-tu marché ou roulé pour aller à des endroits autres que l'école ou le travail (par exemple, chez un ami, à un parc ou un magasin)?",
			kid_label:
				"Au cours de la dernière semaine, as-tu marché ou roulé pour aller à des endroits autres que l'école ou le travail (par exemple, chez un ami, à un parc ou un magasin)?",
			adult_label:
				"Au cours de la dernière semaine, ton enfant a-t-il (elle) marché ou roulé pour aller à des endroits autres que l'école ou le travail (par exemple, chez un ami, à un parc ou un magasin)?",
			kid_sublabel: "Svp, sélectionne toutes les réponses qui s'appliquent à toi.",
			adult_sublabel: "Svp, sélectionne toutes les réponses qui s'appliquent à ton enfant.",
			choices: [
				{
					label: "Oui, j'ai marché",
					value: "Walked",
					label_mode: {
						kid: "Oui, j'ai marché",
						adult: "Oui, il (elle) a marché",
					},
				},
				{
					label: "Oui, j'ai roulé",
					value: "Wheeled",
					label_mode: {
						kid: "Oui, j'ai roulé",
						adult: "Oui, il (elle) a roulé",
					},
				},
				{
					label: "Non",
					value: "no",
				},
			],
		},
	},
};

export default S4Q7;
