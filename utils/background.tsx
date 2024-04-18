import React from "react";
import BackgroundOne from "components/kid/background/introductory-pages/BackgroundOne";
import BackgroundTwo from "components/kid/background/introductory-pages/BackgroundTwo";
import BackgroundThree from "components/kid/background/introductory-pages/BackgroundThree";
import BackgroundFour from "components/kid/background/introductory-pages/BackgroundFour";
import BackgroundFive from "components/kid/background/introductory-pages/BackgroundFive";
import BackgroundSix from "components/kid/background/introductory-pages/BackgroundSix";
import BackgroundSeven from "components/kid/background/introductory-pages/BackgroundSeven";
import QuestionType from "constants/question_type";
import DeviceType from "constants/device_type";
import GenericBackgroundStroke from "components/kid/background/question-pages/GenericBackgroundStroke";
import BackgroundRight from "components/kid/background/question-pages/BackgroundRight";
import BackgroundCenter from "components/kid/background/question-pages/BackgroundCenter";
import Images from "styles/images/index";
import GenericBackgroundStars from "components/kid/background/question-pages/GenericBackgroundStars";
import GenericBackgroundLoop from "components/kid/background/question-pages/GenericBackgroundLoop";
import Mode from "constants/mode";
import type { ImageDeviceInterface, ImageModeInterface } from "interface/images";

function getImageBackground(
	images: ImageDeviceInterface,
	mode: Mode.Kid | Mode.Adult | undefined,
	isTablet: boolean,
): any | null {
	if (mode === Mode.Adult && isTablet) {
		return images?.adult?.tablet;
	} else if (mode === Mode.Adult && !isTablet) {
		return images?.adult?.phone;
	} else if (mode === Mode.Kid && isTablet) {
		return images?.kid?.tablet;
	} else if (mode === Mode.Kid && !isTablet) {
		return images?.kid?.phone;
	} else if (mode === undefined && isTablet) {
		return images?.kid?.tablet;
	} else if (mode === undefined && !isTablet) {
		return images?.kid?.phone;
	} else {
		return null;
	}
}

function getOptionImage(
	images: ImageModeInterface,
	mode: Mode.Kid | Mode.Adult | undefined,
): any | null {
	if (mode === Mode.Adult) {
		return images?.adult;
	} else if (mode === Mode.Kid) {
		return images?.kid;
	} else {
		return null;
	}
}

function getIntroductoryBackground(pageNumber: number): React.ReactElement {
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
}

function getQuestionBackground(
	sectionNumber: number | null,
	sectionPageNumber: number | null,
	questionType: QuestionType | null | undefined,
	deviceType: DeviceType | null,
	fillColor: string | null,
): React.ReactElement {
	sectionNumber = (sectionNumber ?? 0) % 8;
	sectionPageNumber = sectionPageNumber ?? 0;
	questionType = questionType ?? QuestionType.QuestionText;
	deviceType = deviceType ?? DeviceType.Mobile;
	fillColor = fillColor ?? "white";

	// strokes
	if (sectionNumber === 1 && sectionPageNumber === 2) {
		return <GenericBackgroundStroke fillColor={fillColor} />;
	} else if (sectionNumber === 1 && sectionPageNumber === 6) {
		return <GenericBackgroundStars fillColor={fillColor} />;
	} else if (sectionNumber === 2 && sectionPageNumber === 4) {
		return <GenericBackgroundStroke fillColor={fillColor} />;
	} else if (sectionNumber === 3 && sectionPageNumber === 4) {
		return <GenericBackgroundStars fillColor={fillColor} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 3) {
		return <GenericBackgroundLoop fillColor={fillColor} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 6) {
		return <GenericBackgroundLoop fillColor={fillColor} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 9) {
		return <GenericBackgroundLoop fillColor={fillColor} />;
	} else if (sectionNumber === 5 && sectionPageNumber === 2) {
		return <GenericBackgroundStroke fillColor={fillColor} />;
	} else if (sectionNumber === 5 && sectionPageNumber === 4) {
		return <GenericBackgroundStars fillColor={fillColor} />;
	} else if (sectionNumber === 6 && sectionPageNumber === 2) {
		return <GenericBackgroundStars fillColor={fillColor} />;
	}
	// graphics
	else if (sectionNumber === 1 && sectionPageNumber === 4) {
		return <BackgroundRight svg={Images.kids.graphics.mostly_medium} />;
	} else if (sectionNumber === 2 && sectionPageNumber === 2) {
		return <BackgroundRight svg={Images.kids.graphics.chores} />;
	} else if (sectionNumber === 3 && sectionPageNumber === 2) {
		return <BackgroundCenter svg={Images.kids.graphics.volunteer_club} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 4) {
		return <BackgroundRight svg={Images.kids.graphics.wink_pose} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 7) {
		return <BackgroundRight svg={Images.kids.graphics.wink_pose} />;
	} else if (sectionNumber === 4 && sectionPageNumber === 10) {
		return <BackgroundRight svg={Images.kids.graphics.wink_pose} />;
	} else {
		return <></>;
	}
}

export { getIntroductoryBackground, getQuestionBackground, getImageBackground, getOptionImage };
