import { LoadingScreenAdultPage } from "@/base_pages/adult";
import { LoadingScreenKidPage } from "@/base_pages/kid";
import Mode from "@/constants/mode.enum";
import { useLoadingContext } from "@/contexts/common/LoadingContext";
import AnimatedView from "@components/AnimatedView";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import { Slot } from "expo-router";

export default function ErrorLayout() {
	const { mode } = useCharacter();
	const { currentPageNumber } = useCurrentPage();
	const { isLoading } = useLoadingContext();

	if (isLoading) {
		if (mode === Mode.Kid) {
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
