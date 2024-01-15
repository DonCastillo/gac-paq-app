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
import BGLinearGradient from "components/BGLinearGradient";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import QuestionRadio from "components/adults/QuestionRadio";
import { optionRegion, optionText } from "utils/options";
import QuestionText from "components/adults/QuestionText";
import Toolbar from "components/adults/Toolbar";
import { QuestionContext } from "store/questions";
import { getResponse } from "utils/response";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import Mode from "constants/mode";
import QuestionInput from "components/adults/QuestionInput";

export default function QuestionSingleAdult(): React.ReactElement {
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const questionCtx = useContext(QuestionContext);

	const { language, currentPage, currentPageNumber } = settingCtx.settingState;
	const regionsOptions = questionCtx.questionState.regionOption;
	const translatedPage = translate(currentPage.page.translations, language);
	const questionType = translatedPage !== null ? getQuestionType(translatedPage) : null;
	let questionComponent = <></>;

	console.log("Question Single Adult ....")

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

	useEffect(() => {
		const response = responseCtx.responses;
		if (Object.keys(response).length > 0) {
			setSelectedValue(getResponse(currentPageNumber, response));
		}
	}, [currentPageNumber]);

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
		if (currentPage.page.name === "Who's taking this questionnaire?") {
			if (value === "child") {
				settingCtx.setMode(Mode.Kid);
			} else {
				settingCtx.setMode(Mode.Adult);
			}
		}
	}

	if (questionType === QuestionType.QuestionDropdown) {
		questionComponent = (
			<QuestionRadio
				selectedValue={selectedValue}
				options={optionText(translatedPage?.choices)}
				onSelect={(value: string) => {
					changeHandler(value);
				}}
			/>
		);
	} else if (questionType === QuestionType.QuestionRegion) {
		questionComponent = (
			<QuestionRadio
				selectedValue={selectedValue}
				options={optionRegion(regionsOptions)}
				onSelect={(value: string) => {
					changeHandler(value);
				}}
			/>
		);
	} else if (questionType === QuestionType.QuestionInput) {
		questionComponent = (
			<QuestionInput
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
