import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import Main from "../../components/Main";
import Navigation from "../../components/Navigation";
import QuestionLabel from "../../components/kid/QuestionLabel";
import { getQuestionType } from "../../utils/questions";
import QuestionType from "../../constants/question_type";
import { ResponseContext } from "../../store/responses";
import QuestionSlider from "../../components/adults/QuestionSlider";
import BGLinearGradient from "../../components/BGLinearGradient";
import Toolbar from "../../components/adults/Toolbar";
import CenterMain from "../../components/orientation/CenterMain";
import SingleNav from "../../components/adults/navigation/SingleNav";
import QuestionContainer from "../../components/adults/QuestionContainer";
import { optionRegion, optionText } from "../../utils/options";
import QuestionRadio from "../../components/adults/QuestionRadio";
import QuestionRadioImage from "../../components/adults/QuestionRadioImage";
import { getResponse } from "../../utils/response";
import { intToString, stringToInt } from "../../utils/translate";
import QuestionText from "../../components/adults/QuestionText";
import BackAndNextNav from "../../components/generic/navigation/BackAndNextNav";
import { QuestionContext } from "../../store/questions";

export default function GenericSingleQuestion(): React.ReactElement {
	console.log("Generic Single Question");
	const [responses, setResponses] = useState<Record<string, string | null>>({});
	const [proceed, setProceed] = useState<boolean>(false);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const questionCtx = useContext(QuestionContext);

	const { language, currentPage, currentPageNumber } = settingCtx.settingState;
	const translatedPage = translate(currentPage.page.translations, language);
	const questionType = translatedPage !== null ? getQuestionType(translatedPage) : null;
	console.log("questionType: ", questionType);
	let questionComponent = <></>;

	console.log("translatedPage: ", translatedPage);

	useEffect(() => {
		console.log("use effect here... heres the responses: ", responses);
		const theresResponse = Object.keys(responses).length > 0;
		setProceed(theresResponse);
	}, [responses]);

	// set selected value
	useEffect(() => {
		const response = responseCtx.responses;
		if (Object.keys(response).length > 0) {
			setSelectedValue(getResponse(currentPageNumber, response));
		}
		console.log("selected value inside the generic single questions: ", selectedValue);
	}, [currentPageNumber]);

	// save response
	function changeHandler(value: string | null): void {
		if (value !== "" && value !== null && value !== undefined) {
			responseCtx.addResponse({
				pageNumber: currentPage.pageNumber,
				label: currentPage.page.name,
				answer: value,
			});
			setSelectedValue(value);
		} else {
			setSelectedValue(null);
		}

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
					{selectedValue !== null ? (
						<BackAndNextNav
							key={"WithValue"}
							onPrev={() => settingCtx.prevPage()}
							onNext={() => settingCtx.nextPage()}
						/>
					) : (
						<BackAndNextNav
							key={"WithoutValue"}
							onPrev={() => settingCtx.prevPage()}
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
	},
});
