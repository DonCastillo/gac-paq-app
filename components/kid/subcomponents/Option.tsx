import React, { memo, useContext, useRef } from "react";
import { Pressable, TextInput, View, Text } from "react-native";
import { SettingContext } from "store/settings";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive";

interface PropsInterface {
	text: string;
	value: string;
	selected: boolean;
	selectHandler: (value: string) => void;
	color: string;
	width?: string | number;
	isOtherSelected?: boolean;
	autofocusOtherField?: boolean;
}

function Option({
	text,
	value,
	selected,
	selectHandler,
	color,
	width = "100%",
	isOtherSelected = false,
	autofocusOtherField = false,
}: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const otherInputRef = useRef<TextInput>(null);
	const { device } = settingCtx.settingState;

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
							paddingVertical: moderateScale(8, device.screenHeight),
							paddingHorizontal: moderateScale(20, device.screenWidth),
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
							fontSize: moderateScale(
								device.isTablet ? 14 : 16,
								device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
							),
							lineHeight: moderateScale(
								device.isTablet ? 18 : 20,
								device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
							),
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
								if (autofocusOtherField) {
									otherInputRef?.current?.focus();
								}
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

export default memo(Option);
