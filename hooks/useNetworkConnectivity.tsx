import { ModeType } from "@interface/union.type";
import { setIsConnected } from "@store/settings/settingsSlice";
import { getNarrationPayload } from "@store/settings/settingsThunk";
import { sendResponseQueue } from "@utils/response.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

/**
 * Custom hook for handling network connectivity changes
 * Automatically updates Redux state and syncs data when network becomes available
 * @param hasNetwork - Current network connectivity status
 * @param mode - Current app mode
 * @param language - Current language setting
 */
const useNetworkConnectivity = (hasNetwork: boolean, mode: ModeType, language: string): void => {
	const dispatch = useDispatch();
	useEffect(() => {
		// Update Redux state with current network status
		dispatch(setIsConnected(hasNetwork));

		if (hasNetwork) {
			// Get narration payload when network is available
			if (mode && language) {
				dispatch(getNarrationPayload({ mode, language }) as any);
			}

			// Auto-submit pending responses when network is available
			sendResponseQueue()
				.then((res) => {
					console.log("Response queue processed successfully:", res);
					return res;
				})
				.catch((err) => {
					console.error("Failed to process response queue:", err);
					return err;
				});
		}
	}, [hasNetwork]);
};

export default useNetworkConnectivity;
