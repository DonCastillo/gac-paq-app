import { LoadingScreenAdultPage } from "@/base_pages/adult";
import { LoadingScreenKidPage } from "@/base_pages/kid";
import { useLoadingContext } from "@/contexts/common/LoadingContext";
import AnimatedView from "@components/AnimatedView";
import useCharacter from "@hooks/useCharacter";
import { getCurrentPageNumber } from "@store/settings/settingsSlice";
import { Slot } from "expo-router";
import { useSelector } from "react-redux";

export default function SuccessLayout() {
	const { mode } = useCharacter();
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const { isLoading } = useLoadingContext();

	if (isLoading) {
		if (mode === "kid") {
			return <LoadingScreenKidPage key={currentPageNumber} />;
		} else {
			return <LoadingScreenAdultPage key={currentPageNumber} />;
		}
	}

	return (
		<AnimatedView>
			<Slot />
		</AnimatedView>
	);
}
