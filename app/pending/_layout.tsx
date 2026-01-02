import { LoadingScreenAdultPage } from "@/base_pages/adult";
import { LoadingScreenKidPage } from "@/base_pages/kid";
import Mode from "@/constants/mode.enum";
import { useLoadingContext } from "@/contexts/common/LoadingContext";
import useBackHandler from "@/hooks/useBackHandler";
import Main from "@components/Main";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import { setDrawerOpened } from "@store/settings/settingsSlice";
import { router, Slot } from "expo-router";
import { StyleSheet } from "react-native";
import { View } from "react-native-animatable";
import { useDispatch } from "react-redux";

export default function PendingLayout() {
	const dispatch = useDispatch();
	const { mode } = useCharacter();
	const { currentPageNumber } = useCurrentPage();
	const { isLoading } = useLoadingContext();

	useBackHandler(() => {
		dispatch(setDrawerOpened(false));
		router.replace("/questionnaire");
		return true;
	});

	if (isLoading) {
		if (mode === Mode.Kid) {
			return <LoadingScreenKidPage key={currentPageNumber} />;
		}
		return <LoadingScreenAdultPage key={currentPageNumber} />;
	}

	return (
		<View style={styles.container}>
			<Main customStyle={{ paddingTop: 10, position: "relative" }}>
				<Slot />
			</Main>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
});
