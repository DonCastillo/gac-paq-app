import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const GSHSPreamble_Sitting: LangPreamblePayloadInterface = {
	ident: "gshs_preamble_sitting",
	heading: "GSHS - Sitting Preamble",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Sitting",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
				adult:
					"The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
			},
		},
		"cz-CR": {
			heading: "Sezení",
			subheading: "Globální školní průzkum o zdraví studentů",
			description: {
				kid: "Následující otázka se týká času, který trávíš převážně sezením mimo školní výuku a psaní domácích úkolů.",
				adult:
					"Následující otázka se týká času, který trávíš převážně sezením mimo školní výuku a psaní domácích úkolů.",
			},
		},
		"hi-IN": {
			heading: "बैठना",
			subheading: "वैश्विक विद्यालय-आधारित छात्र स्वास्थ्य सर्वेक्षण",
			description: {
				kid: "अगला प्रश्न उस समय के बारे में पूछता है जब आप स्कूल में नहीं होते हैं या गृहकार्य नहीं कर रहे होते लेकिन आप ज्यादातर समय बैठे बिताते हैं।",
				adult:
					"अगला प्रश्न उस समय के बारे में पूछता है जब आप स्कूल में नहीं होते हैं या गृहकार्य नहीं कर रहे होते लेकिन आप ज्यादातर समय बैठे बिताते हैं।",
			},
		},
		"en-IN": {
			heading: "Sitting",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
				adult:
					"The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
			},
		},
		"mi-NZ": {
			heading: "Noho",
			subheading: "Te Rangahau Hauora Ākonga o te Ao i ngā Kura",
			description: {
				kid: "Ka ui te pātai e whai ake nei mō te roa o te wā e mātua noho ana koe ina kāore koe i te kura, i te whakaoti mahi kāinga rānei.",
				adult:
					"Ka ui te pātai e whai ake nei mō te roa o te wā e mātua noho ana koe ina kāore koe i te kura, i te whakaoti mahi kāinga rānei.",
			},
		},
		"ch-MW": {
			heading: "Kukhala Pansi",
			subheading: "Kafukufuku wa Zaumoyo wa Ophunzira wa M’sukulu Padziko Lonse",
			description: {
				kid: "Funso lotsatirali likufunsa za nthawi yomwe nthawi zambiri mumangokhala malo amodzi koma osati kusukulu kapena pamene mukuchita homuweki.",
				adult:
					"Funso lotsatirali likufunsa za nthawi yomwe nthawi zambiri mumangokhala malo amodzi koma osati kusukulu kapena pamene mukuchita homuweki.",
			},
		},
		"ne-NP": {
			heading: "बसेको",
			subheading: "वैश्विक विद्यालय आधारित विद्यार्थी स्वास्थ्य सर्वेक्षण",
			description: {
				kid: "अर्को प्रश्नमा तपाईं स्कूलमा नभएको बेला वा गृहकार्य नगरेको बेला बसेर बिताउने समयको बारेमा सोधिएको छ।",
				adult:
					"अर्को प्रश्नमा तपाईं स्कूलमा नभएको बेला वा गृहकार्य नगरेको बेला बसेर बिताउने समयको बारेमा सोधिएको छ।",
			},
		},
		"th-TH": {
			heading: "นั่ง",
			subheading: "แบบสำรวจสุขภาพนักเรียนในโรงเรียนทั่วโลก",
			description: {
				kid: "คำถามข้อต่อไปนี้ถามเกี่ยวกับเวลาส่วนใหญ่ที่นักเรียนใช้ในการนั่งทำกิจกรรม เมื่อนักเรียนไม่ได้อยู่ที่โรงเรียนหรือไม่ได้ทำการบ้าน",
				adult:
					"คำถามข้อต่อไปนี้ถามเกี่ยวกับเวลาส่วนใหญ่ที่นักเรียนใช้ในการนั่งทำกิจกรรม เมื่อนักเรียนไม่ได้อยู่ที่โรงเรียนหรือไม่ได้ทำการบ้าน",
			},
		},
		"pt-BR": {
			heading: "Sentado",
			subheading: "Pesquisa Global de Saúde de Estudantes em Escolas",
			description: {
				kid: "A próxima questão é sobre o tempo que você fica sentado quando não está na escola, quando não está fazendo tarefas da escola, ou quando não está trabalhando.",
				adult:
					"A próxima questão é sobre o tempo que você fica sentado quando não está na escola, quando não está fazendo tarefas da escola, ou quando não está trabalhando.",
			},
		},
		"es-ES": {
			heading: "Sentado",
			subheading: "Encuesta global de salud escolar basada en estudiantes",
			description: {
				kid: "La próxima pregunta se refiere al tiempo que pasas generalmente sentado cuando no estás en el colegio o haciendo tus deberes.",
				adult:
					"La próxima pregunta se refiere al tiempo que pasas generalmente sentado cuando no estás en el colegio o haciendo tus deberes.",
			},
		},
		"fr-CA": {
			heading: "Assis",
			subheading: "Enquête mondiale sur la santé des élèves en milieu scolaire",
			description: {
				kid: "La question qui suit porte sur le temps que tu passes principalement assis.e lorsque tu n’es pas à l’école ou que tu ne fais pas tes devoirs.",
				adult:
					"La question qui suit porte sur le temps que tu passes principalement assis.e lorsque tu n’es pas à l’école ou que tu ne fais pas tes devoirs.",
			},
		},
		"es-MX": {
			heading: "Sentado",
			subheading: "Encuesta global de salud escolar basada en estudiantes",
			description: {
				kid: "La próxima pregunta se refiere al tiempo que pasas generalmente sentado cuando no estás en la escuela o haciendo tus tareas escolares.",
				adult:
					"La próxima pregunta se refiere al tiempo que pasas generalmente sentado cuando no estás en la escuela o haciendo tus tareas escolares.",
			},
		},
		"es-CO": {
			heading: "Sentado",
			subheading: "Encuesta global de salud escolar basada en estudiantes",
			description: {
				kid: "La próxima pregunta se refiere al tiempo que pasas generalmente sentado cuando no estás en la escuela o haciendo tus tareas escolares.",
				adult:
					"La próxima pregunta se refiere al tiempo que pasas generalmente sentado cuando no estás en la escuela o haciendo tus tareas escolares.",
			},
		},
		"en-NZ": {
			heading: "Sitting",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
				adult:
					"The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
			},
		},
		"en-MW": {
			heading: "Sitting",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
				adult:
					"The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
			},
		},
		"en-NG": {
			heading: "Sitting",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
				adult:
					"The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
			},
		},
		"en-AE": {
			heading: "Sitting",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
				adult:
					"The next question asks about the time you spend mostly sitting when you are not in school or doing homework.",
			},
		},
		"ar-AE": {
			heading: "الجلوس",
			subheading: "مسح الصحة الطلابية المعتمد على المدارس العالمية",
			description: {
				kid: "تدور الأسئلة التالية حول الوقت الذي تقضيه غالبًا جالسًا أو مستلقيًا عندما لا تكون بالمدرسة أو تؤدي واجباتك المدرسية.",
				adult:
					"تدور الأسئلة التالية حول الوقت الذي تقضيه غالبًا جالسًا أو مستلقيًا عندما لا تكون بالمدرسة أو تؤدي واجباتك المدرسية.",
			},
		},
		"sv-SE": {
			heading: "Sittande",
			subheading: "Global skolbaserad undersökning om studenthälsa",
			description: {
				kid: "Nästa fråga handlar om tiden du är stillasittande när du inte är i skolan eller gör läxor.",
				adult:
					"Nästa fråga handlar om tiden du är stillasittande när du inte är i skolan eller gör läxor.",
			},
		},
		"zh-CN": {
			heading: "坐着",
			subheading: "全球在校学生健康调查",
			description: {
				kid: "下一问题是询问你不在学校或做作业时坐着的情况。",
				adult: "下一问题是询问你不在学校或做作业时坐着的情况。",
			},
		},
	},
};

export default GSHSPreamble_Sitting;
