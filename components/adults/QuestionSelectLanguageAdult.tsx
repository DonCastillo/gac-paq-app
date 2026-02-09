import useCharacter from "@/hooks/useCharacter";
import useCurrentPage from "@/hooks/useCurrentPage";
import QuestionRadio from "@components/adults/QuestionRadio";
import type { Choice, LanguageInterface } from "@interface/payload.type";
import { getLanguageOption } from "@store/questions/questionsSlice";
import { getDevice } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { verticalScale } from "@utils/responsive.utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

interface PropsInterface {
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

const QuestionSelectLanguageAdult = ({ onChange, selectedValue }: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);
	const { currentPageNumber } = useCurrentPage();
	const { country } = useCharacter();
	const languageOptions: LanguageInterface[] = useSelector(getLanguageOption);

	const isEnglish = (langCode: string): boolean => {
		return langCode.startsWith("en");
	};

	const isCountryLanguage = (langCode: string): boolean => {
		return langCode.endsWith(country);
	};

	const languageCountryOptions: LanguageInterface[] = languageOptions.filter((option: LanguageInterface) => isCountryLanguage(option.lang_code));

	const finalOptions: Choice[] = languageCountryOptions.map((option: LanguageInterface) => ({
		label: isEnglish(option.lang_code) ? option.name : `${option.local_name} (${option.name})`,
		value: option.lang_code,
	}));

	console.log("++++++ Language Options ++++++");
	console.log("finalOptions", finalOptions);

	return (
		<View style={[styles.container, { maxHeight: verticalScale(400, device.screenHeight) }]}>
			<View style={{ backgroundColor: "pink" }}>
				<QuestionRadio
					key={currentPageNumber}
					selectedValue={selectedValue}
					enableRessetingValue={false}
					options={finalOptions}
					onSelect={(value: string | null) => {
						console.log("Selected language:", value);

						if (value !== null || value !== "" || value !== undefined) {
							onChange(value);
						}
					}}
				/>
			</View>
		</View>
	);
};

export default QuestionSelectLanguageAdult;

const styles = StyleSheet.create({
	blockOptionContainer: {
		...GeneralStyle.adult.blockOptionContainer,
	},
	blockOptionImageContainer: {
		...GeneralStyle.adult.blockOptionImageContainer,
		flex: 1 / 3,
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
