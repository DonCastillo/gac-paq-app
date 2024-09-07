import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const S7Preamble: LangPreamblePayloadInterface = {
	ident: "outdoors_preamble",
	heading: "Outdoors",
	audio_ident: "outdoors_preamble",
	type: Screen.Preamble,
	audio_autoplay: true,
	translations: {
		"en-CA": {
			heading: "Outdoors",
			subheading: "Section 7",
			description: {
				kid: "This section is about the amount of time that you spend outdoors. This can be at school, during chores, work and volunteering, and transport, as well as in your free time. This also includes the time when you are outdoors, but not moving (for example, picnics, reading, sitting by a fire).",
				adult:
					"This section is about the amount of time that your child spends outdoors. This can be at school, during chores, work and volunteering, and transport, as well as in their free time. This also includes the time when your child is outdoors, but not moving (for example, picnics, reading, sitting by a fire).",
			},
		},
		"pt-BR": {
			heading: "Atividades Ao Ar Livre",
			subheading: "Seção 7",
			description: {
				kid: "Esta seção trata do tempo que você passa ao ar livre. Isso pode ser na escola, durante afazeres e tarefas em casa ao ar livre, trabalho remunerado ou trabalho voluntário ao ar livre, transporte de um lugar a outro ao ar livre, e durante o seu tempo livre. Isso também inclui o tempo em que você está ao ar livre, mas não está se movendo (por exemplo, piqueniques, leitura, conversando com amigos e sentado perto de uma fogueira). ",
				adult:
					"Esta seção trata do tempo que o(a) seu(sua) filho(a) passa ao ar livre. Isso pode ser na escola, durante afazeres e tarefas em casa ao ar livre, trabalho remunerado ou trabalho voluntário ao ar livre, transporte de um lugar a outro ao ar livre, e durante o seu tempo livre. Isso também inclui o tempo em que o(a) seu(sua) filho(a) está ao ar livre, mas não está se movendo (por exemplo, piqueniques, leitura, conversando com amigos e sentado perto de uma fogueira).",
			},
		},
		"sv-SE": {
			heading: "Utomhus",
			subheading: "Sektion 7",
			description: {
				kid: "Den här delen handlar om hur mycket tid du har varit utomhus. Det kan vara både när man är i skolan, gör sysslor, arbetar, tar sig till ställen och på fritiden. Här räknas både om man rör på sig eller är stillasittande (tillexempel om man har picknik, läser, eller grillar korv).",
				adult:
					"Den här delen handlar om hur mycket tid ditt barn har spenderat utomhus. Det kan vara både när barnet är i skolan, gör sysslor, arbetar, tar sig till ställen och på fritiden. Här räknas både om barnet rör på sig eller är stillasittande (tillexempel om man har picknik, läser, eller grillar korv).",
			},
		},
		"th-TH": {
			heading: "กิจกรรมกลางแจ้ง/กิจกรรมในที่โล่ง",
			subheading: "ส่วนที่ 7",
			description: {
				kid: "ส่วนนี้เป็นคำถามเกี่ยวกับช่วงเวลาที่น้องใช้กลางแจ้งหรือในที่โล่ง ซึ่งอาจเป็นที่โรงเรียน ระหว่างการทำงานบ้าน ระหว่างการทำงานและเป็นอาสาสมัคร ระหว่างการเดินทาง รวมถึงในช่วงเวลาว่างของน้องด้วย นอกจากนี้ ยังรวมถึงช่วงเวลาที่น้องอยู่กลางแจ้งหรือในที่โล่งแต่ไม่ได้เคลื่อนไหวด้วยเช่นกัน (เช่น ปิกนิก อ่านหนังสือ นั่งข้างกองไฟ)",
				adult:
					"ส่วนนี้เป็นคำถามเกี่ยวกับช่วงเวลาที่บุตรหลานของคุณใช้กลางแจ้งหรือในที่โล่ง ซึ่งอาจเป็นที่โรงเรียน ระหว่างการทำงานบ้าน ระหว่างการทำงานและเป็นอาสาสมัคร ระหว่างการเดินทาง รวมถึงในช่วงเวลาว่างด้วย นอกจากนี้ ยังรวมถึงช่วงเวลาที่บุตรหลานของคุณอยู่กลางแจ้งหรือในที่โล่งแต่ไม่ได้เคลื่อนไหวด้วยเช่นกัน (เช่น ปิกนิก อ่านหนังสือ นั่งข้างกองไฟ)",
			},
		},
		"zh-CN": {
			heading: "室外",
			subheading: "第7部分",
			description: {
				kid: "本部分是关于你的室外活动的一些问题，包括学校、家务、工作和志愿服务、交通、以及空闲时间的活动，也包括在室外坐着不动的活动(如，野餐，阅读，以及坐着烤火)。",
				adult:
					"本部分是关于您孩子的室外活动的一些问题，包括学校、家务、工作和志愿服务，交通，以及他们空闲时间的活动，也包括您的孩子在室外坐着不动的活动（如，野餐，阅读，以及坐着烤火）。",
			},
		},
		"es-ES": {
			heading: "Al Aire Libre",
			subheading: "Sección 7",
			description: {
				kid: "Esta sección trata sobre la cantidad de tiempo que pasas al aire libre. Puede ser en la escuela o colegio, durante las tareas del hogar o quehaceres, el trabajo y el voluntariado, el transporte, así como en tu tiempo libre. También incluye el tiempo que pasas al aire libre, pero sin moverte (por ejemplo, de picnic, leyendo, sentado junto a una fogata).",
				adult:
					"Esta sección trata sobre la cantidad de tiempo que pasa al aire libre su hija o hijo. Puede ser en la escuela o colegio, durante las tareas del hogar o quehaceres, el trabajo y el voluntariado, y el transporte, así como en su tiempo libre. También incluye el tiempo que pasa al aire libre, pero sin moverse (por ejemplo, de picnic, leyendo, sentado junto a una fogata).",
			},
		},
		"es-MX": {
			heading: "Al Aire Libre",
			subheading: "Sección 7",
			description: {
				kid: "Esta sección trata sobre la cantidad de tiempo que pasas al aire libre. Puede ser en la escuela o colegio, durante las tareas del hogar o quehaceres, el trabajo y el voluntariado, el transporte, así como en tu tiempo libre. También incluye el tiempo que pasas al aire libre, pero sin moverte (por ejemplo, de picnic, leyendo, sentado junto a una fogata).",
				adult:
					"Esta sección trata sobre la cantidad de tiempo que pasa al aire libre su hija o hijo. Puede ser en la escuela o colegio, durante las tareas del hogar o quehaceres, el trabajo y el voluntariado, y el transporte, así como en su tiempo libre. También incluye el tiempo que pasa al aire libre, pero sin moverse (por ejemplo, de picnic, leyendo, sentado junto a una fogata).",
			},
		},
		"fr-CA": {
			heading: "Temps Passé Dehors",
			subheading: "Section 7",
			description: {
				kid: "Cette section porte sur la quantité de temps que tu passes dehors. Cela peut être à l'école, durant les tâches, le travail, le bénévolat, le transport et tes temps libres. Cela inclus également le temps que tu passes dehors, mais sans bouger (par exemple, en faisant des pique-niques, en lisant ou en étant assis près d'un feu de camp).",
				adult:
					"Cette section porte sur la quantité de temps que ton enfant passe dehors. Cela peut être à l'école, durant les tâches, le travail, le bénévolat, le transport et les temps libres. Cela inclus également le temps que ton enfant passe dehors, mais sans bouger (par exemple, en faisant des pique-niques, en lisant ou en étant assis près d'un feu de camp)",
			},
		},
	},
};

export default S7Preamble;
