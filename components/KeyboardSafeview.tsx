import React, { useContext } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from "react-native";
import { SettingContext } from "store/settings";

interface PropsInterface {
	children: React.ReactNode;
}

export default function KeyboardSafeview({ children }: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;
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
