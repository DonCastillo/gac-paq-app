import ProgressBarAdult from "@components/adults/subcomponents/ProgressBarAdult";
import AnimatedView from "@components/AnimatedView";
import BGLinearGradient from "@components/BGLinearGradient";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import BackAndSubmitNav from "@components/generic/navigation/BackAndSubmitNav";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import ImageBackdrop from "@components/ImageBackdrop";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import CenterMain from "@components/orientation/CenterMain";
import { useButtonContext } from "@contexts/common/ButtonContext";
import useCurrentPage from "@hooks/useCurrentPage";
import useSubmitResponseHandler from "@hooks/useResubmitResponse";
import { ParentComponent } from "@interface/function.type";
import { prevPage } from "@store/settings/settingsSlice";
import { getImageBackground } from "@utils/background.utils";
import { proceedPage } from "@utils/navigation.utils";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

const QuestionnaireAdultExtroLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPage, currentPageNumber } = useCurrentPage();
	const backgroundImage = getImageBackground();
	const { buttonComponent, setButtonComponent } = useButtonContext();
	const { submitResponseHandler } = useSubmitResponseHandler();
	const isFinal = currentPage?.page?.isFinal ?? false;

	// set button component dynamically
	useEffect(() => {
		if (isFinal === true) {
			setButtonComponent(
				<BackAndSubmitNav
					key={"prev" + currentPageNumber}
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
					onNext={async () => await submitResponseHandler()}
				/>,
			);
		} else {
			if (currentPageNumber > 0) {
				setButtonComponent(
					<BackAndNextNav
						key={"both" + currentPageNumber}
						colorTheme="#FFF"
						onPrev={() => dispatch(prevPage())}
						onNext={() => proceedPage()}
					/>,
				);
			} else {
				setButtonComponent(
					<BackAndNextNav
						key={"next" + currentPageNumber}
						colorTheme="#FFF"
						onNext={() => proceedPage()}
					/>,
				);
			}
		}
	}, [currentPageNumber]);

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			{backgroundImage !== undefined && backgroundImage !== null && backgroundImage !== "" && (
				<ImageBackdrop
					source={backgroundImage}
					key={currentPageNumber}
					opacity={0.2}
				/>
			)}
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<AnimatedView style={{ flex: 0 }}>{children}</AnimatedView>
				</CenterMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
			</Main>
		</View>
	);
};

export default QuestionnaireAdultExtroLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
		position: "relative",
	},
});
