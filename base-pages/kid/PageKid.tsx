import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Navigation from "../../components/Navigation";
import FullWidthButton from "../../components/buttons/FullWidthButton";
import { getSectionType } from "../../utils/section";
import SectionType from "../../constants/section_type";
// import { QuestionContext } from "../../store/questions";
import BackAndNextNav from "../../components/kid/navigation/BackAndNextNav";
import { getIntroductoryBackground } from "../../utils/background";

export default function PageKid(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { language, colorTheme, currentPage, buttons } = settingCtx.settingState;
	const [background, setBackground] = useState<React.ReactElement | null>(null);

	const { currentPageNumber } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const translatedPage = translate(currentPage.page.translations, language);
	const [buttonComponent, setButtonComponent] = useState(null);

	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
	}, [currentPageNumber]);

	useEffect(() => {
		let buttonComponent = <></>;
		const section = getSectionType(currentPage.section);
		const sectionPageNumber = currentPage.sectionPageNumber;

		buttonComponent = renderDoubleButton();

		/** Welcome Page should display "Let's get started" button */
		if (section === SectionType.Intro && sectionPageNumber === 1) {
			buttonComponent = renderSingleButton(buttons?.started + "!");
		}

		/** Great Job Page should display "Let's get started" button */
		// if (
		//     section === SectionType.Intro &&
		//     sectionPageNumber === introductoryPages.length
		// ) {
		//     buttonComponent = renderSingleButton(buttons?.started + "!");
		// }

		setButtonComponent(buttonComponent);
	}, [currentPage?.section, currentPage?.sectionPageNumber]);

	function renderSingleButton(label: string): React.ReactElement {
		return (
			<FullWidthButton
				customStyle={{
					backgroundColor: color100,
				}}
				onPress={() => settingCtx.nextPage()}
			>
				{label}
			</FullWidthButton>
		);
	}

	function renderDoubleButton(): React.ReactElement {
		return (
			<BackAndNextNav
				onPrev={() => settingCtx.prevPage()}
				onNext={() => settingCtx.nextPage()}
			/>
		);
	}

	return (
		<View style={styles.container}>
			{background !== null && background}
			<Main>
				<CenterMain>
					<Heading
						customStyle={{
							color: color100,
							fontSize: 50,
							marginBottom: 50,
							textAlign: "center",
						}}
					>
						{translatedPage?.heading.toLowerCase()}
					</Heading>
					<Paragraph
						customStyle={{
							color: color100,
							fontSize: 15,
							lineHeight: 20,
						}}
					>
						{translatedPage?.description}
					</Paragraph>
				</CenterMain>
				<Navigation>{buttonComponent}</Navigation>
			</Main>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
