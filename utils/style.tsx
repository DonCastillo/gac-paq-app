import Mode from "constants/mode.enum";
import { store } from "store/store";
import { moderateScale } from "./responsive.utils";

const NONALPHANUMERIC = ["th-TH", "hi-IN", "ma-IN", "ne-NP", "ar-AE"];
// const PADDINGNONALPHANUMERIC = 10;
const PADDINGNONALPHANUMERIC = 5;

const isNonAlphanumeric = (language: string): boolean => {
	return NONALPHANUMERIC.includes(language);
};

const adjustRadioImageAspectRatio = (): number => {
	const { language, mode, device } = store.getState().settings;
	const { isTablet } = device;

	let denominator = 1;
	if (mode === Mode.Kid) {
		denominator = isTablet ? 1 : 1.3;
		if (language === "pt-BR") {
			denominator = isTablet ? 1 : 1.4;
		}
	} else {
		// denominator = isTablet ? 1.15 : 1.5;
		denominator = isTablet ? 1 : 1.2;
		if (language === "pt-BR") {
			denominator = isTablet ? 0.95 : 1.3;
		}
	}
	return 1 / denominator;
};

const adjustRadioImageBlockText = (): any => {
	const { language, mode, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

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
		fontSize: moderateScale(isTablet ? tabletFontSize : phoneFontSize, screenWidth),
		lineHeight: moderateScale(isTablet ? tabletLineHeight : phoneLineHeight, screenWidth),
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
	const { isTablet, screenWidth } = device;

	if (mode === Mode.Kid) {
		return {
			fontSize: isTablet ? (language === "ar-AE" ? 26 : 23) : language === "ar-AE" ? 21 : 18,
			lineHeight: isTablet ? (language === "ar-AE" ? 36 : 33) : language === "ar-AE" ? 28 : 25,
		};
	} else {
		return {
			fontSize: moderateScale(
				isTablet ? (language === "ar-AE" ? 18 : 15) : language === "ar-AE" ? 20 : 17,
				screenWidth,
			),
			lineHeight: moderateScale(
				isTablet ? (language === "ar-AE" ? 23 : 20) : language === "ar-AE" ? 25 : 22,
				screenWidth,
			),
		};
	}
};

const adjustOptionListImageSizeSVGAdult = (): { maxWidth: number; maxHeight: number } => {
	const { device } = store.getState().settings;
	const { isTablet, screenWidth } = device;
	return {
		maxWidth: moderateScale(isTablet ? 30 : 30, screenWidth),
		maxHeight: moderateScale(isTablet ? 30 : 30, screenWidth),
	};
};

const adjustOptionListImageSizeNonSVGAdult = (): { maxWidth: number; minHeight: number } => {
	const { device } = store.getState().settings;
	const { isTablet, screenWidth } = device;
	return {
		maxWidth: moderateScale(isTablet ? 30 : 30, screenWidth),
		minHeight: moderateScale(isTablet ? 30 : 30, screenWidth),
	};
};

const adjustOptionListImageSizeSVGKid = (): { maxWidth: number; minHeight: number } => {
	const { device } = store.getState().settings;
	const { isTablet, screenWidth } = device;
	return {
		maxWidth: moderateScale(isTablet ? 50 : 50, screenWidth),
		minHeight: moderateScale(isTablet ? 50 : 50, screenWidth),
	};
};

const adjustOptionListImageSizeNonSVGKid = (): { maxWidth: number; minHeight: number } => {
	const { device } = store.getState().settings;
	const { isTablet, screenWidth } = device;
	return {
		maxWidth: moderateScale(isTablet ? 30 : 30, screenWidth),
		minHeight: moderateScale(isTablet ? 30 : 30, screenWidth),
	};
};

const adjustRadioOptionLabel = (): any => {
	const { language, device, currentPage } = store.getState().settings;
	const { isTablet, screenWidth } = device;
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
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet
				? language === "ar-AE" && page.ident !== "language_location"
					? 21
					: 18
				: language === "ar-AE" && page.ident !== "language_location"
					? 23
					: 20,
			screenWidth,
		),
	};
};

const adjustRadioOptionSublabel = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 12) : language === "ar-AE" ? 17 : 14,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 21 : 18,
			screenWidth,
		),
	};
};

const adjustCheckboxOptionLabel = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 19 : 16,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 23 : 20,
			screenWidth,
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

const adjustPageDescriptionText = (): {
	fontSize: number;
	lineHeight: number;
	paddingVertical: number;
} => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (isNonAlphanumeric(language) ? 17 : 14) : isNonAlphanumeric(language) ? 19 : 16,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (isNonAlphanumeric(language) ? 24 : 16) : isNonAlphanumeric(language) ? 27 : 22,
			screenWidth,
		),
		paddingVertical: isNonAlphanumeric(language) ? PADDINGNONALPHANUMERIC + 5 : 0,
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

const adjustDropdownLabelText = (): any => {
	const { language } = store.getState().settings;
	let adjustedFont = {};

	if (NONALPHANUMERIC.includes(language)) {
		adjustedFont = {
			fontFamily: "undefined",
		};
	}

	return { ...adjustedFont };
};

const adjustIntroHeadingText = (): any => {
	const { language } = store.getState().settings;
	let adjustedFont = {};

	if (NONALPHANUMERIC.includes(language)) {
		adjustedFont = {
			fontFamily: "undefined",
			fontSize: 25,
		};
	}

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		...adjustedFont,
	};
};

const adjustIntroDescriptionText = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC - 5 : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 23 : 20) : language === "ar-AE" ? 30 : 27,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 28 : 25) : language === "ar-AE" ? 35 : 32,
			screenWidth,
		),
	};
};

const adjustToolbarHeadingText = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 16 : 13) : language === "ar-AE" ? 16 : 13,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 19 : 16) : language === "ar-AE" ? 19 : 16,
			screenWidth,
		),
	};
};

const adjustQuestionSingleQuestionLabel = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 18 : 15) : language === "ar-AE" ? 18 : 15,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 23 : 20) : language === "ar-AE" ? 23 : 20,
			screenWidth,
		),
	};
};

const adjustParagraph = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(isTablet ? 15 : 15, screenWidth),
		lineHeight: moderateScale(isTablet ? 19 : 19, screenWidth),
	};
};

const adjustHeading = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC + 10 : 0,
		fontSize: moderateScale(isTablet ? 45 : 30, screenWidth),
		lineHeight: moderateScale(isTablet ? 60 : 45, screenWidth),
	};
};

const adjustOptionLabelKid = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC - 5 : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 19 : 16,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 23 : 20,
			screenWidth,
		),
	};
};

const adjustOptionSubLabelKid = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 15 : 12) : language === "ar-AE" ? 15 : 12,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 19 : 16) : language === "ar-AE" ? 19 : 16,
			screenWidth,
		),
	};
};

const adjustQuestionSliderTextKid = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 19 : 16,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 23 : 20,
			screenWidth,
		),
	};
};

const adjustQuestionSublabel = (): { fontSize: number; lineHeight: number } => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 14 : 12) : language === "ar-AE" ? 14 : 12,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 18 : 16) : language === "ar-AE" ? 18 : 16,
			screenWidth,
		),
	};
};

const adjustQuestionTitle = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 17 : 14,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 21 : 18,
			screenWidth,
		),
	};
};

const adjustQuestionLabelKid = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;
	console.log("question label: ", language);

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 18 : 15) : language === "ar-AE" ? 22 : 19,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 23 : 20) : language === "ar-AE" ? 27 : 24,
			screenWidth,
		),
	};
};

const adjustDropdownIconSize = (): { width: number; height: number } => {
	const { device } = store.getState().settings;
	const { isTablet, screenWidth } = device;
	return {
		height: moderateScale(isTablet ? 25 : 30, screenWidth),
		width: moderateScale(isTablet ? 25 : 30, screenWidth),
	};
};

const adjustQuestionRadioImageListOptionLabelKid = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 17 : 14,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 21 : 18,
			screenWidth,
		),
	};
};

const adjustQuestionRadioImageListOptionSubLabelKid = (): any => {
	const { language, device } = store.getState().settings;
	const { isTablet, screenWidth } = device;

	return {
		paddingVertical: NONALPHANUMERIC.includes(language) ? PADDINGNONALPHANUMERIC : 0,
		fontSize: moderateScale(
			isTablet ? (language === "ar-AE" ? 15 : 12) : language === "ar-AE" ? 15 : 12,
			screenWidth,
		),
		lineHeight: moderateScale(
			isTablet ? (language === "ar-AE" ? 19 : 16) : language === "ar-AE" ? 19 : 16,
			screenWidth,
		),
	};
};

export {
	adjustParagraph,
	adjustHeading,
	adjustDropdownIconSize,
	adjustDropdownLabelText,
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
