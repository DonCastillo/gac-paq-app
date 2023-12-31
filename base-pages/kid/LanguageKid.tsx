import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import Main from "components/Main";
import Navigation from "components/Navigation";
import TopMain from "components/orientation/TopMain";
import QuestionLabel from "components/kid/QuestionLabel";
import QuestionSelectLanguage from "components/kid/QuestionSelectLanguage";
import { ResponseContext } from "store/responses";
import { getIntroductoryBackground } from "../../utils/background";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { translateButton } from "../../utils/translate";
import { QuestionContext } from "store/questions";
import ButtonLabel from "constants/button_label";

export default function LanguageKid(): React.ReactElement {
	const [languageSelected, setLanguageSelected] = useState<boolean>(false);
	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	const LABEL = "What is your preferred language?";
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const questionCtx = useContext(QuestionContext);
	const { language, currentPageNumber } = settingCtx.settingState;
	const { backButton, completeButton, continueButton, goButton, nextButton, startedButton } =
		questionCtx.questionState;

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 0) {
			setButtonComponent(
				<BackAndNextNav
					onPrev={prevPage}
					onNext={nextPage}
				/>,
			);
		} else {
			setButtonComponent(<BackAndNextNav onNext={nextPage} />);
		}
	}, [currentPageNumber]);

	// set button translations
	useEffect(() => {
		settingCtx.translateButtons({
			back: translateButton(backButton, language) ?? ButtonLabel.Back,
			complete: translateButton(completeButton, language) ?? ButtonLabel.Complete,
			continue: translateButton(continueButton, language) ?? ButtonLabel.Continue,
			go: translateButton(goButton, language) ?? ButtonLabel.Go,
			next: translateButton(nextButton, language) ?? ButtonLabel.Next,
			started: translateButton(startedButton, language) ?? ButtonLabel.Started,
		});
	}, [language]);

	// save selected language
	function changeHandler(value: string): void {
		if (value !== "") {
			settingCtx.setLanguage(value);
			responseCtx.addResponse({
				pageNumber: 0,
				label: LABEL,
				answer: value,
			});
			setLanguageSelected(true);
		} else {
			setLanguageSelected(false);
		}
	}

	function nextPage(): void {
		settingCtx.nextPage();
	}

	function prevPage(): void {
		settingCtx.prevPage();
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
							{LABEL}
						</QuestionLabel>
						<QuestionSelectLanguage
							onChange={changeHandler}
							selectedValue={language}
						/>
					</View>
				</TopMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
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
