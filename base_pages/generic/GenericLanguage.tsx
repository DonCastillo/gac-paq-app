import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import QuestionSelectLanguageAdult from "components/adults/QuestionSelectLanguageAdult";
import { translateSectionHeading } from "utils/translate.utils";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import BGLinearGradient from "components/BGLinearGradient";
import { translate, translateQuestionLabel } from "utils/page.utils";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import ImageBackdrop from "components/ImageBackdrop";
import { GeneralStyle } from "styles/general";
import { getImageBackground } from "utils/background.utils";
import Toolbar from "components/adults/subcomponents/Toolbar";
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
	setLanguage,
	getDevice,
	setSectionTitles,
} from "store/settings/settingsSlice";
import { getSectionPages } from "store/questions/questionsSlice";
import { loadButtons, loadPhrases } from "utils/load.utils";
import { addResponse } from "utils/response.utils";

export default function GenericLanguage(): React.ReactElement {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const device = useSelector(getDevice);
	const sectionPages = useSelector(getSectionPages);

	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const translatedPage = translate(currentPage.page.translations, language);
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
		loadButtons();
		loadPhrases();

		// translate the section headings
		const translatedSectionTitles = translateSectionHeading(sectionPages, language);
		console.log("translatedSectionTitles: ", translatedSectionTitles);
		// will make "Introduction" and "Feedback" translated in the future
		dispatch(setSectionTitles(["Introduction", ...translatedSectionTitles, "Feedback"]));
	}, [language]);

	// set selected value
	useEffect(() => {
		setSelectedValue(language);
	}, [currentPageNumber]);

	// set language default
	useEffect(() => {
		addResponse(language);
	}, []);

	function changeHandler(value: string | null): void {
		if (value !== "" && value !== null && value !== undefined) {
			dispatch(setLanguage(value));
			addResponse(value);
			setSelectedValue(value);
		} else {
			setSelectedValue(null);
		}
	}

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<ImageBackdrop
				source={getImageBackground(translatedPage?.images, mode, device.isTablet)}
				key={currentPageNumber}
			/>
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
					{selectedValue !== null && <BackAndNextNav onNext={() => dispatch(nextPage())} />}
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
