import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import QuestionSelectLanguageAdult from "components/adults/QuestionSelectLanguageAdult";
import { translateQuestionLabel, translateSectionHeading } from "utils/translate.utils";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import BGLinearGradient from "components/BGLinearGradient";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import ImageBackdrop from "components/ImageBackdrop";
import { GeneralStyle } from "styles/general";
import { getImageBackground } from "utils/background.utils";
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
import { type QuestionDropdownLanguageInterface } from "interface/payload.type";
import { getNarrationPayload } from "store/settings/settingsThunk";
import LoadingScreenAdult from "base_pages/adult/LoadingScreenAdult";

const GenericLanguage = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const isLoading = useSelector(getIsLoading);
	const phrases = useSelector(getPhrases);
	const backgroundImage = getImageBackground();

	// state
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	// translations
	const translatedPage = currentPage.page.translations as QuestionDropdownLanguageInterface;

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
			<View style={styles.container}>
				<BGLinearGradient />
				{backgroundImage !== undefined && backgroundImage !== null && backgroundImage !== "" && (
					<ImageBackdrop
						source={backgroundImage}
						key={currentPageNumber}
					/>
				)}
				<Main>
					<ProgressBarAdult />
					<CenterMain>
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
					</CenterMain>
					<Navigation>
						{selectedValue !== null && <BackAndNextNav onNext={() => dispatch(nextPage())} />}
					</Navigation>
				</Main>
			</View>
		);
	} else {
		return <LoadingScreenAdult />;
	}
};

export default GenericLanguage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
