import React from "react";
import BackgroundOne from "components/kid/background/introductory-pages/BackgroundOne";
import BackgroundTwo from "components/kid/background/introductory-pages/BackgroundTwo";
import BackgroundThree from "components/kid/background/introductory-pages/BackgroundThree";
import BackgroundFour from "components/kid/background/introductory-pages/BackgroundFour";
import BackgroundFive from "components/kid/background/introductory-pages/BackgroundFive";
import BackgroundSix from "components/kid/background/introductory-pages/BackgroundSix";
import BackgroundSeven from "components/kid/background/introductory-pages/BackgroundSeven";
import Question from "constants/question.enum";
import Device from "constants/device.enum";
import GenericBackgroundStroke from "components/kid/background/question-pages/GenericBackgroundStroke";
import BackgroundRight from "components/kid/background/question-pages/BackgroundRight";
import BackgroundCenter from "components/kid/background/question-pages/BackgroundCenter";
import Images from "styles/images/index";
import GenericBackgroundStars from "components/kid/background/question-pages/GenericBackgroundStars";
import GenericBackgroundLoop from "components/kid/background/question-pages/GenericBackgroundLoop";
import Mode from "constants/mode.enum";
import type { DeviceType, ModeType, QuestionType } from "interface/union.type";
import { store } from "store/store";
import { getScreenType, getSectionType } from "./type.utils";
import Section from "constants/section.enum";
import GenericBackground from "styles/images/background/generic";
import Screen from "constants/screen.enum";
import IntroBackground from "styles/images/background/intro";
import PhysicalEducationOptions from "styles/images/options/physical_education";
import BreaksOptions from "styles/images/options/breaks";
import ChoresOptions from "styles/images/options/chores";
import VolunteeringOptions from "styles/images/options/volunteering";
import type State from "constants/state.enum";
import StatusBackground from "styles/images/background/status";

const getImageBackground = (): any | null => {
	const blackListLanguages = ["sv-SE", "zh-CN", "fr-CA"];
	const settings = store.getState().settings;
	const ident = settings.currentPage.page.ident;
	let language = settings.language ?? "en-CA";
	let region = language.split("-")[1].toUpperCase();
	const mode = settings.mode === Mode.Kid ? Mode.Kid : Mode.Teen;
	const platform = settings.device.isTablet ? "tablet" : "phone";
	const section = getSectionType(settings.currentPage.section ?? "question");
	const screen = getScreenType(settings.currentPage.screen ?? "page");

	// modify conditional statement here if 2 or more languages have the same background images
	if (language === "en-NG") {
		language = "en-MW";
		region = "MW";
	}

	if (language === "cz-CR") {
		language = "es-ES";
		region = "ES";
	}

	// some languages don't have images yet
	if (blackListLanguages.includes(language)) {
		language = "en-CA";
		region = "CA";
	}

	if (section === Section.Intro) {
		return GenericBackground[region][platform][ident];
	}

	if (section === Section.Question) {
		if (screen === Screen.IntroQuestion) {
			return IntroBackground[region][ident.split("_intro")[0]][mode][platform];
		}
		if (screen === Screen.Preamble) {
			if (mode === Mode.Teen) {
				return IntroBackground[region][ident.split("_preamble")[0]][mode][platform];
			}
		}
		if (screen === Screen.ExtroQuestion) {
			if (mode === Mode.Teen) {
				return IntroBackground[region][ident.split("_extro")[0]][mode][platform];
			}
		}
	}

	if (section === Section.Extro) {
		if (screen === Screen.IntroQuestion) {
			return IntroBackground[region].extro[mode][platform];
		}
	}

	// feedback extro only applies on teen/parent
	if (section === Section.Feedback) {
		if (screen === Screen.ExtroQuestion) {
			if (mode === Mode.Teen) {
				return IntroBackground[region].extro[mode][platform];
			}
		}
	}

	return null;
};

const getImageBackgroundStatus = (state: State): any | null => {
	const blackListLanguages = ["sv-SE", "zh-CN", "fr-CA"];
	const settings = store.getState().settings;
	let language = settings.language ?? "en-CA";
	let region = language.split("-")[1].toUpperCase();
	const platform = settings.device.isTablet ? "tablet" : "phone";

	// modify conditional statement here if 2 or more languages have the same background images
	if (language === "en-NG") {
		language = "en-MW";
		region = "MW";
	}

	if (language === "cz-CR") {
		language = "es-ES";
		region = "ES";
	}

	// some languages don't have images yet
	if (blackListLanguages.includes(language)) {
		language = "en-CA";
		region = "CA";
	}

	return StatusBackground[region][state][platform];
};

const getOptionImage = (image_ident: string): any | null => {
	const blackListLanguages = ["sv-SE", "fr-CA"];
	const settings = store.getState().settings;
	const page_ident = settings.currentPage.page.ident;
	let language = settings.language ?? "en-CA";
	let region = language.split("-")[1].toUpperCase();
	const mode = settings.mode === Mode.Kid ? Mode.Kid : Mode.Teen;

	// modify conditional statement here if 2 or more languages have the same images
	if (language === "en-NG") {
		language = "en-MW";
		region = "MW";
	}

	if (language === "cz-CR") {
		language = "es-ES";
		region = "ES";
	}

	// some languages don't have images yet
	if (blackListLanguages.includes(language)) {
		language = "en-CA";
		region = "CA";
	}

	const doNotKnowImage = Images.generic.doNotKnow;
	const doNotKnowImageES = Images.generic.doNotKnowES;
	const kidWalkingImage = Images.kids.options.transportation.walking;
	const kidWheelingImage = Images.kids.options.transportation.wheeling;
	const kidSchoolBusImage = Images.kids.options.transportation.school_bus;
	const kidPublicTransitImage = Images.kids.options.transportation.public_transit;
	const kidCarImage = Images.kids.options.transportation.car;
	const kidOtherImage = Images.kids.options.transportation.other;
	const kidStayingHomeImage = Images.kids.options.transportation.staying_home;

	const teenWalkingImage = Images.adult.options.transportation.walking;
	const teenWheelingImage = Images.adult.options.transportation.wheeling;
	const teenSchoolBusImage = Images.adult.options.transportation.school_bus;
	const teenPublicTransitImage = Images.adult.options.transportation.public_transit;
	const teenCarImage = Images.adult.options.transportation.car;
	const teenOtherImage = Images.adult.options.transportation.other;
	const teenStayingHomeImage = Images.adult.options.transportation.staying_home;

	if (image_ident === null || image_ident === undefined || image_ident === "") return null;

	// options for physical education
	if (page_ident === "school_5") {
		if (image_ident === "dont_know") {
			if (language === "es-ES") {
				return doNotKnowImageES;
			} else {
				return doNotKnowImage;
			}
		}
		return PhysicalEducationOptions[region][mode][image_ident];
	}

	// options for breaks
	if (page_ident === "school_7") {
		if (image_ident === "dont_know") {
			if (language === "es-ES") {
				return doNotKnowImageES;
			} else {
				return doNotKnowImage;
			}
		}
		return BreaksOptions[region][mode][image_ident];
	}

	// options for chores
	if (page_ident === "household_4") {
		if (image_ident === "dont_know") {
			if (language === "es-ES") {
				return doNotKnowImageES;
			} else {
				return doNotKnowImage;
			}
		}
		return ChoresOptions[region][mode][image_ident];
	}

	// options for volunteering. only for teens and parent of teens
	if (page_ident === "work_3") {
		if (image_ident === "dont_know") {
			if (language === "es-ES") {
				return doNotKnowImageES;
			} else {
				return doNotKnowImage;
			}
		}
		return VolunteeringOptions[region].teen[image_ident];
	}

	// options for transportation
	if (page_ident === "transportation_1" || page_ident === "transportation_4") {
		if (image_ident === "walking") {
			if (mode === Mode.Kid) return kidWalkingImage;
			if (mode === Mode.Teen) return teenWalkingImage;
		}
		if (image_ident === "wheeling") {
			if (mode === Mode.Kid) return kidWheelingImage;
			if (mode === Mode.Teen) return teenWheelingImage;
		}
		if (image_ident === "school_bus") {
			if (mode === Mode.Kid) return kidSchoolBusImage;
			if (mode === Mode.Teen) return teenSchoolBusImage;
		}
		if (image_ident === "public_transit") {
			if (mode === Mode.Kid) return kidPublicTransitImage;
			if (mode === Mode.Teen) return teenPublicTransitImage;
		}
		if (image_ident === "car") {
			if (mode === Mode.Kid) return kidCarImage;
			if (mode === Mode.Teen) return teenCarImage;
		}
		if (image_ident === "other") {
			if (mode === Mode.Kid) return kidOtherImage;
			if (mode === Mode.Teen) return teenOtherImage;
		}
		if (image_ident === "staying_home") {
			if (mode === Mode.Kid) return kidStayingHomeImage;
			if (mode === Mode.Teen) return teenStayingHomeImage;
		}
	}

	// options for satisfaction rating
	if (page_ident === "app_use_satisfaction") {
		return Images.generic.rating[image_ident];
	}

	return null;
};

const getOptionText = (
	origOptionText: string,
	optionTextObj: { kid: string; adult: string } | undefined,
	mode: ModeType,
): string | null => {
	if (optionTextObj === undefined || optionTextObj === null) return origOptionText;
	if (mode === undefined || mode === null) return origOptionText;

	if (mode === Mode.Kid || mode === Mode.Teen) {
		return optionTextObj.kid ?? origOptionText;
	} else if (mode === Mode.Adult) {
		return optionTextObj.adult ?? origOptionText;
	} else {
		return origOptionText;
	}
};

const getOptionSubLabel = (
	subLabelObj: { kid: string; adult: string } | undefined,
	mode: ModeType,
): string | null => {
	if (subLabelObj === undefined || subLabelObj === null) return null;
	if (mode === undefined || mode === null) return null;

	if (mode === Mode.Kid || mode === Mode.Teen) {
		return subLabelObj.kid ?? null;
	} else if (mode === Mode.Adult) {
		return subLabelObj.adult ?? null;
	} else {
		return null;
	}
};

const getIntroductoryBackground = (pageNumber: number): React.ReactElement => {
	switch (pageNumber % 6) {
		case 0:
			return <BackgroundOne />;
		case 1:
			return <BackgroundTwo />;
		case 2:
			return <BackgroundThree />;
		case 3:
			return <BackgroundFour />;
		case 4:
			return <BackgroundFive />;
		case 5:
			return <BackgroundSix />;
		case 6:
			return <BackgroundSeven />;
		default:
			return <BackgroundOne />;
	}
};

const getQuestionBackground = (
	sectionNumber: number | null,
	sectionPageNumber: number | null,
	questionType: QuestionType,
	deviceType: DeviceType,
	fillColor: string | null,
): React.ReactElement => {
	sectionNumber = (sectionNumber ?? 0) % 8;
	sectionPageNumber = sectionPageNumber ?? 0;
	questionType = questionType ?? Question.QuestionInput;
	deviceType = deviceType ?? Device.Mobile;
	fillColor = fillColor ?? "white";

	// strokes
	if (sectionNumber === 1 && sectionPageNumber === 3) {
		return <GenericBackgroundStroke fillColor={fillColor} />;
	} else if (sectionNumber === 1 && sectionPageNumber === 7) {
		return <GenericBackgroundStars fillColor={fillColor} />;
	} else if (sectionNumber === 2 && sectionPageNumber === 5) {
		return <GenericBackgroundStroke fillColor={fillColor} />;
	} else if (sectionNumber === 3 && sectionPageNumber === 5) {
		return <GenericBackgroundStars fillColor={fillColor} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 4) {
		return <GenericBackgroundLoop fillColor={fillColor} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 7) {
		return <GenericBackgroundLoop fillColor={fillColor} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 10) {
		return <GenericBackgroundLoop fillColor={fillColor} />;
	} else if (sectionNumber === 5 && sectionPageNumber === 3) {
		return <GenericBackgroundStroke fillColor={fillColor} />;
	} else if (sectionNumber === 5 && sectionPageNumber === 5) {
		return <GenericBackgroundStars fillColor={fillColor} />;
	} else if (sectionNumber === 6 && sectionPageNumber === 3) {
		return <GenericBackgroundStars fillColor={fillColor} />;
	}
	// graphics
	else if (sectionNumber === 1 && sectionPageNumber === 5) {
		return <BackgroundRight svg={Images.kids.graphics.mostly_medium} />;
	} else if (sectionNumber === 2 && sectionPageNumber === 3) {
		return <BackgroundRight svg={Images.kids.graphics.chores} />;
	} else if (sectionNumber === 3 && sectionPageNumber === 3) {
		return <BackgroundCenter svg={Images.kids.graphics.volunteer_club} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 5) {
		return <BackgroundRight svg={Images.kids.graphics.wink_pose} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 8) {
		return <BackgroundRight svg={Images.kids.graphics.wink_pose} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 11) {
		return <BackgroundRight svg={Images.kids.graphics.wink_pose} />;
	} else {
		return <></>;
	}
};

export {
	getIntroductoryBackground,
	getQuestionBackground,
	getImageBackground,
	getImageBackgroundStatus,
	getOptionImage,
	getOptionText,
	getOptionSubLabel,
};
