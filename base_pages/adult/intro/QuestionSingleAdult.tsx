import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import Question from "constants/question.enum";
import BGLinearGradient from "components/BGLinearGradient";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import QuestionRadio from "components/adults/QuestionRadio";
import Toolbar from "components/adults/subcomponents/Toolbar";
import { addResponse, getResponse } from "utils/response.utils";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import QuestionInput from "components/adults/QuestionInput";
import { GeneralStyle } from "styles/general";
import QuestionTitle from "components/generic/QuestionTitle";
import ProgressBarAdult from "components/adults/subcomponents/ProgressBarAdult";
import QuestionSubLabel from "components/generic/QuestionSubLabel";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
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
import { getNarrationPayload } from "store/settings/settingsThunk";
import LoadingScreenAdult from "../LoadingScreenAdult";
import AnimatedView from "components/AnimatedView";
import type Mode from "constants/mode.enum";
import { choiceMode } from "utils/options.utils";

const QuestionSingleAdult = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);
	const isLoading = useSelector(getIsLoading);

	// state
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
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

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 1) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme="#FFF"
					onNext={() => dispatch(nextPage())}
				/>,
			);
		}
	}, [currentPageNumber]);

	useEffect(() => {
		if (selectedValue !== null && proceed) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"prev"}
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

	useEffect(() => {
		setSelectedValue(getResponse());
	}, [currentPageNumber]);

	// load translations
	const loadNarrations = async (mode: Mode): Promise<void> => {
		dispatch(setIsLoading(true));
		await dispatch(getNarrationPayload({ mode, language }));
		dispatch(setIsLoading(false));
	};

	/**
	 * temporarily store the initial selection
	 */
	const changeHandler = (value: string | null): void => {
		addResponse(value);
		setSelectedValue(value);

		// set mode
		// only triggers a mode change if the respondent actually selects a mode
		if (currentPage.page.ident === "mode" && value !== undefined && value !== null) {
			dispatch(setMode(getModeType(value)));
			changeMode(getModeType(value));
		}

		// set narration payload
		if (
			(currentPage.page.ident === "mode" || currentPage.page.ident === "language_location") &&
			value !== undefined &&
			value !== null
		) {
			loadNarrations(getModeType(value));
		}
	};

	if (questionType === Question.QuestionDropdown) {
		const questionCasted = translatedPage as QuestionDropdownInterface;
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
		return <LoadingScreenAdult key={currentPageNumber} />;
	}
	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<AnimatedView
						key={currentPageNumber}
						style={{ flex: 0 }}
					>
						<QuestionContainer>
							<QuestionTitle>{translatedPage.heading}</QuestionTitle>
							<View style={{ marginBottom: 13 }}>
								<QuestionLabel
									textStyle={GeneralStyle.adult.questionLabel}
									customStyle={{ marginBottom: 7 }}
								>
									{questionLabel}
								</QuestionLabel>
								<QuestionSubLabel customStyle={{ marginBottom: 7 }}>
									{questionSubLabel}
								</QuestionSubLabel>
							</View>
							{questionComponent}
						</QuestionContainer>
					</AnimatedView>
				</CenterMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
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
