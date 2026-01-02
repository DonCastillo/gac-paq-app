import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import State from "@constants/state.enum";
import { useStateContext } from "@contexts/specific/StateContext";
import { Component } from "@interface/function.type";
import { getDevice } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import Images from "@styles/images";
import { verticalScale } from "@utils/responsive.utils";
import { adjustStateDescriptionText, adjustStateKidPageHeadingText } from "@utils/style";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

const StateKidContent: Component = () => {
	const { heading, description, state } = useStateContext();
	const device = useSelector(getDevice);
	const SuccessImage = Images.kids.graphics.success_image;
	const ErrorImage = Images.kids.graphics.error_image;
	const ErrorMark = Images.general.error;
	const CheckMark = Images.general.check;
	return (
		<>
			<Heading
				customStyle={{
					color: "#000",
					...GeneralStyle.kid.pageHeading,
					...adjustStateKidPageHeadingText(),
				}}
			>
				{heading}
			</Heading>
			<Paragraph
				customStyle={{
					color: "#000",
					...GeneralStyle.kid.pageParagraph,
					...adjustStateDescriptionText(),
				}}
			>
				{description}
			</Paragraph>
			<View style={styles.imageContainer}>
				{/* State Image */}
				<View style={[styles.stateImageContainer, {}]}>
					{state === State.Success ? (
						<SuccessImage
							height={verticalScale(device.isTablet ? 220 : 200, device.screenHeight)}
							width={verticalScale(device.isTablet ? 220 : 200, device.screenHeight)}
						/>
					) : (
						<ErrorImage
							height={verticalScale(device.isTablet ? 220 : 200, device.screenHeight)}
							width={verticalScale(device.isTablet ? 220 : 200, device.screenHeight)}
						/>
					)}
				</View>

				{/* State Icon */}
				<View style={styles.stateIconContainer}>{state === State.Success ? <CheckMark /> : <ErrorMark style={styles.errorMark} />}</View>
			</View>
		</>
	);
};

export default StateKidContent;

const styles = StyleSheet.create({
	imageContainer: {
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 15,
		flexDirection: "row",
		position: "relative",
	},
	stateImageContainer: {
		marginLeft: -30,
	},
	stateIconContainer: {
		position: "absolute",
		zIndex: -1,
		right: -50,
	},
	errorMark: {
		top: 40,
		left: -45,
	},
});
