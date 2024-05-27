import OrientationType from "constants/orientation_type.enum";
import type DeviceInterface from "interface/dimensions";

const defaultDevice: DeviceInterface = {
	screenWidth: 0,
	screenHeight: 0,
	orientation: OrientationType.Portrait,
	isTablet: false,
	platform: "",
	isKeyboardOpen: false,
};

export default defaultDevice;
