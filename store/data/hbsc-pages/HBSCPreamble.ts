import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const HBSCPreamble: LangPreamblePayloadInterface = {
	ident: "hbsc_preamble",
	heading: "HBSC Preamble",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Health Behaviour in School-aged Children",
			subheading: "",
			description: {
				kid: "Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
				adult:
					"Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
			},
		},
		"mi-NZ": {
			heading: "Ngā Āhua Hauora o Ngā Tamariki Kura",
			subheading: "",
			description: {
				kid: "Ko te kori tinana ko tētahi mahi ka whakapiki ai i tō pāpātanga manawa, ā, ka pau tō hau i ētahi wā. Ka whakamahia te kori tinana pea i ngā hākinakina, i ngā mahi ā-kura, i te tākaro ki ngā hoa, i te hīkoi ki te kura rānei. Ko ētahi tauira o te kori tinana ko te omaoma, ko te hīkoi tere, ko te eke koneke, ko te eke pahikara, ko te kanikani, ko te eke papawīra, ko te kaukau, ko te poikiri, ko te poitūkohu, ko te eke ngaru, ko te whutupōro, ko te tākaro pā, ko te kilikiti, ko te kapa haka, ko te eke kutarere, ko te haere ki te whare whakapakari tinana hoki.",
				adult:
					"Ko te kori tinana ko tētahi mahi ka whakapiki ai i tō pāpātanga manawa, ā, ka pau tō hau i ētahi wā. Ka whakamahia te kori tinana pea i ngā hākinakina, i ngā mahi ā-kura, i te tākaro ki ngā hoa, i te hīkoi ki te kura rānei. Ko ētahi tauira o te kori tinana ko te omaoma, ko te hīkoi tere, ko te eke koneke, ko te eke pahikara, ko te kanikani, ko te eke papawīra, ko te kaukau, ko te poikiri, ko te poitūkohu, ko te eke ngaru, ko te whutupōro, ko te tākaro pā, ko te kilikiti, ko te kapa haka, ko te eke kutarere, ko te haere ki te whare whakapakari tinana hoki.",
			},
		},
		"ch-MW": {
			heading: "Makhalidwe a Zaumoyo mwa Ana a Sukulu",
			subheading: "",
			description: {
				kid: "Zochita zolimbitsa thupi ndi zochita zomwe zimapangitsa kuti mtima wanu kuti uzigunda kwambiri komanso kuti muzipuma mwaphuma. Zochita zolimbitsa thupi zimatha kuchitidwa pamasewera ngati mpira, zochitika za kusukulu, kusewera ndi anzanu, kapena kuyenda popita kusukulu. Zitsanzo zina za zochita zolimbitsa thupi ndi kuthamanga, kuyenda mofulumira, kupalasa njinga, kuvina, kusambira, kusewera mpira, kudumphadumpha ndi zina.",
				adult:
					"Zochita zolimbitsa thupi ndi zochita zomwe zimapangitsa kuti mtima wanu kuti uzigunda kwambiri komanso kuti muzipuma mwaphuma. Zochita zolimbitsa thupi zimatha kuchitidwa pamasewera ngati mpira, zochitika za kusukulu, kusewera ndi anzanu, kapena kuyenda popita kusukulu. Zitsanzo zina za zochita zolimbitsa thupi ndi kuthamanga, kuyenda mofulumira, kupalasa njinga, kuvina, kusambira, kusewera mpira, kudumphadumpha ndi zina.",
			},
		},
		"ne-NP": {
			heading: "पढाइ उमेरका बालबालिकामा स्वास्थ्य व्यवहार",
			subheading: "",
			description: {
				kid: "शारीरिक गतिविधि भन्नाले यस्तो कुनै पनि गतिविधि बुझिन्छ जसले तपाईंको मुटुको गति बढाउँछ र कहिलेकाहीँ सास फेर्न गाह्रो बनाउँछ। शारीरिक गतिविधि खेलकुद, विद्यालयका कार्यक्रमहरू, साथीहरूसँग खेल्दा वा विद्यालयसम्म हिँड्दा गर्न सकिन्छ।\n\nशारीरिक गतिविधिका केही उदाहरणहरूमा दौडनु, छिटो हिँड्नु, रोलरब्लेडिङ गर्नु, साइकल चलाउनु, नाच्नु, स्केटबोर्ड चलाउनु, पौडी खेल्नु, फुटबल, बास्केटबल खेल्नु, र डोरी तानेर हाम्फाल्ने (जम्प रोप) जस्ता गतिविधिहरू पर्छन्।",
				adult:
					"शारीरिक गतिविधि भन्नाले यस्तो कुनै पनि गतिविधि बुझिन्छ जसले तपाईंको मुटुको गति बढाउँछ र कहिलेकाहीँ सास फेर्न गाह्रो बनाउँछ। शारीरिक गतिविधि खेलकुद, विद्यालयका कार्यक्रमहरू, साथीहरूसँग खेल्दा वा विद्यालयसम्म हिँड्दा गर्न सकिन्छ।\n\nशारीरिक गतिविधिका केही उदाहरणहरूमा दौडनु, छिटो हिँड्नु, रोलरब्लेडिङ गर्नु, साइकल चलाउनु, नाच्नु, स्केटबोर्ड चलाउनु, पौडी खेल्नु, फुटबल, बास्केटबल खेल्नु, र डोरी तानेर हाम्फाल्ने (जम्प रोप) जस्ता गतिविधिहरू पर्छन्।",
			},
		},
		"th-TH": {
			heading: "พฤติกรรมสุขภาพในเด็กวัยเรียน",
			subheading: "",
			description: {
				kid: "กิจกรรมทางกายหมายถึงกิจกรรมใด ๆ ที่ทำให้อัตราการเต้นของหัวใจเพิ่มขึ้นและทำให้คุณหายใจเร็วขึ้นเป็นบางครั้ง กิจกรรมทางกายสามารถทำได้ผ่านการเล่นกีฬา กิจกรรมในโรงเรียน เล่นกับเพื่อน หรือเดินไปโรงเรียน ตัวอย่างของกิจกรรมทางกาย ได้แก่ วิ่ง เดินเร็ว โรลเลอร์เบลด ปั่นจักรยาน เต้นรำ เล่นสเก็ตบอร์ด ว่ายน้ำ ฟุตบอล บาสเกตบอล อเมริกันฟุตบอล และโต้คลื่น",
				adult:
					"กิจกรรมทางกายหมายถึงกิจกรรมใด ๆ ที่ทำให้อัตราการเต้นของหัวใจเพิ่มขึ้นและทำให้คุณหายใจเร็วขึ้นเป็นบางครั้ง กิจกรรมทางกายสามารถทำได้ผ่านการเล่นกีฬา กิจกรรมในโรงเรียน เล่นกับเพื่อน หรือเดินไปโรงเรียน ตัวอย่างของกิจกรรมทางกาย ได้แก่ วิ่ง เดินเร็ว โรลเลอร์เบลด ปั่นจักรยาน เต้นรำ เล่นสเก็ตบอร์ด ว่ายน้ำ ฟุตบอล บาสเกตบอล อเมริกันฟุตบอล และโต้คลื่น",
			},
		},
		"pt-BR": {
			heading: "Comportamento de Saúde em Escolares",
			subheading: "",
			description: {
				kid: "Agora vamos conversar sobre o tempo que você gasta fazendo atividades físicas. Atividade física é qualquer atividade que aumenta a sua frequência cardíaca e faz com que você fique sem fôlego em alguns momentos. A atividade física pode ser realizada por meio de esportes (futebol, voleibol, basquetebol, handebol), brincar com amigos, caminhar, correr, andar de bicicleta, nadar, dançar etc.",
				adult:
					"Agora vamos conversar sobre o tempo que você gasta fazendo atividades físicas. Atividade física é qualquer atividade que aumenta a sua frequência cardíaca e faz com que você fique sem fôlego em alguns momentos. A atividade física pode ser realizada por meio de esportes (futebol, voleibol, basquetebol, handebol), brincar com amigos, caminhar, correr, andar de bicicleta, nadar, dançar etc.",
			},
		},
		"es-ES": {
			heading: "Comportamiento de salud en niños en edad escolar",
			subheading: "",
			description: {
				kid: "La actividad física es cualquier actividad que hace que tu corazón se acelere y que en ocasiones te cueste trabajo respirar. Se puede hacer actividad física en los deportes, en las actividades escolares, jugando con los/as amigos/as o andando hacia el colegio o instituto. Algunos ejemplos de actividad física son correr, patinar, montar en bici, en monopatín, nadar, jugar al fútbol, al futbito, al baloncesto, hacer surf, bailar, andar rápido, etc.",
				adult:
					"La actividad física es cualquier actividad que hace que tu corazón se acelere y que en ocasiones te cueste trabajo respirar. Se puede hacer actividad física en los deportes, en las actividades escolares, jugando con los/as amigos/as o andando hacia el colegio o instituto. Algunos ejemplos de actividad física son correr, patinar, montar en bici, en monopatín, nadar, jugar al fútbol, al futbito, al baloncesto, hacer surf, bailar, andar rápido, etc.",
			},
		},
		"fr-CA": {
			heading: "Comportement de santé chez les enfants en âge scolaire",
			subheading: "",
			description: {
				kid: "L'activité physique est une activité qui augmente ton rythme cardiaque et t'essouffle pendant un moment. Tu peux faire de l'activité physique en faisant du sport, des activités sportives à l’école, en jouant avec des amis ou amies, ou en marchant pour aller à l'école.\n\nVoici quelques exemples d'activités physiques : courir, marcher rapidement, danser, faire du vélo, nager, faire du patin à roues alignées, de la planche à roulettes; jouer au soccer, au basketball ou au football.",
				adult:
					"L'activité physique est une activité qui augmente ton rythme cardiaque et t'essouffle pendant un moment. Tu peux faire de l'activité physique en faisant du sport, des activités sportives à l’école, en jouant avec des amis ou amies, ou en marchant pour aller à l'école.\n\nVoici quelques exemples d'activités physiques : courir, marcher rapidement, danser, faire du vélo, nager, faire du patin à roues alignées, de la planche à roulettes; jouer au soccer, au basketball ou au football.",
			},
		},
		"es-MX": {
			heading: "Comportamiento de salud en escolares",
			subheading: "",
			description: {
				kid: "Actividad física es cualquier actividad que incrementa tu ritmo cardiaco y que te hace sentir “sin aliento” una parte del tiempo. La actividad física puede realizarse en deportes, actividades escolares, jugando con los amigos o caminando hacia la escuela. Algunos ejemplos son: correr, caminar rápido, patinar con patines o patineta, andar en bicicleta, bailar, nadar, fútbol, basquetbol, fútbol americano y surfear.",
				adult:
					"Actividad física es cualquier actividad que incrementa tu ritmo cardiaco y que te hace sentir “sin aliento” una parte del tiempo. La actividad física puede realizarse en deportes, actividades escolares, jugando con los amigos o caminando hacia la escuela. Algunos ejemplos son: correr, caminar rápido, patinar con patines o patineta, andar en bicicleta, bailar, nadar, fútbol, basquetbol, fútbol americano y surfear.",
			},
		},
		"es-CO": {
			heading: "Comportamiento de salud en escolares",
			subheading: "",
			description: {
				kid: "Actividad física es cualquier actividad que incrementa tu ritmo cardiaco y que te hace sentir “sin aliento” una parte del tiempo. La actividad física puede realizarse en deportes, actividades escolares, jugando con los amigos o caminando hacia la escuela. Algunos ejemplos son: correr, caminar rápido, patinar con patines o patineta, andar en bicicleta, bailar, nadar, fútbol, basquetbol, fútbol americano y surfear.",
				adult:
					"Actividad física es cualquier actividad que incrementa tu ritmo cardiaco y que te hace sentir “sin aliento” una parte del tiempo. La actividad física puede realizarse en deportes, actividades escolares, jugando con los amigos o caminando hacia la escuela. Algunos ejemplos son: correr, caminar rápido, patinar con patines o patineta, andar en bicicleta, bailar, nadar, fútbol, basquetbol, fútbol americano y surfear.",
			},
		},
		"en-NZ": {
			heading: "Health Behaviour in School-aged Children",
			subheading: "",
			description: {
				kid: "Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, surfing, playing tag, kilikiti, kapa haka, scootering, and going to the gym.",
				adult:
					"Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, surfing, playing tag, kilikiti, kapa haka, scootering, and going to the gym.",
			},
		},
		"en-MW": {
			heading: "Health Behaviour in School-aged Children",
			subheading: "",
			description: {
				kid: "Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, biking, dancing, skateboarding, swimming, soccer, basketball, football, netball, volley ball, & surfing.",
				adult:
					"Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, biking, dancing, skateboarding, swimming, soccer, basketball, football, netball, volley ball, & surfing.",
			},
		},
		"en-NG": {
			heading: "Health Behaviour in School-aged Children",
			subheading: "",
			description: {
				kid: "Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, biking, dancing, swimming, jumping and chasing, soccer (football), basketball, climbing, and swinging play.",
				adult:
					"Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, biking, dancing, swimming, jumping and chasing, soccer (football), basketball, climbing, and swinging play.",
			},
		},
		"en-AE": {
			heading: "Health Behaviour in School-aged Children",
			subheading: "",
			description: {
				kid: "Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
				adult:
					"Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
			},
		},
		"ar-AE": {
			heading: "سلوك الصحة لدى الأطفال في سن المدرسة",
			subheading: "",
			description: {
				kid: "النشاط البدني هو أي مجهود يؤدي إلى زيادة معدل ضربات القلب وصعوبة التنفس في بعض الأحيان. يمكن ممارسة النشاط البدني أثناء الرياضة، أو الأنشطة المدرسية، أو اللعب مع الأصدقاء، أو المشي للذهاب إلى المدرسة. من الأمثلة على النشاط البدني: الجري والمشي السريع وحذاء التزلج أو لوح التزلج وركوب الدراجات والرقص والسباحة وكرة القدم وكرة السلة وغيرها. ",
				adult:
					"النشاط البدني هو أي مجهود يؤدي إلى زيادة معدل ضربات القلب وصعوبة التنفس في بعض الأحيان. يمكن ممارسة النشاط البدني أثناء الرياضة، أو الأنشطة المدرسية، أو اللعب مع الأصدقاء، أو المشي للذهاب إلى المدرسة. من الأمثلة على النشاط البدني: الجري والمشي السريع وحذاء التزلج أو لوح التزلج وركوب الدراجات والرقص والسباحة وكرة القدم وكرة السلة وغيرها. ",
			},
		},
		"sv-SE": {
			heading: "Hälsobeteende hos skolbarn",
			subheading: "",
			description: {
				kid: "Fysisk aktivitet är all aktivitet som får ditt hjärta att slå snabbare och som ibland gör dig andfådd. Fysisk aktivitet kan man hålla på med i idrottssammanhang, i olika aktiviteter på skolan, när man leker med kamrater eller då man går till skolan. Några exempel på fysisk aktivitet är att springa, gå snabba promenader, åka skridskor eller rullskridskor, simma, spela fotboll, cykla eller dansa.",
				adult:
					"Fysisk aktivitet är all aktivitet som får ditt hjärta att slå snabbare och som ibland gör dig andfådd. Fysisk aktivitet kan man hålla på med i idrottssammanhang, i olika aktiviteter på skolan, när man leker med kamrater eller då man går till skolan. Några exempel på fysisk aktivitet är att springa, gå snabba promenader, åka skridskor eller rullskridskor, simma, spela fotboll, cykla eller dansa.",
			},
		},
		"zh-CN": {
			heading: "学龄儿童健康行为问卷",
			subheading: "",
			description: {
				kid: "在下面的问题中，身体活动是指任何让你心跳加速并有时让你呼吸急促、上气不接下气的活动。体育运动时、学校体育活动时、与朋友玩耍时或步行上下学时都在进行身体活动。身体活动的例子包括跑步、快走、轮滑、骑自行车、跳舞、滑板、游泳、足球、篮球、橄榄球和冲浪等。",
				adult:
					"在下面的问题中，身体活动是指任何让你心跳加速并有时让你呼吸急促、上气不接下气的活动。体育运动时、学校体育活动时、与朋友玩耍时或步行上下学时都在进行身体活动。身体活动的例子包括跑步、快走、轮滑、骑自行车、跳舞、滑板、游泳、足球、篮球、橄榄球和冲浪等。",
			},
		},
	},
};

export default HBSCPreamble;
