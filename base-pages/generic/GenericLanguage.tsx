import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "../../store/settings";
import Main from "../../components/Main";
import Navigation from "../../components/Navigation";
import QuestionLabel from "../../components/kid/QuestionLabel";
import QuestionSelectLanguageAdult from "../../components/adults/QuestionSelectLanguageAdult";
import { ResponseContext } from "../../store/responses";
import { QuestionContext } from "../../store/questions";
import { translateButton } from "../../utils/translate";
import ButtonLabel from "../../constants/button_label";
import CenterMain from "../../components/orientation/CenterMain";
import QuestionContainer from "../../components/adults/QuestionContainer";
import BGLinearGradient from "../../components/BGLinearGradient";
import { translate } from "../../utils/page";
import BackAndNextNav from "../../components/generic/navigation/BackAndNextNav";

export default function GenericLanguage(): React.ReactElement {
	console.log("GenericLanguage ...");
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const questionCtx = useContext(QuestionContext);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	const { language, currentPage, currentPageNumber } = settingCtx.settingState;
	const translatedPage = translate(currentPage.page.translations, language);

	const { backButton, completeButton, continueButton, goButton, nextButton, startedButton } =
		questionCtx.questionState;

	console.log("translatedPage: ", translatedPage);

	// translate phrases
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

	// set selected value
	useEffect(() => {
		setSelectedValue(language);
	}, [currentPageNumber]);

	function changeHandler(value: string | null): void {
		console.log("Changing the language...");
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
			<BGLinearGradient />
			<Main>
				<CenterMain>
					<QuestionContainer>
						<QuestionLabel
							textStyle={{
								fontSize: 25,
								fontWeight: "bold",
							}}
						>
							{translatedPage?.heading.toLowerCase()}
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