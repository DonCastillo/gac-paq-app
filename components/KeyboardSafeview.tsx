import React, { useContext, useEffect } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from "react-native";
import { SettingContext } from "store/settings";

interface PropsInterface {
	children: React.ReactNode;
}

export default function KeyboardSafeview({ children }: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { settingState, setKeyboardState } = settingCtx;
	const { device } = settingState;

	useEffect(() => {
		const keyboardDidShow = Keyboard.addListener("keyboardDidShow", () => {
			setKeyboardState(true);
		});

		const keyboardDidHide = Keyboard.addListener("keyboardDidHide", () => {
			setKeyboardState(false);
		});

		const keyboardWillHide = Keyboard.addListener("keyboardWillHide", () => {
			setKeyboardState(false);
		});

		const keyboardWillShow = Keyboard.addListener("keyboardWillShow", () => {
			setKeyboardState(true);
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
}
