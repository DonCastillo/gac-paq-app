import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import Main from "components/Main";
import Navigation from "components/Navigation";
import TopMain from "components/orientation/TopMain";
import QuestionLabel from "components/kid/QuestionLabel";
import { getQuestionType } from "utils/questions";
import QuestionType from "constants/question_type";
import QuestionSelect from "components/kid/QuestionSelect";
import { ResponseContext } from "store/responses";
import QuestionText from "components/kid/QuestionText";
import QuestionTitle from "components/kid/QuestionTitle";
import QuestionRadio from "components/kid/QuestionRadio";
import QuestionSlider from "components/kid/QuestionSlider";
import QuestionRadioImage from "components/kid/QuestionRadioImage";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { getResponse } from "utils/response";
import { intToString, stringToInt } from "utils/translate";
import { getQuestionBackground } from "utils/background";
import DeviceType from "constants/device_type";
import PhraseLabel from "constants/phrase_label";

export default function QuestionSingleKid(): React.ReactElement {
	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);

	const { language, currentPage, colorTheme, currentPageNumber } = settingCtx.settingState;
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

	// set background screen dynamically
	useEffect(() => {
		setBackground(
			getQuestionBackground(
				currentPage.sectionNumber,
				currentPage.sectionPageNumber,
				questionType,
				DeviceType.Mobile,
				colorTheme.color100,
			),
		);
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 1) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
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
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"prev"}
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

		// set mode
		// if(currentPage.page.name === "Who's taking this questionnaire?") {
		//     if (value === "child") {
		//         settingCtx.setMode(Mode.Kid);
		//     } else {
		//         settingCtx.setMode(Mode.Adult);
		//     }
		// }
	}

	if (questionType === QuestionType.QuestionDropdown) {
		questionComponent = (
			<QuestionSelect
				options={translatedPage?.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === QuestionType.QuestionRadio) {
		questionComponent = (
			<QuestionRadio
				options={translatedPage?.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === QuestionType.QuestionRadioImage) {
		questionComponent = (
			<QuestionRadioImage
				options={translatedPage?.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === QuestionType.QuestionSlider) {
		questionComponent = (
			<QuestionSlider
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
	} else if (questionType === QuestionType.QuestionText) {
		questionComponent = (
			<QuestionText
				fields={translatedPage?.fields}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else {
		questionComponent = <></>;
	}

	return (
		<View style={styles.container}>
			{background !== null && background}
			<Main>
				<TopMain>
					<View>
						<QuestionTitle>{translatedPage?.heading}</QuestionTitle>
						<QuestionLabel
							textStyle={{
								fontSize: 20,
							}}
							customStyle={{
								marginBottom: 10,
							}}
						>
							{translatedPage?.label}
						</QuestionLabel>
						<View style={styles.questionContainer}>{questionComponent}</View>
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
	questionContainer: {
		marginTop: 25,
	},
});
