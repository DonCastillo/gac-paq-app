import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const Financial: LangQuestionRadioPayloadInterface = {
	ident: "difficulty_to_meet_financial_needs",
	name: "difficulty_to_meet_financial_needs",
	type: Screen.SingleQuestion,
	column_name: "financial_needs",
	audio_ident: "financial",
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "How difficult or easy is it for you to meet the financial needs of your family?",
			kid_label: "How difficult or easy is it for you to meet the financial needs of your family?",
			adult_label:
				"How difficult or easy is it for you to meet the financial needs of your family?",
			choices: [
				{
					label: "Very difficult",
					value: "Very difficult",
				},
				{
					label: "Difficult",
					value: "Difficult",
				},
				{
					label: "Neither easy nor difficult",
					value: "Neither easy nor difficult",
				},
				{
					label: "Easy",
					value: "Easy",
				},
				{
					label: "Very easy",
					value: "Very easy",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Pergunta 30",
			label: "Quão difícil ou fácil é para você suprir as necessidades financeiras de sua família?",
			kid_label:
				"Quão difícil ou fácil é para você suprir as necessidades financeiras de sua família?",
			adult_label:
				"Quão difícil ou fácil é para você suprir as necessidades financeiras de sua família?",
			choices: [
				{
					label: "Muito difícil",
					value: "Very difficult",
				},
				{
					label: "Difícil",
					value: "Difficult",
				},
				{
					label: "Nem fácil nem difícil",
					value: "Neither easy nor difficult",
				},
				{
					label: "Fácil",
					value: "Easy",
				},
				{
					label: "Muito fácil",
					value: "Very easy",
				},
				{
					label: "Prefiro não responder",
					value: "Prefer not to answer",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 30",
			label: "Hur svårt eller enkelt är det för dig att tillgodose din familjs ekonomiska behov?",
			kid_label:
				"Hur svårt eller enkelt är det för dig att tillgodose din familjs ekonomiska behov?",
			adult_label:
				"Hur svårt eller enkelt är det för dig att tillgodose din familjs ekonomiska behov?",
			choices: [
				{
					label: "Mycket svårt",
					value: "Very difficult",
				},
				{
					label: "Svårt",
					value: "Difficult",
				},
				{
					label: "Varken svårt eller enkelt",
					value: "Neither easy nor difficult",
				},
				{
					label: "Enkelt",
					value: "Easy",
				},
				{
					label: "Mycket enkelt",
					value: "Very easy",
				},
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to answer",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 30",
			label: "คุณสามารถตอบสนองความต้องการของครอบครัวทางการเงินในด้านต่าง ๆ ได้ยากหรือง่ายเพียงใด?",
			kid_label:
				"คุณสามารถตอบสนองความต้องการของครอบครัวทางการเงินในด้านต่าง ๆ ได้ยากหรือง่ายเพียงใด?",
			adult_label:
				"คุณสามารถตอบสนองความต้องการของครอบครัวทางการเงินในด้านต่าง ๆ ได้ยากหรือง่ายเพียงใด?",
			choices: [
				{
					label: "ยากมาก",
					value: "Very difficult",
				},
				{
					label: "ยาก",
					value: "Difficult",
				},
				{
					label: "ไม่ง่ายและไม่ยาก",
					value: "Neither easy nor difficult",
				},
				{
					label: "ง่าย",
					value: "Easy",
				},
				{
					label: "ง่ายมาก",
					value: "Very easy",
				},
				{
					label: "ไม่ต้องการตอบ",
					value: "Prefer not to answer",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 30",
			label: "对您来说满足家庭的经济需求难易程度如何？",
			kid_label: "对您来说满足家庭的经济需求难易程度如何？",
			adult_label: "对您来说满足家庭的经济需求难易程度如何？",
			choices: [
				{
					label: "非常困难",
					value: "Very difficult",
				},
				{
					label: "困难",
					value: "Difficult",
				},
				{
					label: "一般",
					value: "Neither easy nor difficult",
				},
				{
					label: "容易",
					value: "Easy",
				},
				{
					label: "非常容易",
					value: "Very easy",
				},
				{
					label: "不想回答",
					value: "Prefer not to answer",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Preunta 30",
			label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			kid_label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			adult_label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			choices: [
				{
					label: "Muy difícil",
					value: "Very difficult",
				},
				{
					label: "Difícil",
					value: "Difficult",
				},
				{
					label: "Ni fácil ni difícil",
					value: "Neither easy nor difficult",
				},
				{
					label: "Fácil",
					value: "Easy",
				},
				{
					label: "Muy fácil",
					value: "Very easy",
				},
				{
					label: "Prefiero no contestar",
					value: "Prefer not to answer",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label:
				"Est-ce difficile ou facile pour vous de subvenir aux besoins financiers de votre famille?",
			kid_label:
				"Est-ce difficile ou facile pour vous de subvenir aux besoins financiers de votre famille?",
			adult_label:
				"Est-ce difficile ou facile pour vous de subvenir aux besoins financiers de votre famille?",
			choices: [
				{
					label: "Très difficile",
					value: "Very difficult",
				},
				{
					label: "Difficile",
					value: "Difficult",
				},
				{
					label: "Ni facile ni difficile",
					value: "Neither easy nor difficult",
				},
				{
					label: "Facile",
					value: "Easy",
				},
				{
					label: "Très facile",
					value: "Very easy",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default Financial;
