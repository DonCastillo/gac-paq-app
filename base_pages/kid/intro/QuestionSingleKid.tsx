import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import TopMain from "components/orientation/TopMain";
import QuestionLabel from "components/kid/QuestionLabel";
import Question from "constants/question.enum";
import QuestionSelect from "components/kid/QuestionSelect";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { addResponse, getResponse } from "utils/response.utils";
import { getIntroductoryBackground } from "utils/background.utils";
import QuestionInput from "components/kid/QuestionInput";
import { GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive.utils";
import ProgressBarKid from "components/kid/subcomponents/ProgressBarKid";
import QuestionSubLabel from "components/generic/QuestionSubLabel";
import { useDispatch, useSelector } from "react-redux";
import {
	getColorTheme,
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getIsLoading,
	getLanguage,
	getMode,
	nextPage,
	prevPage,
	setIsLoading,
	setMode,
} from "store/settings/settingsSlice";
import { changeMode } from "utils/mode.utils";
import { getModeType, getQuestionType } from "utils/type.utils";
import { translateQuestionLabel } from "utils/translate.utils";
import type { TranslatedIntroQuestionType } from "interface/union.type";
import type { QuestionDropdownInterface, QuestionInputInterface } from "interface/payload.type";
import Mode from "constants/mode.enum";
import { getNarrationPayload } from "store/settings/settingsThunk";
import LoadingScreenKid from "../LoadingScreenKid";
import AnimatedView from "components/AnimatedView";
import { choiceMode } from "utils/options.utils";
import { loadSectionPages } from "utils/load_pages.utils";
import Toolbar from "components/adults/subcomponents/Toolbar";

const QuestionSingleKid = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const colorTheme = useSelector(getColorTheme);
	const mode = useSelector(getMode);
	const device = useSelector(getDevice);
	const isLoading = useSelector(getIsLoading);
	const { color200 } = colorTheme;

	// state
	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const [proceed, setProceed] = useState<boolean>(false);

	// translations
	const translatedPage = currentPage.page.translations as TranslatedIntroQuestionType;

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
					onPrev={() => dispatch(prevPage())}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme={color200}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		}
	}, [currentPageNumber]);

	useEffect(() => {
		if (selectedValue !== null && proceed) {
			setButtonComponent(
				<BackAndNextNav
					key={"bothSelectedValue"}
					colorTheme={color200}
					onPrev={() => dispatch(prevPage())}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"prev"}
					colorTheme={color200}
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

	useEffect(() => {
		setSelectedValue(getResponse());
	}, [currentPageNumber]);

	// load translations
	const loadNarrations = async (mode: Mode): Promise<void> => {
		dispatch(setIsLoading(true));
		await dispatch(getNarrationPayload({ mode, language }));
		dispatch(setIsLoading(false));
	};

	useEffect(() => {
		// trigger a mode change if the mode changes from a values that is not a kid
		if (mode !== Mode.Kid) {
			changeMode(mode, language);
			loadSectionPages();
		}
	}, [mode]);

	const changeHandlerPromise = async (value: string | null): Promise<void> => {
		addResponse(value);
		setSelectedValue(value);

		if (value !== undefined && value !== null && value !== "") {
			if (currentPage.page.ident === "mode") {
				dispatch(setMode(getModeType(value)));
			}

			if (currentPage.page.ident === "mode") {
				await loadNarrations(getModeType(value));
				if (value !== selectedValue) {
					dispatch(nextPage());
				}
			}

			if (currentPage.page.ident === "language_location") {
				await loadNarrations(getModeType(value));
			}
		}
	};

	const changeHandler = (value: string | null): void => {
		changeHandlerPromise(value)
			.then(() => {})
			.catch(() => {});
	};

	if (questionType === Question.QuestionDropdown) {
		const questionCasted = translatedPage as QuestionDropdownInterface;
		questionComponent = (
			<QuestionSelect
				key={currentPageNumber}
				options={choiceMode(questionCasted.choices, mode)}
				onChange={changeHandler}
				selectedValue={selectedValue}
				dropdownOpen={dropdownOpen}
				setDropdownOpen={setDropdownOpen}
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

	if (isLoading) {
		return <LoadingScreenKid key={currentPageNumber} />;
	}
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				setDropdownOpen(false);
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				{background !== null && background}
				<Main>
					<ProgressBarKid />
					<Toolbar />
					<TopMain>
						<AnimatedView key={currentPageNumber}>
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
						</AnimatedView>
					</TopMain>
					<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
				</Main>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default QuestionSingleKid;

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
