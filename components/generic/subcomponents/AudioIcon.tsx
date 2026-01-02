import Mode from "@/constants/mode.enum";
import useCharacter from "@/hooks/useCharacter";
import { GeneralStyle } from "@/styles/general";
import { Icon } from "@rneui/base";

type Props = {
	label: string;
	kidIcon: string;
	adultIcon: string;
	controlHandler: () => void;
};
const AudioIcon = ({ label, kidIcon, adultIcon, controlHandler }: Props) => {
	const { mode } = useCharacter();
	return (
		<Icon
			accessibilityLabel={label}
			type={mode === Mode.Kid ? "simple-line-icon" : "material-icons"}
			name={mode === Mode.Kid ? kidIcon : adultIcon}
			color={mode === Mode.Kid ? "#000" : "#fff"}
			size={GeneralStyle.general.icon.fontSize}
			onPress={controlHandler}
			containerStyle={{}}
		/>
	);
};

export default AudioIcon;
