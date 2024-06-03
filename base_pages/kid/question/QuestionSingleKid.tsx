import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import TopMain from "components/orientation/TopMain";
import QuestionLabel from "components/kid/QuestionLabel";
import Question from "constants/question.enum";
import QuestionTitle from "components/generic/QuestionTitle";
import QuestionRadio from "components/kid/QuestionRadio";
import QuestionSlider from "components/kid/QuestionSlider";
import QuestionRadioImage from "components/kid/QuestionRadioImage";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { addResponse, getResponse } from "utils/response.utils";
import {
	intToString,
	stringToInt,
	translatePage,
	translateQuestionLabel,
} from "utils/translate.utils";
import { getQuestionBackground } from "utils/background.utils";
import Device from "constants/device.enum";
import PhraseLabel from "constants/phrase_label.enum";
import QuestionInput from "components/kid/QuestionInput";
import { GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive.utils";
import Toolbar from "components/kid/subcomponents/Toolbar";
import QuestionSatisfactionImage from "components/kid/QuestionSatisfactionImage";
import QuestionTextarea from "components/kid/QuestionTextarea";
import QuestionCheckbox from "components/kid/QuestionCheckbox";
import ProgressBarKid from "components/kid/subcomponents/ProgressBarKid";
import QuestionSubLabel from "components/generic/QuestionSubLabel";
import { choiceMode, optionTextMode } from "utils/options.utils";
import { useDispatch, useSelector } from "react-redux";
import {
	getColorTheme,
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getLanguage,
	getMode,
	prevPage,
} from "store/settings/settingsSlice";
import { getQuestion17Label } from "utils/label.utils";
import { proceedPage } from "utils/navigation.utils";
import { getQuestionType } from "utils/type.utils";
import type { TranslatedQuestionQuestionType } from "interface/union.type";
import type {
	QuestionCheckboxInterface,
	QuestionInputInterface,
	QuestionRadioImageInterface,
	QuestionRadioInterface,
	QuestionSliderInterface,
	QuestionTextareaInterface,
} from "interface/payload.type";

const QuestionSingleKid = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const colorTheme = useSelector(getColorTheme);
	const mode = useSelector(getMode);
	const device = useSelector(getDevice);
	const { isKeyboardOpen } = device;
	const { color200 } = colorTheme;

	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	const translatedPage = translatePage(
		currentPage.page.translations,
		language,
	) as TranslatedQuestionQuestionType;

	let questionLabel = translateQuestionLabel(
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

	// change labels if in question 17
	if (
		[
			"transportation_7",
			"transportation_8",
			"transportation_9",
			"transportation_10",
			"transportation_11",
		].includes(currentPage.page.ident)
	) {
		questionLabel = getQuestion17Label();
	}

	// fetch response for this question
	useEffect(() => {
		setSelectedValue(getResponse());
	}, [currentPageNumber]);

	// set background screen dynamically
	useEffect(() => {
		setBackground(
			getQuestionBackground(
				currentPage.sectionNumber,
				currentPage.sectionPageNumber,
				questionType,
				Device.Mobile,
				colorTheme.color100,
			),
		);
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 1) {
			setButtonComponent(
				<BackAndNextNav
					key={"both" + selectedValue}
					colorTheme={color200}
					onPrev={() => dispatch(prevPage())}
					onNext={() => proceedPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next" + selectedValue}
					colorTheme={color200}
					onNext={() => proceedPage()}
				/>,
			);
		}
	}, [currentPageNumber]);

	useEffect(() => {
		if (
			(selectedValue !== null && selectedValue !== "") ||
			currentPage.page.ident === "app_use_comment"
		) {
			setButtonComponent(
				<BackAndNextNav
					key={"both" + selectedValue}
					colorTheme={color200}
					onPrev={() => dispatch(prevPage())}
					onNext={() => proceedPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"prev" + selectedValue}
					colorTheme={color200}
					onPrev={() => dispatch(prevPage())}
				/>,
			);
		}
	}, [selectedValue]);

	/**
	 * temporarily store the initial selection
	 */
	const changeHandler = (value: string | null): void => {
		addResponse(value);
		setSelectedValue(value);
	};

	if (questionType === Question.QuestionCheckbox) {
		const questionCasted = translatedPage as QuestionCheckboxInterface;
		questionComponent = (
			<QuestionCheckbox
				key={currentPageNumber}
				options={choiceMode(questionCasted.choices, mode)}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === Question.QuestionRadio) {
		const questionCasted = translatedPage as QuestionRadioInterface;
		questionComponent = (
			<QuestionRadio
				key={currentPageNumber}
				options={questionCasted.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === Question.QuestionRadioImage) {
		const questionCasted = translatedPage as QuestionRadioImageInterface;
		questionComponent = (
			<QuestionRadioImage
				key={currentPageNumber}
				options={questionCasted.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === Question.QuestionSatisfactionImage) {
		const questionCasted = translatedPage as QuestionRadioImageInterface;
		questionComponent = (
			<QuestionSatisfactionImage
				key={currentPageNumber}
				options={questionCasted.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === Question.QuestionSlider) {
		const questionCasted = translatedPage as QuestionSliderInterface;
		questionComponent = (
			<QuestionSlider
				key={currentPageNumber}
				maxValue={questionCasted.max_value}
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
	} else if (questionType === Question.QuestionTextarea) {
		const questionCasted = translatedPage as QuestionTextareaInterface;
		questionComponent = (
			<QuestionTextarea
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
			{background !== null && background}
			<Main>
				{!isKeyboardOpen && <ProgressBarKid />}
				{!isKeyboardOpen && <Toolbar />}

				<TopMain>
					<View
						style={[
							{
								marginVertical: verticalScale(5, device.screenHeight),
								paddingHorizontal: device.isTablet ? 20 : 0,
								...styles.mainContainer,
							},
						]}
					>
						{!isKeyboardOpen && <QuestionTitle>{translatedPage.heading}</QuestionTitle>}
						{!isKeyboardOpen && (
							<View style={{ marginBottom: 9 }}>
								<QuestionLabel
									textStyle={GeneralStyle.kid.questionQuestionLabel}
									customStyle={{
										marginBottom: 7,
									}}
								>
									{questionLabel}
								</QuestionLabel>
								<QuestionSubLabel customStyle={{ marginBottom: 4 }}>
									{questionSubLabel}
								</QuestionSubLabel>
							</View>
						)}
						<View style={styles.questionComponentContainer}>{questionComponent}</View>
					</View>
				</TopMain>
				{!isKeyboardOpen && <Navigation>{buttonComponent !== null && buttonComponent}</Navigation>}
			</Main>
		</View>
	);
};

export default QuestionSingleKid;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	mainContainer: {
		maxHeight: "100%",
		flex: 1,
	},
	questionComponentContainer: {
		...GeneralStyle.kid.questionComponentContainer,
	},
});
