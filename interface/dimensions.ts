import type Orientation from "constants/orientation.enum";

export default interface DeviceInterface {
	screenWidth: number;
	screenHeight: number;
	orientation: Orientation.Portrait | Orientation.Landscape;
	isTablet: boolean;
	isKeyboardOpen: boolean;
	platform: string;
}
