import { useCountryContext } from "@/contexts/common/CountryContext";
import QuestionSelectLanguageAdult from "@components/adults/QuestionSelectLanguageAdult";
import QuestionTitle from "@components/generic/QuestionTitle";
import QuestionLabel from "@components/kid/QuestionLabel";
import { Component } from "@interface/function.type";
import { getDevice } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { verticalScale } from "@utils/responsive.utils";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

const GenericCountryContent: Component = () => {
	const device = useSelector(getDevice);
	const { heading, questionLabel, changeHandler, selectedValue } = useCountryContext();
	return (
		<>
			<View style={{ marginBottom: 13 }}>
				<QuestionTitle>{heading}</QuestionTitle>
				<QuestionLabel
					textStyle={GeneralStyle.adult.questionLabel}
					customStyle={{ marginBottom: 7 }}
				>
					{questionLabel}
				</QuestionLabel>
			</View>
			<View style={{ maxHeight: verticalScale(500, device.screenHeight) }}>
				<QuestionSelectLanguageAdult
					onChange={changeHandler}
					selectedValue={selectedValue}
				/>
			</View>
		</>
	);
};

export default GenericCountryContent;
