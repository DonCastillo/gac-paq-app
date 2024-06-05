import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioImagePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

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
					label: "School bus",
					value: "School bus",
					images: {
						kid: Images.kids.options.transportation.school_bus,
						adult: Images.adults.options.transportation.school_bus,
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
						kid: "for example, bus, train, tramway, subway, boat",
						adult: "for example, bus, train, tramway, subway, boat",
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
				{
					label: "Stay home for school",
					value: "Stay home for school",
					images: {
						kid: Images.kids.options.transportation.staying_home,
						adult: Images.adults.options.transportation.staying_home,
					},
					label_mode: {
						kid: "I stay at home for school",
						adult: "My child stays at home for school",
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
					label: "En autobus scolaire",
					value: "School bus",
					images: {
						kid: Images.kids.options.transportation.school_bus,
						adult: Images.adults.options.transportation.school_bus,
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
					label: "Autre",
					value: "Other",
					images: {
						kid: Images.kids.options.transportation.other,
						adult: Images.adults.options.transportation.other,
					},
				},
				{
					label: "Je reste à la maison pour l'école",
					value: "Stay home for school",
					images: {
						kid: Images.kids.options.transportation.staying_home,
						adult: Images.adults.options.transportation.staying_home,
					},
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
