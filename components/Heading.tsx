import { adjustHeading, adjustWritingDirection } from "@utils/style";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

const Heading = ({ children, customStyle = {} }: PropsInterface): React.ReactElement => {
	return (
		<View>
			<Text
				style={[
					styles.text,
					adjustHeading(),
					customStyle,
					{
						writingDirection: adjustWritingDirection(),
					},
				]}
			>
				{children}
			</Text>
		</View>
	);
};

export default Heading;

const styles = StyleSheet.create({
	text: {
		color: "white",
		flexWrap: "wrap",
	},
});
