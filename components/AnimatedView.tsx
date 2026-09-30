import React from "react";
import * as Animatable from "react-native-animatable";

interface PropsInterface {
	children: React.ReactNode;
	style?: any;
}

const AnimatedView = ({ children, style }: PropsInterface): React.ReactElement => {
	/**
	 * Only ever fades in, and runs on the JS thread rather than the native driver.
	 *
	 * This used to toggle between "fadeIn" and "fadeOut" on page change, native-driven. Twice that
	 * left the view stuck at opacity 0 and the screen blank: first when a fadeOut raced the mount's
	 * fadeIn, and again on iPad (kid mode, section intro), where the page painted for a frame and
	 * then vanished while the component re-rendered mid-animation. The fadeOut never did anything
	 * useful (the cleanup and re-run happen in the same commit), and a JS-driven opacity is always
	 * re-applied from the animated value on re-render, so neither failure can recur.
	 */
	return (
		<Animatable.View
			animation="fadeIn"
			delay={0}
			duration={100}
			style={{ flex: 1, ...style }}
			useNativeDriver={false}
			easing={"ease-in"}
		>
			{children}
		</Animatable.View>
	);
};

export default AnimatedView;
