import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";

const S5Preamble: PreamblePayloadInterface = {
	ident: "organized_preamble",
	heading: "Organized Activities",
	type: Screen.Preamble,
	audio_ident: "organized_preamble",
	translations: {
		"en-CA": {
			heading: "Organized Activities",
			subheading: "Section 5",
			description: {
				kid: "This section is about physically active organized activities and sports. They include activities that you do outside the school day (for example, some schools have sport leagues or extracurricular activities). They also include any sport leagues and lessons for activities like swimming, gymnastics, dance, and karate outside of school.",
				adult:
					"This section is about physically active organized activities and sports. They include activities that you do outside the school day (for example, some schools have sport leagues or extracurricular activities). They also include any sport leagues and lessons for activities like swimming, gymnastics, dance, and karate outside of school.",
			},
		},
		"sv-SE": {
			heading: "Organiserade Aktiviteter",
			subheading: "Sektion 5",
			description: {
				kid: "Den här delen handlar om organiserade aktiviteter och sporter. Det är saker som du kan göra efter skolan som tillexempel gå på simning, gymnastik, dans och karate.",
				adult:
					"Den här delen handlar om organiserade aktiviteter och sporter. Det är saker som ditt barn kan göra efter skolan som tillexempel gå på simning, gymnastik, dans och karate.",
			},
		},
		"zh-CN": {
			heading: "有组织的活动",
			subheading: "第5部分",
			description: {
				kid: "本部分是关于一些课外有组织的身体活动和体育运动的问题，包括课外你参加的一些有组织的活动(如学校的运动队或体育社团、以及课外活动)，还包括任何校外的体育俱乐部、培训班课程的活动，如羽毛球、游泳、舞蹈和跆拳道等。",
				adult:
					"本部分是关于一些课外有组织的身体活动和体育运动的问题，包括课外您的孩子参加的一些有组织的活动(如学校的运动队或体育社团、以及课外活动)，还包括任何校外的体育俱乐部、培训班课程的活动，如羽毛球、游泳、舞蹈和跆拳道等。",
			},
		},
		"es-MX": {
			heading: "Actividades Organizadas",
			subheading: "Sección 5",
			description: {
				kid: "Esta sección trata de las actividades organizadas físicamente activas y los deportes. Incluyen las actividades que realizas fuera de la escuela o colegio (por ejemplo, algunas escuelas o colegios tienen ligas deportivas o actividades extraescolares). También se incluyen las ligas deportivas y las clases de actividades como natación, gimnasia, danza y kárate fuera de la escuela o colegio.",
				adult:
					"Esta sección trata de las actividades organizadas físicamente activas y los deportes. Incluyen las actividades que realiza su hija o hijo fuera de la escuela o colegio (por ejemplo, algunas escuelas o colegios tienen ligas deportivas o actividades extraescolares). También se incluye las ligas deportivas y las clases de actividades como natación, gimnasia, danza y kárate fuera de la escuela o  colegio.",
			},
		},
		"fr-CA": {
			heading: "Activités Organisées",
			subheading: "Section 5",
			description: {
				kid: "Cette section porte sur les activités physiques organisées et les sports. Cela inclus les activités que tu fais avant ou après l'école (par exemple, certaines écoles ont des ligues sportives ou des activités parascolaires). Cela inclus également les ligues sportives et les cours pour des activités comme la natation, la gymnastique, la dance et le karaté en dehors de l'école.",
				adult:
					"Cette section porte sur les activités physiques organisées et les sports. Cela inclus les activités que ton enfant fait avant ou après l'école (par exemple, certaines écoles ont des ligues sportives ou des activités parascolaires). Cela inclus également les ligues sportives et les cours pour des activités comme la natation, la gymnastique, la dance et le karaté en dehors de l'école.",
			},
		},
	},
};

export default S5Preamble;
