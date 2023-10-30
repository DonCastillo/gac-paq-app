import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
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
import { QuestionContext } from "../../../store/questions";
import QuestionSelectRegion from "../../../components/kid/QuestionSelectRegion";
import { getResponse } from "../../../utils/response";

export default function QuestionSingleKid(): React.ReactElement {
	const [responses, setResponses] = useState<Record<string, string | null>>({});
	const [proceed, setProceed] = useState<boolean>(false);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);

	const { language, currentPage } = settingCtx.settingState;
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
		if(Object.keys(response).length > 0) {
			setSelectedValue(getResponse(currentPageNumber, response));
			// console.log("++++++++")
			console.log("saved question: ", currentPage.page.name)
			console.log("saved response: ", getResponse(currentPageNumber, response))
			// console.log("++++++++")

		}
	}, [settingCtx.settingState.currentPageNumber]);

	/**
	 * finalizes response
	 */
	// function proceedHandler(): void {
		// if(Object.keys(responses).length > 0) {
		// 	for (const [key, value] of Object.entries(responses)) {
		// 		responseCtx.addResponse({
		// 			pageNumber: currentPage.pageNumber,
		// 			label: key,
		// 			answer: value,
		// 		});
		// 	}
		// }
		// setResponses({});
		// setSelectedValue(null);
		// settingCtx.nextPage();
	// }

	/**
	 * temporarily store the initial selection
	 */
	function changeHandler(value: string | null): void {
		// console.log("change handled...")
		responseCtx.addResponse({
			pageNumber: currentPage.pageNumber,
			label: currentPage.page.name,
			answer: value,
		});
		// setResponses((currResponse) => {
		// 	return {
		// 		...currResponse,
		// 		[currentPage.page?.name]: value,
		// 	};
		// });

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
		// console.log("question dropdown");
		questionComponent = (
			<QuestionSelect
				options={translatedPage?.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === QuestionType.QuestionRegion) {
		// console.log("question region")
		questionComponent = (
			<QuestionSelectRegion
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === QuestionType.QuestionText) {
		console.log("question text")
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
				<Navigation>
					<BackAndNextNav
						onPrev={() => settingCtx.prevPage()}
						onNext={() => settingCtx.nextPage()}
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
	innerContainer: {
		marginTop: 50,
	},
});
