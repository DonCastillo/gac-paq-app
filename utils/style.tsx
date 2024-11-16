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

	let textStyle = {
		fontSize: 14,
		lineHeight: 19,
	};
	if (mode === Mode.Kid) {
		let tabletFontSize = 12;
		let phoneFontSize = 14;
		let tabletLineHeight = 17;
		let phoneLineHeight = 19;

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

		textStyle = {
			fontSize: moderateScale(
				isTablet ? tabletFontSize : phoneFontSize,
				orientation === "portrait" ? screenWidth : screenHeight,
			),
			lineHeight: moderateScale(
				isTablet ? tabletLineHeight : phoneLineHeight,
				orientation === "portrait" ? screenWidth : screenHeight,
			),
		};
	}

	return textStyle;
};

const adjustWritingDirection = (): "rtl" | "ltr" => {
	const language = store.getState().settings.language;
	return language === "ar-AE" ? "rtl" : "ltr";
};

export { adjustRadioImageAspectRatio, adjustRadioImageBlockText, adjustWritingDirection };
