import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
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
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import QuestionSelectRegion from "components/kid/QuestionSelectRegion";
import { getResponse } from "utils/response";
import { getIntroductoryBackground } from "utils/background";
import QuestionInput from "components/kid/QuestionInput";
import Mode from "constants/mode";
import { QuestionContext } from "store/questions";
import { GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive";
import Toolbar from "components/kid/subcomponents/Toolbar";
import ProgressBarKid from "components/kid/subcomponents/ProgressBarKid";
import QuestionSubLabel from "components/generic/QuestionSubLabel";

export default function QuestionSingleKid(): React.ReactElement {
	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const questionCtx = useContext(QuestionContext);

	const { mode, language, currentPage, currentPageNumber, colorTheme, device } =
		settingCtx.settingState;
	const { color200 } = colorTheme;
	const translatedPage: any = translate(currentPage.page.translations, language);
	const questionLabel = translateQuestionLabel(
		translatedPage?.kid_label,
		translatedPage?.adult_label,
		mode,
	);
	const questionSubLabel = translateQuestionLabel(
		translatedPage?.kid_sublabel,
		translatedPage?.adult_sublabel,
		mode,
	);
	const questionType = translatedPage !== null ? getQuestionType(translatedPage) : null;
	let questionComponent = <></>;

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
		setDropdownOpen(false);
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 1) {
			setButtonComponent(
				<BackAndNextNav
					key={"bothCurrentPage"}
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
					key={"bothSelectedValue"}
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
			<QuestionSelect
				key={currentPageNumber}
				options={translatedPage?.choices}
				onChange={changeHandler}
				selectedValue={selectedValue}
				dropdownOpen={dropdownOpen}
				setDropdownOpen={setDropdownOpen}
			/>
		);
	} else if (questionType === QuestionType.QuestionRegion) {
		questionComponent = (
			<QuestionSelectRegion
				key={currentPageNumber}
				onChange={changeHandler}
				selectedValue={selectedValue}
				dropdownOpen={dropdownOpen}
				setDropdownOpen={setDropdownOpen}
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
		<TouchableWithoutFeedback onPress={() => setDropdownOpen(false)}>
			<View style={styles.container}>
				{background !== null && background}
				<Main>
					<ProgressBarKid />
					<Toolbar />
					<TopMain>
						<View
							style={[
								GeneralStyle.kid.introQuestionContainer,
								{
									marginVertical: verticalScale(40, device.screenHeight),
									...styles.mainContainer,
								},
							]}
						>
							<View style={{ marginBottom: 9 }}>
								<QuestionLabel
									textStyle={GeneralStyle.kid.introQuestionLabel}
									customStyle={{ marginBottom: 7 }}
								>
									{questionLabel}
								</QuestionLabel>
								<QuestionSubLabel customStyle={{ marginBottom: 4 }}>
									{questionSubLabel}
								</QuestionSubLabel>
							</View>

							<View style={styles.questionComponentContainer}>{questionComponent}</View>
						</View>
					</TopMain>
					<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
				</Main>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	mainContainer: {
		minHeight: "100%",
		flex: 1,
	},
	questionComponentContainer: {
		...GeneralStyle.kid.questionComponentContainer,
	},
});
