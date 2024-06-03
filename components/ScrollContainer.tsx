import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { getCurrentPageNumber, getDevice } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
}

const ScrollContainer = ({ children }: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	useEffect(() => {
		setOffset({ x: 0, y: 0 });
	}, [currentPageNumber]);

	return (
		<ScrollView
			contentOffset={offset}
			centerContent={true}
			alwaysBounceVertical={false}
			bounces={false}
			contentContainerStyle={{
				flexGrow: device.platform === "android" ? 1 : 0,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<View onStartShouldSetResponder={() => true}>{children}</View>
		</ScrollView>
	);
};

export default ScrollContainer;
