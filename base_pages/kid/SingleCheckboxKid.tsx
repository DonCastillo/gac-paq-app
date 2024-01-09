import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { getIntroductoryBackground } from "utils/background";
import ScrollContainer from "components/ScrollContainer";
import { ResponseContext } from "store/responses";
import { getResponse } from "utils/response";
import { CheckBox } from "@rneui/themed";

export default function SingleCheckboxKid(): React.ReactElement {
	console.log("SingleCheckboxKid");
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const { language, colorTheme, currentPage, currentPageNumber } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const translatedPage = translate(currentPage.page.translations, language);
	const [checked, setChecked] = useState(false);
	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
	}, [currentPageNumber]);

	useEffect(() => {
		const response = responseCtx.responses;
		const currentPageNumber = settingCtx.settingState.currentPageNumber;
		if (Object.keys(response).length > 0) {
			const responseHere = getResponse(currentPageNumber, response);
			if (responseHere === "agree") {
				setChecked(true);
			} else {
				setChecked(false);
			}
		}
	}, [currentPageNumber]);

	useEffect(() => {
		responseCtx.addResponse({
			pageNumber: currentPage.pageNumber,
			label: currentPage.page.name,
			answer: checked ? "agree" : "disagree",
		});
	}, [checked]);

	return (
		<View style={styles.container}>
			{background !== null && background}
			<Main>
				<CenterMain>
					<ScrollContainer>
						<Heading
							customStyle={{
								color: color100,
								fontSize: 40,
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
                        <View style={styles.checkboxContainer}>
							<CheckBox
								checked={checked}
								title={translatedPage?.checkbox_label}
								center={true}
								onPress={() => setChecked(!checked)}
								containerStyle={{ backgroundColor: "transparent" }}
								textStyle={{ color: color100 }}
								checkedColor={color100}
								uncheckedColor={color100}
								size={30}
							/>
						</View>
					</ScrollContainer>
				</CenterMain>
				<Navigation>
					{checked ? (
						<BackAndNextNav
							key={"Checked"}
							onPrev={() => settingCtx.prevPage()}
							onNext={() => settingCtx.nextPage()}
						/>
					) : (
						<BackAndNextNav
							onPrev={() => settingCtx.prevPage()}
							key={"Unchecked"}
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
    checkboxContainer: {
		marginTop: 20,
	},
});
