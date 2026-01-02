import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

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
			setHasNetwork(state.isConnected ?? false);
			setNetworkState(state);
		});

		// Get initial network state
		NetInfo.fetch().then((state) => {
			setHasNetwork(state.isConnected ?? false);
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
