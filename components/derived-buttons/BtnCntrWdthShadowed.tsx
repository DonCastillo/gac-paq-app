import React from "react";
import ButtonContainerWidth from "../buttons/ButtonContainerWidth";

interface Props {
	label: string;
	onPress: () => void;
}

export default function BtnCntrWdthShadowed({ label, onPress }: Props): React.ReactElement {
	return (
		<ButtonContainerWidth
			onPress={onPress}
			borderColor={"#000"}
			bgColor={"#fff"}
			textColor={"#000"}
		>
			{label}
		</ButtonContainerWidth>
	);
}
