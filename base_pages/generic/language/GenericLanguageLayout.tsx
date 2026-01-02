import QuestionContainer from "@components/adults/QuestionContainer";
import ProgressBarAdult from "@components/adults/subcomponents/ProgressBarAdult";
import BGLinearGradient from "@components/BGLinearGradient";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import ImageBackdrop from "@components/ImageBackdrop";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import CenterMain from "@components/orientation/CenterMain";
import { useLanguageContext } from "@contexts/common/LanguageContext";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { nextPage } from "@store/settings/settingsSlice";
import { getImageBackground } from "@utils/background.utils";
import { loadSectionPages } from "@utils/load_pages.utils";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

const GenericLanguageLayout: ParentComponent = ({ children }) => {
	const { currentPageNumber } = useCurrentPage();
	const { language } = useCharacter();
	const dispatch = useDispatch();
	const backgroundImage = getImageBackground();
	const { selectedValue } = useLanguageContext();

	useEffect(() => {
		loadSectionPages();
	}, [language]);

	return (
		<View
			style={styles.container}
			key={currentPageNumber}
		>
			<BGLinearGradient />
			{backgroundImage !== undefined && backgroundImage !== null && backgroundImage !== "" && (
				<ImageBackdrop
					source={backgroundImage}
					key={currentPageNumber}
				/>
			)}
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<QuestionContainer>{children}</QuestionContainer>
				</CenterMain>
				<Navigation>{selectedValue !== null && <BackAndNextNav onNext={() => dispatch(nextPage())} />}</Navigation>
			</Main>
		</View>
	);
};

export default GenericLanguageLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
