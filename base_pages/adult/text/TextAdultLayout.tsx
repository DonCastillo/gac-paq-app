import AnimatedView from "@components/AnimatedView";
import BGLinearGradient from "@components/BGLinearGradient";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import ScrollContainer from "@components/ScrollContainer";
import ProgressBarAdult from "@components/adults/subcomponents/ProgressBarAdult";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import CenterMain from "@components/orientation/CenterMain";
import { useButtonContext } from "@contexts/common/ButtonContext";
import { useProceedContext } from "@contexts/common/ProceedContext";
import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { getColorTheme, prevPage } from "@store/settings/settingsSlice";
import { proceedPage } from "@utils/navigation.utils";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const TextAdultLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const colorTheme = useSelector(getColorTheme);
	const { currentPageNumber, currentPage } = useCurrentPage();
	const { color100 } = colorTheme;
	const { buttonComponent, setButtonComponent } = useButtonContext();
	const { proceed } = useProceedContext();

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 0) {
			if (proceed || currentPage.page.audio_autoplay === false) {
				setButtonComponent(
					<BackAndNextNav
						key={"both"}
						colorTheme={"#FFF"}
						onPrev={() => dispatch(prevPage())}
						onNext={() => proceedPage()}
					/>,
				);
			} else {
				setButtonComponent(
					<BackAndNextNav
						key={"next"}
						colorTheme={"#FFF"}
						onPrev={() => dispatch(prevPage())}
					/>,
				);
			}
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme={"#FFF"}
					onNext={() => proceedPage()}
				/>,
			);
		}
	}, [currentPageNumber, proceed]);

	return (
		<View style={[styles.container, { backgroundColor: color100 }]}>
			<BGLinearGradient />
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<AnimatedView style={{ flex: 0 }}>
						<ScrollContainer
							scrollContainerStyle={{
								width: 8,
								backgroundColor: "#d6d4d2" + "99",
							}}
							scrollIndicatorStyle={{
								width: 8,
								backgroundColor: "#fff",
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

export default TextAdultLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
