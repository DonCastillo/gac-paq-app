import QuestionLabel from "@components/kid/QuestionLabel";
import QuestionSelectLanguage from "@components/kid/QuestionSelectLanguage";
import { useDropdownContext } from "@contexts/common/DropdownContext";
import { useLanguageContext } from "@contexts/common/LanguageContext";
import useCurrentPage from "@hooks/useCurrentPage";
import { Component } from "@interface/function.type";
import { GeneralStyle } from "@styles/general";
import React from "react";
import { StyleSheet, View } from "react-native";

const LanguageKidContent: Component = () => {
	const { dropdownOpen, setDropdownOpen } = useDropdownContext();
	const { questionLabel, changeHandler, selectedValue } = useLanguageContext();
	const { currentPageNumber } = useCurrentPage();

	return (
		<>
			<View style={{ marginBottom: 9 }}>
				<QuestionLabel
					textStyle={GeneralStyle.kid.introQuestionLabel}
					customStyle={{ marginBottom: 7 }}
				>
					{questionLabel}
				</QuestionLabel>
			</View>

			<View style={styles.questionComponentContainer}>
				<QuestionSelectLanguage
					key={currentPageNumber}
					onChange={changeHandler}
					selectedValue={selectedValue}
					dropdownOpen={dropdownOpen}
					setDropdownOpen={setDropdownOpen}
				/>
			</View>
		</>
	);
};

export default LanguageKidContent;

const styles = StyleSheet.create({
	questionComponentContainer: {
		...GeneralStyle.kid.questionComponentContainer,
	},
});
