import { useContext } from "react";
import FullWidthButton from "../../buttons/FullWidthButton";
import { SettingContext } from "../../../store/settings";
import { DefaultStyle, GeneralStyle } from "../../../styles/general";

export default function SingleNav({ label, onPress }) {
	const settingCtx = useContext(SettingContext);
	const { colorTheme } = settingCtx.settingState;
	const { color100 } = colorTheme;

	function nextPage() {
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
