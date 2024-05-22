import React from "react";
import ButtonContainerWidth from "components/buttons/ButtonContainerWidth";
import { Shadow } from "react-native-shadow-2";
import { DefaultStyle } from "styles/general";
import { useSelector } from "react-redux";
import { getDevice } from "store/settings/settingsSlice";

interface Props {
	label: string;
	onPress: () => void;
	colorTheme?: string;
}

function BtnCntrWdthShadowed({ label, onPress, colorTheme }: Props): React.ReactElement {
	const device = useSelector(getDevice);

	const ButtonContainerComponent = (
		<ButtonContainerWidth
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
		</ButtonContainerWidth>
	);

	if (device.platform === "android") {
		return (
			<Shadow
				distance={0.5}
				startColor={colorTheme ?? "#fff"}
				endColor={colorTheme ?? "#fff"}
				offset={[5, 5]}
				paintInside={true}
				style={{ borderRadius: DefaultStyle.button.borderRadius }}
			>
				{ButtonContainerComponent}
			</Shadow>
		);
	} else {
		return ButtonContainerComponent;
	}
}

export default BtnCntrWdthShadowed;
