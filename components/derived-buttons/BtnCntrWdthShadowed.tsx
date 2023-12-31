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
			customStyle={{
				backgroundColor: "#fff",
				borderWidth: 3,
				borderColor: "#FFCB66",
				shadowColor: "#FFCB66",
				shadowOffset: {
					width: 5,
					height: 5,
				},
				shadowOpacity: 1000,
				shadowRadius: 0,
			}}
			textStyle={{
				color: "#000",
			}}
		>
			{label}
		</ButtonContainerWidth>
	);
}

export default BtnCntrWdthShadowed;
