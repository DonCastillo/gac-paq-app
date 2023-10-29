import React, { useContext } from "react";
import PropTypes from "prop-types";
import FullWidthButton from "../../buttons/FullWidthButton";
import { SettingContext } from "../../../store/settings";

SingleNav.propTypes = {
	label: PropTypes.string,
	onPress: PropTypes.func,
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
				backgroundColor: color100,
			}}
			onPress={nextPage}
		>
			{label}
		</FullWidthButton>
	);
}
