import ProgressBarAdult from "@components/adults/subcomponents/ProgressBarAdult";
import BGLinearGradient from "@components/BGLinearGradient";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import CenterMain from "@components/orientation/CenterMain";
import ScrollContainer from "@components/ScrollContainer";
import { ParentComponent } from "@interface/function.type";
import { getColorTheme, nextPage, prevPage } from "@store/settings/settingsSlice";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const GenericTextLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const colorTheme = useSelector(getColorTheme);
	const { color100 } = colorTheme;

	return (
		<View style={[styles.container, { backgroundColor: color100 }]}>
			<BGLinearGradient />
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
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
				</CenterMain>
				<Navigation>
					<BackAndNextNav
						onPrev={() => dispatch(prevPage())}
						onNext={() => dispatch(nextPage())}
					/>
				</Navigation>
			</Main>
		</View>
	);
};

export default GenericTextLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
});
