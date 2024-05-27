import ScreenType from "constants/screen_type.enum";
import type QuestionInputPayloadInterface from "interface/directus/question-input-payload";
import Images from "styles/images";

const ParticipantIDPage: QuestionInputPayloadInterface = {
	ident: "participant_id",
	name: "participant_id",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 5,
			question_input_id: 5,
			heading: "Welcome!",
			label: "Please enter your Participant ID",
			kid_label: "Please enter your Participant ID",
			adult_label: "Please enter your Participant ID",
			placeholder: "Participant ID Serial Number",
			type: "text",
			sort: null,
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				kid: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
				teen: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
				adult: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
			},
		},
	],
};

export default ParticipantIDPage;
