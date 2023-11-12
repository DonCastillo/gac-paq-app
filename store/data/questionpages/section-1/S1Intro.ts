import ScreenType from "../../../../constants/screen_type";
import type SectionPayloadInterface from "../../../../interface/directus/section-payload";

const S1Intro: SectionPayloadInterface = {
	heading: "School Activities",
	image_mobile:
		"http://localhost:8055/assets/7afa755d-0e88-456c-a22f-e50ecad9a816?access_token=kaTCPGRRqTCp18GmHkECCKNeMcY5Vwa5",
	image_tablet:
		"http://localhost:8055/assets/607b231c-f6d0-439d-8b0a-a8e873457ed9?access_token=kaTCPGRRqTCp18GmHkECCKNeMcY5Vwa5",
	type: ScreenType.IntroQuestion,
	translations: [
		{
			id: 1,
			heading: "Actividades escolares",
			subheading: "Sección 1",
			languages_id: {
				name: "Spanish - Spain",
				lang_code: "es-ES",
			},
		},
		{
			id: 2,
			heading: "School Activities",
			subheading: "Section 1",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
		{
			id: 3,
			heading: "Activités scolaires",
			subheading: "Section 1",
			languages_id: {
				name: "French - Canada",
				lang_code: "fr-CA",
			},
		},
	],
};

export default S1Intro;
