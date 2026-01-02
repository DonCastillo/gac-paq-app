import QuestionSelectLanguageAdult from "@components/adults/QuestionSelectLanguageAdult";
import QuestionTitle from "@components/generic/QuestionTitle";
import QuestionLabel from "@components/kid/QuestionLabel";
import { useLanguageContext } from "@contexts/common/LanguageContext";
import { Component } from "@interface/function.type";
import { GeneralStyle } from "@styles/general";
import React from "react";
import { View } from "react-native";

const LanguageAdultContent: Component = () => {
	const { questionLabel, heading, selectedValue, changeHandler } = useLanguageContext();

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
			<QuestionSelectLanguageAdult
				onChange={changeHandler}
				selectedValue={selectedValue}
			/>
		</>
	);
};

export default LanguageAdultContent;
