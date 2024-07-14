import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import TopMain from "components/orientation/TopMain";
import QuestionLabel from "components/kid/QuestionLabel";
import QuestionSelectLanguage from "components/kid/QuestionSelectLanguage";
import { getIntroductoryBackground } from "utils/background.utils";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive.utils";
import Toolbar from "components/kid/subcomponents/Toolbar";
import ProgressBarKid from "components/kid/subcomponents/ProgressBarKid";
import { useDispatch, useSelector } from "react-redux";
import {
	getColorTheme,
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getIsLoading,
	getLanguage,
	getMode,
	getPhrases,
	nextPage,
	setLanguage,
	setSectionTitles,
} from "store/settings/settingsSlice";
import { loadButtons, loadPhrases } from "utils/load.utils";
import { addResponse } from "utils/response.utils";
import {
	translatePage,
	translateQuestionLabel,
	translateSectionHeading,
} from "utils/translate.utils";
import type { QuestionDropdownLanguageInterface } from "interface/payload.type";
import { getNarrationPayload } from "store/settings/settingsThunk.";
import LoadingScreenKid from "./LoadingScreenKid";
import AnimatedView from "components/AnimatedView";

const LanguageKid = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const colorTheme = useSelector(getColorTheme);
	const device = useSelector(getDevice);
	const isLoading = useSelector(getIsLoading);
	const phrases = useSelector(getPhrases);

	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const [background, setBackground] = useState<React.ReactElement | null>(null);

	const { color100 } = colorTheme;
	const translatedPage = translatePage(
		currentPage.page.translations,
		language,
	) as QuestionDropdownLanguageInterface;
	const questionLabel = translateQuestionLabel(
		translatedPage.kid_label,
		translatedPage.adult_label,
		mode,
	);

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
		setDropdownOpen(false);
	}, [currentPageNumber]);

	// translate phrases and buttons
	useEffect(() => {
		loadButtons();
		loadPhrases();
		translateSections();
		// set narration payload
		dispatch(getNarrationPayload({ mode, language }));
	}, [language]);

	// set phrases
	useEffect(() => {
		translateSections();
	}, [phrases]);

	// set selected value
	useEffect(() => {
		setSelectedValue(language);
	}, [currentPageNumber]);

	// set language default
	useEffect(() => {
		addResponse(language);
	}, []);

	// translate section headings
	const translateSections = (): void => {
		const translatedSectionTitles = translateSectionHeading(language);
		dispatch(
			setSectionTitles([phrases?.introduction, ...translatedSectionTitles, phrases?.feedback]),
		);
	};

	const changeHandler = (value: string | null): void => {
		if (value !== "" && value !== null && value !== undefined) {
			dispatch(setLanguage(value));
			addResponse(value);
			setSelectedValue(value);
		} else {
			setSelectedValue(null);
		}
	};

	if (!isLoading) {
		return (
			<TouchableWithoutFeedback onPress={() => setDropdownOpen(false)}>
				<View style={styles.container}>
					{background !== null && background}
					<Main>
						<ProgressBarKid />
						<Toolbar />
						<TopMain>
							<AnimatedView>
								<View
									style={[
										GeneralStyle.kid.introQuestionContainer,
										{
											marginVertical: verticalScale(40, device.screenHeight),
											...styles.mainContainer,
										},
									]}
								>
									<View style={{ marginBottom: 9 }}>
										<QuestionLabel
											textStyle={GeneralStyle.kid.introQuestionLabel}
											customStyle={{ marginBottom: 7 }}
										>
											{questionLabel}
										</QuestionLabel>
									</View>

									<View style={styles.questionComponentContainer}>
										<QuestionSelectLanguage
											key={currentPageNumber}
											onChange={changeHandler}
											selectedValue={language}
											dropdownOpen={dropdownOpen}
											setDropdownOpen={setDropdownOpen}
										/>
									</View>
								</View>
							</AnimatedView>
						</TopMain>
						<Navigation>
							{selectedValue !== null && (
								<BackAndNextNav
									colorTheme={color100}
									onNext={() => dispatch(nextPage())}
								/>
							)}
						</Navigation>
					</Main>
				</View>
			</TouchableWithoutFeedback>
		);
	} else {
		return <LoadingScreenKid />;
	}
};

export default LanguageKid;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	mainContainer: {
		minHeight: "100%",
		flex: 1,
	},
	questionComponentContainer: {
		...GeneralStyle.kid.questionComponentContainer,
	},
});
