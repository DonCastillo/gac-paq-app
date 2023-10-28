import { useContext } from "react";
import FullWidthButton from "../../buttons/FullWidthButton";
import { SettingContext } from "../../../store/settings";

export default function SingleNav({ label, onPress }) {
	const settingCtx = useContext(SettingContext);
	const { colorTheme } = settingCtx.settingState;
	const { color100, color200 } = colorTheme;

	function nextPage() {
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
