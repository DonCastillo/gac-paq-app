import React, { memo } from "react";
import { Icon } from "@rneui/themed";

interface Props {
	type?: string;
	color: string;
	name: string;
	size?: number;
	onPress: () => void;
}

const ButtonIcon = ({ type, color, name, size, onPress }: Props): React.ReactElement => {
	return (
		<Icon
			type={type ?? "ionicons"}
			name={name}
			size={size ?? 50}
			color={color}
			onPress={onPress}
		/>
	);
};

export default memo(ButtonIcon, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
