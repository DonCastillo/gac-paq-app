import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const GSHSPreamble_PA: LangPreamblePayloadInterface = {
	ident: "gshs_preamble_pa",
	heading: "GSHS - Physical Activity Preamble",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Physical Activity",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next 4 questions ask about physical activity. Physical activity is any activity that increases your heart rate and makes you breathe hard. Physical activity can be done in sports, playing with friends, walking to school, or in physical education class. Some examples of physical activity are running, fast walking, biking, dancing, football, basketball and hockey.",
				adult:
					"The next 4 questions ask about physical activity. Physical activity is any activity that increases your heart rate and makes you breathe hard. Physical activity can be done in sports, playing with friends, walking to school, or in physical education class. Some examples of physical activity are running, fast walking, biking, dancing, football, basketball and hockey.",
			},
		},
		"th-TH": {
			heading: "กิจกรรมทางกาย",
			subheading: "แบบสำรวจสุขภาพนักเรียนในโรงเรียนทั่วโลก",
			description: {
				kid: "คำถาม 4 ข้อต่อไปนี้ ถามเกี่ยวกับกิจกรรมการออกกำลังกายกิจกรรมการออกกำลังกาย หมายถึง กิจกรรมใดๆ ที่เพิ่มอัตราการเต้นของหัวใจและทำให้นักเรียนหายใจไม่ทันในบางครั้ง กิจกรรมการออกกำลังกายสามารถทำได้โดยการเล่นกีฬา การเล่นกับเพื่อน หรือการเดินไปโรงเรียน\n\nตัวอย่างของกิจกรรมการออกกำลังกาย คือ การวิ่ง การเดินเร็วๆ การขี่จักรยาน การเต้นรำ การเล่นฟุตบอล หรือการเต้นแอโรบิก",
				adult:
					"คำถาม 4 ข้อต่อไปนี้ ถามเกี่ยวกับกิจกรรมการออกกำลังกายกิจกรรมการออกกำลังกาย หมายถึง กิจกรรมใดๆ ที่เพิ่มอัตราการเต้นของหัวใจและทำให้นักเรียนหายใจไม่ทันในบางครั้ง กิจกรรมการออกกำลังกายสามารถทำได้โดยการเล่นกีฬา การเล่นกับเพื่อน หรือการเดินไปโรงเรียน\n\nตัวอย่างของกิจกรรมการออกกำลังกาย คือ การวิ่ง การเดินเร็วๆ การขี่จักรยาน การเต้นรำ การเล่นฟุตบอล หรือการเต้นแอโรบิก",
			},
		},
		"pt-BR": {
			heading: "Atividade física",
			subheading: "Pesquisa Global de Saúde de Estudantes em Escolas",
			description: {
				kid: "As próximas quatro questões são sobre atividades físicas. Atividade física é qualquer atividade que provoca um aumento nos seus batimentos cardíacos e na sua frequência respiratória. Atividade física pode ser realizada praticando esportes, fazendo exercícios, trabalhando, realizando tarefas domésticas, dançando, jogando bola com os amigos ou andando a pé ou de bicicleta.",
				adult:
					"As próximas quatro questões são sobre atividades físicas. Atividade física é qualquer atividade que provoca um aumento nos seus batimentos cardíacos e na sua frequência respiratória. Atividade física pode ser realizada praticando esportes, fazendo exercícios, trabalhando, realizando tarefas domésticas, dançando, jogando bola com os amigos ou andando a pé ou de bicicleta.",
			},
		},
		"es-ES": {
			heading: "Actividad física",
			subheading: "Encuesta global de salud escolar basada en estudiantes",
			description: {
				kid: "Las próximas 4 preguntas se refieren a tu actividad física. Actividad física es cualquier actividad que acelera los latidos del corazón y te deja sin aliento algunas veces. Se hace actividad física en los deportes, jugando con amigos o caminando a la escuela. Algunos ejemplos de actividad física son correr, caminar rápido, ir en bicicleta, bailar o jugar fútbol, nadar o patinar.",
				adult:
					"Las próximas 4 preguntas se refieren a tu actividad física. Actividad física es cualquier actividad que acelera los latidos del corazón y te deja sin aliento algunas veces. Se hace actividad física en los deportes, jugando con amigos o caminando a la escuela. Algunos ejemplos de actividad física son correr, caminar rápido, ir en bicicleta, bailar o jugar fútbol, nadar o patinar.",
			},
		},
		"fr-CA": {
			heading: "Activité physique",
			subheading: "Enquête mondiale sur la santé des élèves en milieu scolaire",
			description: {
				kid: "Les 4 questions qui suivent portent sur l’activité physique.\n\nL’activité physique peut être toute activité qui fait augmenter le rythme cardiaque et accélérer la respiration. Elle peut être pratiquée dans le cadre de sports ou en jouant avec des amis, en marchant vers l’école ou dans les cours d’éducation physique. Voici quelques exemples d’activité physique : la course à pied, la marche rapide, le vélo, la danse, le football, le basketball et le hockey.",
				adult:
					"Les 4 questions qui suivent portent sur l’activité physique.\n\nL’activité physique peut être toute activité qui fait augmenter le rythme cardiaque et accélérer la respiration. Elle peut être pratiquée dans le cadre de sports ou en jouant avec des amis, en marchant vers l’école ou dans les cours d’éducation physique. Voici quelques exemples d’activité physique : la course à pied, la marche rapide, le vélo, la danse, le football, le basketball et le hockey.",
			},
		},
		"es-MX": {
			heading: "Actividad física",
			subheading: "Encuesta global de salud escolar basada en estudiantes",
			description: {
				kid: "Las próximas 4 preguntas se refieren a tu actividad física. Actividad física es cualquier actividad que acelera los latidos del corazón y te deja sin aliento algunas veces. Se hace actividad física en los deportes, jugando con amigos o caminando a la escuela. Algunos ejemplos de actividad física son correr, caminar rápido, andar en bicicleta, bailar o jugar fútbol, nadar, patinar.",
				adult:
					"Las próximas 4 preguntas se refieren a tu actividad física. Actividad física es cualquier actividad que acelera los latidos del corazón y te deja sin aliento algunas veces. Se hace actividad física en los deportes, jugando con amigos o caminando a la escuela. Algunos ejemplos de actividad física son correr, caminar rápido, andar en bicicleta, bailar o jugar fútbol, nadar, patinar.",
			},
		},
		"en-NZ": {
			heading: "Physical Activity",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next 4 questions ask about physical activity. Physical activity is any activity that increases your heart rate and makes you breathe hard. Physical activity can be done in sports, playing with friends, walking to school, or in physical education class. Some examples of physical activity are running, fast walking, biking, dancing, football, and COUNTRY SPECIFIC EXAMPLES.",
				adult:
					"The next 4 questions ask about physical activity. Physical activity is any activity that increases your heart rate and makes you breathe hard. Physical activity can be done in sports, playing with friends, walking to school, or in physical education class. Some examples of physical activity are running, fast walking, biking, dancing, football, and COUNTRY SPECIFIC EXAMPLES.",
			},
		},
		"en-MW": {
			heading: "Physical Activity",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next 4 questions ask about physical activity. Physical activity is any activity that increases your heart rate and makes you breathe hard. Physical activity can be done in sports, playing with friends, walking to school, or in physical education class. Some examples of physical activity are running, fast walking, biking, dancing, football, and COUNTRY SPECIFIC EXAMPLES.",
				adult:
					"The next 4 questions ask about physical activity. Physical activity is any activity that increases your heart rate and makes you breathe hard. Physical activity can be done in sports, playing with friends, walking to school, or in physical education class. Some examples of physical activity are running, fast walking, biking, dancing, football, and COUNTRY SPECIFIC EXAMPLES.",
			},
		},
		"en-NG": {
			heading: "Physical Activity",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next 4 questions ask about physical activity. Physical activity is any activity that increases your heart rate and makes you breathe hard. Physical activity can be done in sports, playing with friends, walking to school, or in physical education class. Some examples of physical activity are running, fast walking, biking, dancing, football, and COUNTRY SPECIFIC EXAMPLES.",
				adult:
					"The next 4 questions ask about physical activity. Physical activity is any activity that increases your heart rate and makes you breathe hard. Physical activity can be done in sports, playing with friends, walking to school, or in physical education class. Some examples of physical activity are running, fast walking, biking, dancing, football, and COUNTRY SPECIFIC EXAMPLES.",
			},
		},
		"en-AE": {
			heading: "Physical Activity",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next 4 questions ask about physical activity. Physical activity is any activity that increases your heart rate and makes you breathe hard. Physical activity can be done in sports, playing with friends, walking to school, or in physical education class. Some examples of physical activity are running, fast walking, biking, dancing, football, and COUNTRY SPECIFIC EXAMPLES.",
				adult:
					"The next 4 questions ask about physical activity. Physical activity is any activity that increases your heart rate and makes you breathe hard. Physical activity can be done in sports, playing with friends, walking to school, or in physical education class. Some examples of physical activity are running, fast walking, biking, dancing, football, and COUNTRY SPECIFIC EXAMPLES.",
			},
		},
		"ar-AE": {
			heading: "النشاط البدني",
			subheading: "مسح الصحة الطلابية المعتمد على المدارس العالمية",
			description: {
				kid: "تدور الأسئلة الأربعة التالية حول النشاط البدني. ويُقصد بالنشاط البدني أي نشاط يزيد معدل ضربات القلب ويجعلك تلهث. ويمكن ممارسة النشاط البدني من خلال الرياضة، أو اللعب مع الأصدقاء، أو المشي إلى المدرسة، أو في فصل التربية البدنية. ومن أمثلة النشاط البدني الركض والمشي السريع وركوب الدراجات والرقص وكرة القدم و(أمثلة خاصة بكل بلد).",
				adult:
					"تدور الأسئلة الأربعة التالية حول النشاط البدني. ويُقصد بالنشاط البدني أي نشاط يزيد معدل ضربات القلب ويجعلك تلهث. ويمكن ممارسة النشاط البدني من خلال الرياضة، أو اللعب مع الأصدقاء، أو المشي إلى المدرسة، أو في فصل التربية البدنية. ومن أمثلة النشاط البدني الركض والمشي السريع وركوب الدراجات والرقص وكرة القدم و(أمثلة خاصة بكل بلد).",
			},
		},
		"sv-SE": {
			heading: "Fysisk aktivitet",
			subheading: "Global skolbaserad undersökning om studenthälsa",
			description: {
				kid: "Nästa 4 frågor handlar om fysisk aktivitet. Fysisk aktivitet är all aktivitet som får ditt hjärta att slå snabbare och som gör dig andfådd. Fysisk aktivitet kan man hålla på med i idrottssammanhang, när man leker med kamrater, när man går till skolan, eller på idrottslektionen. Några exempel på fysisk aktivitet är att springa, gå snabba promenader, åka skridskor, simma, spela fotboll, cykla eller dansa.",
				adult:
					"Nästa 4 frågor handlar om fysisk aktivitet. Fysisk aktivitet är all aktivitet som får ditt hjärta att slå snabbare och som gör dig andfådd. Fysisk aktivitet kan man hålla på med i idrottssammanhang, när man leker med kamrater, när man går till skolan, eller på idrottslektionen. Några exempel på fysisk aktivitet är att springa, gå snabba promenader, åka skridskor, simma, spela fotboll, cykla eller dansa.",
			},
		},
		"zh-CN": {
			heading: "体育活动",
			subheading: "全球在校学生健康调查",
			description: {
				kid: "以下4个问题是关于身体活动的。身体活动是指任何让你心率加快且呼吸急促的活动。体育运动时、与朋友一起玩时、步行上下学时或上体育课时都在进行身体活动。身体活动的例子包括跑步、快走、骑自行车、跳舞、足球等。",
				adult:
					"以下4个问题是关于身体活动的。身体活动是指任何让你心率加快且呼吸急促的活动。体育运动时、与朋友一起玩时、步行上下学时或上体育课时都在进行身体活动。身体活动的例子包括跑步、快走、骑自行车、跳舞、足球等。",
			},
		},
	},
};

export default GSHSPreamble_PA;
