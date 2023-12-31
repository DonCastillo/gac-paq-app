import React from "react";
import ButtonContainerWidth from "../buttons/ButtonContainerWidth";

interface Props {
	label: string;
	onPress: () => void;
}

function BtnCntrWdthShadowed({ label, onPress }: Props): React.ReactElement {
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

export default BtnCntrWdthShadowed;
