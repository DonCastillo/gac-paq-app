import { ParentComponent } from "@/interface/function.type";
import React from "react";
import { Text, View } from "react-native";

const AudioContainer: ParentComponent = ({ children }) => {
	const safeChildren = React.Children.toArray(children).map((child, index) => (typeof child === "string" ? <Text key={index}>{child}</Text> : child));

	return (
		<View
			style={{
				justifyContent: "flex-end",
				flexDirection: "row",
				gap: 20,
			}}
		>
			{safeChildren}
		</View>
	);
};

export default AudioContainer;
