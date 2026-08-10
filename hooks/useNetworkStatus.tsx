import NetInfo, { type NetInfoState } from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

/**
 * isConnected only means the device is attached to a network, which is true of a school wifi that
 * has not let the device past its captive portal. Submissions would fail against it, so prefer
 * isInternetReachable where it is known.
 *
 * It is null while NetInfo is still probing, and treating that as offline would queue responses
 * that could have been sent, so fall back to isConnected until the probe resolves.
 */
const hasUsableNetwork = (state: NetInfoState): boolean => {
	return state.isInternetReachable ?? state.isConnected ?? false;
};

/**
 * Custom hook for monitoring network connectivity
 * @returns Object containing network connectivity state
 */
const useNetworkStatus = () => {
	const [hasNetwork, setHasNetwork] = useState<boolean>(false);
	const [networkState, setNetworkState] = useState<any>(null);

	useEffect(() => {
		// Listen for network state changes
		const unsubscribe = NetInfo.addEventListener((state) => {
			setHasNetwork(hasUsableNetwork(state));
			setNetworkState(state);
		});

		// Get initial network state
		NetInfo.fetch().then((state) => {
			setHasNetwork(hasUsableNetwork(state));
			setNetworkState(state);
		});

		// Cleanup function
		return () => {
			unsubscribe();
		};
	}, []);

	return {
		hasNetwork,
		networkState,
		isConnected: hasNetwork, // Alias for convenience
	};
};

export default useNetworkStatus;
