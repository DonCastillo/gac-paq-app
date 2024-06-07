import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioImagePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S4Q4: QuestionRadioImagePayloadInterface = {
	ident: "transportation_4",
	name: "Question 16:	How did you go to work in the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 16",
			label: "How did you go to work in the past week?",
			kid_label: "How did you go to work in the past week?",
			adult_label: "How did your child go to work in the past week?",
			kid_sublabel: "Select the mode that you used the most.",
			adult_sublabel: "Select the mode that your child used the most.",
			choices: [
				{
					label: "Walking",
					value: "Walking",
					images: {
						kid: Images.kids.options.transportation.walking,
						adult: Images.adults.options.transportation.walking,
					},
				},
				{
					label: "Wheeling",
					value: "Wheeling",
					images: {
						kid: Images.kids.options.transportation.wheeling,
						adult: Images.adults.options.transportation.wheeling,
					},
					sublabel: {
						kid: "for example, wheelchair use, bicycle, e-bicycle, skateboard, push scooter, rollerblades",
						adult:
							"for example, wheelchair use, bicycle, e-bicycle, skateboard, push scooter, rollerblades",
					},
				},
				{
					label: "Public transit",
					value: "Public transit",
					images: {
						kid: Images.kids.options.transportation.public_transit,
						adult: Images.adults.options.transportation.public_transit,
					},
					sublabel: {
						kid: "example: bus, train, tramway, subway, boat",
						adult: "example: bus, train, tramway, subway, boat",
					},
				},
				{
					label: "Car, taxi, truck, or motorcycle",
					value: "Car, taxi, truck, or motorcycle",
					images: {
						kid: Images.kids.options.transportation.car,
						adult: Images.adults.options.transportation.car,
					},
				},
				{
					label: "Other, which one?",
					value: "Other",
					images: {
						kid: Images.kids.options.transportation.other,
						adult: Images.adults.options.transportation.other,
					},
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadioImage,
			heading: "问题 16",
			label: "在过去一周里，你是如何去工作地点的？",
			kid_label: "在过去一周里，你是如何去工作地点的？",
			adult_label: "在过去一周里，您的孩子是如何去工作地点的？",
			kid_sublabel: "选择你使用的主要交通方式。",
			adult_sublabel: "选择您的孩子使用的主要交通方式。",
			choices: [
				{
					label: "步行",
					value: "Walking",
					images: {
						kid: Images.kids.options.transportation.walking,
						adult: Images.adults.options.transportation.walking,
					},
				},
				{
					label: "骑车",
					value: "Wheeling",
					images: {
						kid: Images.kids.options.transportation.wheeling,
						adult: Images.adults.options.transportation.wheeling,
					},
					sublabel: {
						kid: "也包括轮椅、自行车、滑板、推式踏板车、轮滑",
						adult: "也包括轮椅、自行车、滑板、推式踏板车、轮滑",
					},
				},
				{
					label: "公共交通",
					value: "Public transit",
					images: {
						kid: Images.kids.options.transportation.public_transit,
						adult: Images.adults.options.transportation.public_transit,
					},
					sublabel: {
						kid: "如公交车、火车、有轨电车、地铁、轮渡",
						adult: "如公交车、火车、有轨电车、地铁、轮渡",
					},
				},
				{
					label: "汽车、卡车或摩托车",
					value: "Car, taxi, truck, or motorcycle",
					images: {
						kid: Images.kids.options.transportation.car,
						adult: Images.adults.options.transportation.car,
					},
				},
				{
					label: "其他的",
					value: "Other",
					images: {
						kid: Images.kids.options.transportation.other,
						adult: Images.adults.options.transportation.other,
					},
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadioImage,
			heading: "Question 16",
			label: "¿Cómo fuiste a trabajar en la última semana?",
			kid_label: "¿Cómo fuiste a trabajar en la última semana?",
			adult_label: "¿Cómo fue su hija o hijo al trabajo la semana pasada?",
			kid_sublabel: "Selecciona el modo de transporte que más utilizaste",
			adult_sublabel: "Selecciona el modo de transporte que más utilizó.",
			choices: [
				{
					label: "Caminando",
					value: "Walking",
					images: {
						kid: Images.kids.options.transportation.walking,
						adult: Images.adults.options.transportation.walking,
					},
				},
				{
					label: "Sobre ruedas",
					value: "Wheeling",
					images: {
						kid: Images.kids.options.transportation.wheeling,
						adult: Images.adults.options.transportation.wheeling,
					},
					sublabel: {
						kid: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines",
						adult: "por ejemplo, en silla de ruedas, bicicleta, monopatín, patineta, patines",
					},
				},
				{
					label: "Transporte público",
					value: "Public transit",
					images: {
						kid: Images.kids.options.transportation.public_transit,
						adult: Images.adults.options.transportation.public_transit,
					},
					sublabel: {
						kid: "por ejemplo, autobús, tren, tranvía, metro, barco",
						adult: "por ejemplo, autobús, tren, tranvía, metro, barco",
					},
				},
				{
					label: "Automóvil, taxi, camioneta o motocicleta",
					value: "Car, taxi, truck, or motorcycle",
					images: {
						kid: Images.kids.options.transportation.car,
						adult: Images.adults.options.transportation.car,
					},
				},
				{
					label: "Otro",
					value: "Other",
					images: {
						kid: Images.kids.options.transportation.other,
						adult: Images.adults.options.transportation.other,
					},
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 16",
			label: "Comment es-tu allé.e de la maison jusqu'au travail au cours de la dernière semaine?",
			kid_label:
				"Comment es-tu allé.e de la maison jusqu'au travail au cours de la dernière semaine?",
			adult_label:
				"Comment ton enfant est-il (elle) allé(e) de la maison jusqu'au travail au cours de la dernière semaine?",
			kid_sublabel: "Sélectionne le moyen principal que tu as utilisé.",
			adult_sublabel: "Sélectionne le moyen principal que ton enfant à utilisé.",
			choices: [
				{
					label: "À pied",
					value: "Walking",
					images: {
						kid: Images.kids.options.transportation.walking,
						adult: Images.adults.options.transportation.walking,
					},
				},
				{
					label: "En roulant",
					value: "Wheeling",
					images: {
						kid: Images.kids.options.transportation.wheeling,
						adult: Images.adults.options.transportation.wheeling,
					},
					sublabel: {
						kid: "par exemple, fauteuil roulant, vélo, vélo électrique, planche à roulettes, trottinette, patins à roues alignées",
						adult:
							"par exemple, fauteuil roulant, vélo, vélo électrique, planche à roulettes, trottinette, patins à roues alignées",
					},
				},
				{
					label: "En transport en commun",
					value: "Public transit",
					images: {
						kid: Images.kids.options.transportation.public_transit,
						adult: Images.adults.options.transportation.public_transit,
					},
					sublabel: {
						kid: "par exemple, autobus, train, tramway, métro, bateau",
						adult: "par exemple, autobus, train, tramway, métro, bateau",
					},
				},
				{
					label: "En voiture, taxi, camion ou motocyclette",
					value: "Car, taxi, truck, or motorcycle",
					images: {
						kid: Images.kids.options.transportation.car,
						adult: Images.adults.options.transportation.car,
					},
				},
				{
					label: "Autre, lequel?",
					value: "Other",
					images: {
						kid: Images.kids.options.transportation.other,
						adult: Images.adults.options.transportation.other,
					},
				},
			],
		},
	},
};

export default S4Q4;
