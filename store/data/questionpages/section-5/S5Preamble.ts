import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const S5Preamble: LangPreamblePayloadInterface = {
	ident: "organized_preamble",
	heading: "Organized Activities",
	type: Screen.Preamble,
	audio_ident: "organized_preamble",
	audio_autoplay: true,
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
		"en-AE": {
			heading: "Organized Activities",
			subheading: "Section 5",
			description: {
				kid: "This section is about physically active organized activities and sports. They include activities that you do outside the school day (for example, some schools have sport leagues or extracurricular activities). They also include any sports leagues and lessons for activities like swimming, gymnastics, karate, and horse riding outside of school.",
				adult:
					"This section is about physically active organized activities and sports. They include activities that your child does outside the school day (for example, some schools have sport leagues or extracurricular activities). They also include any sports leagues and lessons for activities like swimming, gymnastics, karate, and horse riding outside of school.",
			},
		},
		"ar-AE": {
			heading: "الأنشطة المنظّمة أو الخارجية",
			subheading: "القسم الخامس (٥)",
			description: {
				kid: "يحتوي هذا القسم على أسئلة حول الأنشطة المنظّمة أو الخارجية والرياضة، وهي تشمل الأنشطة التي تقوم بها خارج المدرسة (مثل البطولات الرياضية أو الأنشطة التي تقدمها بعض المدارس). وتشمل أيضاً أي دوريات رياضية أو دروس السباحة والجمباز والكاراتيه وركوب الخيل وغيرها.",
				adult:
					"يحتوي هذا القسم على أسئلة حول الأنشطة المنظمّة أو الخارجية والرياضة، وهي تشمل الأنشطة التي يقوم بها طفلك خارج المدرسة (مثل البطولات الرياضية أو الأنشطة التي تقدمها بعض المدارس). وتشمل أيضاً أي دوريات رياضية أو دروس السباحة والجمباز والكاراتيه وركوب الخيل وغيرها.",
			},
		},
		"ne-NP": {
			heading: "सन्गठित क्रियाकलाप",
			subheading: "खण्ड ५",
			description: {
				kid: "यो खन्ड शारिरिक रुपमा सक्रिय हुने सन्गठित क्रियाकलाप र खेलकुद सँग सम्बन्धि छ l यसमा विध्यालय बिदा भए पछि गरिने क्रियाकलाप (उदाहरणका लागि केहि स्कुलमा खेलकुदको लिग वा अतिरिक्त क्रियाकलाप हुने गर्छन) l यसमा विध्यालय समय पछि हुने खेलकुदको लिग वा पौडि, जिम्नास्टिक, नाच र कराते सम्बन्धि कक्षाहरु पनि समाबेस हुन्छन् ।",
				adult:
					"यो खन्ड शारिरिक रुपमा सक्रिय हुने सन्गठित क्रियाकलाप र खेलकुद सँग सम्बन्धि छ l यसमा विध्यालय बिदा भए पछि गरिने क्रियाकलाप (उदाहरणका लागि केहि स्कुलमा खेलकुदको लिग वा अतिरिक्त क्रियाकलाप हुने गर्छन) l यसमा विध्यालय समय पछि हुने खेलकुदको लिग वा पौडि, जिम्नास्टिक, नाच र कराते सम्बन्धि कक्षाहरु पनि समाबेस हुन्छन् ।",
			},
		},
		"pt-BR": {
			heading: "Atividades Organizadas e Esportes",
			subheading: "Seção 5",
			description: {
				kid: "Esta seção trata de atividades físicas organizadas e esportes. Elas incluem atividades que você pratica fora do horário escolar. Por exemplo, algumas escolas têm escolinhas de treinamento, ligas esportivas ou atividades extracurriculares. Essas atividades também incluem aulas de natação, ginástica, dança, karatê, judô e outras artes marciais fora da escola.",
				adult:
					"Esta seção trata de atividades físicas organizadas e esportes. Elas incluem atividades que o seu filho ou filha pratica fora do horário escolar. Por exemplo, algumas escolas têm escolinhas de treinamento, ligas esportivas ou atividades extracurriculares. Essas atividades também incluem aulas de natação, ginástica, dança, karatê, judô e outras artes marciais fora da escola.",
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
		"th-TH": {
			heading: "กิจกรรมที่จัดขึ้น",
			subheading: "ส่วนที่ 5",
			description: {
				kid: "ส่วนนี้เป็นคำถามเกี่ยวกับกิจกรรมที่ได้เคลื่อนไหวร่างกายและกีฬาที่ถูกจัดขึ้น รวมถึงกิจกรรมที่น้องทำหลังเลิกเรียนหรือนอกเหนือจากวันไปโรงเรียน (เช่น บางโรงเรียนมีการจัดแข่งขันกีฬาหรือมีกิจกรรมนอกหลักสูตร) นอกจากนี้ยังรวมถึงการแข่งขันกีฬาและการเรียนพิเศษนอกโรงเรียนที่ได้ทำกิจกรรมต่าง ๆ เช่น ว่ายน้ำ ยิมนาสติก เต้นรำ และคาราเต้",
				adult:
					"ส่วนนี้เป็นคำถามเกี่ยวกับกิจกรรมที่ได้เคลื่อนไหวร่างกายและกีฬาที่ถูกจัดขึ้น รวมถึงกิจกรรมที่บุตรหลานของคุณทำหลังเลิกเรียนหรือนอกเหนือจากวันไปโรงเรียน (เช่น บางโรงเรียนมีการจัดแข่งขันกีฬาหรือมีกิจกรรมนอกหลักสูตร) นอกจากนี้ยังรวมถึงการแข่งขันกีฬาและการเรียนพิเศษนอกโรงเรียนที่ได้ทำกิจกรรมต่าง ๆ เช่น ว่ายน้ำ ยิมนาสติก เต้นรำ และคาราเต้",
			},
		},
		"zh-CN": {
			heading: "有组织的活动",
			subheading: "第5部分",
			description: {
				kid: "本部分是关于课外有组织的身体活动和体育运动的一些问题，包括你课外参加的有组织的活动(如学校的运动队或体育社团、以及课外活动)，还包括任何校外的体育俱乐部、培训班课程的活动，如羽毛球、游泳、舞蹈和跆拳道等。",
				adult:
					"本部分是关于课外有组织的身体活动和体育运动的一些问题，包括您的孩子课外参加的有组织的活动（如学校的运动队或体育社团、以及课外活动），还包括任何校外的体育俱乐部、培训班课程的活动，如羽毛球、游泳、舞蹈和跆拳道等。",
			},
		},
		"es-ES": {
			heading: "Actividades organizadas",
			subheading: "Sección 5",
			description: {
				kid: "Esta sección trata sobre las actividades organizadas físicamente activas y los deportes. Incluyen las actividades que realizas fuera de la escuela o colegio (por ejemplo, algunas escuelas o colegios tienen ligas deportivas o actividades extraescolares). También se incluyen las ligas deportivas y las clases de actividades como natación, gimnasia, danza y kárate fuera de la escuela o colegio.",
				adult:
					"Esta sección trata sobre las actividades organizadas físicamente activas y los deportes. Incluyen las actividades que realiza su hija o hijo fuera de la escuela o colegio (por ejemplo, algunas escuelas o colegios tienen ligas deportivas o actividades extraescolares). También se incluye las ligas deportivas y las clases de actividades como natación, gimnasia, danza y kárate fuera de la escuela o colegio.",
			},
		},
		"es-MX": {
			heading: "Actividades organizadas",
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
