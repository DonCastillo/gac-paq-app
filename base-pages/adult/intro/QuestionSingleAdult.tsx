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
import SingleNav from "components/adults/navigation/SingleNav";
import QuestionRadio from "components/adults/QuestionRadio";
import { optionRegion, optionText } from "utils/options";
import QuestionText from "components/adults/QuestionText";
import Toolbar from "components/adults/Toolbar";
import { QuestionContext } from "store/questions";
import { getResponse } from "utils/response";

export default function QuestionSingleAdult(): React.ReactElement {
	const [responses, setResponses] = useState({});
	const [proceed, setProceed] = useState(false);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const questionCtx = useContext(QuestionContext);

	const { language, currentPage, buttons } = settingCtx.settingState;
	const regionsOptions = questionCtx.questionState.regionOption;
	const translatedPage = translate(currentPage.page.translations, language);
	const questionType = translatedPage !== null ? getQuestionType(translatedPage) : null;
	let questionComponent = <></>;

	useEffect(() => {
		const theresResponse = Object.keys(responses).length > 0;
		setProceed(theresResponse);
	}, [responses]);

	useEffect(() => {
		// console.log("getting response....")
		const response = responseCtx.responses;
		const currentPageNumber = settingCtx.settingState.currentPageNumber;
		if (Object.keys(response).length > 0) {
			setSelectedValue(getResponse(currentPageNumber, response));
			// console.log("++++++++")
			console.log("saved question: ", currentPage.page.name);
			console.log("saved response: ", getResponse(currentPageNumber, response));
			// console.log("++++++++")
		}
	}, [settingCtx.settingState.currentPageNumber]);

	/**
	 * temporarily store the initial selection
	 */
	function changeHandler(value: string | null): void {
		responseCtx.addResponse({
			pageNumber: currentPage.pageNumber,
			label: currentPage.page.name,
			answer: value,
		});

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
	} else if (questionType === QuestionType.QuestionText) {
		questionComponent = (
			<QuestionText
				selectedValue={selectedValue}
				fields={translatedPage?.fields}
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
				<Navigation>
					<SingleNav
						label={buttons?.continue}
						onPress={() => settingCtx.nextPage()}
					/>
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
