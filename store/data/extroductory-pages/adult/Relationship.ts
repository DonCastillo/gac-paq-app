import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const Relationship: LangQuestionRadioPayloadInterface = {
	ident: "relationship_to_the_child",
	name: "relationship_to_the_child",
	type: Screen.SingleQuestion,
	column_name: "relationship",
	audio_ident: "relationship",
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label: "What is your relationship to the child?",
			kid_label: "What is your relationship to the child?",
			adult_label: "What is your relationship to the child?",
			choices: [
				{
					label: "Father",
					value: "Father",
				},
				{
					label: "Mother",
					value: "Mother",
				},
				{
					label: "Grandfather",
					value: "Grandfather",
				},
				{
					label: "Grandmother",
					value: "Grandmother",
				},
				{
					label: "Tutor or guardian",
					value: "Tutor or guardian",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 28",
			label: "Vilken är din relation till barnet?",
			kid_label: "Vilken är din relation till barnet?",
			adult_label: "Vilken är din relation till barnet?",
			choices: [
				{
					label: "Pappa",
					value: "Father",
				},
				{
					label: "Mamma",
					value: "Mother",
				},
				{
					label: "Farfar/Morfar",
					value: "Grandfather",
				},
				{
					label: "Farmor/Mormor",
					value: "Grandmother",
				},
				{
					label: "Vårdnadshavare",
					value: "Tutor or guardian",
				},
				{
					label: "Annat",
					value: "Other",
				},
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to answer",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "第二十八题",
			label: "你和您孩子的关系是？",
			kid_label: "你和您孩子的关系是？",
			adult_label: "你和您孩子的关系是？",
			choices: [
				{
					label: "父亲",
					value: "Father",
				},
				{
					label: "母亲",
					value: "Mother",
				},
				{
					label: "祖父",
					value: "Grandfather",
				},
				{
					label: "祖母",
					value: "Grandmother",
				},
				{
					label: "导师或监护人 ",
					value: "Tutor or guardian",
				},
				{
					label: "其他",
					value: "Other",
				},
				{
					label: "不想回答",
					value: "Prefer not to answer",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 28",
			label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			kid_label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			adult_label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			choices: [
				{
					label: "Papá",
					value: "Father",
				},
				{
					label: "Mamá",
					value: "Mother",
				},
				{
					label: "Abuelo",
					value: "Grandfather",
				},
				{
					label: "Abuela",
					value: "Grandmother",
				},
				{
					label: "Tutor",
					value: "Tutor or guardian",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to answer",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label: "Quel est votre relation avec l'enfant?",
			kid_label: "Quel est votre relation avec l'enfant?",
			adult_label: "Quel est votre relation avec l'enfant?",
			choices: [
				{
					label: "Père",
					value: "Father",
				},
				{
					label: "Mère",
					value: "Mother",
				},
				{
					label: "Grand-père",
					value: "Grandfather",
				},
				{
					label: "Grand-mère",
					value: "Grandmother",
				},
				{
					label: "Tuteur (tutrice) ou gardien(ne)",
					value: "Tutor or guardian",
				},
				{
					label: "Autre",
					value: "Other",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default Relationship;
