import Mode from "constants/mode.enum";
import { store } from "store/store";
import { moderateScale } from "./responsive.utils";

const NONALPHANUMERIC = ["th-TH", "hi-IN", "ma-IN", "ne-NP", "sv-SE", "ar-AE"];
const PADDINGNONALPHANUMERIC = 10;

const adjustRadioImageAspectRatio = (): number => {
	const { language, mode, device } = store.getState().settings;
	const { isTablet } = device;

	let denominator = 1;
	if (mode === Mode.Kid) {
		denominator = isTablet ? 1.05 : 1.3;
		if (language === "pt-BR") {
			denominator = isTablet ? 1.05 : 1.6;
		}
	} else {
		denominator = isTablet ? 1.15 : 1.5;
	}
	return 1 / denominator;
};

const adjustRadioImageBlockText = (): any => {
	const { language, mode, device } = store.getState().settings;
	const { isTablet, orientation, screenWidth, screenHeight } = device;

	let tabletFontSize = 10;
	let phoneFontSize = 12;
	let tabletLineHeight = 13;
	let phoneLineHeight = 15;

	if (mode === Mode.Kid) {
		tabletFontSize = 12;
		phoneFontSize = 14;
		tabletLineHeight = 17;
		phoneLineHeight = 19;

		if (language === "ar-AE") {
			tabletFontSize = 13;
			phoneFontSize = 14;
			tabletLineHeight = 18;
			phoneLineHeight = 20;
		}

		if (language === "pt-BR") {
			tabletFontSize = 11;
			tabletLineHeight = 14;
			phoneFontSize = 13;
			phoneLineHeight = 15;
		}
	} else {
		tabletFontSize = 10;
		phoneFontSize = 12;
		tabletLineHeight = 13;
		phoneLineHeight = 15;

		if (language === "ar-AE") {
			tabletFontSize = 11;
			phoneFontSize = 13;
			tabletLineHeight = 14;
			phoneLineHeight = 16;
		}

		if (language === "pt-BR") {
			tabletFontSize = 11;
			tabletLineHeight = 14;
			phoneFontSize = 13;
			phoneLineHeight = 15;
		}
	}

	const textStyle = {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC - 5 : 0,
		fontSize: moderateScale(
			isTablet ? tabletFontSize : phoneFontSize,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? tabletLineHeight : phoneLineHeight,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};

	return textStyle;
};

const adjustWritingDirection = (): "rtl" | "ltr" => {
	const { language } = store.getState().settings;
	return language === "ar-AE" ? "rtl" : "ltr";
};

const adjustTextAlignmentDirection = (): "right" | "left" => {
	const { language } = store.getState().settings;
	return language === "ar-AE" ? "right" : "left";
};

const adjustPreambleHeadingText = (): { fontSize: number; lineHeight: number } => {
	const language = store.getState().settings.language;
	const isTablet = store.getState().settings.device.isTablet;

	return {
		fontSize: isTablet ? (language === "ar-AE" ? 43 : 40) : language === "ar-AE" ? 33 : 30,
		lineHeight: isTablet ? (language === "ar-AE" ? 48 : 45) : language === "ar-AE" ? 38 : 35,
	};
};

const adjustPreambleDescriptionText = (): { fontSize: number; lineHeight: number } => {
	const { language, mode, device } = store.getState().settings;
	const { isTablet, orientation, screenWidth, screenHeight } = device;

	if (mode === Mode.Kid) {
		return {
			fontSize: isTablet ? (language === "ar-AE" ? 26 : 23) : language === "ar-AE" ? 21 : 18,
			lineHeight: isTablet ? (language === "ar-AE" ? 36 : 33) : language === "ar-AE" ? 28 : 25,
		};
	} else {
		return {
			fontSize: moderateScale(
				isTablet ? (language === "ar-AE" ? 18 : 15) : language === "ar-AE" ? 20 : 17,
				orientation === "portrait" ? screenWidth : screenHeight,
			),
			lineHeight: moderateScale(
				isTablet ? (language === "ar-AE" ? 23 : 20) : language === "ar-AE" ? 25 : 22,
				orientation === "portrait" ? screenWidth : screenHeight,
			),
		};
	}
};

const adjustOptionListImageSizeSVGAdult = (): { maxWidth: number; maxHeight: number } => {
	const { device } = store.getState().settings;
	const { isTablet, orientation, screenWidth, screenHeight } = device;
	return {
		maxWidth: moderateScale(
			isTablet ? 30 : 30,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		maxHeight: moderateScale(
			isTablet ? 30 : 30,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustOptionListImageSizeNonSVGAdult = (): { maxWidth: number; minHeight: number } => {
	const { device } = store.getState().settings;
	const { isTablet, orientation, screenWidth, screenHeight } = device;
	return {
		maxWidth: moderateScale(
			isTablet ? 30 : 30,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		minHeight: moderateScale(
			isTablet ? 30 : 30,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustOptionListImageSizeSVGKid = (): { maxWidth: number; minHeight: number } => {
	const { device } = store.getState().settings;
	const { isTablet, orientation, screenWidth, screenHeight } = device;
	return {
		maxWidth: moderateScale(
			isTablet ? 50 : 50,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		minHeight: moderateScale(
			isTablet ? 50 : 50,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustOptionListImageSizeNonSVGKid = (): { maxWidth: number; minHeight: number } => {
	const { device } = store.getState().settings;
	const { isTablet, orientation, screenWidth, screenHeight } = device;
	return {
		maxWidth: moderateScale(
			isTablet ? 30 : 30,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		minHeight: moderateScale(
			isTablet ? 30 : 30,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustRadioOptionLabel = (): any => {
	const { language, device, currentPage } = store.getState().settings;
	const { isTablet, orientation, screenWidth, screenHeight } = device;
	const { page } = currentPage;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet
				? language === "ar-AE" && page.ident !== "language_location"
					? 17
					: 14
				: language === "ar-AE" && page.ident !== "language_location"
					? 19
					: 16,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet
				? language === "ar-AE" && page.ident !== "language_location"
					? 21
					: 18
				: language === "ar-AE" && page.ident !== "language_location"
					? 23
					: 20,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustRadioOptionSublabel = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, orientation, screenWidth, screenHeight } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 12) : language === "ar-AE" ? 17 : 14,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 21 : 18,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustCheckboxOptionLabel = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, orientation, screenWidth, screenHeight } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 19 : 16,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 23 : 20,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustPageHeadingText = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 43 : 40) : language === "ar-AE" ? 33 : 30,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 53 : 50) : language === "ar-AE" ? 43 : 40,
			screenWidth,
		),
	};
};

const adjustStateKidPageHeadingText = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 33 : 30) : language === "ar-AE" ? 30 : 27,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 43 : 40) : language === "ar-AE" ? 40 : 37,
			screenWidth,
		),
	};
};

const adjustStateDescriptionText = (): { fontSize: number; lineHeight: number } => {
	const { language, device, mode } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	if (mode === Mode.Kid) {
		return {
			fontSize: moderateScale(
				isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 21 : 18,
				screenWidth,
			),
			lineHeight: moderateScale(
				isTablet ? (language === "ar-AE" ? 26 : 23) : language === "ar-AE" ? 28 : 25,
				screenWidth,
			),
		};
	} else {
		return {
			fontSize: moderateScale(
				isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 23 : 20,
				screenWidth,
			),
			lineHeight: moderateScale(
				isTablet ? (language === "ar-AE" ? 26 : 23) : language === "ar-AE" ? 28 : 25,
				screenWidth,
			),
		};
	}
};

const adjustPageDescriptionText = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 19 : 16,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 19 : 16) : language === "ar-AE" ? 25 : 22,
			screenWidth,
		),
	};
};

const adjustExtroPageHeading = (): any => {
	const { language, device, mode } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	if (mode === Mode.Kid) {
		return {
			fontSize: moderateScale(
				isTablet ? (language === "ar-AE" ? 34 : 30) : language === "ar-AE" ? 30 : 27,
				screenWidth,
			),
			lineHeight: moderateScale(
				isTablet ? (language === "ar-AE" ? 38 : 35) : language === "ar-AE" ? 34 : 30,
				screenWidth,
			),
		};
	} else {
		return {
			fontSize: moderateScale(
				isTablet ? (language === "ar-AE" ? 43 : 40) : language === "ar-AE" ? 33 : 30,
				screenWidth,
			),
			lineHeight: moderateScale(
				isTablet ? (language === "ar-AE" ? 53 : 50) : language === "ar-AE" ? 43 : 40,
				screenWidth,
			),
		};
	}
};

const adjustExtroDescriptionText = (): { fontSize: number; lineHeight: number } => {
	const { language, device, mode } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	if (mode === Mode.Kid) {
		return {
			fontSize: moderateScale(
				isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 21 : 18,
				screenWidth,
			),
			lineHeight: moderateScale(
				isTablet ? (language === "ar-AE" ? 30 : 27) : language === "ar-AE" ? 30 : 27,
				screenWidth,
			),
		};
	} else {
		return {
			fontSize: moderateScale(
				isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 23 : 20,
				screenWidth,
			),
			lineHeight: moderateScale(
				isTablet ? (language === "ar-AE" ? 26 : 23) : language === "ar-AE" ? 28 : 25,
				screenWidth,
			),
		};
	}
};

const adjustIntroHeadingText = (): any => {
	const { language } = store.getState().settings;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
	};
};

const adjustIntroDescriptionText = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC - 5 : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 23 : 20) : language === "ar-AE" ? 30 : 27,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 28 : 25) : language === "ar-AE" ? 35 : 32,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustToolbarHeadingText = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 16 : 13) : language === "ar-AE" ? 16 : 13,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 19 : 16) : language === "ar-AE" ? 19 : 16,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustQuestionSingleQuestionLabel = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 18 : 15) : language === "ar-AE" ? 18 : 15,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 23 : 20) : language === "ar-AE" ? 23 : 20,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustParagraph = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? 15 : 15,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? 19 : 19,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustHeading = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC + 10 : 0,
		fontSize: moderateScale(
			isTablet ? 45 : 30,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? 60 : 45,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustOptionLabelKid = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC - 5 : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 19 : 16,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 23 : 20,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustOptionSubLabelKid = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 15 : 12) : language === "ar-AE" ? 15 : 12,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 19 : 16) : language === "ar-AE" ? 19 : 16,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustQuestionSliderTextKid = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 19 : 16,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 23 : 20,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustQuestionSublabel = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 14 : 12) : language === "ar-AE" ? 14 : 12,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 18 : 16) : language === "ar-AE" ? 18 : 16,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustQuestionTitle = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 17 : 14,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 21 : 18,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustQuestionLabelKid = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;
	console.log("question label: ", language);

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 18 : 15) : language === "ar-AE" ? 22 : 19,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 23 : 20) : language === "ar-AE" ? 27 : 24,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustDropdownIconSize = (): { width: number; height: number } => {
	const { device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;
	return {
		height: moderateScale(
			isTablet ? 25 : 30,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		width: moderateScale(
			isTablet ? 25 : 30,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustQuestionRadioImageListOptionLabelKid = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 17 : 14,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 21 : 18,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

const adjustQuestionRadioImageListOptionSubLabelKid = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth, screenHeight, orientation } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 15 : 12) : language === "ar-AE" ? 15 : 12,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 19 : 16) : language === "ar-AE" ? 19 : 16,
			orientation === "portrait" ? screenWidth : screenHeight,
		),
	};
};

export {
	adjustParagraph,
	adjustHeading,
	adjustDropdownIconSize,
	adjustRadioImageAspectRatio,
	adjustRadioImageBlockText,
	adjustWritingDirection,
	adjustTextAlignmentDirection,
	adjustPreambleHeadingText,
	adjustPreambleDescriptionText,
	adjustOptionListImageSizeSVGAdult,
	adjustOptionListImageSizeNonSVGAdult,
	adjustRadioOptionLabel,
	adjustRadioOptionSublabel,
	adjustCheckboxOptionLabel,
	adjustPageHeadingText,
	adjustStateKidPageHeadingText,
	adjustStateDescriptionText,
	adjustPageDescriptionText,
	adjustExtroPageHeading,
	adjustExtroDescriptionText,
	adjustIntroHeadingText,
	adjustIntroDescriptionText,
	adjustToolbarHeadingText,
	adjustQuestionSingleQuestionLabel,
	adjustOptionListImageSizeSVGKid,
	adjustOptionListImageSizeNonSVGKid,
	adjustOptionLabelKid,
	adjustOptionSubLabelKid,
	adjustQuestionSliderTextKid,
	adjustQuestionSublabel,
	adjustQuestionTitle,
	adjustQuestionLabelKid,
	adjustQuestionRadioImageListOptionLabelKid,
	adjustQuestionRadioImageListOptionSubLabelKid,
};
