import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import TopMain from "components/orientation/TopMain";
import QuestionLabel from "components/kid/QuestionLabel";
import QuestionSelectLanguage from "components/kid/QuestionSelectLanguage";
import { getIntroductoryBackground } from "utils/background";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { translateButton, translatePhrase } from "utils/translate";
import ButtonLabel from "constants/button_label";
import { translate, translateQuestionLabel } from "utils/page";
import PhraseLabel from "constants/phrase_label";
import { GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive";
import Toolbar from "components/kid/subcomponents/Toolbar";
import ProgressBarKid from "components/kid/subcomponents/ProgressBarKid";
import QuestionSubLabel from "components/generic/QuestionSubLabel";
import { useDispatch, useSelector } from "react-redux";
import {
	getColorTheme,
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
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

export default function LanguageKid(): React.ReactElement {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const colorTheme = useSelector(getColorTheme);
	const device = useSelector(getDevice);

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
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const { color100 } = colorTheme;
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

	const [background, setBackground] = useState<React.ReactElement | null>(null);

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
		setDropdownOpen(false);
	}, [currentPageNumber]);

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
		const response = useSelector(getAllResponses);
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

							<View style={styles.questionComponentContainer}>
								<QuestionSelectLanguage
									key={currentPageNumber}
									onChange={changeHandler}
									selectedValue={language}
									dropdownOpen={dropdownOpen}
									setDropdownOpen={setDropdownOpen}
								/>
							</View>
						</View>
					</TopMain>
					<Navigation>
						{selectedValue !== null && (
							<BackAndNextNav
								colorTheme={color100}
								onNext={() => dispatch(nextPage())}
							/>
						)}
					</Navigation>
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
		position: "relative",
	},
	mainContainer: {
		minHeight: "100%",
		flex: 1,
	},
	questionComponentContainer: {
		...GeneralStyle.kid.questionComponentContainer,
	},
});
