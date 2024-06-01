import Orientation from "constants/orientation.enum";
import type DeviceInterface from "interface/dimensions";

const defaultDevice: DeviceInterface = {
	screenWidth: 0,
	screenHeight: 0,
	orientation: Orientation.Portrait,
	isTablet: false,
	platform: "",
	isKeyboardOpen: false,
};

export default defaultDevice;
