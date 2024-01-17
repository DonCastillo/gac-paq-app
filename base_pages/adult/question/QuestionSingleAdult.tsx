import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import { getQuestionType } from "utils/questions";
import QuestionType from "constants/question_type";
import { ResponseContext } from "store/responses";
import QuestionSlider from "components/adults/QuestionSlider";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/Toolbar";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import { optionText } from "utils/options";
import QuestionRadio from "components/adults/QuestionRadio";
import QuestionRadioImage from "components/adults/QuestionRadioImage";
import { getResponse } from "utils/response";
import { intToString, stringToInt } from "utils/translate";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import PhraseLabel from "constants/phrase_label";
import QuestionInput from "components/adults/QuestionInput";

export default function QuestionSingleAdult(): React.ReactElement {
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);

	const { language, currentPage, currentPageNumber } = settingCtx.settingState;
	const translatedPage = translate(currentPage.page.translations, language);
	const questionType = translatedPage !== null ? getQuestionType(translatedPage) : null;
	let questionComponent = <></>;

	// fetch response for this question
	useEffect(() => {
		const response = responseCtx.responses;
		if (Object.keys(response).length > 0) {
			setSelectedValue(getResponse(currentPageNumber, response));
		}
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 1) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					colorTheme="#FFF"
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme="#FFF"
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		}
	}, [currentPageNumber]);

	useEffect(() => {
		if (selectedValue !== null) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					colorTheme="#FFF"
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"prev"}
					colorTheme="#FFF"
					onPrev={() => settingCtx.prevPage()}
				/>,
			);
		}
	}, [selectedValue]);

	/**
	 * temporarily store the initial selection
	 */
	function changeHandler(value: string | null): void {
		responseCtx.addResponse({
			pageNumber: currentPage.pageNumber,
			label: currentPage.page.name,
			answer: value,
		});
		setSelectedValue(value);
	}

	if (questionType === QuestionType.QuestionRadio) {
		questionComponent = (
			<QuestionRadio
				key={currentPageNumber}
				selectedValue={selectedValue}
				options={optionText(translatedPage?.choices)}
				onSelect={(value: string) => {
					changeHandler(value);
				}}
			/>
		);
	} else if (questionType === QuestionType.QuestionRadioImage) {
		questionComponent = (
			<QuestionRadioImage
				key={currentPageNumber}
				selectedValue={selectedValue}
				options={translatedPage?.choices}
				onChange={changeHandler}
			/>
		);
	} else if (questionType === QuestionType.QuestionSlider) {
		questionComponent = (
			<QuestionSlider
				key={currentPageNumber}
				onChange={(value: number | null | PhraseLabel.DontKnow) => {
					if (typeof value === "number" && Number.isInteger(value)) {
						changeHandler(intToString(value));
					} else if (value === PhraseLabel.DontKnow) {
						changeHandler(value);
					} else {
						changeHandler(null);
					}
				}}
				selectedValue={
					selectedValue === PhraseLabel.DontKnow ? PhraseLabel.DontKnow : stringToInt(selectedValue)
				}
			/>
		);
	} else if (questionType === QuestionType.QuestionInput) {
		questionComponent = (
			<QuestionInput
				key={currentPageNumber}
				selectedValue={selectedValue}
				placeholder={translatedPage?.placeholder}
				onChange={changeHandler}
			/>
		);
	} else {
		questionComponent = <></>;
	}

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<Main>
				<Toolbar />
				<CenterMain>
					<QuestionContainer>
						<QuestionLabel
							textStyle={{
								fontSize: 25,
								fontWeight: "bold",
							}}
						>
							{translatedPage?.label}
						</QuestionLabel>
						{questionComponent}
					</QuestionContainer>
				</CenterMain>
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
	},
});
