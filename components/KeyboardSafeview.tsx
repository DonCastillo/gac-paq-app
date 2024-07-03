import React, { useEffect } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getDevice, setKeyboardState } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
}

const KeyboardSafeview = ({ children }: PropsInterface): React.ReactElement => {
	const dispatch = useDispatch();
	const device = useSelector(getDevice);

	useEffect(() => {
		const keyboardDidShow = Keyboard.addListener("keyboardDidShow", () => {
			dispatch(setKeyboardState(true));
		});

		const keyboardDidHide = Keyboard.addListener("keyboardDidHide", () => {
			dispatch(setKeyboardState(false));
		});

		const keyboardWillHide = Keyboard.addListener("keyboardWillHide", () => {
			dispatch(setKeyboardState(false));
		});

		const keyboardWillShow = Keyboard.addListener("keyboardWillShow", () => {
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
