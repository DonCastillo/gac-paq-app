import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { SettingContext } from "store/settings";
import Main from "components/Main";
import Navigation from "components/Navigation";
import TopMain from "components/orientation/TopMain";
import QuestionLabel from "components/kid/QuestionLabel";
import QuestionSelectLanguage from "components/kid/QuestionSelectLanguage";
import { ResponseContext } from "store/responses";
import { getIntroductoryBackground } from "utils/background";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { translateButton, translatePhrase } from "utils/translate";
import { QuestionContext } from "store/questions";
import ButtonLabel from "constants/button_label";
import { translate, translateQuestionLabel } from "utils/page";
import PhraseLabel from "constants/phrase_label";
import { GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive";
import Toolbar from "components/kid/subcomponents/Toolbar";
import ProgressBarKid from "components/kid/subcomponents/ProgressBarKid";
import QuestionSubLabel from "components/generic/QuestionSubLabel";

export default function LanguageKid(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const questionCtx = useContext(QuestionContext);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const { mode, language, currentPage, currentPageNumber, colorTheme, device } =
		settingCtx.settingState;
	const { color100 } = colorTheme;
	const translatedPage = translate(currentPage.page.translations, language);
	const questionLabel = translateQuestionLabel(
		translatedPage?.kid_label,
		translatedPage?.adult_label,
		mode,
	);
	const questionSubLabel = translateQuestionLabel(
		translatedPage?.kid_sublabel,
		translatedPage?.adult_sublabel,
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
	} = questionCtx.questionState;

	const [background, setBackground] = useState<React.ReactElement | null>(null);

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
		setDropdownOpen(false);
	}, [currentPageNumber]);

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
		settingCtx.translatePhrases({
			agreement: translatePhrase(agreementPhrase, language) ?? PhraseLabel.Agreement,
			done: translatePhrase(donePhrase, language) ?? PhraseLabel.Done,
			dontKnow: translatePhrase(dontKnowPhrase, language) ?? PhraseLabel.DontKnow,
			introduction: translatePhrase(introductionPhrase, language) ?? PhraseLabel.Introduction,
			tryAgain: translatePhrase(tryAgainPhrase, language) ?? PhraseLabel.TryAgain,
		});
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

	return (
		<TouchableWithoutFeedback onPress={() => setDropdownOpen(false)}>
			<View style={styles.container}>
				{background !== null && background}
				<Main>
					<ProgressBarKid />
					<Toolbar />
					<TopMain>
						<View
							style={[
								GeneralStyle.kid.introQuestionContainer,
								{
									marginVertical: verticalScale(40, device.screenHeight),
									...styles.mainContainer,
								},
							]}
						>
							<QuestionLabel textStyle={{ ...GeneralStyle.kid.introQuestionLabel }}>
								{questionLabel}
							</QuestionLabel>
							<QuestionSubLabel>{questionSubLabel}</QuestionSubLabel>
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
					</TopMain>
					<Navigation>
						{selectedValue !== null && (
							<BackAndNextNav
								colorTheme={color100}
								onNext={() => settingCtx.nextPage()}
							/>
						)}
					</Navigation>
				</Main>
			</View>
		</TouchableWithoutFeedback>
	);
}

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
