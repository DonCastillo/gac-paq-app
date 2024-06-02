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
import type { ImageDeviceInterface, ImageModeInterface } from "interface/images";
import type { ModeType } from "interface/union.type";

const getImageBackground = (
	images: ImageDeviceInterface | undefined,
	mode: ModeType,
	isTablet: boolean,
): any | null => {
	if (images === undefined) return null;
	if (mode === Mode.Adult && isTablet) {
		return images?.adult?.tablet;
	} else if (mode === Mode.Adult && !isTablet) {
		return images?.adult?.phone;
	} else if (mode === Mode.Kid && isTablet) {
		return images?.kid?.tablet;
	} else if (mode === Mode.Kid && !isTablet) {
		return images?.kid?.phone;
	} else if (mode === Mode.Teen && isTablet) {
		return images?.teen?.tablet;
	} else if (mode === Mode.Teen && !isTablet) {
		return images?.teen?.phone;
	} else if (mode === undefined && isTablet) {
		return images?.kid?.tablet;
	} else if (mode === undefined && !isTablet) {
		return images?.kid?.phone;
	} else {
		return null;
	}
};

const getOptionImage = (images: ImageModeInterface, mode: ModeType): any | null => {
	if (mode === Mode.Adult) {
		return images?.adult;
	} else if (mode === Mode.Kid) {
		return images?.kid;
	} else if (mode === Mode.Teen) {
		return images?.teen ?? images?.adult;
	} else {
		return null;
	}
};

const getOptionText = (
	origOptionText: string,
	optionTextObj: { kid: string; adult: string },
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
	subLabelObj: { kid: string; adult: string },
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
	questionType: QuestionType | null | undefined,
	deviceType: DeviceType | null,
	fillColor: string | null,
): React.ReactElement => {
	sectionNumber = (sectionNumber ?? 0) % 8;
	sectionPageNumber = sectionPageNumber ?? 0;
	questionType = questionType ?? Question.QuestionText;
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
	getOptionImage,
	getOptionText,
	getOptionSubLabel,
};
