import Screen from "constants/screen.enum";
import type { LangPagePayloadInterface } from "interface/payload.type";

const AboutPage: LangPagePayloadInterface = {
	ident: "welcome",
	title: "Welcome To GAC-PAQ",
	name: "Welcome To GAC-PAQ",
	audio_ident: "about",
	type: Screen.Page,
	translations: {
		"en-CA": {
			heading: "Welcome to \nGAC-PAQ",
			description: "",
			description_mode: {
				kid: "For this survey, we want to measure how active you were in the past week (including weekdays and the past weekend).\n\nPhysical activity can take place in many ways including in your free time, doing sports, playing, when going places (like school, parks, shops, and friends' or relatives' houses), at school, during household chores and work. The app will guide you through each way one by one.\n\nWe will ask you about different efforts of physical activity. When we say “medium or hard effort” we mean activities that make your heart beat faster and get you out of breath some of the time. [Examples shown in the app may include soccer/football, swimming, running, skipping, skating, cross-country skiing, weight training, or cycling].\n\nWhen we say 'easy effort', we mean activities that do not make you out of breath. Examples shown in the app may include slow walking, caring for pets or farm animals, playing in a sandbox, and many household chores.\n\nThere are no right and wrong answers. Please answer all the questions the best you can.",
				adult:
					"For this survey, we want to measure how active your child was in the past week (including weekdays and weekend days).\n\nPhysical activity can take place in many ways including in your free time, doing sports, playing, when going places (like school, parks, shops, and friends' or relatives' houses), at school, during household chores and work. The app will guide you through each way one by one.\n\nWe will ask you about different efforts of physical activity. When we say 'medium or hard effort' we mean activities that make your heart beat faster and get you out of breath some of the time. [Examples shown in the app may include soccer/football, swimming, running, skipping, skating, cross-country skiing, weight training, or cycling].\n\nWhen we say 'easy effort', we mean activities that do not make you out of breath. Examples shown in the app may include slow walking, caring for pets or farm animals, playing in a sandbox, and many household chores.\n\nThere are no right and wrong answers. Please answer all the questions the best you can.",
			},
		},
		"sv-SE": {
			heading: "Välkommen till \nGAC-PAQ",
			description: "",
			description_mode: {
				kid: "Vi vill undersöka hur aktiv du har varit under den senaste veckan (både veckodagar och helgen).\n\nFysisk aktivitet kan ske på många olika sätt. Till exempel på sin fritid så kan man gå på en sport, leka, ta sig till ställen (till exempel till skolan, en park, en butik eller vänners/släktingars hem). Man kan också vara aktiv på skolan, när man gör hushållssysslor eller när man arbetar. Appen kommer att guida dig genom varje typ av aktivitet, en i taget.\n\nVi kommer att fråga dig om olika ansträngningar av fysisk aktivitet. När vi säger 'medel eller hög ansträngning' så menar vi aktiviteter som får ditt hjärta att slå snabbare och får dig att bli andfådd.\n\nNär vi säger 'lätt ansträngning' menar vi aktiviteter som inte gör dig andfådd.\n\nDet finns inga svar som är rätt eller fel. Svara på alla frågor så gott du kan.",
				adult:
					"Vi undersöka hur aktiv ditt barn har varit under den senaste veckan (både veckodagar och helgen).\n\nFysisk aktivitet kan ske på många olika sätt. Till exempel på sin fritid så kan man gå på en sport, leka, ta sig till ställen (tex. till skolan, en park, en butik eller vänners/släktingars hem). Man kan också vara aktiv på skolan, när man gör hushållssysslor eller när man arbetar. Appen kommer att guida dig genom varje typ aktivitet, en i taget. \n\nVi kommer att fråga dig om olika ansträngningar av fysisk aktivitet. När vi säger 'medel eller hög ansträngning' så menar vi aktiviteter som får ditt hjärta att slå snabbare och får dig att bli andfådd. [Exempel som visas i appen kan vara fotboll, simning, löpning, hoppa hopprep, skridskoåkning, längdskidåkning, styrketräning eller cykling].\n\nNär vi säger 'lätt ansträngning' menar vi aktiviteter som inte gör dig andfådd. Exempel som visas i appen kan vara; långsam gång, ta hand om husdjur, lek i sandlåda eller hushållssysslor.\n\nDet finns inga svar som är rätt eller fel. Svara på alla frågor så gott du kan.",
			},
		},
		"th-TH": {
			heading: "ยินดีต้อนรับสู่\nGAC-PAQ!",
			description: "",
			description_mode: {
				kid: "สำหรับการสำรวจครั้งนี้ เราอยากวัดว่าน้องมีการออกแรงหรือกระฉับกระเฉงมากน้อยเพียงใดเมื่อสัปดาห์ที่แล้ว (รวมทั้งวันธรรมดาและวันหยุดเสาร์-อาทิตย์ที่ผ่านมา) \n\nกิจกรรมทางกายสามารถเกิดขึ้นได้หลายวิธี ไม่ว่าจะเป็นกิจกรรมทางกายที่เกิดขึ้นในช่วงเวลาว่าง การเล่นกีฬา การเล่นทั่วไป กิจกรรมทางกายที่เกิดจากการเดินทางไปที่ต่าง ๆ (เช่น ไปโรงเรียน ไปสวนสาธารณะ ไปร้านขายของ ไปบ้านเพื่อนหรือไปบ้านญาติ) นอกจากนี้ ยังมีกิจกรรมทางกายที่เกิดขึ้นระหว่างอยู่ที่โรงเรียน กิจกรรมทางกายที่เกิดขึ้นระหว่างการทำงานบ้านและการทำงาน โดยแอปจะค่อย ๆ แนะนำน้องเกี่ยวกับกิจกรรมทางกายในแต่ละวิธีที่กล่าวมา \n\nเราจะถามน้องเกี่ยวกับการออกแรงทำกิจกรรมทางกาย ในระดับต่าง ๆ  เมื่อเราพูดว่า “ได้ใช้แรงในระดับปานกลางถึงมาก” เราหมายถึงกิจกรรมที่ทำให้หัวใจของน้องเต้นเร็วขึ้น และบางครั้งอาจจะทำให้น้องรู้สึกเหนื่อยหอบ [ตัวอย่างที่แสดงในแอปอาจจะมีการเล่นฟุตบอล ว่ายน้ำ วิ่ง กระโดดเชือก เล่นสเก็ต เล่นสกีวิบาก เวทเทรนนิ่ง หรือปั่นจักรยาน]\n\nเมื่อเราพูดว่า “ได้ใช้แรงเพียงเล็กน้อย”เราหมายถึงกิจกรรมที่ไม่ได้ทำให้น้องรู้สึกเหนื่อยหอบ ตัวอย่างที่แสดงในแอปอาจจะมีการเดินช้า ๆ การดูแลสัตว์เลี้ยงหรือสัตว์ในฟาร์ม การเล่นในกระบะทราย และการทำงานบ้านต่าง ๆ\n\nคำตอบทั้งหมดไม่มีถูกหรือผิด ขอเพียงแค่น้องตอบทุกคำถามให้ดีที่สุดเท่าที่จะทำได้",
				adult:
					"สำหรับการสำรวจครั้งนี้ เราอยากวัดว่าบุตรหลานของคุณมีการออกแรงหรือกระฉับกระเฉงมากน้อยเพียงใดเมื่อสัปดาห์ที่แล้ว (รวมทั้งวันธรรมดาและวันหยุดเสาร์-อาทิตย์ที่ผ่านมา) \n\nกิจกรรมทางกายสามารถเกิดขึ้นได้หลายวิธี ไม่ว่าจะเป็นกิจกรรมทางกายที่เกิดขึ้นในช่วงเวลาว่าง การเล่นกีฬา การเล่นทั่วไป กิจกรรมทางกายที่เกิดจากการเดินทางไปที่ต่าง ๆ (เช่น ไปโรงเรียน ไปสวนสาธารณะ ไปร้านขายของ ไปบ้านเพื่อนหรือไปบ้านญาติ) นอกจากนี้ ยังมีกิจกรรมทางกายที่เกิดขึ้นระหว่างอยู่ที่โรงเรียน กิจกรรมทางกายที่เกิดขึ้นระหว่างการทำงานบ้านและการทำงาน โดยแอปจะค่อย ๆ แนะนำคุณเกี่ยวกับกิจกรรมทางกายในแต่ละวิธีที่กล่าวมา \n\nเราจะถามเกี่ยวกับการออกแรงทำกิจกรรมทางกาย ในระดับต่าง ๆ  เมื่อเราพูดว่า “ได้ใช้แรงในระดับปานกลางถึงมาก” เราหมายถึงกิจกรรมที่ทำให้หัวใจเต้นเร็วขึ้น และบางครั้งอาจจะทำให้รู้สึกเหนื่อยหอบ [ตัวอย่างที่แสดงในแอปอาจจะมีการเล่นฟุตบอล ว่ายน้ำ วิ่ง กระโดดเชือก เล่นสเก็ต เล่นสกีวิบาก เวทเทรนนิ่ง หรือปั่นจักรยาน]\n\nเมื่อเราพูดว่า “ได้ใช้แรงเพียงเล็กน้อย”เราหมายถึงกิจกรรมที่ไม่ได้ทำให้รู้สึกเหนื่อยหอบ ตัวอย่างที่แสดงในแอปอาจจะมีการเดินช้า ๆ การดูแลสัตว์เลี้ยงหรือสัตว์ในฟาร์ม การเล่นในกระบะทราย และการทำงานบ้านต่าง ๆ\n\nคำตอบทั้งหมดไม่มีถูกหรือผิด ขอเพียงแค่คุณตอบทุกคำถามให้ดีที่สุดเท่าที่จะทำได้",
			},
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
			heading: "Bienvenue au questionnaire\nGAC-PAQ",
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
