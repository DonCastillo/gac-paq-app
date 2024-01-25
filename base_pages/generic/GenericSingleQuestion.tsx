import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import { getQuestionType } from "utils/questions";
import QuestionType from "constants/question_type";
import { ResponseContext } from "store/responses";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/Toolbar";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import { optionText } from "utils/options";
import QuestionRadio from "components/adults/QuestionRadio";
import { getResponse } from "utils/response";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import QuestionInput from "components/adults/QuestionInput";
import Mode from "constants/mode";
import ImageBackdrop from "components/ImageBackdrop";

export default function GenericSingleQuestion(): React.ReactElement {
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);

	const { language, currentPage, currentPageNumber } = settingCtx.settingState;
	const translatedPage = translate(currentPage.page.translations, language);
	const questionType = translatedPage !== null ? getQuestionType(translatedPage) : null;
	let questionComponent = <></>;

	// set selected value
	useEffect(() => {
		const response = responseCtx.responses;
		if (Object.keys(response).length > 0) {
			setSelectedValue(getResponse(currentPageNumber, response));
		}
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
				key={currentPageNumber}
				selectedValue={selectedValue}
				options={optionText(translatedPage?.choices)}
				onSelect={(value: string) => {
					changeHandler(value);
				}}
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
			<ImageBackdrop
				source={translatedPage?.images?.adult?.phone}
				key={currentPageNumber}
			/>
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
						{questionType === QuestionType.QuestionInput &&
							Object.prototype.hasOwnProperty.call(translatedPage, "sublabel") === true &&
							translatedPage?.sublabel !== undefined &&
							translatedPage?.sublabel !== null &&
							translatedPage?.sublabel !== "" && (
								<Text style={styles.sublabel}>{translatedPage?.sublabel}</Text>
							)}
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
	sublabel: {
		color: "black",
		fontSize: 17,
		marginBottom: 10,
		backgroundColor: "pink",
	},
});
