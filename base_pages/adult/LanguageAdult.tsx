import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import QuestionSelectLanguageAdult from "components/adults/QuestionSelectLanguageAdult";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import BGLinearGradient from "components/BGLinearGradient";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import Toolbar from "components/adults/subcomponents/Toolbar";
import { GeneralStyle } from "styles/general";
import QuestionTitle from "components/generic/QuestionTitle";
import ProgressBarAdult from "components/adults/subcomponents/ProgressBarAdult";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
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
import LoadingScreenAdult from "./LoadingScreenAdult";
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

const LanguageAdult = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const isLoading = useSelector(getIsLoading);
	const sectionPages = useSelector(getSectionPages);

	// state
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	// translations
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
		return <LoadingScreenAdult key={currentPageNumber} />;
	}
	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<AnimatedView style={{ flex: 0 }}>
						<QuestionContainer>
							<View style={{ marginBottom: 13 }}>
								<QuestionTitle>{translatedPage.heading}</QuestionTitle>
								<QuestionLabel
									textStyle={GeneralStyle.adult.questionLabel}
									customStyle={{ marginBottom: 7 }}
								>
									{questionLabel}
								</QuestionLabel>
							</View>
							<QuestionSelectLanguageAdult
								onChange={changeHandler}
								selectedValue={selectedValue}
							/>
						</QuestionContainer>
					</AnimatedView>
				</CenterMain>
				<Navigation>
					{selectedValue !== null && (
						<BackAndNextNav
							colorTheme={"#FFF"}
							onNext={() => dispatch(nextPage())}
						/>
					)}
				</Navigation>
			</Main>
		</View>
	);
};

export default LanguageAdult;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
