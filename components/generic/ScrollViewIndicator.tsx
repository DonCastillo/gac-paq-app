import React from "react";
import { View, Animated } from "react-native";

interface PropsInterface {
	isVisible: boolean;
	scrollIndicatorSize: number;
	scrollIndicatorPosition: Animated.AnimatedInterpolation<string | number>;
	scrollContainerStyle?: object;
	scrollIndicatorStyle?: object;
}

const ScrollViewIndicator = ({
	isVisible,
	scrollIndicatorSize,
	scrollIndicatorPosition,
	scrollContainerStyle = {},
	scrollIndicatorStyle = {},
}: PropsInterface): React.ReactElement => {
	if (isVisible) {
		return (
			<View
				style={{
					height: "100%",
					width: 6,
					// backgroundColor: "#F5F5F5",
					borderRadius: 6,
					...scrollContainerStyle,
				}}
			>
				<Animated.View
					style={{
						width: 6,
						borderRadius: 6,
						height: scrollIndicatorSize,
						transform: [{ translateY: scrollIndicatorPosition }],
						...scrollIndicatorStyle,
						// elevation: 5, // Android
						// shadowColor: "#000", // iOS
						// shadowOffset: { width: 0, height: 2 }, // iOS
						// shadowOpacity: 0.25, // iOS
						// shadowRadius: 3.84, // iOS
					}}
				/>
			</View>
		);
	} else {
		return <></>;
	}
};

export default ScrollViewIndicator;
