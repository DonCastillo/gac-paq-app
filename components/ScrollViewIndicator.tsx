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
					backgroundColor: "#c4c4c4" + "99",
					height: "100%",
					width: 6,
					borderRadius: 6,
					...scrollContainerStyle,
				}}
			>
				<Animated.View
					style={{
						backgroundColor: "#5c5c5c",
						width: 6,
						borderRadius: 6,
						height: scrollIndicatorSize,
						transform: [{ translateY: scrollIndicatorPosition }],
						...scrollIndicatorStyle,
					}}
				/>
			</View>
		);
	} else {
		return <></>;
	}
};

export default ScrollViewIndicator;
