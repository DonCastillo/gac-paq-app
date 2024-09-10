import React, { useEffect } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { disableNarrationAutoplay, getCurrentPageNumber, getDevice, setKeyboardState } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
}

const KeyboardSafeview = ({ children }: PropsInterface): React.ReactElement => {
	const dispatch = useDispatch();
	const device = useSelector(getDevice);
	const currentPageNumber = useSelector(getCurrentPageNumber);

	console.log("outside keyboard Current Page Number: ", currentPageNumber);

	useEffect(() => {
		const keyboardDidShow = Keyboard.addListener("keyboardDidShow", () => {
			console.log("keyboardDidShow");
			dispatch(setKeyboardState(true));
			console.log("keyboard Current Page Number: ", currentPageNumber);
			dispatch(disableNarrationAutoplay(currentPageNumber));
		});

		const keyboardDidHide = Keyboard.addListener("keyboardDidHide", () => {
			console.log("keyboardDidHide");
			dispatch(setKeyboardState(false));
		});

		const keyboardWillHide = Keyboard.addListener("keyboardWillHide", () => {
			console.log("keyboardWillHide");
			dispatch(setKeyboardState(false));
		});

		const keyboardWillShow = Keyboard.addListener("keyboardWillShow", () => {
			console.log("keyboardWillShow");
			dispatch(setKeyboardState(true));
		});

		return () => {
			keyboardDidShow.remove();
			keyboardDidHide.remove();
			keyboardWillHide.remove();
			keyboardWillShow.remove();
		};
	}, []);

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={device.platform === "ios" ? "padding" : "height"}
		>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={{ flex: 1 }}>{children}</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default KeyboardSafeview;
