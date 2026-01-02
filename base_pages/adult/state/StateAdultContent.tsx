import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import State from "@constants/state.enum";
import { useStateContext } from "@contexts/specific/StateContext";
import { Component } from "@interface/function.type";
import { GeneralStyle } from "@styles/general";
import Images from "@styles/images";
import { adjustPageHeadingText, adjustStateDescriptionText } from "@utils/style";
import React from "react";
import { StyleSheet, View } from "react-native";

const StateAdultContent: Component = () => {
	const { heading, description, state } = useStateContext();
	const ErrorMark = Images.general.error;
	const CheckMark = Images.general.check;

	return (
		<>
			<View style={styles.stateIconContainer}>{state === State.Success ? <CheckMark /> : <ErrorMark />}</View>
			<Heading
				customStyle={{
					...GeneralStyle.adult.pageHeading,
					...adjustPageHeadingText(),
				}}
			>
				{heading}
			</Heading>
			<Paragraph
				customStyle={{
					...GeneralStyle.adult.pageParagraph,
					...adjustStateDescriptionText(),
				}}
			>
				{description}
			</Paragraph>
		</>
	);
};

export default StateAdultContent;

const styles = StyleSheet.create({
	stateIconContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});
