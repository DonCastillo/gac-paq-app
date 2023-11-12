import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "../../../store/settings";
import { translate } from "../../../utils/page";
import Main from "../../../components/Main";
import Navigation from "../../../components/Navigation";
import TopMain from "../../../components/orientation/TopMain";
import QuestionLabel from "../../../components/kid/QuestionLabel";
import { getQuestionType } from "../../../utils/questions";
import QuestionType from "../../../constants/question_type";
import QuestionSelect from "../../../components/kid/QuestionSelect";
import { ResponseContext } from "../../../store/responses";
import QuestionText from "../../../components/kid/QuestionText";
import BackAndNextNav from "../../../components/kid/navigation/BackAndNextNav";
import QuestionSelectRegion from "../../../components/kid/QuestionSelectRegion";
import { getResponse } from "../../../utils/response";
import { getIntroductoryBackground } from "../../../utils/background";

export default function QuestionSingleKid(): React.ReactElement {
	const [responses, setResponses] = useState<Record<string, string | null>>({});
	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [proceed, setProceed] = useState<boolean>(false);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);

	const { language, currentPage, currentPageNumber } = settingCtx.settingState;
	const translatedPage = translate(currentPage.page.translations, language);
	const questionType = translatedPage !== null ? getQuestionType(translatedPage) : null;
	let questionComponent = <></>;

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 0) {
			setButtonComponent(
				<BackAndNextNav
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(<BackAndNextNav onNext={() => settingCtx.nextPage()} />);
		}
	}, [currentPageNumber]);

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
			<QuestionSelect
				options={translatedPage?.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === QuestionType.QuestionRegion) {
		questionComponent = (
			<QuestionSelectRegion
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === QuestionType.QuestionText) {
		console.log("question text");
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
					<View style={styles.innerContainer}>
						<QuestionLabel
							textStyle={{
								fontSize: 33,
							}}
						>
							{translatedPage?.heading}
						</QuestionLabel>
						{questionComponent}
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
	},
	innerContainer: {
		marginTop: 50,
	},
});
