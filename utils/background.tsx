import React from "react";
import BackgroundOne from "../components/kid/background/introductory-pages/BackgroundOne";
import BackgroundTwo from "../components/kid/background/introductory-pages/BackgroundTwo";
import BackgroundThree from "../components/kid/background/introductory-pages/BackgroundThree";
import BackgroundFour from "../components/kid/background/introductory-pages/BackgroundFour";
import BackgroundFive from "../components/kid/background/introductory-pages/BackgroundFive";
import BackgroundSix from "../components/kid/background/introductory-pages/BackgroundSix";
import BackgroundSeven from "../components/kid/background/introductory-pages/BackgroundSeven";
import QuestionType from "../constants/question_type";
import DeviceType from "../constants/device_type";
import GenericBackgroundStroke from "../components/kid/background/question-pages/GenericBackgroundStroke";
import BackgroundRight from "../components/kid/background/question-pages/BackgroundRight";
import { Images } from "../styles/images";
import BackgroundCenter from "../components/kid/background/question-pages/BackgroundCenter";
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

	if (sectionNumber === 1 && sectionPageNumber === 2) {
		return <GenericBackgroundStroke fillColor={fillColor} />;
	} else if (sectionNumber === 1 && questionType === QuestionType.QuestionSlider) {
		return <BackgroundRight svg={Images.kid.mostly_medium} />;
	} else if (sectionNumber === 2 && sectionPageNumber === 2) {
		return <BackgroundCenter svg={Images.kid.volunteer_club} />;
	} else {
		return <></>;
	}
}

export { getIntroductoryBackground, getQuestionBackground };
