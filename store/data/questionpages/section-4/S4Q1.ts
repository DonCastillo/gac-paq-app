import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioImagePayloadInterface } from "interface/payload.type";

const S4Q1: LangQuestionRadioImagePayloadInterface = {
	ident: "transportation_1",
	name: "Question 15:	How did you go to school in the past week?",
	type: Screen.SingleQuestion,
	column_name: "15.0 Tran",
	audio_ident: "transportation_1",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 15",
			label: "How did you go to school in the past week?",
			kid_label: "How did you go to school in the past week?",
			adult_label: "How did your child go to school in the past week?",
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
					label: "School bus",
					value: "School bus",
					image_ident: "school_bus",
				},
				{
					label: "Public transit",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "for example, bus, train, tramway, subway, boat",
						adult: "for example, bus, train, tramway, subway, boat",
					},
				},
				{
					label: "Car, taxi, truck, or motorcycle",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Other, including combinations",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "for example walk and bus",
						adult: "for example walk and bus",
					},
				},
				{
					label: "Stay home for school",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "I stay at home for school",
						adult: "My child stays at home for school",
					},
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadioImage,
			heading: "Pregunta 15",
			label: "¿Cómo fuiste a la escuela la semana pasada?",
			kid_label: "¿Cómo fuiste a la escuela la semana pasada?",
			adult_label: "¿Cómo fue su hija o hijo a la escuela o colegio la semana pasada?",
			kid_sublabel: "Selecciona el modo que más utilizaste",
			adult_sublabel: "Seleccione el modo que más utilizó",
			choices: [
				{
					label: "Caminando",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "Desplazarse sobre ruedas",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines",
						adult: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines",
					},
				},
				{
					label: "Autobús escolar",
					value: "School bus",
					image_ident: "school_bus",
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
					label: "Carro, taxi, camión o motocicleta",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Otro, incluyendo combinaciones ¿cuál?",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "por ejemplo, caminando y bus",
						adult: "por ejemplo, caminando y bus",
					},
				},
				{
					label: "Recibo educación en casa o asisto a un internado",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "Recibo educación en casa o asisto a un internado",
						adult: "Recibo educación en casa o asisto a un internado",
					},
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadioImage,
			heading: "Question 15",
			label: "How did you go to school in the past week?",
			kid_label: "How did you go to school in the past week?",
			adult_label: "How did your child go to school in the past week?",
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
					label: "School bus",
					value: "School bus",
					image_ident: "school_bus",
				},
				{
					label: "Public transit",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "for example, bus, train, tramway, subway, boat",
						adult: "for example, bus, train, tramway, subway, boat",
					},
				},
				{
					label: "Car, taxi, truck, or motorcycle",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Other, including combinations",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "for example walk and bus",
						adult: "for example walk and bus",
					},
				},
				{
					label: "Stay home for school",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "I stay at home for school",
						adult: "My child stays at home for school",
					},
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadioImage,
			heading: "Funso 15",
			label: "Kodi umayenda bwanji popita kusukulu m’sabata yapitayi?",
			kid_label: "Kodi umayenda bwanji popita kusukulu m’sabata yapitayi?",
			adult_label: "Kodi mwana wanu amaenda bwanji popita kusukulu sabata yapitayi?",
			kid_sublabel: "Usankhe mayendedwe omwe unawagwirisa ntchito kwambiri.",
			adult_sublabel: "Musankhe mayendedwe omwe mwana wanu anawagwirisa ntchito kwambiri.",
			choices: [
				{
					label: "Kuyenda wa pansi",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "Kugwirisa ntchito njinga yopalasa kapena wheelchair",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "",
						adult: "",
					},
				},
				{
					label: "Bus ya kusukulu",
					value: "School bus",
					image_ident: "school_bus",
				},
				{
					label: "Mayendedwe apagulu ngati kukwera minibus sitima kapena boti",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "",
						adult: "",
					},
				},
				{
					label: "Galimoto, taxi kapena njinga ya moto",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Mayendedwe ena",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "",
						adult: "",
					},
				},
				{
					label: "Ndimaphunzira sukulu pakhomo",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "Ndimaphunzira sukulu pakhomo",
						adult: "Mwana wanga amaphunzira sukulu pakhomo",
					},
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadioImage,
			heading: "प्रश्न १५",
			label: "तुम्ही गेल्या आठवड्यात घरून शाळेला कसे गेलात?",
			kid_label: "तुम्ही गेल्या आठवड्यात घरून शाळेला कसे गेलात?",
			adult_label: "तुमचे मूल गेल्या आठवड्यात घरून शाळेला कसे गेले?",
			kid_sublabel: "तुम्ही वापरलेली प्रमुख पद्धत निवडा",
			adult_sublabel: "त्याने/ तिने वापरलेली प्रमुख पद्धत निवडा",
			choices: [
				{
					label: "चालत",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "चाकांच्या साधनांचा वापर करून",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "उदा. सायकल, चाकांची खुर्ची, स्केटबोर्ड, ढकलायची स्कूटर, रोलरब्लेड इ.",
						adult: "उदा. चाकांची खुर्ची, सायकल, स्केटबोर्ड, ढकलायची स्कूटर, रोलरब्लेड इ.",
					},
				},
				{
					label: "शाळेची बस",
					value: "School bus",
					image_ident: "school_bus",
				},
				{
					label: "सार्वजनिक वाहतूक",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "उदा. बस, आगगाडी, ट्रामवे, सबवे, नाव",
						adult: "उदा. बस, आगगाडी, ट्रामवे, सबवे, नाव इ.",
					},
				},
				{
					label: "कार किंवा ट्रक किंवा मोटरसायकल",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "इतर, एकाहून अधिक साधनांचा वापर करून",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "उदा. चालत व बसने",
						adult: "उदा. चालत व बसने",
					},
				},
				{
					label: "लागू नाही (मी घरीच किंवा निवासी शाळेत शिकत आहे)",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "लागू नाही (मी घरीच किंवा निवासी शाळेत शिकत आहे)",
						adult: "लागू नाही (तुमचे मूल घरीच किंवा निवासी शाळेत शिकत आहे)",
					},
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadioImage,
			heading: "प्रश्न १५",
			label: "आप पिछले सप्ताह स्कूल कैसे गए?",
			kid_label: "आप पिछले सप्ताह स्कूल कैसे गए?",
			adult_label: "आपका बच्चा पिछले सप्ताह स्कूल कैसे गया?",
			kid_sublabel: "वह साधन चुनें जिसका आपने सबसे अधिक उपयोग किया है",
			adult_sublabel: "परिवहन का वह साधन चुनें जिसका आपके बच्चे ने सबसे अधिक उपयोग किया हो",
			choices: [
				{
					label: "चल के जाना",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "व्हीलिंग",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "उदाहरण के लिए, व्हीलचेयर का उपयोग, साइकिल, इ-साइकिल, स्केटबोर्ड, पुश स्कूटर, रोलरब्लेड",
						adult:
							"उदाहरण के लिए, व्हीलचेयर का उपयोग, साइकिल, इ-साइकिल, स्केटबोर्ड, पुश स्कूटर, रोलरब्लेड",
					},
				},
				{
					label: "स्कूल बस",
					value: "School bus",
					image_ident: "school_bus",
				},
				{
					label: "सार्वजनिक परिवहन",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "उदाहरण के लिए, बस, ट्रेन, ट्रामवे, सबवे, नाव",
						adult: "उदाहरण के लिए, बस, ट्रेन, ट्रामवे, सबवे, नाव",
					},
				},
				{
					label: "कार, टैक्सी, ट्रक, या मोटरसाइकिल",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "अन्य, संयोजन सहित",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "उदाहरण के लिए पैदल और बस",
						adult: "उदाहरण के लिए पैदल और बस",
					},
				},
				{
					label: "स्कूल के लिए मैं घर पर ही रहता/रहती हूँ",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "स्कूल के लिए मैं घर पर ही रहता/रहती हूँ",
						adult: "मेरा बच्चा घर से ही स्कूल करता है",
					},
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadioImage,
			heading: "Question 15",
			label: "How did you go to school in the past week?",
			kid_label: "How did you go to school in the past week?",
			adult_label: "How did your child go to school in the past week?",
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
						kid: "for example, bicycle, e-bicycle, skateboard, push scooter, rollerblades, wheelchair use",
						adult:
							"for example, bicycle, e-bicycle, skateboard, push scooter, rollerblades, wheelchair use",
					},
				},
				{
					label: "School bus",
					value: "School bus",
					image_ident: "school_bus",
				},
				{
					label: "Public transit",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "for example, bus, train, tramway, subway, boat",
						adult: "for example, bus, train, tramway, subway, boat",
					},
				},
				{
					label: "Car, taxi, or motorcycle",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Other, including combinations",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "for example walk and bus",
						adult: "for example walk and bus",
					},
				},
				{
					label: "Stay home for school",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "I stay at home for school",
						adult: "My child stays at home for school",
					},
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadioImage,
			heading: "السؤال ١٥",
			label: "كيف ذهبت إلى المدرسة خلال الأسبوع الماضي؟",
			kid_label: "كيف ذهبت إلى المدرسة خلال الأسبوع الماضي؟",
			adult_label: "كيف ذهب طفلك إلى المدرسة خلال الأسبوع الماضي؟",
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
					label: "الحافلة المدرسية",
					value: "School bus",
					image_ident: "school_bus",
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
					label: "وسيلة أخرى، أو عدّة وسائل",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "مثل المشي والحافلة",
						adult: "مثل المشي والحافلة",
					},
				},
				{
					label: "أنا أدرس من المنزل",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "أنا أدرس من المنزل",
						adult: "طفلي يدرس من المنزل",
					},
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadioImage,
			heading: "प्रश्न १५",
			label: "पछिल्लो (गएको/ बितेको) हप्ता, तपाईं विध्यालय कसरी जानुभयो?",
			kid_label: "पछिल्लो (गएको/ बितेको) हप्ता, तपाईं विध्यालय कसरी जानुभयो?",
			adult_label: "पछिल्लो (गएको/ बितेको) हप्ता, तपाईंको छोरा वा छोरी विध्यालय कसरी जानुभयो?",
			kid_sublabel: "तपाईंले प्रयोग गर्ने मुख्य माध्यम छान्नुहोस्",
			adult_sublabel: "तपाईंको बच्चा/छोरा वा छोरी ले प्रयोग गर्ने मुख्य माध्यम छान्नुहोस्",
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
					label: "विध्यालयको बसमा",
					value: "School bus",
					image_ident: "school_bus",
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
					sublabel: {
						kid: "दुइ वा दुइ भन्दा बढी माध्यम समेत, जस्तै: हिंड्दै र बसमा",
						adult: "दुइ वा दुइ भन्दा बढी माध्यम समेत, जस्तै: हिंड्दै र बसमा",
					},
				},
				{
					label: "म घरमै बसे वा बोर्डिंग स्कुलको होस्टलमा बसे",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "म घरमै बसे वा बोर्डिंग स्कुलको होस्टलमा बसे",
						adult: "घरमै पढ्ने वा बोर्डिंग स्कुलको होस्टलमा बस्ने",
					},
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadioImage,
			heading: "Questão 15",
			label: "Na última semana, como você foi para a escola?",
			kid_label: "Na última semana, como você foi para a escola?",
			adult_label: "Na última semana, como o(a) seu(sua) filho(a) foi para a escola?",
			kid_sublabel: "Selecione o meio de transporte principal que você usou",
			adult_sublabel: "Selecione o meio de transporte principal que o(a) seu(sua) filho(a) usou",
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
					label: "Ônibus escolar",
					value: "School bus",
					image_ident: "school_bus",
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
					label: "Outro, incluindo combinações",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "por exemplo, caminhando e ônibus",
						adult: "por exemplo, caminhando e ônibus",
					},
				},
				{
					label: "Eu estudo em casa",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "Eu estudo em casa",
						adult: "Meu(minha) filho(a) estuda de casa",
					},
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadioImage,
			heading: "Fråga 15",
			label: "Hur tog du dig till skolan den senaste veckan?",
			kid_label: "Hur tog du dig till skolan den senaste veckan?",
			adult_label: "Hur tog sig ditt barn till skolan den senaste veckan?",
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
					label: "Skolbuss",
					value: "School bus",
					image_ident: "school_bus",
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
					label: "Annan eller en kombination",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "tillexempel gå och åka buss",
						adult: "tillexempel gå och åka buss",
					},
				},
				{
					label: "Jag går i skolan hemma ",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "Jag går i skolan hemma",
						adult: "Mitt barn går i skolan hemma",
					},
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadioImage,
			heading: "คำถาม 15",
			label: "สัปดาห์ที่แล้ว น้องเดินทางไปโรงเรียนด้วยวิธีการใด?",
			kid_label: "สัปดาห์ที่แล้ว น้องเดินทางไปโรงเรียนด้วยวิธีการใด?",
			adult_label: "สัปดาห์ที่แล้ว บุตรหลานของคุณเดินทางไปโรงเรียนด้วยวิธีการใด?",
			kid_sublabel: "เลือกวิธีการเดินทางที่น้องใช้เป็นหลัก",
			adult_sublabel: "เลือกวิธีการเดินทางที่บุตรหลานของคุณใช้เป็นหลัก",
			choices: [
				{
					label: "เดิน",
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
					label: "รถโรงเรียน",
					value: "School bus",
					image_ident: "school_bus",
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
					label: "อื่น ๆ รวมถึงกรณีที่ใช้มากกว่า 1 วิธี",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "เช่น เดินและขึ้นรถประจำทาง/รถเมล์",
						adult: "เช่น เดินและขึ้นรถประจำทาง/รถเมล์",
					},
				},
				{
					label: "เรียนที่บ้านไม่ได้เดินทางไปโรงเรียน",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "เรียนที่บ้านไม่ได้เดินทางไปโรงเรียน",
						adult: "บุตรหลานของฉันเรียนที่บ้านไม่ได้เดินทางไปโรงเรียน",
					},
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadioImage,
			heading: "问题 15",
			label: "在过去一周里，你是如何去学校的？",
			kid_label: "在过去一周里，你是如何去学校的？",
			adult_label: "在过去一周里，您的孩子是如何去学校的？",
			kid_sublabel: "选择你的主要交通方式",
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
						kid: "如轮椅、自行车、滑板、推式踏板车、轮滑",
						adult: "如轮椅、自行车、滑板、推式踏板车、轮滑",
					},
				},
				{
					label: "校车",
					value: "School bus",
					image_ident: "school_bus",
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
					label: "私家车、出租车、卡车或摩托车",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "其他，包括组合式交通",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "如步行并坐公交",
						adult: "如步行并坐公交",
					},
				},
				{
					label: "居家上学",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "居家上学",
						adult: "我的孩子居家上学",
					},
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadioImage,
			heading: "Pregunta 15",
			label: "¿Cómo fuiste a la escuela o colegio la semana pasada?",
			kid_label: "¿Cómo fuiste a la escuela o colegio la semana pasada?",
			adult_label: "¿Cómo fue su hija o hijo a la escuela o colegio la semana pasada?",
			kid_sublabel: "Selecciona el modo de transporte que más utilizaste",
			adult_sublabel: "Seleccione el modo de transporte que más utilizó",
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
						kid: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patinete, patines",
						adult: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines",
					},
				},
				{
					label: "Autobús escolar",
					value: "School bus",
					image_ident: "school_bus",
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
					label: "Otro, incluyendo combinaciones ¿cuál?",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "por ejemplo, caminando y autobús",
						adult: "por ejemplo, caminando y autobús",
					},
				},
				{
					label: "Recibo educación en casa o asisto a un internado",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "Recibo educación en casa o asisto a un internado",
						adult: "Mi hija o hijo recibe educación en casa o asiste a un internado",
					},
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadioImage,
			heading: "Pregunta 15",
			label: "¿Cómo fuiste a la escuela o colegio la semana pasada?",
			kid_label: "¿Cómo fuiste a la escuela o colegio la semana pasada?",
			adult_label: "¿Cómo fue su hija o hijo a la escuela o colegio la última semana?",
			kid_sublabel: "Selecciona el modo de transporte que más utilizaste",
			adult_sublabel: "Seleccione el modo de transporte que más utilizó",
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
					label: "Autobús escolar",
					value: "School bus",
					image_ident: "school_bus",
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
					label: "Otro, incluyendo combinaciones ¿cuál?",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "por ejemplo, caminando y autobús",
						adult: "por ejemplo, caminando y autobús",
					},
				},
				{
					label: "Recibo educación en casa o asisto a un internado",
					value: "Stay home for school",
					image_ident: "staying_home",

					label_mode: {
						kid: "Recibo educación en casa o asisto a un internado",
						adult: "Mi hija o hijo recibe educación en casa o asiste a un internado",
					},
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 15",
			label: "Comment es-tu allé.e de la maison jusqu'à l'école au cours de la dernière semaine?",
			kid_label:
				"Comment es-tu allé.e de la maison jusqu'à l'école au cours de la dernière semaine?",
			adult_label:
				"Comment ton enfant est-il (elle) allé(e) de la maison jusqu'à l'école au cours de la dernière semaine?",
			kid_sublabel: "Sélectionne le moyen principal que tu as utilisé.",
			adult_sublabel: "Sélectionne le moyen principal que ton enfant a utilisé.",
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
					label: "En autobus scolaire",
					value: "School bus",
					image_ident: "school_bus",
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
					label: "Autre, incluant les combinaisons",
					value: "Other",
					image_ident: "other",
					sublabel: {
						kid: "par exemple, marche et autobus",
						adult: "par exemple, marche et autobus",
					},
				},
				{
					label: "Je reste à la maison pour l'école",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "Je reste à la maison pour l'école",
						adult: "Mon enfant fait l'école à la maison",
					},
				},
			],
		},
	},
};

export default S4Q1;
