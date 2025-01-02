import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const S1Preamble: LangPreamblePayloadInterface = {
	ident: "school_preamble",
	heading: "School",
	audio_ident: "school_preamble",
	audio_autoplay: true,
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "School",
			subheading: "Section 1",
			description: {
				kid: "This section is about what you do during normal school hours, for example during physical education classes, recess, and lunch time.",
				adult:
					"This section is about what your child does during normal school hours, for example during physical education classes, recess, and lunch time.",
			},
		},
		"cz-CR": {
			heading: "Škola",
			subheading: "Sekce 1",
			description: {
				kid: "Tato část se týká toho, co děláš během doby strávené ve škole, například během hodin tělesné výchovy, o přestávce a v době oběda.",
				adult:
					"Tato část se týká toho, co vaše dítě dělá během doby strávené ve škole, například během hodin tělesné výchovy, o přestávce a v době oběda.",
			},
		},
		"es-CO": {
			heading: "Escuela o colegio",
			subheading: "Sección 1",
			description: {
				kid: "Esta sección es acerca de lo que haces normalmente durante tu tiempo en la escuela o colegio, por ejemplo, durante las clases de educación física, descansos o recreos y la hora del almuerzo.",
				adult:
					"Esta sección es acerca de lo que hace su hija o hijo normalmente durante su tiempo en la escuela o colegio, por ejemplo, durante las clases de educación física, descansos o recreos y la hora del almuerzo.",
			},
		},
		"en-MW": {
			heading: "School",
			subheading: "Section 1",
			description: {
				kid: "This section is about what you do during normal school hours, for example during physical education classes, recess, and lunch time.",
				adult:
					"This section is about what your child does during normal school hours, for example during physical education classes, recess, and lunch time.",
			},
		},
		"en-NG": {
			heading: "School",
			subheading: "Section 1",
			description: {
				kid: "This section is about what you do during normal school hours, for example during physical education classes, recess, and lunch time.",
				adult:
					"This section is about what your child does during normal school hours, for example during physical education classes, recess, and lunch time.",
			},
		},
		"ch-MW": {
			heading: "Sukulu",
			subheading: "Gawo loyamba",
			description: {
				kid: "Gawoli likunena za zinthu zomwe umachita panthawi yomwe uli ku sukulu monga nthawi ya maphunziro olimbikitsa thupi, nthawi yopuma kapena buleki.",
				adult:
					"Gawoli likunena za zinthu zomwe mwana wanu amachita panthawi yomwe ali ku sukulu monga nthawi ya maphunziro olimbikitsa thupi, nthawi yopuma kapena buleki.",
			},
		},
		"ma-IN": {
			heading: "शाळा",
			subheading: "विभाग १",
			description: {
				kid: "हा विभाग, रोजच्या शालेय वेळेत, उदाहरणार्थ शारीरिक शिक्षणाच्या वर्गात, मधल्या सुट्टीत आणि दुपारच्या जेवणाच्या सुट्टीत, तुम्ही काय करता याविषयी आहे.",
				adult:
					"हा विभाग, तुमचे मूल रोज शाळेच्या वेळेत, उदाहरणार्थ शारीरिक शिक्षण वर्गात, मधल्या सुट्टीत आणि दुपारच्या जेवणाच्या सुट्टीत काय करते याबद्दल आहे.",
			},
		},
		"hi-IN": {
			heading: "स्कूल",
			subheading: "भाग 1",
			description: {
				kid: "यह अनुभाग इस बारे में है कि आप सामान्य स्कूल घंटों के दौरान क्या करते हैं, उदाहरण के लिए पीटी की क्लास, अवकाश और दोपहर के भोजन के समय के दौरान।",
				adult:
					"यह अनुभाग इस बारे में है कि आपका बच्चा सामान्य स्कूल समय के दौरान क्या करता है, उदाहरण के लिए पीटी की क्लास, अवकाश और दोपहर के भोजन के समय के दौरान।",
			},
		},
		"en-AE": {
			heading: "School",
			subheading: "Section 1",
			description: {
				kid: "This section is about what you do during normal school hours, for example during physical education classes, recess, and lunch time.",
				adult:
					"This section is about what your child does during normal school hours, for example during physical education classes, recess, and lunch time.",
			},
		},
		"ar-AE": {
			heading: "المدرسة",
			subheading: "القسم الأول [١]",
			description: {
				kid: "يحتوي هذا القسم على أسئلة حول الأنشطة التي تقوم بها أثناء وجودك في المدرسة، مثلاً خلال حصص التربية البدنية، فترة الاستراحة، ووقت الغداء.",
				adult:
					"يحتوي هذا القسم على أسئلة حول الأنشطة التي يقوم بها طفلك أثناء وجوده في المدرسة، مثلاً خلال حصص التربية البدنية، فترة الاستراحة، ووقت الغداء.",
			},
		},
		"ne-NP": {
			heading: "विध्यालय",
			subheading: "खण्ड १",
			description: {
				kid: "यो खन्ड, तपाइले स्कुलको समयमा सामन्यतया के गर्नु हुन्छ, उदाहरणको लागि शारिरिक शिक्षासम्बन्धी कक्षा, रिसेस् र खाजा खाने समय सगं सम्बन्धित छ।",
				adult:
					"यो खन्ड, तपाइको छोरा वा छोरीले स्कुलको समयमा सामन्यतया के गर्छन, उदाहरणको लागि शारिरिक शिक्षासम्बन्धी कक्षा, रिसेस् र खाजा खाने समय सगं सम्बन्धित छ।",
			},
		},
		"pt-BR": {
			heading: "Escola",
			subheading: "Seção 1",
			description: {
				kid: "Esta seção é sobre o que você faz durante o horário escolar normal, por exemplo, durante as aulas de educação física, o recreio ou intervalo, e o horário do almoço.",
				adult:
					"Esta seção é sobre o que a criança ou adolescente que você é responsável faz durante o horário escolar normal, por exemplo, durante as aulas de educação física, o recreio ou intervalo, e o horário do almoço.",
			},
		},
		"sv-SE": {
			heading: "Skola",
			subheading: "Sektion 1",
			description: {
				kid: "Den här delen handlar om vad du gör i skolan. Till exempel under idrottslektionen, dina raster och lunchen.",
				adult:
					"Den här delen handlar om vad ditt barn gör i skolan. Till exempel under idrottslektionen, raster och lunchen.",
			},
		},
		"th-TH": {
			heading: "โรงเรียน",
			subheading: "ส่วนที่ 1",
			description: {
				kid: "ส่วนนี้เป็นคำถามเกี่ยวกับสิ่งที่น้องทำในวันปกติที่ไปโรงเรียน เช่น ในวิชาพลศึกษา ช่วงเวลาพัก และช่วงพักกลางวัน",
				adult:
					"ส่วนนี้เป็นคำถามเกี่ยวกับสิ่งที่บุตรหลานของคุณทำในวันปกติที่ไปโรงเรียน เช่น ในวิชาพลศึกษา ช่วงเวลาพัก และช่วงพักกลางวัน",
			},
		},
		"zh-CN": {
			heading: "学校",
			subheading: "第1部分",
			description: {
				kid: "本部分是关于你上学期间身体活动的一些问题，如在上体育课、课间休息和午餐时。",
				adult: "本部分是关于您的孩子在上学期间身体活动的一些问题，如在上体育课、课间休息和午餐时。",
			},
		},
		"es-ES": {
			heading: "Escuela o colegio",
			subheading: "Sección 1",
			description: {
				kid: "Esta sección es acerca de lo que haces normalmente durante tu tiempo en la escuela o colegio, por ejemplo, durante las clases de educación física, descansos o recreos y la hora de comer.",
				adult:
					"Esta sección es acerca de lo que su hija o hijo hace normalmente durante su tiempo en la escuela o el colegio, por ejemplo, durante las clases de educación física, descansos o recreos y la hora de comer.",
			},
		},
		"es-MX": {
			heading: "Escuela o colegio",
			subheading: "Sección 1",
			description: {
				kid: "Esta sección es acerca de lo que haces normalmente durante tu tiempo en la escuela o colegio, por ejemplo, durante las clases de educación física, descansos o recreos y la hora del refrigerio.",
				adult:
					"Esta sección es acerca de lo que su hija o hijo hace normalmente durante su tiempo en la escuela o el colegio, por ejemplo, durante las clases de educación física, descansos o recreos y la hora del lunch o refrigerio.",
			},
		},
		"fr-CA": {
			heading: "École",
			subheading: "Section 1",
			description: {
				kid: "Cette section porte sur les activités que tu fais durant les heures d'école normales, par exemple dans les cours d'éducation physique, les récréations et l'heure du dîner.",
				adult:
					"Cette section porte sur les activités que ton enfant fait durant les heures d'école normales, par exemple dans les cours d'éducation physique, les récréations et l'heure du dîner.",
			},
		},
	},
};

export default S1Preamble;
