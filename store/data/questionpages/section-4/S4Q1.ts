import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioImagePayloadInterface } from "interface/payload.type";

const S4Q1: QuestionRadioImagePayloadInterface = {
	ident: "transportation_1",
	name: "Question 15:	How did you go to school in the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 15",
			label: "How did you go to school in the past week?",
			kid_label: "How did you go to school in the past week?",
			adult_label: "How did your child go to school in the past week?",
			kid_sublabel: "Select the mode that you used the most.",
			adult_sublabel: "Select the mode that your child used the most.",
			choices: [
				{
					label: "Walking",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "Wheeling",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "for example, wheelchair use, bicycle, e-bicycle, skateboard, push scooter, rollerblades",
						adult:
							"for example, wheelchair use, bicycle, e-bicycle, skateboard, push scooter, rollerblades",
					},
				},
				{
					label: "School bus",
					value: "School bus",
					image_ident: "school_bus",
				},
				{
					label: "Public transit",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "for example, bus, train, tramway, subway, boat",
						adult: "for example, bus, train, tramway, subway, boat",
					},
				},
				{
					label: "Car, taxi, truck, or motorcycle",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Other, which one?",
					value: "Other",
					image_ident: "other",
				},
				{
					label: "Stay home for school",
					value: "Stay home for school",
					image_ident: "staying_home",
					label_mode: {
						kid: "I stay at home for school",
						adult: "My child stays at home for school",
					},
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadioImage,
			heading: "问题 15",
			label: "在过去一周里，你是怎样去学校的?",
			kid_label: "在过去一周里，你是怎样去学校的?",
			adult_label: "在过去一周里，您的孩子是怎样去学校的?",
			kid_sublabel: "选择你最常用的方式.",
			adult_sublabel: "选择您的孩子最常用的方式.",
			choices: [
				{
					label: "步行",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "骑车",
					value: "Wheeling",
					image_ident: "wheeling",

					sublabel: {
						kid: "如轮椅、自行车、滑板、推式踏板车、轮滑",
						adult: "如轮椅、自行车、滑板、推式踏板车、轮滑",
					},
				},
				{
					label: "校车 ",
					value: "School bus",
					image_ident: "school_bus",
				},
				{
					label: "公共交通",
					value: "Public transit",
					image_ident: "public_transit",

					sublabel: {
						kid: "如公交车、火车、有轨电车、地铁、轮渡",
						adult: "如公交车、火车、有轨电车、地铁、轮渡",
					},
				},
				{
					label: "私家车、出租车、卡车或摩托车",
					value: "Car, taxi, truck, or motorcycle",

					image_ident: "car",
				},
				{
					label: "其他",
					value: "Other",
					image_ident: "other",
				},
				{
					label: "居家上学",
					value: "Stay home for school",
					image_ident: "staying_home",

					label_mode: {
						kid: "居家上学",
						adult: "我的孩子居家上学",
					},
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadioImage,
			heading: "Question 15",
			label: "¿Cómo fuiste a la escuela o colegio la semana pasada?",
			kid_label: "¿Cómo fuiste a la escuela o colegio la semana pasada?",
			adult_label: "¿Cómo fue su hija o hijo a la escuela o colegio la última semana?",
			kid_sublabel: "Selecciona el modo de transporte que más utilizaste.",
			adult_sublabel: "Seleccione el modo de transporte que más utilizó.",
			choices: [
				{
					label: "Caminando",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "Sobre ruedas",
					value: "Wheeling",
					image_ident: "wheeling",

					sublabel: {
						kid: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines",
						adult: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines",
					},
				},
				{
					label: "Autobús escolar",
					value: "School bus",
					image_ident: "school_bus",
				},
				{
					label: "Transporte público",
					value: "Public transit",
					image_ident: "public_transit",

					sublabel: {
						kid: "por ejemplo, autobús, tren, tranvía, metro, barco",
						adult: "por ejemplo, autobús, tren, tranvía, metro, barco",
					},
				},
				{
					label: "Automóvil, taxi, camioneta o motocicleta",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Otro",
					value: "Other",
					image_ident: "other",
				},
				{
					label: "Recibo educación en casa o asisto a un internado ",
					value: "Stay home for school",
					image_ident: "staying_home",

					label_mode: {
						kid: "Recibo educación en casa o asisto a un internado ",
						adult: "Mi hija o hijo recibe educación en casa o asiste a un internado",
					},
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 15",
			label: "Comment es-tu allé.e de la maison jusqu'à l'école au cours de la dernière semaine?",
			kid_label:
				"Comment es-tu allé.e de la maison jusqu'à l'école au cours de la dernière semaine?",
			adult_label:
				"Comment ton enfant est-il (elle) allé(e) de la maison jusqu'à l'école au cours de la dernière semaine?",
			kid_sublabel: "Sélectionne le moyen principal que tu as utilisé.",
			adult_sublabel: "Sélectionne le moyen principal que ton enfant a utilisé.",
			choices: [
				{
					label: "À pied",
					value: "Walking",
					image_ident: "walking",
				},
				{
					label: "En roulant",
					value: "Wheeling",
					image_ident: "wheeling",
					sublabel: {
						kid: "par exemple, fauteuil roulant, vélo, vélo électrique, planche à roulettes, trottinette, patins à roues alignées",
						adult:
							"par exemple, fauteuil roulant, vélo, vélo électrique, planche à roulettes, trottinette, patins à roues alignées",
					},
				},
				{
					label: "En autobus scolaire",
					value: "School bus",
					image_ident: "school_bus",
				},
				{
					label: "En transport en commun",
					value: "Public transit",
					image_ident: "public_transit",
					sublabel: {
						kid: "par exemple, autobus, train, tramway, métro, bateau",
						adult: "par exemple, autobus, train, tramway, métro, bateau",
					},
				},
				{
					label: "En voiture, taxi, camion ou motocyclette",
					value: "Car, taxi, truck, or motorcycle",
					image_ident: "car",
				},
				{
					label: "Autre",
					value: "Other",
					image_ident: "other",
				},
				{
					label: "Je reste à la maison pour l'école",
					value: "Stay home for school",
					image_ident: "staying_home",

					label_mode: {
						kid: "Je reste à la maison pour l'école",
						adult: "Mon enfant fait l'école à la maison",
					},
				},
			],
		},
	},
};

export default S4Q1;
