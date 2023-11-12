import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "../../store/settings";
import Main from "../../components/Main";
import Navigation from "../../components/Navigation";
import TopMain from "../../components/orientation/TopMain";
import QuestionLabel from "../../components/kid/QuestionLabel";
import QuestionSelectLanguage from "../../components/kid/QuestionSelectLanguage";
import { ResponseContext } from "../../store/responses";
import { getIntroductoryBackground } from "../../utils/background";
import BackAndNextNav from "../../components/kid/navigation/BackAndNextNav";

export default function LanguageKid(): React.ReactElement {
	const [languageSelected, setLanguageSelected] = useState<boolean>(false);
	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	const LABEL = "What is your preferred language?";
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const { language, currentPageNumber } = settingCtx.settingState;

	useEffect(() => {
		if (background === null) {
			setBackground(getIntroductoryBackground(currentPageNumber));
		}
	}, [currentPageNumber]);

	useEffect(() => {
		let temporaryButtonComponent = <></>;
		if (buttonComponent === null) {
			if (currentPageNumber > 0) {
				temporaryButtonComponent = (
					<BackAndNextNav
						onPrev={prevPage}
						onNext={nextPage}
					/>
				);
			} else {
				temporaryButtonComponent = (
					<BackAndNextNav onNext={nextPage} />
				);
			}
		}
		setButtonComponent(temporaryButtonComponent);
	}, [currentPageNumber]);

	function changeHandler(value: string): void {
		if (value !== "") {
			settingCtx.setLanguage(value);
			responseCtx.addResponse({
				pageNumber: 0,
				label: LABEL,
				answer: value,
			});
			setLanguageSelected(true);
		} else {
			setLanguageSelected(false);
		}
	}

	function nextPage(): void {
		settingCtx.nextPage();
	}

	function prevPage(): void {
		settingCtx.prevPage();
	}

	return (
		<View style={styles.container}>
			{background !== null && background}
			<Main>
				<TopMain>
					<View>
						<QuestionLabel
							textStyle={{
								fontSize: 25,
							}}
						>
							{LABEL}
						</QuestionLabel>
						<QuestionSelectLanguage
							onChange={changeHandler}
							selectedValue={language}
						/>
					</View>
				</TopMain>
				<Navigation>
					{buttonComponent !== null && buttonComponent}
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
		position: "relative",
	},
});
