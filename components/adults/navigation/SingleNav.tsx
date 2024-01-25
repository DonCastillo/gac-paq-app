import React, { useContext } from "react";
import PropTypes from "prop-types";
import FullWidthButton from "components/buttons/FullWidthButton";
import { SettingContext } from "store/settings";
import { DefaultStyle } from "styles/general";

SingleNav.propTypes = {
	label: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
};

export default function SingleNav({ label, onPress }): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme } = settingCtx.settingState;
	const { color100 } = colorTheme;

	function nextPage(): void {
		onPress();
	}

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
