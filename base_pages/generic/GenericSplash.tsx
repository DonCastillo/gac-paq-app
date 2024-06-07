import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import ProgressBar from "components/ProgressBar";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "components/svgs/kid";
import BGLinearGradient from "components/BGLinearGradient";
import { useSelector } from "react-redux";
import { getColorTheme } from "store/settings/settingsSlice";

const GenericSplash = (): React.ReactElement => {
	const colorTheme = useSelector(getColorTheme);
	const { color100 } = colorTheme;
	const navigation = useNavigation();

	useEffect(() => {
		const timeout = setTimeout(() => {
			clearInterval(timeout);
			navigation.navigate("RegularPageScreen");
		}, 3000);
	});

	return (
		<View style={[styles.container, { backgroundColor: color100 }]}>
			<BGLinearGradient />
			<Main>
				<CenterMain>
					<View style={styles.imageContainer}>
						<Logo />
					</View>
					<Heading customStyle={{}}>gacpaq</Heading>
					<Paragraph
						customStyle={{
							color: "#fff",
							fontSize: 20,
							lineHeight: 23.6,
							maxWidth: 340,
						}}
					>
						The global adolescent and children activity questionnaire
					</Paragraph>
					<ProgressBar />
				</CenterMain>
			</Main>
		</View>
	);
};

export default GenericSplash;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	imageContainer: {},
});
