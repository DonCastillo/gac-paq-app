import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioImagePayloadInterface } from "interface/payload.type";

const S4Q4: LangQuestionRadioImagePayloadInterface = {
	ident: "transportation_4",
	name: "Question 16:	How did you go to work in the past week?",
	column_name: "16.0 Tran",
	audio_ident: "transportation_4",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 16",
			label: "How did you go to work in the past week?",
			kid_label: "How did you go to work in the past week?",
			adult_label: "How did your child go to work in the past week?",
			kid_sublabel: "Select the mode that you used the most.",
			adult_sublabel: "Select the mode that your child used the most.",
			choices: [
				{
					label: "Walking",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "Wheeling",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "for example, wheelchair use, bicycle, e-bicycle, skateboard, push scooter, rollerblades",
						adult:
							"for example, wheelchair use, bicycle, e-bicycle, skateboard, push scooter, rollerblades",
					},
				},
				{
					label: "Public transit",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "example: bus, train, tramway, subway, boat",
						adult: "example: bus, train, tramway, subway, boat",
					},
				},
				{
					label: "Car, taxi, truck, or motorcycle",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Other, which one?",
					value: "Other",
					image_ident: "other",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadioImage,
			heading: "السؤال 16",
			label: "كيف ذهبت إلى العمل خلال الأسبوع الماضي؟",
			kid_label: "كيف ذهبت إلى العمل خلال الأسبوع الماضي؟",
			adult_label: "كيف ذهب طفلك إلى العمل خلال الأسبوع الماضي؟ ",
			kid_sublabel: "حدد الوسيلة الأكثر استخداماً",
			adult_sublabel: "حدد الوسيلة الاكثر استخداماً",
			choices: [
				{
					label: "المشي",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "العجلات",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "مثل الدراجة الهوائية، الدراجة الإلكترونية، لوح التزلج، سكوتر، حذاء التزلج، الكرسي المتحرك، وغيرها",
						adult:
							"مثل الدراجة الهوائية، الدراجة الإلكترونية، لوح التزلج، سكوتر، حذاء التزلج، الكرسي المتحرك، وغيرها",
					},
				},
				{
					label: "النقل العام",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "مثل الحافلة، القطار، الترام، المترو، أو القارب",
						adult: "مثل الحافلة، القطار، الترام، المترو، أو القارب",
					},
				},
				{
					label: "السيارة، التاكسي، أو الدراجة النارية",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "وسيلة أخرى – ما هي؟",
					value: "Other",
					image_ident: "other",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadioImage,
			heading: "प्रश्न १६",
			label: "पछिल्लो (गएको/ बितेको) हप्ता तपाईं काममा कसरी जानुभयो?",
			kid_label: "पछिल्लो (गएको/ बितेको) हप्ता तपाईं काममा कसरी जानुभयो?",
			adult_label: "पछिल्लो (गएको/ बितेको) हप्ता तपाईंको छोरा वा छोरी काममा कसरी जानुभयो?",
			kid_sublabel: "तपाईंले प्रयोग गर्ने मुख्य माध्यम छान्नुहोस्",
			adult_sublabel: "तपाईंको छोरा वा छोरीले प्रयोग गर्ने मुख्य माध्यम छान्नुहोस्",
			choices: [
				{
					label: "हिंड्दै",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "व्हिलिंग (पांग्राको प्रयोग गर्दै)",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "व्हिलचेयर, स्केटबोर्ड, धकेल्ने स्कुटर, रोलरब्लेड",
						adult: "व्हिलचेयर, स्केटबोर्ड, धकेल्ने स्कुटर, रोलरब्लेड",
					},
				},
				{
					label: "सार्वजनिक माध्यम",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "जस्तै: बस, ट्रेन, सबवे, डुंगा",
						adult: "जस्तै: बस, ट्रेन, सबवे, डुंगा",
					},
				},
				{
					label: "कार, ट्याक्सी, ट्रक, मोटरसाइकल",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "अन्य",
					value: "Other",
					image_ident: "other",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadioImage,
			heading: "Pergunta 16",
			label: "Na última semana, como você foi para o trabalho?",
			kid_label: "Na última semana, como você foi para o trabalho?",
			adult_label: "Na última semana, como o(a) seu(sua) filho(a) foi para o trabalho?",
			kid_sublabel: "Selecione o meio de transporte principal que você usou.",
			adult_sublabel: "Selecione o meio de transporte principal que o(a) seu(sua) filho(a) usou.",
			choices: [
				{
					label: "Caminhando",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "Sobre rodas",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "por exemplo, cadeira de rodas, bicicleta, skate, patinete, patins",
						adult: "por exemplo, cadeira de rodas, bicicleta, skate, patinete, patins",
					},
				},
				{
					label: "Transporte público",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "por exemplo, ônibus, trem, bonde, metrô, barco, balsa",
						adult: "por exemplo, ônibus, trem, bonde, metrô, barco, balsa",
					},
				},
				{
					label: "Carro, taxi, caminhão ou moto",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Outro",
					value: "Other",
					image_ident: "other",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadioImage,
			heading: "Fråga 16",
			label: "Hur tog du dig till arbetet (eller ditt ideella arbete) den senaste veckan?",
			kid_label: "Hur tog du dig till arbetet (eller ditt ideella arbete) den senaste veckan?",
			adult_label: "How did your child go to work in the past week?",
			kid_sublabel: "Välj det du oftast gjorde.",
			adult_sublabel: "Välj det han/hon oftast gjorde.",
			choices: [
				{
					label: "Gång",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "Cykel",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "eller åkt rullstol, e-cykel, sparkcykel eller rollerblades",
						adult: "eller åkt rullstol, e-cykel, sparkcykel eller rollerblades",
					},
				},
				{
					label: "Kollektivtrafik",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "t.ex. buss, tåg, spårväg, tunnelbana, båt",
						adult: "t.ex. buss, tåg, spårväg, tunnelbana, båt",
					},
				},
				{
					label: "Bil, taxi eller moped",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Annat, vilket?",
					value: "Other",
					image_ident: "other",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadioImage,
			heading: "คำถาม 16",
			label: "สัปดาห์ที่แล้ว น้องเดินทางไปทำงานอย่างไร?",
			kid_label: "สัปดาห์ที่แล้ว น้องเดินทางไปทำงานอย่างไร?",
			adult_label: "สัปดาห์ที่แล้ว บุตรหลานของคุณเดินทางไปทำงานอย่างไร?",
			kid_sublabel: "เลือกวิธีการเดินทางที่น้องใช้เป็นหลัก",
			adult_sublabel: "เลือกวิธีการเดินทางที่บุตรหลานของคุณใช้เป็นหลัก",
			choices: [
				{
					label: "เดิน ",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "อุปกรณ์หรือรถที่มีล้อ หรือล้อเลื่อนที่ใช้การออกแรงของร่างกาย",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "เช่น จักรยาน จักรยานไฟฟ้า สเก็ตบอร์ด สกู๊ตเตอร์ โรลเลอร์เบลด วีลแชร์",
						adult: "เช่น จักรยาน จักรยานไฟฟ้า สเก็ตบอร์ด สกู๊ตเตอร์ โรลเลอร์เบลด วีลแชร์",
					},
				},
				{
					label: "การขนส่งสาธารณะ",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "เช่น รถประจำทาง/รถเมล์ รถไฟ รถราง รถไฟใต้ดิน เรือ",
						adult: "เช่น รถประจำทาง/รถเมล์ รถไฟ รถราง รถไฟใต้ดิน เรือ",
					},
				},
				{
					label: "รถยนต์ รถแท็กซี่ รถบรรทุก หรือรถจักรยานยนต์/มอเตอร์ไซค์",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "อื่น ๆ วิธีใด?",
					value: "Other",
					image_ident: "other",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadioImage,
			heading: "问题 16",
			label: "在过去一周里，你是如何去工作地点的？",
			kid_label: "在过去一周里，你是如何去工作地点的？",
			adult_label: "在过去一周里，您的孩子是如何去工作地点的？",
			kid_sublabel: "选择你使用的主要交通方式",
			adult_sublabel: "选择您的孩子使用的主要交通方式",
			choices: [
				{
					label: "步行",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "骑车",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "也包括轮椅、自行车、滑板、推式踏板车、轮滑",
						adult: "也包括轮椅、自行车、滑板、推式踏板车、轮滑",
					},
				},
				{
					label: "公共交通",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "如公交车、火车、有轨电车、地铁、轮渡",
						adult: "如公交车、火车、有轨电车、地铁、轮渡",
					},
				},
				{
					label: "汽车、卡车或摩托车",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "其他，哪种?",
					value: "Other",
					image_ident: "other",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadioImage,
			heading: "Pregunta 16",
			label: "¿Cómo fuiste al trabajo o voluntariado la semana pasada?",
			kid_label: "¿Cómo fuiste al trabajo o voluntariado la semana pasada?",
			adult_label: "¿Cómo fue su hija o hijo al trabajo o voluntariado la semana pasada?",
			kid_sublabel: "Selecciona el modo de transporte que más utilizaste",
			adult_sublabel: "Selecciona el modo de transporte que más utilizó",
			choices: [
				{
					label: "Caminando",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "Sobre ruedas",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines",
						adult: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines",
					},
				},
				{
					label: "Transporte público",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "por ejemplo, autobús, tren, tranvía, metro, barco",
						adult: "por ejemplo, autobús, tren, tranvía, metro, barco",
					},
				},
				{
					label: "Automóvil, taxi, camioneta o motocicleta",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Otro, ¿cuál?",
					value: "Other",
					image_ident: "other",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadioImage,
			heading: "Pregunta 16",
			label: "¿Cómo fuiste al trabajo la semana pasada?",
			kid_label: "¿Cómo fuiste al trabajo la semana pasada?",
			adult_label: "¿Cómo fue su hija o hijo al trabajo la semana pasada?",
			kid_sublabel: "Selecciona el modo de transporte que más utilizaste",
			adult_sublabel: "Selecciona el modo de transporte que más utilizó",
			choices: [
				{
					label: "Caminando",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "Sobre ruedas",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines",
						adult: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines",
					},
				},
				{
					label: "Transporte público",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "por ejemplo, autobús, tren, tranvía, metro, barco",
						adult: "por ejemplo, autobús, tren, tranvía, metro, barco",
					},
				},
				{
					label: "Automóvil, taxi, camioneta o motocicleta",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Otro, ¿cuál?",
					value: "Other",
					image_ident: "other",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 16",
			label: "Comment es-tu allé.e de la maison jusqu'au travail au cours de la dernière semaine?",
			kid_label:
				"Comment es-tu allé.e de la maison jusqu'au travail au cours de la dernière semaine?",
			adult_label:
				"Comment ton enfant est-il (elle) allé(e) de la maison jusqu'au travail au cours de la dernière semaine?",
			kid_sublabel: "Sélectionne le moyen principal que tu as utilisé.",
			adult_sublabel: "Sélectionne le moyen principal que ton enfant à utilisé.",
			choices: [
				{
					label: "À pied",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "En roulant",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "par exemple, fauteuil roulant, vélo, vélo électrique, planche à roulettes, trottinette, patins à roues alignées",
						adult:
							"par exemple, fauteuil roulant, vélo, vélo électrique, planche à roulettes, trottinette, patins à roues alignées",
					},
				},
				{
					label: "En transport en commun",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "par exemple, autobus, train, tramway, métro, bateau",
						adult: "par exemple, autobus, train, tramway, métro, bateau",
					},
				},
				{
					label: "En voiture, taxi, camion ou motocyclette",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Autre, lequel?",
					value: "Other",
					image_ident: "other",
				},
			],
		},
	},
};

export default S4Q4;
