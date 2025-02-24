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
	getIsLoading,
	getLanguage,
	getMode,
	nextPage,
	prevPage,
	setIsLoading,
	setMode,
	setStartDateTime,
} from "store/settings/settingsSlice";
import { changeMode } from "utils/mode.utils";
import { translateQuestionLabel } from "utils/translate.utils";
import type { TranslatedIntroQuestionType } from "interface/union.type";
import type { QuestionDropdownInterface, QuestionInputInterface } from "interface/payload.type";
import { getModeType, getQuestionType } from "utils/type.utils";
import { getNarrationPayload } from "store/settings/settingsThunk";
import LoadingScreenAdult from "base_pages/adult/LoadingScreenAdult";
import type Mode from "constants/mode.enum";
import Toolbar from "components/adults/subcomponents/Toolbar";
import { loadSectionPages } from "utils/load_pages.utils";

const GenericSingleQuestion = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);
	const device = useSelector(getDevice);
	const isLoading = useSelector(getIsLoading);
	const { isKeyboardOpen } = device;
	const backgroundImage = getImageBackground();

	// state
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

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

	// set selected value
	useEffect(() => {
		setSelectedValue(getResponse());
	}, [currentPageNumber]);

	// load translations
	const loadNarrations = async (mode: Mode): Promise<void> => {
		dispatch(setIsLoading(true));
		await dispatch(getNarrationPayload({ mode, language }));
		dispatch(setIsLoading(false));
	};

	// save response
	const changeHandler = (value: string | null): void => {
		addResponse(value);
		setSelectedValue(value);

		// set mode
		// only triggers a mode change if the respondent actually selects a mode
		if (currentPage.page.ident === "mode" && value !== undefined && value !== null) {
			dispatch(setMode(getModeType(value)));
			changeMode(getModeType(value), language);
			loadSectionPages();
		}

		// record start when user is answering questions
		if (
			currentPage.page.ident === "participant_id" &&
			value !== undefined &&
			value !== null &&
			value !== ""
		) {
			dispatch(setStartDateTime());
		}

		// narration payload
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

	if (!isLoading) {
		return (
			<View style={styles.container}>
				<BGLinearGradient />
				{backgroundImage !== undefined && backgroundImage !== null && backgroundImage !== "" && (
					<ImageBackdrop
						source={backgroundImage}
						key={currentPageNumber}
					/>
				)}
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
	} else {
		return <LoadingScreenAdult />;
	}
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
