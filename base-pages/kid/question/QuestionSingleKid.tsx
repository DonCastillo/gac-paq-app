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
import QuestionTitle from "../../../components/kid/QuestionTitle";
import QuestionRadio from "../../../components/kid/QuestionRadio";
import QuestionSlider from "../../../components/kid/QuestionSlider";
import QuestionRadioImage from "../../../components/kid/QuestionRadioImage";
import BackAndNextNav from "../../../components/kid/navigation/BackAndNextNav";

export default function QuestionSingleKid(): React.ReactElement {
	const [responses, setResponses] = useState({});
	const [proceed, setProceed] = useState(false);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);

	const { language, currentPage } = settingCtx.settingState;
	const translatedPage = translate(currentPage.page.translations, language);
	const questionType = translatedPage !== null ? getQuestionType(translatedPage) : null;
	let questionComponent = <></>;

	useEffect(() => {
		console.log("use effect here... heres the responses: ", responses);
		const theresResponse = Object.keys(responses).length > 0;
		setProceed(theresResponse);
	}, [responses]);

	/**
	 * finalizes response
	 */
	function proceedHandler(): void {
		for (const [key, value] of Object.entries(responses)) {
			responseCtx.addResponse({
				pageNumber: currentPage.pageNumber,
				label: key,
				answer: value,
			});
		}
		setResponses({});
		settingCtx.nextPage();
	}

	/**
	 * temporarily store the initial selection
	 */
	function changeHandler(value: string | null): void {
		setResponses((currResponse) => {
			return {
				...currResponse,
				[currentPage.page?.name]: value,
			};
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

	if (questionType === QuestionType.QuestionCheckbox) {
		questionComponent = <></>;
	} else if (questionType === QuestionType.QuestionDropdown) {
		questionComponent = (
			<QuestionSelect
				options={translatedPage?.choices}
				onChange={changeHandler}
			/>
		);
	} else if (questionType === QuestionType.QuestionRadio) {
		questionComponent = (
			<QuestionRadio
				options={translatedPage?.choices}
				onChange={changeHandler}
			/>
		);
	} else if (questionType === QuestionType.QuestionRadioImage) {
		questionComponent = (
			<QuestionRadioImage
				options={translatedPage?.choices}
				onChange={changeHandler}
			/>
		);
	} else if (questionType === QuestionType.QuestionSlider) {
		questionComponent = <QuestionSlider onChange={changeHandler} />;
	} else if (questionType === QuestionType.QuestionText) {
		questionComponent = (
			<QuestionText
				fields={translatedPage?.fields}
				onChange={changeHandler}
			/>
		);
	} else {
		questionComponent = <></>;
	}

	return (
		<View style={styles.container}>
			{/* <QuestionProgress></QuestionProgress> */}
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
				<Navigation>
					<BackAndNextNav
						onPrev={() => settingCtx.prevPage()}
						onNext={proceedHandler}
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
	questionContainer: {
		marginTop: 25,
	},
});
