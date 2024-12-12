import React from "react";
import type { ChoiceIcon, LanguageInterface } from "interface/payload.type";
import QuestionRadio from "components/adults/QuestionRadio";
import { optionLanguage, optionLetter } from "utils/options.utils";
import { useSelector } from "react-redux";
import { getLanguageOption } from "store/questions/questionsSlice";
import { SafeAreaView, StyleSheet, View, FlatList, Text, ScrollView, Pressable } from "react-native";
import { verticalScale } from "utils/responsive.utils";
import { getDevice } from "store/settings/settingsSlice";
import { GeneralStyle } from "styles/general";
import { adjustRadioImageAspectRatio, adjustRadioImageBlockText, adjustWritingDirection } from "utils/style";

interface PropsInterface {
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

const QuestionSelectLanguageAdult = ({
	onChange,
	selectedValue,
}: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);
	const options: LanguageInterface[] = useSelector(getLanguageOption);
	const itemsRaw: ChoiceIcon[] = optionLanguage(options);

	const selectHandler = (value: string | null): void => {
		onChange(value);
	};

	console.log("options: ", options);

	const languageOption = (item: any, index: number): React.ReactElement => {
		return (
			<Pressable
				style={[
					styles.blockOptionContainer,
					{
						maxWidth: "100%",
						width: "100%",
						aspectRatio: 1/1,
						flex: 1/3,
					},
				]}
			>
				<View
					style={{
						...styles.blockOptionImageContainer,
						flex: 1,
						position: "relative",
					}}
				>
				</View>
				<View style={{ ...styles.blockOptionLabelContainer }}>
					<Text
						style={{
							...styles.blockOptionLabelText,
							...adjustRadioImageBlockText(),
							writingDirection: adjustWritingDirection(),
						}}
					>
						xx
					</Text>
				</View>
			</Pressable>
		);
	};

	return (
		// <QuestionRadio
		// 	options={itemsRaw}
		// 	selectedValue={selectedValue}
		// 	onSelect={selectHandler}
		// />
		<SafeAreaView
			style={[styles.container, { maxHeight: verticalScale(500, device.screenHeight) }]}
		>
			<View style={{ backgroundColor: "orange"}}>
				{options.length > 0 && (
					<FlatList
						initialNumToRender={4}
						data={[...options]}
						renderItem={({ item, index }) => languageOption(item, index)}
						numColumns={3}
						key={3}
						bounces={false}
						contentContainerStyle={{ backgroundColor: "orange", gap: 10 }}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

export default QuestionSelectLanguageAdult;

const styles = StyleSheet.create({
	blockOptionContainer: {
		...GeneralStyle.adult.blockOptionContainer,
	},
	blockOptionImageContainer: {
		...GeneralStyle.adult.blockOptionImageContainer,
		flex: 1/3,
	},
	blockOptionLabelContainer: {
		...GeneralStyle.adult.blockImageLabelContainer,
	},
	blockOptionLabelText: {
		...GeneralStyle.adult.optionImageLabelText,
	},
	container: {
		justifyContent: "center",
	},
	imageFilter: {
		...GeneralStyle.general.imageFilter,
	},
	optionImage: {
		...GeneralStyle.kid.optionImage,
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
	},
});
