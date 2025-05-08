import React, { useEffect, useState, useRef } from "react";
import { ScrollView, View, Animated } from "react-native";
import { useSelector } from "react-redux";
import { getCurrentPageNumber, getDevice } from "store/settings/settingsSlice";
import ScrollViewIndicator from "./generic/ScrollViewIndicator";

interface PropsInterface {
	children: React.ReactNode;
	containerStyle?: object;
	scrollContainerStyle?: object;
	scrollIndicatorStyle?: object;
}

const ScrollContainer = ({
	children,
	containerStyle,
	scrollContainerStyle,
	scrollIndicatorStyle,
}: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
	const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

	const scrollIndicator = useRef(new Animated.Value(0)).current;

	const scrollIndicatorSize =
		completeScrollBarHeight > visibleScrollBarHeight
			? (visibleScrollBarHeight * visibleScrollBarHeight) / completeScrollBarHeight
			: visibleScrollBarHeight;

	const difference =
		visibleScrollBarHeight > scrollIndicatorSize ? visibleScrollBarHeight - scrollIndicatorSize : 1;

	const scrollIndicatorPosition = Animated.multiply(
		scrollIndicator,
		visibleScrollBarHeight / completeScrollBarHeight,
	).interpolate({
		inputRange: [0, difference],
		outputRange: [0, difference],
		extrapolate: "clamp",
	});

	useEffect(() => {
		setOffset({ x: 0, y: 0 });
	}, [currentPageNumber]);

	return (
		<View style={{ flexDirection: "row", ...containerStyle }}>
			<ScrollView
				contentOffset={offset}
				centerContent={true}
				alwaysBounceVertical={false}
				bounces={false}
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
				onContentSizeChange={(_, height) => {
					setCompleteScrollBarHeight(height);
				}}
				onLayout={({
					nativeEvent: {
						layout: { height },
					},
				}) => {
					setVisibleScrollBarHeight(height);
				}}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollIndicator } } }], {
					useNativeDriver: false,
				})}
				contentContainerStyle={{
					flexGrow: device.platform === "android" ? 1 : 0,
					justifyContent: "center",
					alignItems: "center",
					paddingRight: 14,
				}}
			>
				<View onStartShouldSetResponder={() => true}>{children}</View>
			</ScrollView>
			<ScrollViewIndicator
				isVisible={Boolean(visibleScrollBarHeight - scrollIndicatorSize)}
				scrollIndicatorSize={scrollIndicatorSize}
				scrollIndicatorPosition={scrollIndicatorPosition}
				scrollContainerStyle={scrollContainerStyle}
				scrollIndicatorStyle={scrollIndicatorStyle}
			/>
		</View>
	);
};

export default ScrollContainer;
