import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SettingContext } from "store/settings";

interface ScrollContainerPropsInterface {
	children: React.ReactNode;
}

export default function ScrollContainer({
	children,
}: ScrollContainerPropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { currentPageNumber, device } = settingCtx.settingState;
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
				backgroundColor: "pink",
			}}
		>
			<View onStartShouldSetResponder={() => true}>{children}</View>
		</ScrollView>
	);
}
