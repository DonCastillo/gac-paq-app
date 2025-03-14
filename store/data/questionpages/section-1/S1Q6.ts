import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q6: LangQuestionRadioPayloadInterface = {
	ident: "school_6",
	name: "Question 6: On a normal school day, how much break time do you have?",
	column_name: "06.0 Scho",
	audio_ident: "school_6",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 6",
			label: "On a normal school day, how much break time do you have?",
			kid_label: "On a normal school day, how much break time do you have?",
			adult_label: "On a normal school day, how much break time does your child have?",
			kid_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			adult_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			choices: [
				{
					label: "0 minutes",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutes",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutes",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "More than 60 minutes",
					value: "More than 60 minutes",
				},
				{
					label: "Don't know",
					value: "Don't know",
				},
			],
		},
		"mi-NZ": {
			type: Question.QuestionRadio,
			heading: "Pātai 6",
			label: "I ngā rā o te kura, e hia te roa o te wā whakatā?",
			kid_label: "I ngā rā o te kura, e hia te roa o te wā whakatā?",
			adult_label: "I ngā rā o te kura, e hia te roa o te wā whakatā o tāu tamaiti?",
			kid_sublabel:
				"Arā, ko ngā wā paramanawa me ngā tina. Tēnā, tāpirihia te wā kia kotahi – Hei tauira, e rua wā paramanawa e 15 meneti te roa, ā,  e 30 meneti ki te tina, ka 60 meneti te roa.",
			adult_sublabel:
				"Arā, ko ngā wā paramanawa me ngā tina. Tēnā, tāpirihia te wā kia kotahi – Hei tauira, e rua wā paramanawa e 15 meneti te roa, ā,  e 30 meneti ki te tina, ka 60 meneti te roa.",
			choices: [
				{
					label: "0 meneti",
					value: "0 minutes",
				},
				{
					label: "1 – 15 meneti",
					value: "1 - 15 minutes",
				},
				{
					label: "16 – 30 meneti",
					value: "16 - 30 minutes",
				},
				{
					label: "31 – 60 meneti",
					value: "31 - 60 minutes",
				},
				{
					label: "Neke atu i te 60 meneti",
					value: "More than 60 minutes",
				},
				{
					label: "Kāori i te mōhio",
					value: "Don't know",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 6",
			label: "On a normal school day, how much break time do you have?",
			kid_label: "On a normal school day, how much break time do you have?",
			adult_label: "On a normal school day, how much break time does your child have?",
			kid_sublabel:
				"This means interval and lunch breaks. Please add the time together – for example two 15-minute interval/break periods per day and 30 minutes for lunch would be 60 minutes in total.",
			adult_sublabel:
				"This means interval and lunch breaks. Please add the time together – for example two 15-minute interval/break periods per day and 30 minutes for lunch would be 60 minutes.",
			choices: [
				{
					label: "0 minutes",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutes",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutes",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "More than 60 minutes",
					value: "More than 60 minutes",
				},
				{
					label: "Don't know",
					value: "Don't know",
				},
			],
		},
		"cz-CR": {
			type: Question.QuestionRadio,
			heading: "Otázka 6",
			label: "Kolik času během normálního školního dne strávíš přestávkami?",
			kid_label: "Kolik času během normálního školního dne strávíš přestávkami?",
			adult_label: "Kolik času během normálního školního dne stráví vaše dítě přestávkami?",
			kid_sublabel:
				"Tím se rozumí přestávky včetně obědové pauzy. Prosím sečti dobu všech přestávek – například dvě patnáctiminutové přestávky a jedna třicetiminutová přestávka na oběd dají dohromady 60 minut",
			adult_sublabel:
				"Tím se rozumí přestávky včetně obědové pauzy. Prosím sečtěte dobu všech přestávek – například dvě patnáctiminutové přestávky a jedna třicetiminutová přestávka na oběd dají dohromady 60 minut",
			choices: [
				{
					label: "0 minut",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minut",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minut",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minut",
					value: "31 - 60 minutes",
				},
				{
					label: "Více než 60 minut",
					value: "More than 60 minutes",
				},
				{
					label: "Nevím",
					value: "Don't know",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 6",
			label: "En un día escolar normal ¿Cuánto tiempo de descanso tienes?",
			kid_label: "En un día escolar normal ¿Cuánto tiempo de descanso tienes?",
			adult_label: "En un día escolar normal ¿Cuánto tiempo de descanso tiene su hija o hijo?",
			kid_sublabel:
				"Esto significa el recreo y la hora de almuerzo escolar. Por favor, suma los tiempos; por ejemplo, dos descansos de 15 minutos por día y 30 minutos para el almuerzo sumarían 60 minutos",
			adult_sublabel:
				"Esto significa el recreo y la hora de almuerzo escolar. Por favor, sume los tiempos; por ejemplo, dos descansos de 15 minutos por día y 30 minutos para el almuerzo sumarían 60 minutos",
			choices: [
				{
					label: "0 minutos",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutos",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutos",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutos",
					value: "31 - 60 minutes",
				},
				{
					label: "Más de 60 minutos",
					value: "More than 60 minutes",
				},
				{
					label: "No sé",
					value: "Don't know",
				},
			],
		},
		"es-CL": {
			type: Question.QuestionRadio,
			heading: "Pregunta 6",
			label: "En un día escolar normal ¿Cuánto tiempo de descanso tienes?",
			kid_label: "En un día escolar normal ¿Cuánto tiempo de descanso tienes?",
			adult_label: "En un día escolar normal ¿Cuánto tiempo de descanso tiene su hija o hijo?",
			kid_sublabel:
				"Esto significa el recreo y la hora de almuerzo escolar) Por favor, suma los tiempos; por ejemplo, dos descansos de 15 minutos por día y 30 minutos para el almuerzo sumarían 60 minutos",
			adult_sublabel:
				"Esto significa el recreo y la hora de almuerzo escolar) Por favor, sume los tiempos; por ejemplo, dos descansos de 15 minutos por día y 30 minutos para el almuerzo sumarían 60 minutos",
			choices: [
				{
					label: "0 minutos",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutos",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutos",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutos",
					value: "31 - 60 minutes",
				},
				{
					label: "Más de 60 minutos",
					value: "More than 60 minutes",
				},
				{
					label: "No sé",
					value: "Don't know",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 6",
			label: "On a normal school day, how much break time do you have?",
			kid_label: "On a normal school day, how much break time do you have?",
			adult_label: "On a normal school day, how much break time does your child have?",
			kid_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			adult_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			choices: [
				{
					label: "0 minutes",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutes",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutes",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "More than 60 minutes",
					value: "More than 60 minutes",
				},
				{
					label: "Don't know",
					value: "Don't know",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 6",
			label: "On a normal school day, how much break time do you have?",
			kid_label: "On a normal school day, how much break time do you have?",
			adult_label: "On a normal school day, how much break time does your child have?",
			kid_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			adult_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			choices: [
				{
					label: "0 minutes",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutes",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutes",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "More than 60 minutes",
					value: "More than 60 minutes",
				},
				{
					label: "Don't know",
					value: "Don't know",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 6",
			label: "Kodi patsiku lasukulu, mumakhala ndi nthawi ya buleki yaitali bwanji?",
			kid_label: "Kodi patsiku lasukulu, mumakhala ndi nthawi ya buleki yaitali bwanji?",
			adult_label:
				"Patsiku lasukulu labwinobwino kodi mwana wanu amakhala ndi nthawi ya buleki yochuluka bwanji?",
			kid_sublabel:
				"Apa ndikufuna uphatikize nthawi yonse ya buleki kuphatikizapo yachokudya chamasana, mwachitsanzo ngati umakhala ndi ma buleki awiri a 15 minutes komanso buleki ya chokudya chamasana ya 30 minutes, nthawi yonse pamozi ikhala 60 minutes.",
			adult_sublabel:
				"Apa ndikufuna muphatikize nthawi yonse ya buleki, mwachitsanzo ngati mwana wanu amakhala ndi ma buleki awiri a 15 minutes komanso buleki ya chokudya chamasana ya 30 minutes, nthawi yonse pamozi ikhala 60 minutes.",
			choices: [
				{
					label: "Simupita buleki",
					value: "0 minutes",
				},
				{
					label: "1 mpaka 15 minutes",
					value: "1 - 15 minutes",
				},
				{
					label: "16 mpaka 30 minutes",
					value: "16 - 30 minutes",
				},
				{
					label: "31 mpaka 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "Imapitilira 60 minutes",
					value: "More than 60 minutes",
				},
				{
					label: "Sindikudziwa",
					value: "Don't know",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न ६",
			label: "शाळेच्या सर्वसामान्य दिवशी, तुमची मधली सुट्टी किती वेळ असते?",
			kid_label: "शाळेच्या सर्वसामान्य दिवशी, तुमची मधली सुट्टी किती वेळ असते?",
			adult_label: "शाळेच्या नेहमीच्या दिवशी, तुमच्या मुलाची मधली सुट्टी किती वेळ असते?",
			kid_sublabel:
				"छोटी सुट्टी आणि जेवणाची सुट्टी मिळून). कृपया सगळा वेळ एकत्र मोजा – उदाहरणार्थ १५ मिनिटांच्या दोन लहान सुट्ट्या व ३० मिनिटे जेवणाची सुट्टी असे मिळून ६० मिनिटे होतील",
			adult_sublabel:
				"छोटी सुट्टी आणि जेवणाची सुट्टी मिळून). कृपया सगळा वेळ एकत्र मोजा – उदाहरणार्थ १५ मिनिटांच्या दोन लहान सुट्ट्या व ३० मिनिटे जेवणाची सुट्टी असे मिळून ६० मिनिटे होतील",
			choices: [
				{
					label: "0 मिनिटे",
					value: "0 minutes",
				},
				{
					label: "१ - १५ मिनिटे",
					value: "1 - 15 minutes",
				},
				{
					label: "१६ - ३० मिनिटे",
					value: "16 - 30 minutes",
				},
				{
					label: "३१ - ६० मिनिटे",
					value: "31 - 60 minutes",
				},
				{
					label: "६० मिनिटांपेक्षा अधिक काळ",
					value: "More than 60 minutes",
				},
				{
					label: "माहित नाही",
					value: "Don't know",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न ६",
			label: "एक सामान्य स्कूल के दिन, आपके पास कितना अवकाश समय होता है?",
			kid_label: "एक सामान्य स्कूल के दिन, आपके पास कितना अवकाश समय होता है?",
			adult_label: "सामान्य स्कूल दिवस पर, आपके बच्चे के पास कितना अवकाश समय होता है?",
			kid_sublabel:
				"इसका मतलब है अवकाश और दोपहर के भोजन का अवकाश)। कृपया समय को एक साथ जोड़ें - उदाहरण के लिए प्रतिदिन 15 मिनट की दो अवकाश/अवकाश अवधि और दोपहर के भोजन के लिए 30 मिनट की अवधि 60 मिनट होगी",
			adult_sublabel:
				"इसका मतलब है अवकाश और दोपहर के भोजन का अवकाश)। कृपया समय को एक साथ जोड़ें - उदाहरण के लिए प्रतिदिन 15 मिनट की दो अवकाश/अवकाश अवधि और दोपहर के भोजन के लिए 30 मिनट की अवधि 60 मिनट होगी",
			choices: [
				{
					label: "0 मिनट",
					value: "0 minutes",
				},
				{
					label: "1 - 15 मिनट",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 मिनट",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 मिनट",
					value: "31 - 60 minutes",
				},
				{
					label: "60 मिनट से अधिक",
					value: "More than 60 minutes",
				},
				{
					label: "पता नहीं",
					value: "Don't know",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 6",
			label: "On a normal school day, how much break time do you have?",
			kid_label: "On a normal school day, how much break time do you have?",
			adult_label: "On a normal school day, how much break time does your child have?",
			kid_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			adult_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			choices: [
				{
					label: "0 minutes",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutes",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutes",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "More than 60 minutes",
					value: "More than 60 minutes",
				},
				{
					label: "Don't know",
					value: "Don't know",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [٦]",
			label: "في أيام الدراسة العادية، ما هي مدّة الاستراحة لديك؟",
			kid_label: "في أيام الدراسة العادية، ما هي مدّة الاستراحة لديك؟",
			adult_label: "في أيام الدراسة العادية، ما هي مدّة الاستراحة لدى طفلك؟",
			kid_sublabel:
				"هذا يشمل فترة الاستراحة ووقت الغداء. يرجى إضافة الوقت معاً – مثلاً، فترتا استراحة لمدّة ١٥ دقيقة في اليوم وفترة واحدة لمدة ٣٠ دقيقة لتناول الطعام ستكون ٦٠ دقيقة إجمالاً.",
			adult_sublabel:
				"هذا يشمل فترة الاستراحة ووقت الغداء. يرجى إضافة الوقت معاً – مثلاً، فترتا استراحة لمدّة ١٥ دقيقة في اليوم وفترة واحدة لمدة ٣٠ دقيقة لتناول الطعام ستكون ٦٠ دقيقة إجمالاً.",
			choices: [
				{
					label: "‌لا شيء",
					value: "0 minutes",
				},
				{
					label: "‌ما بين دقيقة و١٥ دقيقة",
					value: "1 - 15 minutes",
				},
				{
					label: "ما بين ١٦ و٣٠ دقيقة",
					value: "16 - 30 minutes",
				},
				{
					label: "ما بين ٣١ و٦٠ دقيقة",
					value: "31 - 60 minutes",
				},
				{
					label: "أكثر من ٦٠ دقيقة",
					value: "More than 60 minutes",
				},
				{
					label: "لا أعرف",
					value: "Don't know",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न ६",
			label: "एक सामान्य विध्यालय जाने दिनमा, तपाईंसंग कति समयको ब्रेक टाइम (खाली समय) हुन्छ?",
			kid_label: "एक सामान्य विध्यालय जाने दिनमा, तपाईंसंग कति समयको ब्रेक टाइम (खाली समय) हुन्छ?",
			adult_label:
				"एक सामान्य विध्यालय जाने दिनमा, तपाईंको छोरा वा छोरी संग कति समयको ब्रेक टाइम (खाली समय) हुन्छ?",
			kid_sublabel:
				"यसको मतलब रिसेस् र खाजाको समय । कृपया जोडेर समग्र समय निकाल्नुहोला- उदाहरणका लागि एक दिनमा, दुईटा १५ मिनेटको छोटो ब्रेक (रिसेस् टाईम) र ३० मिनेटको खाजा ब्रेकको समय जोड्दा समग्रमा ६० मिनेट हुनेछ l",
			adult_sublabel:
				"यसको मतलब रिसेस् र खाजाको समय । कृपया जोडेर समग्र समय निकाल्नुहोला- उदाहरणका लागि एक दिनमा, दुईटा १५ मिनेटको छोटो ब्रेक (रिसेस् टाईम) र ३० मिनेटको खाजा ब्रेकको समय जोड्दा समग्रमा ६० मिनेट हुनेछ l",
			choices: [
				{
					label: "० मिनेट",
					value: "0 minutes",
				},
				{
					label: "१-१५ मिनेट",
					value: "1 - 15 minutes",
				},
				{
					label: "१६-३० मिनेट",
					value: "16 - 30 minutes",
				},
				{
					label: "३१-६० मिनेट",
					value: "31 - 60 minutes",
				},
				{
					label: "६० मिनेटभन्दा बढी",
					value: "More than 60 minutes",
				},
				{
					label: "थाहा छैन",
					value: "Don't know",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 6",
			label: "Em um dia normal na escola, quanto tempo de intervalo ou recreio você tem?",
			kid_label: "Em um dia normal na escola, quanto tempo de intervalo ou recreio você tem?",
			adult_label:
				"Em um dia normal na escola, quanto tempo de intervalo ou recreio a criança ou adolescente que você é responsável tem?",
			kid_sublabel:
				"Isso significa recreios ou intervalos na escola. Por favor, contabilize todo o tempo junto - por exemplo, se você tem dois intervalos ou recreios de 15 minutos por dia e mais 30 minutos para o almoço por dia, o seu tempo total seria de 60 minutos",
			adult_sublabel:
				"Isso significa recreios ou intervalos na escola. Por favor, contabilize todo o tempo junto, por exemplo, se a criança ou adolescente que você é responsável tem dois intervalos ou recreios de 15 minutos por dia e mais 30 minutos para o almoço por dia, o tempo total seria de 60 minutos de intervalo ou recreio.",
			choices: [
				{
					label: "0 minutos",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutos",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutos",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutos",
					value: "31 - 60 minutes",
				},
				{
					label: "Mais de 60 minutos",
					value: "More than 60 minutes",
				},
				{
					label: "Não sei",
					value: "Don't know",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "ข้อ 6",
			label: "ในวันเรียนปกติ น้องมีช่วงเวลาพักเบรกต่าง ๆ ตลอดทั้งวันรวมกี่นาที?",
			kid_label: "ในวันเรียนปกติ น้องมีช่วงเวลาพักเบรกต่าง ๆ ตลอดทั้งวันรวมกี่นาที?",
			adult_label: "ในวันเรียนปกติ บุตรหลานของคุณมีช่วงเวลาพักเบรกต่าง ๆ ตลอดทั้งวันรวมกี่นาที?",
			kid_sublabel:
				"การพักนี้หมายถึงการพักเบรกและการพักกลางวัน ขอให้น้องรวมเวลาทั้งหมดเข้าด้วยกัน เช่น มีช่วงเวลาพักเบรก 15 นาที 2 รอบต่อวัน และมีช่วงพักทานอาหารกลางวัน 30 นาที ก็รวมเป็น 60 นาที",
			adult_sublabel:
				"การพักนี้หมายถึงการพักเบรกและการพักกลางวัน ขอให้รวมเวลาทั้งหมดเข้าด้วยกัน เช่น มีช่วงเวลาพักเบรก 15 นาที 2 รอบต่อวัน และมีช่วงพักทานอาหารกลางวัน 30 นาที ก็รวมเป็น 60 นาที",
			choices: [
				{
					label: "0 นาที",
					value: "0 minutes",
				},
				{
					label: "1 - 15 นาที",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 นาที",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 นาที",
					value: "31 - 60 minutes",
				},
				{
					label: "มากกว่า 60 นาที",
					value: "More than 60 minutes",
				},
				{
					label: "ไม่ทราบ",
					value: "Don't know",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 6",
			label: "Hur mycket rast har du under en vanlig skoldag?",
			kid_label: "Hur mycket rast har du under en vanlig skoldag?",
			adult_label: "Hur mycket rast har ditt barn under en vanlig skoldag?",
			kid_sublabel:
				"både rast och lunchrast.  Plussa ihop tiden - till exempel två 15-minuters raster och 30 minuter lunchrast blir 60 minuter",
			adult_sublabel:
				"både rast och lunchrast.  Plussa ihop tiden - till exempel två 15-minuters raster och 30 minuter lunchrast blir 60 minuter",
			choices: [
				{
					label: "0 minuter",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minuter",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minuter",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minuter",
					value: "31 - 60 minutes",
				},
				{
					label: "Mer än 60 minuter",
					value: "More than 60 minutes",
				},
				{
					label: "Vet ej",
					value: "Don't know",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 6",
			label: "通常在上学日，在学校时你有多长休息时间？",
			kid_label: "通常在上学日，在学校时你有多长休息时间？",
			adult_label: "通常在上学日，在学校时您的孩子有多长休息时间？",
			kid_sublabel:
				"包括课间休息和午休时间。请将所有休息时间加在一起——如, 每天两次15分钟的课间休息/午休时间和30分钟的午餐时间一共是60分钟",
			adult_sublabel:
				"包括课间休息和午休时间。请将所有休息时间加在一起——如, 每天两次15分钟的课间休息/午休时间和30分钟的午餐时间一共是60分钟",
			choices: [
				{
					label: "无",
					value: "0 minutes",
				},
				{
					label: "1-15分钟",
					value: "1 - 15 minutes",
				},
				{
					label: "16-30分钟",
					value: "16 - 30 minutes",
				},
				{
					label: "31-60分钟",
					value: "31 - 60 minutes",
				},
				{
					label: "60分钟以上",
					value: "More than 60 minutes",
				},
				{
					label: "不知道",
					value: "Don't know",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 6",
			label: "En un día escolar normal ¿Cuánto tiempo de recreo o descanso tienes?",
			kid_label: "En un día escolar normal ¿Cuánto tiempo de recreo o descanso tienes?",
			adult_label:
				"En un día escolar normal ¿Cuánto tiempo de recreo o descanso tiene su hija o hijo?",
			kid_sublabel:
				"Esto significa el recreo o descanso y la hora de comer. Por favor, suma los tiempos; por ejemplo, dos recreos o descansos de 15 minutos por día y 30 minutos para comer sumarían 60 minutos",
			adult_sublabel:
				"Esto significa el recreo o descanso y la hora de comer. Por favor, sume los tiempos; por ejemplo, dos recreos o descansos de 15 minutos por día y 30 minutos para comer sumarían 60 minutos",
			choices: [
				{
					label: "0 minutos",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutos",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutos",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutos",
					value: "31 - 60 minutes",
				},
				{
					label: "Más de 60 minutos",
					value: "More than 60 minutes",
				},
				{
					label: "No sé",
					value: "Don't know",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 6",
			label: "En un día escolar normal, ¿cuánto tiempo de recreo o descanso tienes?",
			kid_label: "En un día escolar normal, ¿cuánto tiempo de recreo o descanso tienes?",
			adult_label:
				"En un día escolar normal, ¿cuánto tiempo de recreo o descanso tiene su hija o hijo?",
			kid_sublabel:
				"Esto significa el recreo o descanso y la hora del refrigerio. Por favor, suma los tiempos; por ejemplo, dos recreos o descansos de 15 minutos por día y 30 minutos para consumir refrigerios sumarían 60 minutos",
			adult_sublabel:
				"Esto significa el recreo o descanso y la hora del luch o refrigerio escolar. Por favor, sume los tiempos; por ejemplo, dos recreos o descansos de 15 minutos por día y 30 minutos para comer sumarían 60 minutos",
			choices: [
				{
					label: "0 minutos",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutos",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutos",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutos",
					value: "31 - 60 minutes",
				},
				{
					label: "Más de 60 minutos",
					value: "More than 60 minutes",
				},
				{
					label: "No sé",
					value: "Don't know",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 6",
			label: "Lors d'une journée d'école normale, combien as-tu de temps de pause?",
			kid_label: "Lors d'une journée d'école normale, combien as-tu de temps de pause?",
			adult_label:
				"Lors d'une journée d'école normale, combien de temps de pause ton enfant a-t-il (elle)?",
			kid_sublabel:
				"Ici, il faut additionner les durées - par exemple, deux récréations/pauses de 15 minutes par jour et 30 minutes pour dîner donnent 60 minutes.",
			adult_sublabel:
				"Ici, il faut additionner les durées - par exemple, deux récréations/pauses de 15 minutes par jour et 30 minutes pour dîner donnent 60 minutes.",
			choices: [
				{
					label: "0 minutes",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutes",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutes",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "Plus de 60 minutes",
					value: "More than 60 minutes",
				},
				{
					label: "Je ne sais pas",
					value: "Don't know",
				},
			],
		},
	},
};

export default S1Q6;
