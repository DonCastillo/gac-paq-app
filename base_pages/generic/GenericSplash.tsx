import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LoadingScreenAdult from "base_pages/adult/LoadingScreenAdult";

const GenericSplash = (): React.ReactElement => {
	const navigation = useNavigation();

	useEffect(() => {
		const timeout = setTimeout(() => {
			clearInterval(timeout);
			navigation.navigate("RegularPageScreen" as never);
		}, 3000);
	});

	return <LoadingScreenAdult displayTitle={true} />;
};

export default GenericSplash;
