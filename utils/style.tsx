import Mode from "constants/mode.enum";
import { store } from "store/store";
import { moderateScale } from "./responsive.utils";

const adjustRadioImageAspectRatio = (): number => {
	const mode = store.getState().settings.mode;
	const isTablet = store.getState().settings.device.isTablet;
	const language = store.getState().settings.language;

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

const adjustRadioImageBlockText = (): { fontSize: number; lineHeight: number } => {
	const language = store.getState().settings.language;
	const isTablet = store.getState().settings.device.isTablet;
	const orientation = store.getState().settings.device.orientation;
	const mode = store.getState().settings.mode;
	const screenWidth = store.getState().settings.device.screenWidth;
	const screenHeight = store.getState().settings.device.screenHeight;

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
	const language = store.getState().settings.language;
	return language === "ar-AE" ? "rtl" : "ltr";
};

export { adjustRadioImageAspectRatio, adjustRadioImageBlockText, adjustWritingDirection };
