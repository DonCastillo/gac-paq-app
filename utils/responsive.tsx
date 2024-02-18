import { Dimensions, Platform, PixelRatio } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;
const scaleHorizontal = SCREEN_WIDTH / BASE_WIDTH;
const scaleVertical = SCREEN_HEIGHT / BASE_HEIGHT;

function getWidth(): number {
	return SCREEN_WIDTH;
}

function getHeight(): number {
	return SCREEN_HEIGHT;
}

function getOS(): string {
	return Platform.OS;
}

function horizontalScale(size: number): number {
	const newSize = size * scaleHorizontal;
	if (getOS() === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
	}
}

function verticalScale(size: number): number {
	const newSize = size * scaleVertical;
	if (getOS() === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
	}
}

function isTab(): boolean {
	if (SCREEN_WIDTH > 550) {
		return true;
	} else {
		return false;
	}
}

function isScreenHeight770(): boolean {
	if (SCREEN_HEIGHT > 740 && SCREEN_HEIGHT < 760) {
		return true;
	} else {
		return false;
	}
}

export { getWidth, getHeight, getOS, horizontalScale, verticalScale, isTab, isScreenHeight770 };
