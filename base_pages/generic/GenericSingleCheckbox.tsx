import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/Toolbar";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import ScrollContainer from "components/ScrollContainer";
import { CheckBox } from "@rneui/themed";
import { ResponseContext } from "store/responses";
import { getResponse } from "utils/response";

export default function GenericSingleCheckbox(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const { language, colorTheme, currentPage, currentPageNumber } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const translatedPage = translate(currentPage.page.translations, language);
	const [checked, setChecked] = useState(false);

	function renderToolbar(): React.ReactElement {
		if (currentPage.section === "intro" && currentPage.sectionPageNumber === 1) {
			return <></>;
		} else {
			return <Toolbar />;
		}
	}

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
		<View style={[styles.container, { backgroundColor: color100 }]}>
			<BGLinearGradient />
			<Main>
				{renderToolbar()}
				<CenterMain>
					<ScrollContainer>
						<Heading
							customStyle={{
								color: "white",
								fontSize: 40,
								marginBottom: 50,
								textAlign: "center",
							}}
						>
							{translatedPage?.heading.toLowerCase()}
						</Heading>
						<Paragraph
							customStyle={{
								color: "white",
								fontSize: 15,
								lineHeight: 17,
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
								textStyle={{ color: "white" }}
								checkedColor="white"
								uncheckedColor="white"
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
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	checkboxContainer: {
		marginTop: 20,
	},
});
