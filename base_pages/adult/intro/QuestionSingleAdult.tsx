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
import { optionLanguage } from "utils/options.utils";
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
	getLanguage,
	getMode,
	nextPage,
	prevPage,
} from "store/settings/settingsSlice";
import { getLanguageOption } from "store/questions/questionsSlice";
import { changeMode } from "utils/mode.utils";
import { getQuestionType } from "utils/type.utils";
import { translatePage, translateQuestionLabel } from "utils/translate.utils";
import type { TranslatedIntroQuestionType } from "interface/union.type";
import type { QuestionDropdownInterface, QuestionInputInterface } from "interface/payload.type";

export default function QuestionSingleAdult(): React.ReactElement {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);

	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

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
		if (selectedValue !== null) {
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
	}, [selectedValue]);

	useEffect(() => {
		setSelectedValue(getResponse());
	}, [currentPageNumber]);

	/**
	 * temporarily store the initial selection
	 */
	const changeHandler = (value: string | null): void => {
		addResponse(value);
		setSelectedValue(value);

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
	} else if (questionType === Question.QuestionLanguage) {
		const languageOptions = useSelector(getLanguageOption);
		questionComponent = (
			<QuestionRadio
				key={currentPageNumber}
				selectedValue={selectedValue}
				options={optionLanguage(languageOptions)}
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
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
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
				</CenterMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
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
