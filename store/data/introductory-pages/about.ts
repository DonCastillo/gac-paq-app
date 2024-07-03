import Screen from "constants/screen.enum";
import type { PagePayloadInterface } from "interface/payload.type";

const AboutPage: PagePayloadInterface = {
	ident: "welcome",
	title: "Welcome To GAC-PAQ",
	name: "Welcome To GAC-PAQ",
	audio_ident: "about",
	type: Screen.Page,
	translations: {
		"en-CA": {
			heading: "Welcome To \nGAC-PAQ",
			description: "",
			description_mode: {
				kid: "For this survey, we want to measure how active you were in the past week (including weekdays and the past weekend).\n\nPhysical activity can take place in many ways including in your free time, doing sports, playing, when going places (like school, parks, shops, and friends' or relatives' houses), at school, during household chores and work. The app will guide you through each way one by one.\n\nWe will ask you about different efforts of physical activity. When we say “medium or hard effort” we mean activities that make your heart beat faster and get you out of breath some of the time. [Examples shown in the app may include soccer/football, swimming, running, skipping, skating, cross-country skiing, weight training, or cycling].\n\nWhen we say 'easy effort', we mean activities that do not make you out of breath. Examples shown in the app may include slow walking, caring for pets or farm animals, playing in a sandbox, and many household chores.\n\nThere are no right and wrong answers. Please answer all the questions the best you can.",
				adult:
					"For this survey, we want to measure how active your child was in the past week (including weekdays and weekend days).\n\nPhysical activity can take place in many ways including in your free time, doing sports, playing, when going places (like school, parks, shops, and friends' or relatives' houses), at school, during household chores and work. The app will guide you through each way one by one.\n\nWe will ask you about different efforts of physical activity. When we say 'medium or hard effort' we mean activities that make your heart beat faster and get you out of breath some of the time. [Examples shown in the app may include soccer/football, swimming, running, skipping, skating, cross-country skiing, weight training, or cycling].\n\nWhen we say 'easy effort', we mean activities that do not make you out of breath. Examples shown in the app may include slow walking, caring for pets or farm animals, playing in a sandbox, and many household chores.\n\nThere are no right and wrong answers. Please answer all the questions the best you can.",
			},
		},
		"th-TH": {
			heading: "ยินดีต้อนรับสู่ \nGAC-PAQ",
			description:
				"เป้าหมายของเราคือการแก้ไขปัญหาการขาดข้อมูลเกี่ยวกับระดับกิจกรรม โดยเฉพาะในเด็กเล็ก และข้อจำกัดของแบบสอบถามในปัจจุบันที่ละเลยประเภทของกิจกรรมทางกายบางประเภท ด้วยการเก็บข้อมูลเกี่ยวกับการเล่นที่กระฉับกระเฉง เราสามารถเปรียบเทียบระดับกิจกรรมภายในและระหว่างประเทศ เพื่อระบุยุทธศาสตร์ที่มีประสิทธิภาพสำหรับส่งเสริมกิจกรรมทางกาย การศึกษาของเราประกอบด้วยการตรวจสอบจากผู้เชี่ยวชาญและสาธารณชน การแปลภาษา การศึกษานำร่อง และการเก็บข้อมูลขนาดใหญ่ในพื้นที่เมืองและชนบทที่หลากหลาย ด้วยการเปรียบเทียบข้อมูลจากแบบสอบถามของเรากับเซ็นเซอร์ตรวจจับการเคลื่อนไหว เรามุ่งหวังที่จะสร้างการวัดระดับกิจกรรมทางกายทั่วโลกที่แม่นยำยิ่งขึ้น ซึ่งจะช่วยส่งเสริมวิถีชีวิตที่มีสุขภาพดีขึ้นทั่วโลก",
		},
		"es-MX": {
			heading: "Bienvenido a \nGAC-PAQ",
			description:
				"Nuestro objetivo es abordar la falta de información sobre los niveles de actividad, especialmente entre los niños pequeños, y las limitaciones de los cuestionarios actuales que descuidan ciertos tipos de actividad física. Al recopilar datos sobre el juego activo, podemos comparar los niveles de actividad dentro y entre países para identificar estrategias efectivas para promover la actividad física. Nuestro estudio implica revisiones de expertos y públicas, traducciones, estudios piloto y una recopilación de datos a gran escala en diversas áreas urbanas y rurales. Al comparar nuestros datos de cuestionarios con sensores de movimiento, nuestro objetivo es crear una medición global más precisa de la actividad física, contribuyendo a estilos de vida más saludables en todo el mundo.",
		},
		"zh-CN": {
			heading: "欢迎来到 \nGAC-PAQ",
			description:
				"我们的目标是解决关于活动水平的信息不足，尤其是在幼儿中间，以及目前忽略某些类型的体育活动的问卷的局限性。 通过收集有关积极游戏的数据，我们可以比较国家内和国家之间的活动水平，以确定促进体育活动的有效策略。 我们的研究涉及专家和公众评论，翻译，试点研究以及在各种城市和农村地区的大规模数据收集。 通过将我们的问卷数据与运动传感器进行比较，我们的目标是创建更准确的全球体育活动测量，从而促进全球更健康的生活方式。",
		},
		"fr-CA": {
			heading: "Bienvenue à \nGAC-PAQ",
			description: "",
			description_mode: {
				kid: "Dans ce sondage, nous souhaitons évaluer ton degré d'activité physique au cours de la dernière semaine (incluant les jours de semaine et la dernière fin de semaine).\n\nOn peut pratiquer des activités physiques dans de nombreuses situations, comme pendant nos temps libres, en faisant du sport, en jouant, en nous déplaçant (par exemple, pour aller à l'école, au parc, aux magasins, chez des amis ou des parents), à l'école, en faisant des tâches ménagères ou en travaillant. L'application te guidera parmi ces contextes, un à la fois.\n\nNous te poserons des questions sur les efforts fournis dans le cadre d'une activité physique. Le terme 'effort moyen ou intense' désigne les activités qui font battre ton cœur plus vite et qui t'essoufflent un peu. [Les exemples présentés dans l'application sont notamment le soccer/football, la natation, la course à pied, le saut à la corde, le patinage, le ski de fond, la musculation ou le cyclisme.]\n\nLe terme 'peu d'effort' désigne les activités qui ne t'essoufflent pas. Dans ce cas, les exemples présentés dans l'application sont notamment la marche lente, prendre soin d'animaux domestiques ou à la ferme, jouer dans le carré de sable, et plusieurs tâches ménagères.\n\nIl n'y a pas de bonnes ou de mauvaises réponses. Réponds simplement aux questions du mieux que tu le peux.",
				adult:
					"Dans ce sondage, nous souhaitons évaluer le degré d'activité physique de ton enfant au cours de la dernière semaine (incluant les jours de semaine et la dernière fin de semaine).\n\nOn peut pratiquer des activités physiques dans de nombreuses situations, comme pendant nos temps libres, en faisant du sport, en jouant, en nous déplaçant (par exemple, pour aller à l'école, au parc, aux magasins, chez des amis ou des parents), à l'école, en faisant des tâches ménagères ou en travaillant. L'application te guidera parmi ces contextes, un à la fois.\n\nNous te poserons des questions sur les efforts fournis dans le cadre d'une activité physique. Le terme « effort moyen ou intense » désigne les activités qui font battre ton cœur plus vite et qui t'essoufflent un peu. [Les exemples présentés dans l'application sont notamment le soccer/football, la natation, la course à pied, le saut à la corde, le patinage, le ski de fond, la musculation ou le cyclisme.]\n\nLe terme 'peu d'effort' désigne les activités qui ne t'essoufflent pas. Dans ce cas, les exemples présentés dans l'application sont notamment la marche lente, prendre soin d'animaux domestiques ou à la ferme, jouer dans le carré de sable, et plusieurs tâches ménagères.\n\nIl n'y a pas de bonnes ou de mauvaises réponses. Réponds simplement aux questions du mieux que tu le peux.",
			},
		},
	},
};

export default AboutPage;
