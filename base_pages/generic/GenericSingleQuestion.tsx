import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { translate, translateQuestionLabel } from "utils/page";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import { getQuestionType } from "utils/questions";
import QuestionType from "constants/question_type";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/subcomponents/Toolbar";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import { optionText } from "utils/options";
import QuestionRadio from "components/adults/QuestionRadio";
import { addResponse, getResponse } from "utils/response";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import QuestionInput from "components/adults/QuestionInput";
import Mode from "constants/mode";
import ImageBackdrop from "components/ImageBackdrop";
import { GeneralStyle } from "styles/general";
import { getImageBackground } from "utils/background";
import QuestionTitle from "components/generic/QuestionTitle";
import ProgressBarAdult from "components/adults/subcomponents/ProgressBarAdult";
import QuestionSubLabel from "components/generic/QuestionSubLabel";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getLanguage,
	getMode,
	nextPage,
	prevPage,
	setMode,
} from "store/settings/settingsSlice";
import { getAllResponses, newResponse } from "store/responses/responsesSlice";
import { reloadExtroFeedbackPages } from "utils/load_pages.utils";
import { changeMode } from "utils/mode.utils";

export default function GenericSingleQuestion(): React.ReactElement {
	const dispatch = useDispatch();

	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);
	const device = useSelector(getDevice);
	const response = useSelector(getAllResponses);

	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	const { isKeyboardOpen } = device;
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

	// set selected value
	useEffect(() => {
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

	// save response
	function changeHandler(value: string | null): void {
		if (value !== "" && value !== null && value !== undefined) {
			addResponse(value);
			setSelectedValue(value);
		} else {
			setSelectedValue(null);
		}

		// set mode
		if (currentPage.page.ident === "mode") {
			changeMode(value);
		}
	}

	if (questionType === QuestionType.QuestionDropdown) {
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
		<View style={styles.container}>
			<BGLinearGradient />
			<ImageBackdrop
				source={getImageBackground(translatedPage?.images, mode, device.isTablet)}
				key={currentPageNumber}
			/>
			<Main>
				{!isKeyboardOpen && <ProgressBarAdult />}
				{!isKeyboardOpen && <Toolbar />}
				<CenterMain>
					<QuestionContainer>
						{!isKeyboardOpen && <QuestionTitle>{translatedPage?.heading}</QuestionTitle>}
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
}

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
