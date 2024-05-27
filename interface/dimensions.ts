import type OrientationType from "constants/orientation_type.enum";

export default interface DeviceInterface {
	screenWidth: number;
	screenHeight: number;
	orientation: OrientationType.Portrait | OrientationType.Landscape;
	isTablet: boolean;
	isKeyboardOpen: boolean;
	platform: string;
}
