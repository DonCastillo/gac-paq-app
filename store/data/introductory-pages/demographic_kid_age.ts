import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { QuestionDropdownPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const DemographicKidPage: QuestionDropdownPayloadInterface = {
	ident: "age",
	name: "age",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionDropdown,
			heading: "Welcome!",
			label: "How old are you?",
			kid_label: "How old are you?",
			adult_label: "How old are you?",
			choices: [
				{
					label: "8 years old",
					value: "8",
				},
				{
					label: "9 years old",
					value: "9",
				},
				{
					label: "10 years old",
					value: "10",
				},
				{
					label: "11 years old",
					value: "11",
				},
			],
			images: {
				kid: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
				teen: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
				adult: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
			},
		},
		"zh-CN": {
			type: Question.QuestionDropdown,
			heading: "欢迎!",
			label: "你多大了?",
			kid_label: "你多大了?",
			adult_label: "你多大了?",
			choices: [
				{
					label: "8岁",
					value: "8",
				},
				{
					label: "9岁",
					value: "9",
				},
				{
					label: "10岁",
					value: "10",
				},
				{
					label: "11岁",
					value: "11",
				},
			],
			images: {
				kid: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
				teen: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
				adult: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
			},
		},
		"es-MX": {
			type: Question.QuestionDropdown,
			heading: "¡Bienvenido!",
			label: "¿Cuántos años tienes?",
			kid_label: "¿Cuántos años tienes?",
			adult_label: "¿Cuántos años tienes?",
			choices: [
				{
					label: "8 años",
					value: "8",
				},
				{
					label: "9 años",
					value: "9",
				},
				{
					label: "10 años",
					value: "10",
				},
				{
					label: "11 años",
					value: "11",
				},
			],
			images: {
				kid: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
				teen: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
				adult: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
			},
		},
		"fr-CA": {
			type: Question.QuestionDropdown,
			heading: "Bienvenue!",
			label: "Quel âge avez-vous?",
			kid_label: "Quel âge avez-vous?",
			adult_label: "Quel âge avez-vous?",
			choices: [
				{
					label: "8 ans",
					value: "8",
				},
				{
					label: "9 ans",
					value: "9",
				},
				{
					label: "10 ans",
					value: "10",
				},
				{
					label: "11 ans",
					value: "11",
				},
			],
			images: {
				kid: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
				teen: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
				adult: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
			},
		},
	},
};

export default DemographicKidPage;
