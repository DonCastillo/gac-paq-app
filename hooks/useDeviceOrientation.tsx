import type DeviceInterface from "@interface/dimensions";
import { setDevice } from "@store/settings/settingsSlice";
import { getDeviceInfo, getInitialDeviceInfo } from "@utils/responsive.utils";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

/**
 * Custom hook for managing device information and orientation changes
 * Automatically sets initial device info and listens for orientation changes
 */
const useDeviceOrientation = (): void => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getInitialDeviceInfoAsync = async (): Promise<DeviceInterface> => {
			return await getInitialDeviceInfo();
		};

		// Set initial device info
		getInitialDeviceInfoAsync()
			.then((initialDeviceInfo) => dispatch(setDevice(initialDeviceInfo)))
			.catch((error) => {
				console.error("Failed to get initial device info:", error);
			});

		// Listen for orientation changes
		const orientationListener = ScreenOrientation.addOrientationChangeListener((orientationInfo) => {
			const newDeviceInfo = getDeviceInfo(orientationInfo.orientationInfo.orientation);
			dispatch(setDevice(newDeviceInfo));
		});

		// Cleanup function
		return () => {
			ScreenOrientation.removeOrientationChangeListener(orientationListener);
		};
	}, []);
};

export default useDeviceOrientation;
