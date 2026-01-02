import FullWidthButton from "@components/buttons/FullWidthButton";
import { getColorTheme } from "@store/settings/settingsSlice";
import React from "react";
import { useSelector } from "react-redux";

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
				backgroundColor: color100,
			}}
			onPress={nextPage}
		>
			{label}
		</FullWidthButton>
	);
};

export default SingleNav;
