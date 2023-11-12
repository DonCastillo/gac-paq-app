import React from "react";
import { Icon } from "@rneui/themed";

interface ButtonIconPropsInterface {
	type?: string;
	color: string;
	name: string;
	onPress: () => void;
}

export default function ButtonIcon({
	type,
	color,
	name,
	onPress,
}: ButtonIconPropsInterface): React.ReactElement {
	return (
		<Icon
			type={type ?? "ionicons"}
			name={name}
			size={70}
			color={color}
			onPress={onPress}
		/>
	);
}
