import React, { useContext, useRef } from "react";
import { Pressable, TextInput, View, Text } from "react-native";
import { SettingContext } from "store/settings";
import { GeneralStyle } from "styles/general";

interface ProposInterface {
	text: string;
	value: string;
	selected: boolean;
	selectHandler: (value: string) => void;
	color: string;
	width?: string | number;
	isOtherSelected?: boolean;
}

export default function Option({
	text,
	value,
	selected,
	selectHandler,
	color,
	width = "100%",
	isOtherSelected = false,
}: ProposInterface): React.ReactElement {
	const otherInputRef = useRef<TextInput>(null);

	return (
		<View>
			<View
				style={{
					width,
					borderWidth: GeneralStyle.kid.optionContainer.borderWidth,
					borderRadius: GeneralStyle.kid.optionContainer.borderRadius,
					marginRight: GeneralStyle.kid.optionContainer.marginRight,
					marginBottom: GeneralStyle.kid.optionContainer.marginBottom,
					borderColor: color,
					overflow: "hidden",
				}}
			>
				{/* Option Container */}
				<Pressable
					style={[
						{
							paddingHorizontal: GeneralStyle.kid.optionContainer.paddingHorizontal,
							paddingVertical: GeneralStyle.kid.optionContainer.paddingVertical,
							backgroundColor: selected ? color : "#fff",
						},
						isOtherSelected && {
							borderBottomLeftRadius: 0,
							borderBottomRightRadius: 0,
						},
					]}
					onPress={() => selectHandler(value)}
				>
					<Text
						style={{
							...GeneralStyle.kid.optionText,
							color: selected ? "#fff" : "#000",
						}}
					>
						{text}
					</Text>
				</Pressable>
				{/* Other Field */}
				{value.toString().toLowerCase() === "other" && isOtherSelected && (
					<View
						style={[
							{
								backgroundColor: "white",
								overflow: "hidden",
								display: "flex",
								paddingHorizontal: GeneralStyle.kid.field.paddingHorizontal,
							},
						]}
					>
						<TextInput
							ref={otherInputRef}
							style={{
								fontSize: GeneralStyle.kid.field.fontSize,
								paddingVertical: GeneralStyle.kid.field.paddingVertical,
							}}
							onLayout={(event) => {
								otherInputRef?.current?.focus();
							}}
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={() => console.log("entering other value")}
							placeholder="Please Specify"
						/>
					</View>
				)}
			</View>
		</View>
	);
}