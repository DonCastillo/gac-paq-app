import AnimatedView from "@components/AnimatedView";
import useAppLoader from "@hooks/useAppLoader";
import useBackHandler from "@hooks/useBackHandler";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import { router, Slot, useFocusEffect } from "expo-router";
import { useCallback } from "react";

export default function SplashLayout() {
	const { currentPageNumber } = useCurrentPage();
	const { mode, language } = useCharacter();
	const { loadApp } = useAppLoader(mode, language);

	// Prevent hardware back button navigation
	useBackHandler();

	useFocusEffect(
		useCallback(() => {
			const timer = setTimeout(() => {
				loadApp()
					.then(() => {
						console.log("finished reloading app");
						router.replace("/questionnaire/");
					})
					.catch((error: any) => {
						console.log(error);
					});
			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}, [currentPageNumber]),
	);

	return (
		<AnimatedView>
			<Slot key={currentPageNumber} />
		</AnimatedView>
	);
}
