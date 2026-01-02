import AnimatedView from "@components/AnimatedView";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import ScrollContainer from "@components/ScrollContainer";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import ProgressBarKid from "@components/kid/subcomponents/ProgressBarKid";
import CenterMain from "@components/orientation/CenterMain";
import { useButtonContext } from "@contexts/common/ButtonContext";
import { useProceedContext } from "@contexts/common/ProceedContext";
import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { getColorTheme, prevPage } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { getIntroductoryBackground } from "@utils/background.utils";
import { proceedPage } from "@utils/navigation.utils";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const TextKidLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const colorTheme = useSelector(getColorTheme);
	const { currentPageNumber, currentPage } = useCurrentPage();
	const { proceed } = useProceedContext();
	const { buttonComponent, setButtonComponent } = useButtonContext();
	const { color100, color200 } = colorTheme;
	const [background, setBackground] = useState<React.ReactElement | null>(null);

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 0) {
			if (proceed || currentPage.page.audio_autoplay === false) {
				setButtonComponent(
					<BackAndNextNav
						key={"both"}
						colorTheme={color100}
						onPrev={() => dispatch(prevPage())}
						onNext={() => proceedPage()}
					/>,
				);
			} else {
				setButtonComponent(
					<BackAndNextNav
						key={"next"}
						colorTheme={color100}
						onPrev={() => dispatch(prevPage())}
					/>,
				);
			}
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme={color100}
					onNext={() => proceedPage()}
				/>,
			);
		}
	}, [currentPageNumber, proceed]);

	return (
		<View style={styles.container}>
			{background !== null && background}
			<Main>
				<ProgressBarKid />
				<Toolbar />
				<CenterMain>
					<AnimatedView style={{ flex: 0 }}>
						<ScrollContainer
							scrollContainerStyle={{
								...GeneralStyle.kid.scrollContainer,
								backgroundColor: color100 + "26",
							}}
							scrollIndicatorStyle={{
								...GeneralStyle.kid.scrollIndicator,
								backgroundColor: color200,
							}}
						>
							{children}
						</ScrollContainer>
					</AnimatedView>
				</CenterMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
			</Main>
		</View>
	);
};

export default TextKidLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
