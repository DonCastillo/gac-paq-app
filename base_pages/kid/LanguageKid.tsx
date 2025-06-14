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
	nextPage,
	setIsLoading,
	setLanguage,
	skipPage,
} from "store/settings/settingsSlice";
import { loadPhrases } from "utils/load.utils";
import { addResponse } from "utils/response.utils";
import { translateQuestionLabel } from "utils/translate.utils";
import type { QuestionDropdownLanguageInterface } from "interface/payload.type";
import { getNarrationPayload } from "store/settings/settingsThunk";
import LoadingScreenKid from "./LoadingScreenKid";
import AnimatedView from "components/AnimatedView";
import { loadQuestionData } from "store/questions/questionsThunk";
import { loadPages, loadSectionPages } from "utils/load_pages.utils";
import {
	clearExtroResponses,
	clearFeedbackResponses,
	clearGshsResponses,
	clearHbscResponses,
	clearQuestionResponses,
} from "store/responses/responsesSlice";
import { getSectionPages } from "store/questions/questionsSlice";
import { changeMode } from "utils/mode.utils";
import Toolbar from "components/generic/subcomponents/Toolbar";

const LanguageKid = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const colorTheme = useSelector(getColorTheme);
	const device = useSelector(getDevice);
	const isLoading = useSelector(getIsLoading);
	const sectionPages = useSelector(getSectionPages);

	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const [background, setBackground] = useState<React.ReactElement | null>(null);

	const { color100 } = colorTheme;
	const translatedPage = currentPage.page.translations as QuestionDropdownLanguageInterface;
	const questionLabel = translateQuestionLabel(
		translatedPage.kid_label,
		translatedPage.adult_label,
		mode,
	);

	// translate and load all the pages
	const loadAppBasedOnLanguage = async (language: string): Promise<void> => {
		dispatch(setIsLoading(true));
		await dispatch(loadQuestionData(language));
		loadPhrases();
		await dispatch(getNarrationPayload({ mode, language }));
		loadPages();
		changeMode(mode, language);
		loadSectionPages();
		dispatch(skipPage(1));
		dispatch(clearQuestionResponses());
		dispatch(clearHbscResponses());
		dispatch(clearGshsResponses());
		dispatch(clearExtroResponses());
		dispatch(clearFeedbackResponses());
		dispatch(setIsLoading(false));
	};

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
		setDropdownOpen(false);
	}, [currentPageNumber]);

	// set selected value
	useEffect(() => {
		setSelectedValue(language);
	}, [currentPageNumber]);

	// set language default and add to response
	useEffect(() => {
		addResponse(language);
	}, []);

	const changeHandler = (value: string | null): void => {
		if (value !== "" && value !== null && value !== undefined) {
			loadAppBasedOnLanguage(value)
				.then(() => {
					addResponse(value);
					setSelectedValue(value);
					dispatch(setLanguage(value));
				})
				.catch((error) => {
					addResponse("en-CA");
					setSelectedValue("en-CA");
					dispatch(setLanguage("en-CA"));
					console.error(error);
				});
		} else {
			setSelectedValue(null);
		}
	};

	if (isLoading) {
		return <LoadingScreenKid key={currentPageNumber} />;
	}
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
