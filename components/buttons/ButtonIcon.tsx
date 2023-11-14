import React from "react";
import { Icon } from "@rneui/themed";

interface ButtonIconPropsInterface {
	type?: string;
	color: string;
	name: string;
	size?: number;
	onPress: () => void;
}

export default function ButtonIcon({
	type,
	color,
	name,
	size,
	onPress,
}: ButtonIconPropsInterface): React.ReactElement {
	return (
		<Icon
			type={type ?? "ionicons"}
			name={name}
			size={size ?? 50}
			color={color}
			onPress={onPress}
		/>
	);
}
