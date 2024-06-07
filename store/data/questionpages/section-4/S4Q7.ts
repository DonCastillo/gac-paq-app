import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionCheckboxPayloadInterface } from "interface/payload.type";

const S4Q7: QuestionCheckboxPayloadInterface = {
	ident: "transportation_7",
	name: "Question 17:	In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 17",
			label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			adult_label:
				"In the past week, did your child walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_sublabel: "Please select all responses that apply to you.",
			adult_sublabel: "Please select all responses that apply to your child.",
			choices: [
				{
					label: "Yes, I walked",
					value: "Walked",
					label_mode: {
						kid: "Yes, I walked",
						adult: "Yes, they walked",
					},
				},
				{
					label: "Yes, I wheeled",
					value: "Wheeled",
					label_mode: {
						kid: "Yes, I wheeled",
						adult: "Yes, they wheeled",
					},
				},
				{
					label: "No",
					value: "No",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionCheckbox,
			heading: "问题 17",
			label:
				"在过去一周里，你是否采用积极交通方式（如步行和骑自行车）去学校或工作以外的地方(如朋友家、公园、商店)?",
			kid_label:
				"在过去一周里，你是否采用积极交通方式（如步行和骑自行车）去学校或工作以外的地方(如朋友家、公园、商店)?",
			adult_label:
				"在过去一周里，您的孩子是否采用积极交通方式（如步行或骑自行车）去学校或工作以外的地方(如朋友家、公园、商店)?",
			kid_sublabel: "请选择所有适用于你的答案。",
			adult_sublabel: "请选择所有适用于您的孩子的答案。",
			choices: [
				{
					label: "是的，我步行去 ",
					value: "Walked",
					label_mode: {
						kid: "是的，我步行去 ",
						adult: "是的，他/她步行去",
					},
				},
				{
					label: "是的，我骑自行车去 ",
					value: "Wheeled",
					label_mode: {
						kid: "是的，我骑自行车去 ",
						adult: "是的，他/她骑自行车去 ",
					},
				},
				{
					label: "否",
					value: "No",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionCheckbox,
			heading: "Pregunta 17",
			label:
				"En la última semana, ¿has caminado o te has desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines) a lugares distintos del trabajo, la escuela o colegio (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			kid_label:
				"En la última semana, ¿has caminado o te has desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines) a lugares distintos del trabajo, la escuela o colegio (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			adult_label:
				"En la última semana, ¿su hija o hijo ha caminado o se ha desplazado sobre ruedas de forma activa (por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines) a lugares distintos de trabajo, la escuela o colegio (por ejemplo, a casa de un amigo, a un parque, a una tienda)?",
			kid_sublabel: "Por favor, selecciona todas las respuestas que correspondan",
			adult_sublabel: "Por favor, selecciona todas las respuestas que correspondan",
			choices: [
				{
					label: "Sí, caminé",
					value: "Walked",
					label_mode: {
						kid: "Sí, caminé",
						adult: "Sí, caminó",
					},
				},
				{
					label: "Sí, me desplacé sobre ruedas ",
					value: "Wheeled",
					label_mode: {
						kid: "Sí, me desplacé sobre ruedas ",
						adult: "Sí, se desplazó sobre ruedas",
					},
				},
				{
					label: "No",
					value: "No",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 17",
			label:
				"Au cours de la dernière semaine, as-tu marché ou roulé pour aller à des endroits autres que l'école ou le travail (par exemple, chez un ami, à un parc ou un magasin)?",
			kid_label:
				"Au cours de la dernière semaine, as-tu marché ou roulé pour aller à des endroits autres que l'école ou le travail (par exemple, chez un ami, à un parc ou un magasin)?",
			adult_label:
				"Au cours de la dernière semaine, ton enfant a-t-il (elle) marché ou roulé pour aller à des endroits autres que l'école ou le travail (par exemple, chez un ami, à un parc ou un magasin)?",
			kid_sublabel: "Svp, sélectionne toutes les réponses qui s'appliquent à toi.",
			adult_sublabel: "Svp, sélectionne toutes les réponses qui s'appliquent à ton enfant.",
			choices: [
				{
					label: "Oui, j'ai marché",
					value: "Walked",
					label_mode: {
						kid: "Oui, j'ai marché",
						adult: "Oui, il (elle) a marché",
					},
				},
				{
					label: "Oui, j'ai roulé",
					value: "Wheeled",
					label_mode: {
						kid: "Oui, j'ai roulé",
						adult: "Oui, il (elle) a roulé",
					},
				},
				{
					label: "Non",
					value: "No",
				},
			],
		},
	},
};

export default S4Q7;
