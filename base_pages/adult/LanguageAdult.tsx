import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import QuestionSelectLanguageAdult from "components/adults/QuestionSelectLanguageAdult";
import { translateButton, translatePhrase } from "utils/translate.utils";
import ButtonLabel from "constants/button_label";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import BGLinearGradient from "components/BGLinearGradient";
import { translate, translateQuestionLabel } from "utils/page.utils";
import PhraseLabel from "constants/phrase_label";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import Toolbar from "components/adults/subcomponents/Toolbar";
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
	setButtons,
	setLanguage,
	setPhrases,
} from "store/settings/settingsSlice";
import { getAllResponses, newResponse } from "store/responses/responsesSlice";
import {
	getAgreementPhrase,
	getBackButton,
	getCompleteButton,
	getContinueButton,
	getDonePhrase,
	getDontKnowPhrase,
	getGoButton,
	getIntroductionPhrase,
	getNextButton,
	getStartedButton,
	getTryAgainPhrase,
} from "store/questions/questionsSlice";

export default function LanguageAdult(): React.ReactElement {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const response = useSelector(getAllResponses);

	// buttons
	const backButton = useSelector(getBackButton);
	const completeButton = useSelector(getCompleteButton);
	const continueButton = useSelector(getContinueButton);
	const goButton = useSelector(getGoButton);
	const nextButton = useSelector(getNextButton);
	const startedButton = useSelector(getStartedButton);
	const agreementPhrase = useSelector(getAgreementPhrase);
	const donePhrase = useSelector(getDonePhrase);
	const dontKnowPhrase = useSelector(getDontKnowPhrase);
	const introductionPhrase = useSelector(getIntroductionPhrase);
	const tryAgainPhrase = useSelector(getTryAgainPhrase);

	const [selectedValue, setSelectedValue] = useState<string | null>(null);
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

	// translate phrases and buttons
	useEffect(() => {
		dispatch(
			setButtons({
				back: translateButton(backButton, language) ?? ButtonLabel.Back,
				complete: translateButton(completeButton, language) ?? ButtonLabel.Complete,
				continue: translateButton(continueButton, language) ?? ButtonLabel.Continue,
				go: translateButton(goButton, language) ?? ButtonLabel.Go,
				next: translateButton(nextButton, language) ?? ButtonLabel.Next,
				started: translateButton(startedButton, language) ?? ButtonLabel.Started,
			}),
		);

		dispatch(
			setPhrases({
				agreement: translatePhrase(agreementPhrase, language) ?? PhraseLabel.Agreement,
				done: translatePhrase(donePhrase, language) ?? PhraseLabel.Done,
				dontKnow: translatePhrase(dontKnowPhrase, language) ?? PhraseLabel.DontKnow,
				introduction: translatePhrase(introductionPhrase, language) ?? PhraseLabel.Introduction,
				tryAgain: translatePhrase(tryAgainPhrase, language) ?? PhraseLabel.TryAgain,
			}),
		);
	}, [language]);

	// set selected value
	useEffect(() => {
		setSelectedValue(language);
	}, [currentPageNumber]);

	// set language default
	useEffect(() => {
		if (Object.keys(response).length === 0) {
			dispatch(
				newResponse({
					ident: currentPage.page.ident,
					label: currentPage.page.name,
					answer: language,
					pageNumber: currentPage.pageNumber,
					mode,
					section: currentPage.section,
					sectionNumber: currentPage.sectionNumber,
					sectionPageNumber: currentPage.sectionPageNumber,
				}),
			);
		}
	}, []);

	function changeHandler(value: string | null): void {
		if (value !== "" && value !== null && value !== undefined) {
			dispatch(setLanguage(value));
			dispatch(
				newResponse({
					ident: currentPage.page.ident,
					label: currentPage.page.name,
					answer: value,
					pageNumber: currentPage.pageNumber,
					mode,
					section: currentPage.section,
					sectionNumber: currentPage.sectionNumber,
					sectionPageNumber: currentPage.sectionPageNumber,
				}),
			);
			setSelectedValue(value);
		} else {
			setSelectedValue(null);
		}
	}

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<QuestionContainer>
						<QuestionTitle>{translatedPage?.heading}</QuestionTitle>
						<View style={{ marginBottom: 13 }}>
							<QuestionLabel
								textStyle={GeneralStyle.adult.questionLabel}
								customStyle={{ marginBottom: 7 }}
							>
								{questionLabel}
							</QuestionLabel>
							<QuestionSubLabel customStyle={{ marginBottom: 4 }}>
								{questionSubLabel}
							</QuestionSubLabel>
						</View>
						<QuestionSelectLanguageAdult
							onChange={changeHandler}
							selectedValue={selectedValue}
						/>
					</QuestionContainer>
				</CenterMain>
				<Navigation>
					{selectedValue !== null && (
						<BackAndNextNav
							colorTheme={"#FFF"}
							onNext={() => dispatch(nextPage())}
						/>
					)}
				</Navigation>
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
