import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const GSHS3: LangQuestionRadioPayloadInterface = {
	ident: "gshs_3",
	name: "Question 27: During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
	column_name: "GSHS 03",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 27",
			label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			kid_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			adult_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २७",
			label:
				"मागील ७ दिवसांत, तुम्ही किती दिवस घरून शाळेला किंवा शाळेतून घरी चालत किंवा सायकल चालवत आला- गेला?",
			kid_label:
				"मागील ७ दिवसांत, तुम्ही किती दिवस घरून शाळेला किंवा शाळेतून घरी चालत किंवा सायकल चालवत आला- गेला?",
			adult_label:
				"मागील ७ दिवसांत, तुम्ही किती दिवस घरून शाळेला किंवा शाळेतून घरी चालत किंवा सायकल चालवत आला- गेला?",
			choices: [
				{
					label: "० दिवस",
					value: "0",
				},
				{
					label: "१ दिवस",
					value: "1",
				},
				{
					label: "२ दिवस",
					value: "2",
				},
				{
					label: "३ दिवस",
					value: "3",
				},
				{
					label: "४ दिवस",
					value: "4",
				},
				{
					label: "५ दिवस",
					value: "5",
				},
				{
					label: "६ दिवस",
					value: "6",
				},
				{
					label: "७ दिवस",
					value: "7",
				},
			],
		},
		"es-CL": {
			type: Question.QuestionRadio,
			heading: "Pregunta 27",
			label:
				"Durante los últimos 7 días, ¿cuántos días fuiste caminando o en bicicleta al colegio y volviste de él?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste caminando o en bicicleta al colegio y volviste de él?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste caminando o en bicicleta al colegio y volviste de él?",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"cz-CR": {
			type: Question.QuestionRadio,
			heading: "Otázka 27",
			label:
				"V kolika z posledních 7 dnů jsi šel/šla pěšky nebo jel/a na kole do školy nebo ze školy?",
			kid_label:
				"V kolika z posledních 7 dnů jsi šel/šla pěšky nebo jel/a na kole do školy nebo ze školy?",
			adult_label:
				"V kolika z posledních 7 dnů jsi šel/šla pěšky nebo jel/a na kole do školy nebo ze školy?",
			choices: [
				{
					label: "0 den",
					value: "0",
				},
				{
					label: "1 den",
					value: "1",
				},
				{
					label: "2 dny",
					value: "2",
				},
				{
					label: "3 dny",
					value: "3",
				},
				{
					label: "4 dny",
					value: "4",
				},
				{
					label: "5 dní",
					value: "5",
				},
				{
					label: "6 dní",
					value: "6",
				},
				{
					label: "7 dní",
					value: "7",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न 27",
			label:
				"पिछले 7 दिनों के दौरान, आपने कितने दिन पैदल चलकर या साइकिल चलाकर स्कूल से आना-जाना किया?",
			kid_label:
				"पिछले 7 दिनों के दौरान, आपने कितने दिन पैदल चलकर या साइकिल चलाकर स्कूल से आना-जाना किया?",
			adult_label:
				"पिछले 7 दिनों के दौरान, आपने कितने दिन पैदल चलकर या साइकिल चलाकर स्कूल से आना-जाना किया?",
			choices: [
				{
					label: "0 दिन",
					value: "0",
				},
				{
					label: "1 दिन",
					value: "1",
				},
				{
					label: "2 दिन",
					value: "2",
				},
				{
					label: "3 दिन",
					value: "3",
				},
				{
					label: "4 दिन",
					value: "4",
				},
				{
					label: "5 दिन",
					value: "5",
				},
				{
					label: "6 दिन",
					value: "6",
				},
				{
					label: "7 दिन",
					value: "7",
				},
			],
		},
		"en-IN": {
			type: Question.QuestionRadio,
			heading: "Question 27",
			label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			kid_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			adult_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"mi-NZ": {
			type: Question.QuestionRadio,
			heading: "Wāhanga 27",
			label:
				"I roto i ngā rā e 7 kua pahure ake nei, e hia ngā rā i hīkoi, i eke pahikara rānei koe ki te kura, mai i te kura rānei?",
			kid_label:
				"I roto i ngā rā e 7 kua pahure ake nei, e hia ngā rā i hīkoi, i eke pahikara rānei koe ki te kura, mai i te kura rānei?",
			adult_label:
				"I roto i ngā rā e 7 kua pahure ake nei, e hia ngā rā i hīkoi, i eke pahikara rānei koe ki te kura, mai i te kura rānei?",
			choices: [
				{
					label: "O ngā rā",
					value: "0",
				},
				{
					label: "1 te rā",
					value: "1",
				},
				{
					label: "E 2 ngā rā",
					value: "2",
				},
				{
					label: "E 3 ngā rā",
					value: "3",
				},
				{
					label: "E 4 ngā rā",
					value: "4",
				},
				{
					label: "E 5 ngā rā",
					value: "5",
				},
				{
					label: "E 6 ngā rā",
					value: "6",
				},
				{
					label: "E 7 ngā rā",
					value: "7",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 27",
			label:
				"M'masiku 7 apitawa, ndi masiku angati omwe munayenda kapena kupalasa njinga popita kapena kuchokera kusukulu?",
			kid_label:
				"M'masiku 7 apitawa, ndi masiku angati omwe munayenda kapena kupalasa njinga popita kapena kuchokera kusukulu?",
			adult_label:
				"M'masiku 7 apitawa, ndi masiku angati omwe munayenda kapena kupalasa njinga popita kapena kuchokera kusukulu?",
			choices: [
				{
					label: "Simunayende kapena kupalasa njinga",
					value: "0",
				},
				{
					label: "Tsiku limodzi",
					value: "1",
				},
				{
					label: "Masiku awiri",
					value: "2",
				},
				{
					label: "Masiku atatu",
					value: "3",
				},
				{
					label: "Masiku 4",
					value: "4",
				},
				{
					label: "Masiku 5",
					value: "5",
				},
				{
					label: "Masiku 6",
					value: "6",
				},
				{
					label: "Masiku 7",
					value: "7",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २७",
			label:
				"गत ७ दिनको अवधिमा, कति दिन तपाईँले स्कूल जाने वा फर्कने क्रममा हिँड्नुभयो वा साइकल चलाउनुभयो",
			kid_label:
				"गत ७ दिनको अवधिमा, कति दिन तपाईँले स्कूल जाने वा फर्कने क्रममा हिँड्नुभयो वा साइकल चलाउनुभयो",
			adult_label:
				"गत ७ दिनको अवधिमा, कति दिन तपाईँले स्कूल जाने वा फर्कने क्रममा हिँड्नुभयो वा साइकल चलाउनुभयो",
			choices: [
				{
					label: "० दिन",
					value: "0",
				},
				{
					label: "१ दिन",
					value: "1",
				},
				{
					label: "२ दिन",
					value: "2",
				},
				{
					label: "३ दिन",
					value: "3",
				},
				{
					label: "४ दिन",
					value: "4",
				},
				{
					label: "५ दिन",
					value: "5",
				},
				{
					label: "६ दिन",
					value: "6",
				},
				{
					label: "७ दिन",
					value: "7",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "ข้อ 27",
			label: "ในระหว่าง 7 วันที่ผ่านมา นักเรียนเดินหรือขี่จักรยานไปหรือกลับจากโรงเรียน จำนวนกี่วัน",
			kid_label:
				"ในระหว่าง 7 วันที่ผ่านมา นักเรียนเดินหรือขี่จักรยานไปหรือกลับจากโรงเรียน จำนวนกี่วัน",
			adult_label:
				"ในระหว่าง 7 วันที่ผ่านมา นักเรียนเดินหรือขี่จักรยานไปหรือกลับจากโรงเรียน จำนวนกี่วัน",
			choices: [
				{
					label: "0 วัน",
					value: "0",
				},
				{
					label: "1 วัน",
					value: "1",
				},
				{
					label: "2 วัน",
					value: "2",
				},
				{
					label: "3 วัน",
					value: "3",
				},
				{
					label: "4 วัน",
					value: "4",
				},
				{
					label: "5 วัน",
					value: "5",
				},
				{
					label: "6 วัน",
					value: "6",
				},
				{
					label: "7 วัน",
					value: "7",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 27",
			label:
				"Durante os últimos 7 dias, em quantos dias você andou a pé ou de bicicleta para ir ou voltar da escola?",
			kid_label:
				"Durante os últimos 7 dias, em quantos dias você andou a pé ou de bicicleta para ir ou voltar da escola?",
			adult_label:
				"Durante os últimos 7 dias, em quantos dias você andou a pé ou de bicicleta para ir ou voltar da escola?",
			choices: [
				{
					label: "0 (nenhum dia)",
					value: "0",
				},
				{
					label: "1 dia",
					value: "1",
				},
				{
					label: "2 dias",
					value: "2",
				},
				{
					label: "3 dias",
					value: "3",
				},
				{
					label: "4 dias",
					value: "4",
				},
				{
					label: "5 dias",
					value: "5",
				},
				{
					label: "6 dias",
					value: "6",
				},
				{
					label: "7 dias",
					value: "7",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 27",
			label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de casa al colegio, o volviste caminando o en bicicleta?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de casa al colegio, o volviste caminando o en bicicleta?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de casa al colegio, o volviste caminando o en bicicleta?",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 27",
			label:
				"Au cours des 7 derniers jours, combien de jours as-tu fait le chemin pour aller ou revenir de l’école à pied ou en vélo?",
			kid_label:
				"Au cours des 7 derniers jours, combien de jours as-tu fait le chemin pour aller ou revenir de l’école à pied ou en vélo?",
			adult_label:
				"Au cours des 7 derniers jours, combien de jours as-tu fait le chemin pour aller ou revenir de l’école à pied ou en vélo?",
			choices: [
				{
					label: "0 jour",
					value: "0",
				},
				{
					label: "1 jour",
					value: "1",
				},
				{
					label: "2 jours",
					value: "2",
				},
				{
					label: "3 jours",
					value: "3",
				},
				{
					label: "4 jours",
					value: "4",
				},
				{
					label: "5 jours",
					value: "5",
				},
				{
					label: "6 jours",
					value: "6",
				},
				{
					label: "7 jours",
					value: "7",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 27",
			label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de la casa a la escuela, o volviste caminando o en bicicleta?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de la casa a la escuela, o volviste caminando o en bicicleta?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de la casa a la escuela, o volviste caminando o en bicicleta?",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 27",
			label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de la casa a la escuela, o volviste caminando o en bicicleta?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de la casa a la escuela, o volviste caminando o en bicicleta?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de la casa a la escuela, o volviste caminando o en bicicleta?",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 27",
			label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			kid_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			adult_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 27",
			label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			kid_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			adult_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 27",
			label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			kid_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			adult_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 27",
			label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			kid_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			adult_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [٢٧]",
			label:
				"خلال السبعة أيام الماضية، كم يومًا ذهبت فيه إلى المدرسة أو رجعت منها مشيًا أو بالدراجة؟",
			kid_label:
				"خلال السبعة أيام الماضية، كم يومًا ذهبت فيه إلى المدرسة أو رجعت منها مشيًا أو بالدراجة؟",
			adult_label:
				"خلال السبعة أيام الماضية، كم يومًا ذهبت فيه إلى المدرسة أو رجعت منها مشيًا أو بالدراجة؟",
			choices: [
				{
					label: "لم يحدث",
					value: "0",
				},
				{
					label: "يومًا واحدًا",
					value: "1",
				},
				{
					label: "يومين",
					value: "2",
				},
				{
					label: "3 أيام",
					value: "3",
				},
				{
					label: "4 أيام",
					value: "4",
				},
				{
					label: "5 أيام",
					value: "5",
				},
				{
					label: "6 أيام",
					value: "6",
				},
				{
					label: "7 أيام",
					value: "7",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 27",
			label:
				"Hur många dagar gick eller cyklade du till eller från skolan under de senaste 7 dagarna?",
			kid_label:
				"Hur många dagar gick eller cyklade du till eller från skolan under de senaste 7 dagarna?",
			adult_label:
				"Hur många dagar gick eller cyklade du till eller från skolan under de senaste 7 dagarna?",
			choices: [
				{
					label: "0 dagar",
					value: "0",
				},
				{
					label: "En dag",
					value: "1",
				},
				{
					label: "2 dagar",
					value: "2",
				},
				{
					label: "3 dagar",
					value: "3",
				},
				{
					label: "4 dagar",
					value: "4",
				},
				{
					label: "5 dagar",
					value: "5",
				},
				{
					label: "6 dagar",
					value: "6",
				},
				{
					label: "7 dagar",
					value: "7",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 27",
			label: "在过去7天里，有多少天你步行或骑自行车上下学？",
			kid_label: "在过去7天里，有多少天你步行或骑自行车上下学？",
			adult_label: "在过去7天里，有多少天你步行或骑自行车上下学？",
			choices: [
				{
					label: "0天",
					value: "0",
				},
				{
					label: "1天",
					value: "1",
				},
				{
					label: "2天",
					value: "2",
				},
				{
					label: "3天",
					value: "3",
				},
				{
					label: "4天",
					value: "4",
				},
				{
					label: "5天",
					value: "5",
				},
				{
					label: "6天",
					value: "6",
				},
				{
					label: "7天",
					value: "7",
				},
			],
		},
	},
};

export default GSHS3;
