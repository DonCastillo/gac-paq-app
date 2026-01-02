import BackgroundYellowStroke from "@/components/kid/background/question-pages/BackgroundYellowStroke";
import { verticalScale } from "@/utils/responsive.utils";
import AnimatedView from "@components/AnimatedView";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import BackAndSubmitNav from "@components/generic/navigation/BackAndSubmitNav";
import ProgressBar from "@components/generic/ProgressBar";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import CenterMain from "@components/orientation/CenterMain";
import { useButtonContext } from "@contexts/common/ButtonContext";
import useCurrentPage from "@hooks/useCurrentPage";
import useSubmitResponseHandler from "@hooks/useResubmitResponse";
import { ParentComponent } from "@interface/function.type";
import { getDevice, getSectionTotalPages, prevPage } from "@store/settings/settingsSlice";
import Images from "@styles/images/index";
import { proceedPage } from "@utils/navigation.utils";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const QuestionnaireKidExtroLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPage, currentPageNumber } = useCurrentPage();
	const sectionTotalPages = useSelector(getSectionTotalPages);
	const device = useSelector(getDevice);
	const ImageComponent = Images.kids.graphics.extro_question_page;
	const { buttonComponent, setButtonComponent } = useButtonContext();
	const { submitResponseHandler } = useSubmitResponseHandler();
	const isFinal = currentPage?.page?.isFinal ?? false;

	// set button component dynamically
	useEffect(() => {
		if (isFinal === true) {
			setButtonComponent(
				<BackAndSubmitNav
					key={"prev" + currentPageNumber}
					colorTheme="#FFCB66"
					onPrev={() => dispatch(prevPage())}
					onNext={async () => await submitResponseHandler()}
				/>,
			);
		} else {
			if (currentPageNumber > 0) {
				setButtonComponent(
					<BackAndNextNav
						key={"both" + currentPageNumber}
						colorTheme="#FFCB66"
						onPrev={() => dispatch(prevPage())}
						onNext={() => proceedPage()}
					/>,
				);
			} else {
				setButtonComponent(
					<BackAndNextNav
						key={"next" + currentPageNumber}
						colorTheme="#FFCB66"
						onNext={() => proceedPage()}
					/>,
				);
			}
		}
	}, [currentPageNumber]);

	return (
		<View style={styles.container}>
			<BackgroundYellowStroke />
			<Main>
				<ProgressBar
					currentSectionPage={currentPage.sectionPageNumber}
					sectionPageTotal={currentPage.sectionNumber !== null ? sectionTotalPages[currentPage.sectionNumber] : null}
					filledColor={"#FFCB66"}
					unfilledColor={"#FFCB66" + "4D"}
				/>
				<Toolbar />

				<CenterMain>
					<AnimatedView style={{ flex: 0, alignItems: "center", justifyContent: "center" }}>
						{children}
						<View style={styles.imageContainer}>
							<ImageComponent
								backgroundColor={"white"}
								height={verticalScale(device.isTablet ? 320 : 290, device.screenHeight)}
								padding={0}
								margin={0}
							/>
						</View>
					</AnimatedView>
				</CenterMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
			</Main>
		</View>
	);
};

export default QuestionnaireKidExtroLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	imageContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
		width: "100%",
	},
});
