import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

interface PropsInterface {
	children: React.ReactNode;
}

export default function DismissKeyboard({ children }: PropsInterface): React.ReactElement {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={{ flex: 1 }}>{children}</View>
		</TouchableWithoutFeedback>
	);
}
