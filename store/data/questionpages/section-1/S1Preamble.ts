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
					"Esta seção é sobre o que o(a) seu(sua) filho(a) faz durante o horário escolar normal, por exemplo, durante as aulas de educação física, o recreio ou intervalo, e o horário do almoço.",
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
			heading: "Escuela O Colegio",
			subheading: "Sección 1",
			description: {
				kid: "Esta sección es acerca de lo que haces normalmente durante tu tiempo en la escuela o colegio, por ejemplo, durante las clases de educación física, descansos o recreos y la hora de comer.",
				adult:
					"Esta sección es acerca de lo que su hija o hijo hace normalmente durante su tiempo en la escuela o el colegio, por ejemplo, durante las clases de educación física, descansos o recreos y la hora de comer.",
			},
		},
		"es-MX": {
			heading: "Escuela O Colegio",
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
