import { LoadingScreenAdultPage } from "@/base_pages/adult";
import { LoadingScreenKidPage } from "@/base_pages/kid";
import Mode from "@/constants/mode.enum";
import { useLoadingContext } from "@/contexts/common/LoadingContext";
import KeyboardSafeview from "@components/KeyboardSafeview";
import useBackHandler from "@hooks/useBackHandler";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import { prevPage } from "@store/settings/settingsSlice";
import { Slot } from "expo-router";
import { View } from "react-native";
import { useDispatch } from "react-redux";

export default function QuestionnaireLayout() {
	const { mode } = useCharacter();
	const { currentPageNumber } = useCurrentPage();
	const { isLoading } = useLoadingContext();
	const dispatch = useDispatch();

	useBackHandler(() => {
		dispatch(prevPage());
		return true;
	});

	if (isLoading) {
		if (mode === Mode.Kid) {
			return <LoadingScreenKidPage key={currentPageNumber} />;
		}
		return <LoadingScreenAdultPage key={currentPageNumber} />;
	}

	return (
		<KeyboardSafeview>
			<View style={{ flex: 1, backgroundColor: "white" }}>
				<Slot />
			</View>
		</KeyboardSafeview>
	);
}
