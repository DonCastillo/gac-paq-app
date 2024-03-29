import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SettingContext } from "store/settings";
import { translate, translateQuestionLabel } from "utils/page";
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
import { QuestionContext } from "store/questions";
import { GeneralStyle } from "styles/general";
import { getImageBackground } from "utils/background";
import QuestionTitle from "components/generic/QuestionTitle";

export default function GenericSingleQuestion(): React.ReactElement {
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const questionCtx = useContext(QuestionContext);

	const { mode, language, currentPage, currentPageNumber, device } = settingCtx.settingState;
	const translatedPage = translate(currentPage.page.translations, language);
	const questionLabel = translateQuestionLabel(
		translatedPage?.kid_label,
		translatedPage?.adult_label,
		mode,
	);
	const questionType = translatedPage !== null ? getQuestionType(translatedPage) : null;
	let questionComponent = <></>;

	// set selected value
	useEffect(() => {
		const response = responseCtx.responses;
		if (Object.keys(response).length > 0) {
			setSelectedValue(
				getResponse(
					mode,
					currentPage.section,
					currentPage.sectionNumber,
					currentPage.sectionPageNumber,
					response,
				),
			);
		}
	}, [currentPageNumber]);

	// save response
	function changeHandler(value: string | null): void {
		if (value !== "" && value !== null && value !== undefined) {
			responseCtx.addResponse({
				label: currentPage.page.name,
				answer: value,
				pageNumber: currentPage.pageNumber,
				mode,
				section: currentPage.section,
				sectionNumber: currentPage.sectionNumber,
				sectionPageNumber: currentPage.sectionPageNumber,
			});
			setSelectedValue(value);
		} else {
			setSelectedValue(null);
		}

		// set mode
		if (currentPage.page.name === "Who's taking this questionnaire?") {
			if (value === "child") {
				settingCtx.setMode(Mode.Kid);
				settingCtx.addExtroFeedbackPages(
					[...questionCtx.questionState.kidExtroPages],
					[...questionCtx.questionState.feedbackExtroPages],
				);
			} else {
				settingCtx.setMode(Mode.Adult);
				settingCtx.addExtroFeedbackPages(
					[...questionCtx.questionState.adultExtroPages],
					[...questionCtx.questionState.feedbackExtroPages],
				);
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
				source={getImageBackground(translatedPage?.images, mode, device.isTablet)}
				key={currentPageNumber}
			/>
			<Main>
				<Toolbar />
				<CenterMain>
					<QuestionContainer>
						<QuestionTitle>{translatedPage?.heading}</QuestionTitle>
						<QuestionLabel textStyle={GeneralStyle.adult.questionLabel}>
							{questionLabel}
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
	},
});
