import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const S6Preamble: LangPreamblePayloadInterface = {
	ident: "play_preamble",
	heading: "Play or Free Time",
	audio_ident: "play_preamble",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Play or Free Time",
			subheading: "Section 6",
			description: {
				kid: "This includes all the physical activity that you do during your play or free time. This does not include organized activities or break times in school. For the next questions, do not include the activities that you just told us about.",
				adult:
					"This includes all the physical activity that your child does during their play or free time. This is the time that your child decides how to use. For the next questions, do not include the activities that you just told us about.",
			},
		},
		"sv-SE": {
			heading: "Lek Och Fritid",
			subheading: "Sektion 6",
			description: {
				kid: "Denna delen handlar om fysisk aktivitet (hur mycket du rör på dig) på fritiden t.ex om man leker eller spelar fotboll med kompisar efter skolan för att det är roligt (ej i lag). Organiserad idrott eller vad man gör på sina raster i skolan räknas inte in i den här delen. För nästa frågor, räkna inte med de aktiviteter som du nyss berättat för oss om.",
				adult:
					"Denna del handlar om fysisk aktivitet på ditt barns fritid tex vid lek eller spontanidrott. Detta är den tid som barnet själv bestämmer vad han/hon gör. För nästa frågor, räkna inte med de aktiviteter som du nyss berättat för oss om.",
			},
		},
		"th-TH": {
			heading: "การเล่นหรือช่วงเวลาว่าง",
			subheading: "ส่วนที่ 6",
			description: {
				kid: "ส่วนนี้เป็นคำถามที่รวมกิจกรรมทางกายทั้งหมดที่น้องทำระหว่างการเล่นหรือช่วงที่มีเวลาว่าง แต่ไม่รวมถึงกิจกรรมที่ถูกจัดขึ้นหรือช่วงพักที่โรงเรียน สำหรับคำถามต่อไปนี้จะไม่รวมกิจกรรมที่น้องตอบไปแล้วในส่วนที่ผ่านมา ",
				adult:
					"ส่วนนี้เป็นคำถามที่รวมกิจกรรมทางกายทั้งหมดที่บุตรหลานของคุณทำระหว่างการเล่นหรือช่วงที่มีเวลาว่าง แต่ไม่รวมถึงกิจกรรมที่ถูกจัดขึ้นหรือช่วงพักที่โรงเรียน สำหรับคำถามต่อไปนี้จะไม่รวมกิจกรรมที่คุณตอบไปแล้วในส่วนที่ผ่านมา",
			},
		},
		"zh-CN": {
			heading: "自由活动或玩耍的时间",
			subheading: "第6部分",
			description: {
				kid: "本部分是关于你在校外玩耍或空闲时间进行的所有身体活动的一些问题，不包括有组织的活动或学校休息时间的活动。[应用中会展示不同国家的示例]\n\n对于接下来的问题, 不要包括E部分的活动。",
				adult:
					"本部分是关于您的孩子校外玩耍或空闲时间进行的所有身体活动的一些问题。这部分时间由您的孩子自由支配。[应用中会展示不同国家的示例] \n\n对于接下来的问题, 不要包括E部分的活动。 ",
			},
		},
		"es-MX": {
			heading: "Juego O Tiempo Libre",
			subheading: "Sección 6",
			description: {
				kid: "Esto incluye toda la actividad física que realizas durante tu tiempo de juego o tiempo libre. No incluye las actividades organizadas ni los recreos en la escuela o colegio. Para las siguientes preguntas, no incluyas las actividades que acabas de informar.",
				adult:
					"Esto incluye toda la actividad física que realiza su hija o hijo durante su tiempo de juego o tiempo libre. No incluye las actividades organizadas ni los recreos en la escuela o colegio. Para las siguientes preguntas, no incluya las actividades que acaba de informar.",
			},
		},
		"fr-CA": {
			heading: "Jeu ou temps libres",
			subheading: "Section 6",
			description: {
				kid: "Cette section porte sur l'activité physique que tu fais durant tes temps libres. Cela n'inclus pas les activités organisées et les pauses à l'école. Pour répondre aux prochaines questions, n'inclus pas les activités que tu viens de mentionner.",
				adult:
					"Cette section porte sur l'activité physique que ton enfant fait durant ses temps libres. Ce sont des moments qu'il (elle) peux occuper à sa guise. Pour répondre aux prochaines questions, n'inclus pas les activités que tu viens de mentionner.",
			},
		},
	},
};

export default S6Preamble;
