import React, { forwardRef, useRef, useState } from "react";
import { FlatList, type FlatListProps, Animated } from "react-native";
import { View } from "react-native-animatable";
import ScrollViewIndicator from "./ScrollViewIndicator";

interface PropsInterface<ItemT> extends FlatListProps<ItemT> {
	contentContainerStyle?: object;
	scrollContainerStyle?: object;
	scrollIndicatorStyle?: object;
}

function FlatListContainerInner<ItemT>(
	props: PropsInterface<ItemT>,
	ref: React.Ref<FlatList<ItemT>>,
): React.ReactElement {
	const { contentContainerStyle, scrollContainerStyle, scrollIndicatorStyle, ...flatListProps } =
		props;

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

	return (
		<View style={{ flexDirection: "row" }}>
			<FlatList
				ref={ref}
				{...flatListProps}
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
					paddingRight: 14,
					...contentContainerStyle,
				}}
			/>
			<ScrollViewIndicator
				isVisible={Boolean(visibleScrollBarHeight - scrollIndicatorSize)}
				scrollIndicatorSize={scrollIndicatorSize}
				scrollIndicatorPosition={scrollIndicatorPosition}
				scrollContainerStyle={scrollContainerStyle}
				scrollIndicatorStyle={scrollIndicatorStyle}
			/>
		</View>
	);
}

const FlatListContainer = forwardRef(FlatListContainerInner) as <ItemT>(
	props: PropsInterface<ItemT> & { ref?: React.Ref<FlatList<ItemT>> },
) => React.ReactElement;

export default FlatListContainer;
