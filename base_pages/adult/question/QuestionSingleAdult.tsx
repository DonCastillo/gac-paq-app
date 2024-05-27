import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { translate, translateQuestionLabel } from "utils/page.utils";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import { getQuestionType } from "utils/questions.utils";
import QuestionType from "constants/question_type.enum";
import QuestionSlider from "components/adults/QuestionSlider";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/subcomponents/Toolbar";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import { optionRadioItemMode, optionText } from "utils/options.utils";
import QuestionRadio from "components/adults/QuestionRadio";
import QuestionRadioImage from "components/adults/QuestionRadioImage";
import { addResponse, getResponse } from "utils/response.utils";
import { intToString, stringToInt } from "utils/translate.utils";
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
import { moderateScale } from "utils/responsive.utils";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getLanguage,
	getMode,
	prevPage,
} from "store/settings/settingsSlice";
import { proceedPage } from "utils/navigation.utils";
import { getQuestion17Label } from "utils/label.utils";

export default function QuestionSingleAdult(): React.ReactElement {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);
	const device = useSelector(getDevice);

	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	const { isKeyboardOpen } = device;
	const translatedPage: any = translate(currentPage.page.translations, language);
	const questionType = translatedPage !== null ? getQuestionType(translatedPage) : null;
	let questionLabel = translateQuestionLabel(
		translatedPage?.kid_label,
		translatedPage?.adult_label,
		mode,
	);
	const questionSubLabel = translateQuestionLabel(
		translatedPage?.kid_sublabel,
		translatedPage?.adult_sublabel,
		mode,
	);
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
			(selectedValue !== null && selectedValue !== "") ||
			currentPage?.page?.ident === "app_use_comment"
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
	}, [selectedValue]);

	/**
	 * temporarily store the initial selection
	 */
	function changeHandler(value: string | null): void {
		addResponse(value);
		setSelectedValue(value);
	}

	if (questionType === QuestionType.QuestionRadio) {
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
	} else if (questionType === QuestionType.QuestionCheckbox) {
		questionComponent = (
			<QuestionCheckbox
				key={currentPageNumber}
				selectedValue={selectedValue}
				options={optionRadioItemMode(translatedPage.choices, mode)}
				onSelect={(value: string) => {
					changeHandler(value);
				}}
			/>
		);
	} else if (questionType === QuestionType.QuestionRadioImage) {
		questionComponent = (
			<QuestionRadioImage
				key={currentPageNumber}
				selectedValue={selectedValue}
				options={translatedPage?.choices}
				onChange={changeHandler}
			/>
		);
	} else if (questionType === QuestionType.QuestionSatisfactionImage) {
		questionComponent = (
			<QuestionSatisfactionImage
				key={currentPageNumber}
				options={translatedPage?.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === QuestionType.QuestionSlider) {
		questionComponent = (
			<QuestionSlider
				key={currentPageNumber}
				maxValue={translatedPage?.max_value}
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
	} else if (questionType === QuestionType.QuestionInput) {
		questionComponent = (
			<QuestionInput
				key={currentPageNumber}
				selectedValue={selectedValue}
				placeholder={translatedPage?.placeholder}
				onChange={changeHandler}
			/>
		);
	} else if (questionType === QuestionType.QuestionTextarea) {
		questionComponent = (
			<QuestionTextarea
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
			<Main>
				{!isKeyboardOpen && <ProgressBarAdult />}
				{!isKeyboardOpen && <Toolbar />}
				<CenterMain>
					<QuestionContainer>
						{!isKeyboardOpen && <QuestionTitle>{translatedPage?.heading}</QuestionTitle>}
						{!isKeyboardOpen && (
							<View style={{ marginBottom: 13 }}>
								<QuestionLabel
									textStyle={{
										...GeneralStyle.adult.questionLabel,
										fontSize: moderateScale(
											device.isTablet ? 15 : 15,
											device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
										),
										lineHeight: moderateScale(
											device.isTablet ? 20 : 20,
											device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
										),
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
				</CenterMain>
				{!isKeyboardOpen && <Navigation>{buttonComponent !== null && buttonComponent}</Navigation>}
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
