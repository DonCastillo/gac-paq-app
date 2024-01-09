import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
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
import { translate } from "utils/page";
import PhraseLabel from "constants/phrase_label";

export default function LanguageKid(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const questionCtx = useContext(QuestionContext);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const { language, currentPage, currentPageNumber, colorTheme } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const translatedPage = translate(currentPage.page.translations, language);
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
				pageNumber: currentPage.pageNumber,
				label: currentPage.page.name,
				answer: language,
			});
		}
	}, []);

	function changeHandler(value: string | null): void {
		if (value !== "" && value !== null && value !== undefined) {
			settingCtx.setLanguage(value);
			responseCtx.addResponse({
				pageNumber: currentPage.pageNumber,
				label: currentPage.page.name,
				answer: value,
			});
			setSelectedValue(value);
		} else {
			setSelectedValue(null);
		}
	}

	return (
		<View style={styles.container}>
			{background !== null && background}
			<Main>
				<TopMain>
					<View>
						<QuestionLabel
							textStyle={{
								fontSize: 25,
							}}
						>
							{translatedPage?.heading.toLowerCase()}
						</QuestionLabel>
						<QuestionSelectLanguage
							onChange={changeHandler}
							selectedValue={language}
						/>
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
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
});
