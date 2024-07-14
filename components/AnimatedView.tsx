import React, { useLayoutEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import { getCurrentPageNumber } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
	style?: any;
}

const AnimatedView = ({ children, style }: PropsInterface): React.ReactElement => {
	const [isContentVisible, setIsContentVisible] = useState(false);
	const currentPageNumber = useSelector(getCurrentPageNumber);

	useLayoutEffect(() => {
		setIsContentVisible(true);
		return () => {
			setIsContentVisible(false);
		};
	}, [currentPageNumber]);
	return (
		<Animatable.View
			animation={isContentVisible ? "fadeIn" : "fadeOut"}
			delay={0}
			duration={100}
			style={{ flex: 1, ...style }}
			useNativeDriver={true}
			easing={"ease-in"}
		>
			{children}
		</Animatable.View>
	);
};

export default AnimatedView;
