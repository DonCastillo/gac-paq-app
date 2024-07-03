import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LoadingScreenAdult from "base_pages/adult/LoadingScreenAdult";
import { useSelector } from "react-redux";
import { getCurrentPageNumber } from "store/settings/settingsSlice";

const GenericSplash = (): React.ReactElement => {
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const navigation = useNavigation();

	useEffect(() => {
		const timeout = setTimeout(() => {
			navigation.navigate("RegularPageScreen" as never);
		}, 3000);

		return () => {
			clearTimeout(timeout);
		};
	}, [navigation, currentPageNumber]);

	return (
		<LoadingScreenAdult
			displayTitle={true}
			key={currentPageNumber}
		/>
	);
};

export default GenericSplash;
