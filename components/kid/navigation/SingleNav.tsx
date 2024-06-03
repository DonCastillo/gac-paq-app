import React from "react";
import FullWidthButton from "components/buttons/FullWidthButton";
import { useSelector } from "react-redux";
import { getColorTheme } from "store/settings/settingsSlice";

interface PropsInterface {
	label: string;
	onPress: () => void;
}

const SingleNav = ({ label, onPress }: PropsInterface): React.ReactElement => {
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


export default SingleNav;