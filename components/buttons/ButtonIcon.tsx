import React, { memo } from "react";
import { Icon } from "@rneui/themed";

interface Props {
	type?: string;
	color: string;
	name: string;
	size?: number;
	onPress: () => void;
	accessibilityLabel?: string;
}

const ButtonIcon = ({ type, color, name, size, onPress, accessibilityLabel }: Props): React.ReactElement => {
	return (
		<Icon
			type={type ?? "ionicons"}
			name={name}
			size={size ?? 50}
			color={color}
			onPress={onPress}
			accessibilityLabel={accessibilityLabel}
		/>
	);
};

export default memo(ButtonIcon, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
