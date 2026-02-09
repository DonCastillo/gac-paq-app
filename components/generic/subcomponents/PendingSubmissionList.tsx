import FlatListContainer from "@components/FlatListContainer";
import LanguageIndicator from "@components/LanguageIndicator";
import Paragraph from "@components/Paragraph";
import { type FinalResponseType } from "@interface/union.type";
import { getPhrases } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { adjustWritingDirection } from "@utils/style";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

interface Props {
	data: FinalResponseType[];
}

const PendingSubmissionList = ({ data }: Props): React.ReactElement => {
	const [resultComponent, setResultComponent] = useState<React.ReactElement | null>(null);
	const phrases = useSelector(getPhrases);

	useEffect(() => {
		if (data.length > 0) {
			setResultComponent(
				<FlatListContainer
					removeClippedSubviews={false}
					horizontal={false}
					data={data}
					renderItem={({ item, index }) => {
						return (
							<View
								style={{
									elevation: 2,
									flex: 1,
									borderRadius: 5,
									shadowColor: "#000",
									shadowOffset: {
										width: 0.5,
										height: 1,
									},
									shadowOpacity: 0.2,
									shadowRadius: 2,
									backgroundColor: "#fff",
									paddingVertical: 15,
									paddingHorizontal: 10,
									marginBottom: 10,
								}}
							>
								<View
									style={{
										height: "100%",
										width: "100%",
										flexDirection: "row",
										gap: 5,
									}}
								>
									<View style={{ width: 30 }}>
										<Text style={{ color: "#000" }}>{index + 1}</Text>
									</View>

									<View style={{ width: 60 }}>
										<LanguageIndicator countryCode={typeof item.language_location === "string" ? item.language_location.slice(-2) : null} />
									</View>

									<View style={{ flex: 2 }}>
										<Text style={{ color: "#000" }}>
											{typeof item.start_time === "string" ? moment(item.start_time).format("YYYY-MM-DD h:mm A") : ""}
										</Text>
									</View>
									<View style={{ flex: 2 }}>
										<Text style={{ textAlign: "right" }}>{String(item.participant_id)}</Text>
									</View>
								</View>
							</View>
						);
					}}
					bounces={false}
					persistentScrollbar={true}
					showsVerticalScrollIndicator={true}
					contentContainerStyle={{ direction: adjustWritingDirection() }}
					scrollContainerStyle={GeneralStyle.adult.flatListScrollContainer}
					scrollIndicatorStyle={GeneralStyle.adult.flatListScrollIndicator}
				/>,
			);
		} else {
			setResultComponent(
				<View style={{ flex: 1 }}>
					<Paragraph customStyle={{ color: "#000" }}>{phrases?.noPendingSubmissions}</Paragraph>
				</View>,
			);
		}
	}, [data]);

	return (
		<View
			style={{
				flex: 1,
				paddingTop: 0,
				width: "100%",
				height: "100%",
			}}
		>
			{resultComponent}
		</View>
	);
};

export default PendingSubmissionList;
