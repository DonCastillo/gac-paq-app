import OrientationType from "constants/orientation_type.enum";
import type DeviceInterface from "interface/dimensions";
import { Dimensions, Platform, PixelRatio } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const getWidth = (): number => {
	const { width } = Dimensions.get("window");
	return width;
};

const getHeight = (): number => {
	const { height } = Dimensions.get("window");
	return height;
};

const getOS = (): string => {
	return Platform.OS;
};

const isTab = (): boolean => {
	if (getWidth() > 550) {
		return true;
	} else {
		return false;
	}
};

const getDeviceInfo = (orientationInfo): DeviceInterface => {
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
};

const getInitialDeviceInfo = async (): Promise<DeviceInterface> => {
	const orientation = await ScreenOrientation.getOrientationAsync();
	return getDeviceInfo(orientation);
};

const horizontalScale = (size: number, width: number = BASE_WIDTH): number => {
	const newSize = size * (width / BASE_WIDTH);
	if (getOS() === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
	}
};

const verticalScale = (size: number, height: number = BASE_HEIGHT): number => {
	const newSize = size * (height / BASE_HEIGHT);
	if (getOS() === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
	}
};
const moderateScale = (
	size: number,
	width: number = BASE_WIDTH,
	minSize: number = 16,
	maxSize: number = 60,
): number => {
	const factor = 0.5;
	const newSize = size + (horizontalScale(size, width) - size) * factor;
	let finalSize = newSize;
	if (getOS() === "ios") {
		finalSize = Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		finalSize = Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
	}

	return finalSize;
};

export { getDeviceInfo, getInitialDeviceInfo, horizontalScale, verticalScale, moderateScale };
