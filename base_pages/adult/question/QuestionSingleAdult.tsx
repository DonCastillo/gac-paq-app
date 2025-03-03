import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import Question from "constants/question.enum";
import QuestionSlider from "components/adults/QuestionSlider";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/subcomponents/Toolbar";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import { choiceMode } from "utils/options.utils";
import QuestionRadio from "components/adults/QuestionRadio";
import QuestionRadioImage from "components/adults/QuestionRadioImage";
import { addResponse, getResponse } from "utils/response.utils";
import { intToString, stringToInt, translateQuestionLabel } from "utils/translate.utils";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import PhraseLabel from "constants/phrase_label.enum";
import QuestionInput from "components/adults/QuestionInput";
import { GeneralStyle } from "styles/general";
import QuestionTitle from "components/generic/QuestionTitle";
import QuestionSatisfactionImage from "components/adults/QuestionSatisfactionImage";
import QuestionTextarea from "components/adults/QuestionTextarea";
import QuestionCheckbox from "components/adults/QuestionCheckbox";
import ProgressBarAdult from "components/adults/subcomponents/ProgressBarAdult";
import QuestionSubLabel from "components/generic/QuestionSubLabel";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getIsLoading,
	getMode,
	prevPage,
} from "store/settings/settingsSlice";
import { proceedPage } from "utils/navigation.utils";
import { getQuestionType } from "utils/type.utils";
import type { TranslatedQuestionQuestionType } from "interface/union.type";
import type {
	ChoiceImage,
	QuestionCheckboxInputInterface,
	QuestionCheckboxInterface,
	QuestionInputInterface,
	QuestionRadioImageInterface,
	QuestionRadioInterface,
	QuestionSliderInterface,
	QuestionTextareaInterface,
} from "interface/payload.type";
import AnimatedView from "components/AnimatedView";
import QuestionCheckboxInput from "components/adults/QuestionCheckboxInput";
import LoadingScreenAdult from "../LoadingScreenAdult";
import { adjustQuestionSingleQuestionLabel } from "utils/style";

const QuestionSingleAdult = (): React.ReactElement => {
	const dispatch = useDispatch();
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);
	const device = useSelector(getDevice);
	const isLoading = useSelector(getIsLoading);
	const { isKeyboardOpen } = device;

	// state
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const [proceed, setProceed] = useState<boolean>(false);

	// translations
	const translatedPage = currentPage.page.translations as TranslatedQuestionQuestionType;

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

	// fetch response for this question
	useEffect(() => {
		setSelectedValue(getResponse());
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 1) {
			setButtonComponent(
				<BackAndNextNav
					key={"both" + selectedValue}
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
					onNext={() => proceedPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next" + selectedValue}
					colorTheme="#FFF"
					onNext={() => proceedPage()}
				/>,
			);
		}
	}, [currentPageNumber]);

	useEffect(() => {
		if (
			((selectedValue !== null && selectedValue !== "") ||
				currentPage.page.ident === "app_use_comment") &&
			proceed
		) {
			setButtonComponent(
				<BackAndNextNav
					key={"both" + selectedValue}
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
					onNext={() => proceedPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"prev" + selectedValue}
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
				/>,
			);
		}
	}, [selectedValue, proceed]);

	// display buttons
	useEffect(() => {
		if (currentPage.page.audio_autoplay === true) {
			const timer = setTimeout(() => {
				setProceed(true);
				clearTimeout(timer);
			}, 3000);
		} else {
			setProceed(true);
		}

		return () => {
			setProceed(false);
		};
	}, [currentPageNumber]);

	/**
	 * temporarily store the initial selection
	 */
	const changeHandler = (value: string | null): void => {
		addResponse(value);
		setSelectedValue(value);
	};

	if (questionType === Question.QuestionRadio) {
		const questionCasted = translatedPage as QuestionRadioInterface;
		questionComponent = (
			<QuestionRadio
				key={currentPageNumber}
				selectedValue={selectedValue}
				options={choiceMode(questionCasted.choices, mode)}
				onSelect={(value: string) => {
					changeHandler(value);
				}}
			/>
		);
	} else if (questionType === Question.QuestionCheckbox) {
		const questionCasted = translatedPage as QuestionCheckboxInterface;
		questionComponent = (
			<QuestionCheckbox
				key={currentPageNumber}
				selectedValue={selectedValue}
				options={choiceMode(questionCasted.choices, mode)}
				onSelect={(value: string) => {
					changeHandler(value);
				}}
			/>
		);
	} else if (questionType === Question.QuestionRadioImage) {
		const questionCasted = translatedPage as QuestionRadioImageInterface;
		questionComponent = (
			<QuestionRadioImage
				key={currentPageNumber}
				selectedValue={selectedValue}
				options={choiceMode(questionCasted.choices, mode) as ChoiceImage[]}
				onChange={changeHandler}
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
	} else if (questionType === Question.QuestionCheckboxInput) {
		const questionCasted = translatedPage as QuestionCheckboxInputInterface;
		questionComponent = (
			<QuestionCheckboxInput
				key={currentPageNumber}
				selectedValue={selectedValue}
				inputPlaceholder={questionCasted.input_placeholder}
				inputLabel={questionCasted.input_label}
				inputLabelEn={questionCasted.input_label_en}
				options={choiceMode(questionCasted.choices, mode)}
				onSelect={(value: string) => {
					changeHandler(value);
				}}
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

	if (isLoading) {
		return <LoadingScreenAdult key={currentPageNumber} />;
	}
	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<Main>
				{!isKeyboardOpen && <ProgressBarAdult />}
				{!isKeyboardOpen && <Toolbar key={currentPageNumber} />}
				<CenterMain>
					<AnimatedView
						key={currentPageNumber}
						style={{ flex: 0 }}
					>
						<QuestionContainer>
							{!isKeyboardOpen && <QuestionTitle>{translatedPage.heading}</QuestionTitle>}
							{!isKeyboardOpen && (
								<View style={{ marginBottom: 13 }}>
									<QuestionLabel
										textStyle={{
											...GeneralStyle.adult.questionLabel,
											...adjustQuestionSingleQuestionLabel(),
										}}
										customStyle={{ marginBottom: 7 }}
									>
										{questionLabel}
									</QuestionLabel>
									<QuestionSubLabel customStyle={{ marginBottom: 7 }}>
										{questionSubLabel}
									</QuestionSubLabel>
								</View>
							)}
							{questionComponent}
						</QuestionContainer>
					</AnimatedView>
				</CenterMain>
				{!isKeyboardOpen && <Navigation>{buttonComponent !== null && buttonComponent}</Navigation>}
			</Main>
		</View>
	);
};

export default QuestionSingleAdult;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
