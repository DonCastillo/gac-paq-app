import React from "react";
import PropTypes from "prop-types";
import FullWidthButton from "components/buttons/FullWidthButton";
import { useSelector } from "react-redux";
import { getColorTheme } from "store/settings/settingsSlice";

SingleNav.propTypes = {
	label: PropTypes.string,
	onPress: PropTypes.func,
};

export default function SingleNav({ label, onPress }): React.ReactElement {
	const colorTheme = useSelector(getColorTheme);
	const { color100 } = colorTheme;

	function nextPage(): void {
		onPress();
	}

	return (
		<FullWidthButton
			customStyle={{
				backgroundColor: color100,
			}}
			onPress={nextPage}
		>
			{label}
		</FullWidthButton>
	);
}
