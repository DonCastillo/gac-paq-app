import React from "react";
import PropTypes from "prop-types";
import FullWidthButton from "components/buttons/FullWidthButton";
import { DefaultStyle } from "styles/general";
import { useSelector } from "react-redux";
import { getColorTheme } from "store/settings/settingsSlice";

SingleNav.propTypes = {
	label: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
};

export default function SingleNav({ label, onPress }): React.ReactElement {
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
}
