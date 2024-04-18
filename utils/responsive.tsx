import OrientationType from "constants/orientation_type";
import type DeviceInterface from "interface/dimensions";
import { Dimensions, Platform, PixelRatio } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

function getWidth(): number {
	const { width } = Dimensions.get("window");
	return width;
}

function getHeight(): number {
	const { height } = Dimensions.get("window");
	return height;
}

function getOS(): string {
	return Platform.OS;
}

function isTab(): boolean {
	if (getWidth() > 550) {
		return true;
	} else {
		return false;
	}
}

function getDeviceInfo(orientationInfo): DeviceInterface {
	let orientation = OrientationType.Portrait;
	switch (orientationInfo) {
		case 1:
		case 2:
			orientation = OrientationType.Portrait;
			break;
		case 3:
		case 4:
			orientation = OrientationType.Landscape;
			break;
		default:
			orientation = OrientationType.Portrait;
			break;
	}
	return {
		screenWidth: getWidth(),
		screenHeight: getHeight(),
		orientation,
		platform: getOS(),
		isTablet: isTab(),
		isKeyboardOpen: false,
	};
}

async function getInitialDeviceInfo(): Promise<DeviceInterface> {
	const orientation = await ScreenOrientation.getOrientationAsync();
	return getDeviceInfo(orientation);
}

function horizontalScale(size: number, width: number = BASE_WIDTH): number {
	const newSize = size * (width / BASE_WIDTH);
	if (getOS() === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
	}
}

function verticalScale(size: number, height: number = BASE_HEIGHT): number {
	const newSize = size * (height / BASE_HEIGHT);
	if (getOS() === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
	}
}
function moderateScale(
	size: number,
	width: number = BASE_WIDTH,
	minSize: number = 16,
	maxSize: number = 60,
): number {
	const factor = 0.5;
	const newSize = size + (horizontalScale(size, width) - size) * factor;
	let finalSize = newSize;
	if (getOS() === "ios") {
		finalSize = Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		finalSize = Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
	}

	return finalSize;
	// if (finalSize < minSize) {
	// 	return minSize;
	// } else if (finalSize > maxSize) {
	// 	return maxSize;
	// } else {
	// 	return finalSize;
	// }
}

// function isScreenHeight770(): boolean {
// 	if (getHeight() > 740 && getHeight() < 760) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

export { getDeviceInfo, getInitialDeviceInfo, horizontalScale, verticalScale, moderateScale };
