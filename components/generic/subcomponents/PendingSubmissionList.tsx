import FlatListContainer from "components/FlatListContainer";
import { type FinalResponseType } from "interface/union.type";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { GeneralStyle } from "styles/general";
import { adjustWritingDirection } from "utils/style";
import moment from "moment";
import LanguageIndicator from "components/LanguageIndicator";
import Paragraph from "components/Paragraph";
import { useSelector } from "react-redux";
import { getPhrases } from "store/settings/settingsSlice";

interface Props {
	data: FinalResponseType[];
}

const PendingSubmissionList = ({ data }: Props): React.ReactElement => {
	const [resultComponent, setResultComponent] = React.useState<React.ReactElement | null>(null);
	const phrases = useSelector(getPhrases);

	useEffect(() => {
		if (data.length > 0) {
			setResultComponent(
				<FlatListContainer
					removeClippedSubviews={false}
					horizontal={false}
					// data={[...sampledata, ...sampledata, ...sampledata, ...sampledata]}
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
										<LanguageIndicator langCode={item.language_location} />
									</View>

									<View style={{ flex: 2 }}>
										<Text style={{ color: "#000" }}>
											{moment(item.start_time).format("YYYY-MM-DD h:mm A")}
										</Text>
									</View>
									<View style={{ flex: 2 }}>
										<Text style={{ textAlign: "right" }}>{item.participant_id}</Text>
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
				<View style={{ backgroundColor: "pinkx", flex: 1 }}>
					<Paragraph customStyle={{ color: "#000" }}>{phrases?.noPendingSubmissions}</Paragraph>
				</View>,
			);
		}
	}, [data]);

	return (
		<View
			style={{ flex: 1, paddingTop: 0, width: "100%", height: "100%", backgroundColor: "orangex" }}
		>
			{resultComponent}
		</View>
	);
};

export default PendingSubmissionList;
