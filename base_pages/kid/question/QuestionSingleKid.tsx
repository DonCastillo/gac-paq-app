import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import { SettingContext } from "store/settings";
import { translate, translateQuestionLabel } from "utils/page";
import Main from "components/Main";
import Navigation from "components/Navigation";
import TopMain from "components/orientation/TopMain";
import QuestionLabel from "components/kid/QuestionLabel";
import { getQuestionType } from "utils/questions";
import QuestionType from "constants/question_type";
import QuestionSelect from "components/kid/QuestionSelect";
import { ResponseContext } from "store/responses";
import QuestionTitle from "components/generic/QuestionTitle";
import QuestionRadio from "components/kid/QuestionRadio";
import QuestionSlider from "components/kid/QuestionSlider";
import QuestionRadioImage from "components/kid/QuestionRadioImage";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { getResponse } from "utils/response";
import { intToString, stringToInt } from "utils/translate";
import { getQuestionBackground } from "utils/background";
import DeviceType from "constants/device_type";
import PhraseLabel from "constants/phrase_label";
import QuestionInput from "components/kid/QuestionInput";
import { GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive";
import Toolbar from "components/kid/Toolbar";
import QuestionSatisfactionImage from "components/kid/QuestionSatisfactionImage";
import QuestionTextarea from "components/kid/QuestionTextarea";

export default function QuestionSingleKid(): React.ReactElement {
	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);

	const { mode, language, currentPage, currentPageNumber, colorTheme, device } =
		settingCtx.settingState;
	const { color200 } = colorTheme;
	const translatedPage: any = translate(currentPage.page.translations, language);
	const questionLabel = translateQuestionLabel(
		translatedPage?.kid_label,
		translatedPage?.adult_label,
		mode,
	);
	const questionType = translatedPage !== null ? getQuestionType(translatedPage) : null;
	console.log("questionType", questionType);
	let questionComponent = <></>;

	useEffect(() => {
		const keyboardDidShow = Keyboard.addListener("keyboardDidShow", () => {
			setIsKeyboardOpen(true);
		});
		const keyboardDidHide = Keyboard.addListener("keyboardDidHide", () => {
			setIsKeyboardOpen(false);
		});

		const keyboardWillHide = Keyboard.addListener("keyboardWillHide", () => {
			setIsKeyboardOpen(false);
		});

		const keyboardWillShow = Keyboard.addListener("keyboardWillShow", () => {
			setIsKeyboardOpen(true);
		});

		return () => {
			keyboardDidShow.remove();
			keyboardDidHide.remove();
			keyboardWillHide.remove();
			keyboardWillShow.remove();
		};
	}, []);

	// fetch response for this question
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

	// set background screen dynamically
	useEffect(() => {
		setBackground(
			getQuestionBackground(
				currentPage.sectionNumber,
				currentPage.sectionPageNumber,
				questionType,
				DeviceType.Mobile,
				colorTheme.color100,
			),
		);
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 1) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					colorTheme={color200}
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme={color200}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		}
	}, [currentPageNumber]);

	useEffect(() => {
		if (selectedValue !== null) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					colorTheme={color200}
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"prev"}
					colorTheme={color200}
					onPrev={() => settingCtx.prevPage()}
				/>,
			);
		}
	}, [selectedValue]);

	/**
	 * temporarily store the initial selection
	 */
	function changeHandler(value: string | null): void {
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
	}

	if (questionType === QuestionType.QuestionDropdown) {
		questionComponent = (
			<QuestionSelect
				key={currentPageNumber}
				options={translatedPage?.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === QuestionType.QuestionRadio) {
		questionComponent = (
			<QuestionRadio
				key={currentPageNumber}
				options={translatedPage?.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		);
	} else if (questionType === QuestionType.QuestionRadioImage) {
		questionComponent = (
			<QuestionRadioImage
				key={currentPageNumber}
				options={translatedPage?.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
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
			{background !== null && background}
			<Main>
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
						{!isKeyboardOpen && <QuestionTitle>{translatedPage?.heading}</QuestionTitle>}
						{!isKeyboardOpen && (
							<QuestionLabel
								textStyle={GeneralStyle.kid.questionQuestionLabel}
								customStyle={{
									marginBottom: 0,
								}}
							>
								{questionLabel}
							</QuestionLabel>
						)}
						<View style={styles.questionComponentContainer}>{questionComponent}</View>
					</View>
				</TopMain>
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
