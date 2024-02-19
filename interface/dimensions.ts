import type OrientationType from "constants/orientation_type";

export default interface DeviceInterface {
	screenWidth: number;
	screenHeight: number;
	orientation: OrientationType.Portrait | OrientationType.Landscape;
	isTablet: boolean;
	platform: string;
}
