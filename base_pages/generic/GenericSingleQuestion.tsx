import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import Question from "constants/question.enum";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/subcomponents/Toolbar";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import QuestionRadio from "components/adults/QuestionRadio";
import { addResponse, getResponse } from "utils/response.utils";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import QuestionInput from "components/adults/QuestionInput";
import ImageBackdrop from "components/ImageBackdrop";
import { GeneralStyle } from "styles/general";
import { getImageBackground } from "utils/background.utils";
import QuestionTitle from "components/generic/QuestionTitle";
import ProgressBarAdult from "components/adults/subcomponents/ProgressBarAdult";
import QuestionSubLabel from "components/generic/QuestionSubLabel";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getLanguage,
	getMode,
	nextPage,
	prevPage,
} from "store/settings/settingsSlice";
import { changeMode } from "utils/mode.utils";
import { translatePage, translateQuestionLabel } from "utils/translate.utils";
import type { TranslatedIntroQuestionType } from "interface/union.type";
import type { QuestionDropdownInterface, QuestionInputInterface } from "interface/payload.type";
import { getQuestionType } from "utils/type.utils";

const GenericSingleQuestion = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);
	const device = useSelector(getDevice);

	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	const { isKeyboardOpen } = device;

	const translatedPage = translatePage(
		currentPage.page.translations,
		language,
	) as TranslatedIntroQuestionType;

	const questionLabel = translateQuestionLabel(
		translatedPage.kid_label,
		translatedPage.adult_label,
		mode,
	);

	const questionSubLabel = translateQuestionLabel(
		translatedPage.kid_sublabel ?? "",
		translatedPage.adult_sublabel ?? "",
		mode,
	);

	const questionType = getQuestionType(translatedPage.type);

	let questionComponent = <></>;

	// set selected value
	useEffect(() => {
		setSelectedValue(getResponse());
	}, [currentPageNumber]);

	// save response
	const changeHandler = (value: string | null): void => {
		if (value !== "" && value !== null && value !== undefined) {
			addResponse(value);
			setSelectedValue(value);
		} else {
			setSelectedValue(null);
		}

		// set mode
		if (currentPage.page.ident === "mode") {
			changeMode(value);
		}
	};

	if (questionType === Question.QuestionDropdown) {
		const questionCasted = translatedPage as QuestionDropdownInterface;
		questionComponent = (
			<QuestionRadio
				key={currentPageNumber}
				selectedValue={selectedValue}
				options={questionCasted.choices}
				onSelect={(value: string) => {
					changeHandler(value);
				}}
			/>
		);
	} else if (questionType === Question.QuestionInput) {
		const questionCasted = translatedPage as QuestionInputInterface;
		questionComponent = (
			<QuestionInput
				key={currentPageNumber}
				selectedValue={selectedValue}
				placeholder={questionCasted.placeholder}
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
				{!isKeyboardOpen && <ProgressBarAdult />}
				{!isKeyboardOpen && <Toolbar />}
				<CenterMain>
					<QuestionContainer>
						{!isKeyboardOpen && <QuestionTitle>{translatedPage.heading}</QuestionTitle>}
						<View style={{ marginBottom: 13 }}>
							<QuestionLabel
								textStyle={GeneralStyle.adult.questionLabel}
								customStyle={{ marginBottom: 7 }}
							>
								{questionLabel}
							</QuestionLabel>
							{!isKeyboardOpen && (
								<QuestionSubLabel customStyle={{ marginBottom: 7 }}>
									{questionSubLabel}
								</QuestionSubLabel>
							)}
						</View>

						{questionComponent}
					</QuestionContainer>
				</CenterMain>
				<Navigation>
					{selectedValue !== null ? (
						<BackAndNextNav
							key={"WithValue"}
							onPrev={() => dispatch(prevPage())}
							onNext={() => dispatch(nextPage())}
						/>
					) : (
						<BackAndNextNav
							key={"WithoutValue"}
							onPrev={() => dispatch(prevPage())}
						/>
					)}
				</Navigation>
			</Main>
		</View>
	);
};

export default GenericSingleQuestion;

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
