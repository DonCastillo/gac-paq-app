import React from "react";
import FullWidthButton from "components/buttons/FullWidthButton";
import { DefaultStyle } from "styles/general";
import { useSelector } from "react-redux";
import { getColorTheme } from "store/settings/settingsSlice";

interface PropsInterface {
	label: string;
	onPress: () => void;
}

const SingleNav = ({ label, onPress }: PropsInterface): React.ReactElement => {
	const colorTheme = useSelector(getColorTheme);
	const { color100 } = colorTheme;

	const nextPage = (): void => {
		onPress();
	};

	return (
		<FullWidthButton
			customStyle={{
				backgroundColor: "#FFF",
				borderWidth: DefaultStyle.button.borderWidth,
				borderColor: color100,
			}}
			textStyle={{
				color: color100,
			}}
			onPress={nextPage}
		>
			{label}
		</FullWidthButton>
	);
};

export default SingleNav;
