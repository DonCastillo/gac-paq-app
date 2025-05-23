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
import { getNarrationPayload } from "store/settings/settingsThunk";
import LoadingScreenAdult from "../LoadingScreenAdult";
import AnimatedView from "components/AnimatedView";
import type Mode from "constants/mode.enum";
import { choiceMode } from "utils/options.utils";
import { loadSectionPages } from "utils/load_pages.utils";
import { verticalScale } from "utils/responsive.utils";

const QuestionSingleAdult = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);
	const device = useSelector(getDevice);

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

	const changeHandlerPromise = async (value: string | null): Promise<void> => {
		addResponse(value);
		setSelectedValue(value);

		if (value !== undefined && value !== null && value !== "") {
			if (currentPage.page.ident === "mode") {
				dispatch(setMode(getModeType(value)));
				changeMode(getModeType(value), language);
				loadSectionPages();
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
							<View style={{ marginBottom: 13 }}>
								<QuestionTitle>{translatedPage.heading}</QuestionTitle>
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
							<View
								style={{
									maxHeight: verticalScale(300, device.screenHeight),
								}}
							>
								{questionComponent}
							</View>
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
