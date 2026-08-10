import { getCurrentPageNumber } from "@store/settings/settingsSlice";
import React, { useLayoutEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";

interface PropsInterface {
	children: React.ReactNode;
	style?: any;
}

const AnimatedView = ({ children, style }: PropsInterface): React.ReactElement => {
	/**
	 * Starts visible so the first render asks for "fadeIn", not "fadeOut".
	 *
	 * Mounting in the hidden state made every screen play a fadeOut before the layout effect below
	 * could flip it to fadeIn. Both animations are native-driven and only 100ms long, so the two
	 * ran on the same node at once and whichever landed last won — when that was the fadeOut, the
	 * view stuck at opacity 0 and the screen came up blank with only the Toolbar and Navigation,
	 * which sit outside this component, still painted. Any remount cleared it, which is why
	 * pressing a button that toggles a loading state appeared to "fix" the page.
	 */
	const [isContentVisible, setIsContentVisible] = useState(true);
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
