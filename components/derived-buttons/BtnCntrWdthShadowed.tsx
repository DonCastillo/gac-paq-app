import React from "react";
import ButtonContainerWidth from "components/buttons/ButtonContainerWidth";

interface Props {
	label: string;
	onPress: () => void;
	colorTheme?: string;
}

function BtnCntrWdthShadowed({ label, onPress, colorTheme }: Props): React.ReactElement {
	return (
		<ButtonContainerWidth
			onPress={onPress}
			customStyle={{
				backgroundColor: "#fff",
				borderWidth: 3,
				borderColor: colorTheme ?? "#FFCB66",
				shadowColor: colorTheme ?? "#FFCB66",
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
