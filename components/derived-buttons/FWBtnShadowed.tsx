import React from "react";
import FullWidthButton from "components/buttons/FullWidthButton";

interface Props {
	label: string;
	onPress: () => void;
	colorTheme?: string;
}

function FWBtnShadowed({ label, onPress, colorTheme }: Props): React.ReactElement {
	return (
		<FullWidthButton
			onPress={onPress}
			customStyle={{
				backgroundColor: "#fff",
				borderWidth: 3,
				borderColor: colorTheme ?? "#fff",
				shadowColor: colorTheme ?? "#fff",
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
		</FullWidthButton>
	);
}

export default FWBtnShadowed;
