import useAppInitialization from "@hooks/useAppInitialization";
import useCharacter from "@hooks/useCharacter";
import useDeviceOrientation from "@hooks/useDeviceOrientation";
import useNetworkConnectivity from "@hooks/useNetworkConnectivity";
import useNetworkStatus from "@hooks/useNetworkStatus";
import fonts from "@styles/fonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { LoadingScreenAdultPage } from "./adult";

function App() {
	const [fontsLoaded] = useFonts(fonts);
	let { mode, language } = useCharacter();

	// Set up device info and orientation listener
	useDeviceOrientation();

	// Monitor network connectivity
	const { hasNetwork } = useNetworkStatus();

	// Handle network connectivity changes and auto-sync
	useNetworkConnectivity(hasNetwork, mode, language);

	// Initialize app data and settings
	useAppInitialization(mode, language);

	if (!fontsLoaded) {
		return <LoadingScreenAdultPage />;
	}

	return (
		<Stack screenOptions={{ headerShown: false, animation: "none" }}>
			{/* Expo Router automatically detects routes based on file structure */}
			<Stack.Screen name="splash" />
			<Stack.Screen name="questionnaire" />
			<Stack.Screen
				name="success"
				initialParams={{ success_type: "online" }}
			/>
			<Stack.Screen name="error" />
			<Stack.Screen name="pending" />
		</Stack>
	);
}

export default App;
