import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import QuestionSelectLanguageAdult from "components/adults/QuestionSelectLanguageAdult";
import { ResponseContext } from "store/responses";
import { QuestionContext } from "store/questions";
import { translateButton, translatePhrase, translateSectionHeading } from "utils/translate";
import ButtonLabel from "constants/button_label";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import BGLinearGradient from "components/BGLinearGradient";
import { translate, translateQuestionLabel } from "utils/page";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import PhraseLabel from "constants/phrase_label";
import ImageBackdrop from "components/ImageBackdrop";
import { GeneralStyle } from "styles/general";
import { getImageBackground } from "utils/background";
import Toolbar from "components/adults/Toolbar";

export default function GenericLanguage(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const questionCtx = useContext(QuestionContext);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const { mode, language, currentPage, currentPageNumber, device } = settingCtx.settingState;
	const translatedPage = translate(currentPage.page.translations, language);
	const questionLabel = translateQuestionLabel(
		translatedPage?.kid_label,
		translatedPage?.adult_label,
		mode,
	);

	const {
		backButton,
		completeButton,
		continueButton,
		goButton,
		nextButton,
		startedButton,
		agreementPhrase,
		donePhrase,
		dontKnowPhrase,
		introductionPhrase,
		tryAgainPhrase,
		sectionPages,
	} = questionCtx.questionState;

	// translate phrases and buttons
	useEffect(() => {
		settingCtx.translateButtons({
			back: translateButton(backButton, language) ?? ButtonLabel.Back,
			complete: translateButton(completeButton, language) ?? ButtonLabel.Complete,
			continue: translateButton(continueButton, language) ?? ButtonLabel.Continue,
			go: translateButton(goButton, language) ?? ButtonLabel.Go,
			next: translateButton(nextButton, language) ?? ButtonLabel.Next,
			started: translateButton(startedButton, language) ?? ButtonLabel.Started,
		});
		// translate "Introduction"
		// translate "Feedback"
		settingCtx.translatePhrases({
			agreement: translatePhrase(agreementPhrase, language) ?? PhraseLabel.Agreement,
			done: translatePhrase(donePhrase, language) ?? PhraseLabel.Done,
			dontKnow: translatePhrase(dontKnowPhrase, language) ?? PhraseLabel.DontKnow,
			introduction: translatePhrase(introductionPhrase, language) ?? PhraseLabel.Introduction,
			tryAgain: translatePhrase(tryAgainPhrase, language) ?? PhraseLabel.TryAgain,
		});
		// translate the section headings
		const translatedSectionTitles = translateSectionHeading(sectionPages, language);
		console.log("translatedSectionTitles: ", translatedSectionTitles);
		// will make "Introduction" and "Feedback" translated in the future
		settingCtx.setSectionTitles(["Introduction", ...translatedSectionTitles, "Feedback"]);
	}, [language]);

	// set selected value
	useEffect(() => {
		setSelectedValue(language);
	}, [currentPageNumber]);

	// set language default
	useEffect(() => {
		const response = responseCtx.responses;
		if (Object.keys(response).length === 0) {
			responseCtx.addResponse({
				label: currentPage.page.name,
				answer: language,
				pageNumber: currentPage.pageNumber,
				mode,
				section: currentPage.section,
				sectionNumber: currentPage.sectionNumber,
				sectionPageNumber: currentPage.sectionPageNumber,
			});
		}
	}, []);

	function changeHandler(value: string | null): void {
		if (value !== "" && value !== null && value !== undefined) {
			settingCtx.setLanguage(value);
			responseCtx.addResponse({
				label: currentPage.page.name,
				answer: value,
				pageNumber: currentPage.pageNumber,
				mode,
				section: currentPage.section,
				sectionNumber: currentPage.sectionNumber,
				sectionPageNumber: currentPage.sectionPageNumber,
			});
			setSelectedValue(value);
		} else {
			setSelectedValue(null);
		}
	}

	console.log("type of image: ", typeof translatedPage?.images?.adult?.phone);

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<ImageBackdrop
				source={getImageBackground(translatedPage?.images, mode, device.isTablet)}
				key={currentPageNumber}
			/>
			<Main>
				<Toolbar />
				<CenterMain>
					<QuestionContainer>
						<QuestionLabel textStyle={GeneralStyle.adult.questionLabel}>
							{questionLabel}
						</QuestionLabel>
						<QuestionSelectLanguageAdult
							onChange={changeHandler}
							selectedValue={selectedValue}
						/>
					</QuestionContainer>
				</CenterMain>
				<Navigation>
					{selectedValue !== null && <BackAndNextNav onNext={() => settingCtx.nextPage()} />}
				</Navigation>
			</Main>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
