import React, { memo, useRef } from "react";
import { Pressable, TextInput, View, Text } from "react-native";
import { GeneralStyle } from "styles/general";
import { isOtherOption } from "utils/options.utils";
import { moderateScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";

import { getDevice, getLanguage, getPhrases } from "store/settings/settingsSlice";

interface PropsInterface {
	text: string;
	value: string;
	selected: boolean;
	selectHandler: (value: string) => void;
	color: string;
	width?: string | number;
	isOtherSelected?: boolean;
	autofocusOtherField?: boolean;
	defaultOtherInputValue?: string;
	optionSublabel?: string;
}

const Option = ({
	text,
	value,
	selected,
	selectHandler,
	color,
	width = "100%",
	isOtherSelected = false,
	autofocusOtherField = false,
	defaultOtherInputValue,
	optionSublabel,
}: PropsInterface): React.ReactElement => {
	const otherInputRef = useRef<TextInput>(null);
	const device = useSelector(getDevice);
	const phrases = useSelector(getPhrases);
	const language = useSelector(getLanguage);

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
					{/* Main Label */}
					<Text
						style={{
							...GeneralStyle.kid.optionText,
							fontSize: moderateScale(
								device.isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 19 : 16,
								device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
							),
							lineHeight: moderateScale(
								device.isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 23 : 20,
								device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
							),
							color: selected ? "#fff" : "#000",
							writingDirection: language === "ar-AE" ? "rtl" : "ltr",
						}}
					>
						{text}
					</Text>

					{/* Sublabel */}
					{optionSublabel !== "" && optionSublabel !== undefined && optionSublabel !== null && (
						<Text
							style={{
								fontSize: moderateScale(
									device.isTablet
										? language === "ar-AE"
											? 15
											: 12
										: language === "ar-AE"
											? 15
											: 12,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
								lineHeight: moderateScale(
									device.isTablet
										? language === "ar-AE"
											? 19
											: 16
										: language === "ar-AE"
											? 19
											: 16,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
								writingDirection: language === "ar-AE" ? "rtl" : "ltr",
							}}
						>
							{optionSublabel}
						</Text>
					)}
				</Pressable>

				{/* Other Field */}
				{isOtherOption(value) && isOtherSelected && (
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
							onChangeText={(value) => {
								selectHandler(`other (${value})`);
							}}
							defaultValue={defaultOtherInputValue}
							placeholder={phrases?.specify}
							keyboardType={device.platform === "ios" ? "ascii-capable" : "visible-password"}
							textAlign={language === "ar-AE" ? "right" : "left"}
						/>
					</View>
				)}
			</View>
		</View>
	);
};

export default memo(Option);
