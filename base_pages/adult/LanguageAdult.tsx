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
import LoadingScreenAdult from "./LoadingScreenAdult";
import AnimatedView from "components/AnimatedView";

const LanguageAdult = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const isLoading = useSelector(getIsLoading);
	const phrases = useSelector(getPhrases);

	// state
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	// translations
	const translatedPage = translatePage(
		currentPage.page.translations,
		language,
	) as QuestionDropdownLanguageInterface;

	const questionLabel = translateQuestionLabel(
		translatedPage.kid_label,
		translatedPage.adult_label,
		mode,
	);

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

	// set language defaulta
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
			<View style={styles.container}>
				<BGLinearGradient />
				<Main>
					<ProgressBarAdult />
					<Toolbar />
					<CenterMain>
						<AnimatedView style={{ flex: 0 }}>
							<QuestionContainer>
								<QuestionTitle>{translatedPage.heading}</QuestionTitle>
								<View style={{ marginBottom: 13 }}>
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
	} else {
		return <LoadingScreenAdult />;
	}
};

export default LanguageAdult;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
