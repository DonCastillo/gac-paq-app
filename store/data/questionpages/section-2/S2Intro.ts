import ScreenType from "../../../../constants/screen_type";
import type SectionPayloadInterface from "../../../../interface/directus/section-payload";

const S2Intro: SectionPayloadInterface = {
	heading: "Work Activities",
	image_mobile:
		"http://localhost:8055/assets/af41d75e-537b-493e-b38e-5f0b4d20f40b?access_token=kaTCPGRRqTCp18GmHkECCKNeMcY5Vwa5",
	image_tablet:
		"http://localhost:8055/assets/08dab3d2-ce8a-41ea-98da-a18248cd8fbc?access_token=kaTCPGRRqTCp18GmHkECCKNeMcY5Vwa5",
	type: ScreenType.IntroQuestion,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "Work Activities",
			subheading: "Section 2",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
		{
			id: 5,
			question_section_id: 3,
			heading: "Actividades laborales",
			subheading: "Sección 2",
			languages_id: {
				name: "Spanish - Spain",
				lang_code: "es-ES",
			},
		},
	],
};

export default S2Intro;
