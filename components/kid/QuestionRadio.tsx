import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import {
	getUserSpecifiedOther,
	isOtherOption,
	isOtherWithSpecifiedValue,
	optionLetter,
} from "utils/options.utils";
import { horizontalScale } from "utils/responsive.utils";
import Option from "./subcomponents/Option";
import { useSelector } from "react-redux";
import { getColorTheme, getCurrentPage, getDevice, getMode } from "store/settings/settingsSlice";
import type { Choice, ChoiceIcon } from "interface/payload.type";
import Mode from "constants/mode.enum";
import { getOptionSubLabel } from "utils/background.utils";
import { adjustWritingDirection } from "utils/style";

interface PropsInterface {
	options: ChoiceIcon[] | Choice[];
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

const QuestionRadio = ({
	options,
	onChange,
	selectedValue,
}: PropsInterface): React.ReactElement => {
	const currentPage = useSelector(getCurrentPage);
	const device = useSelector(getDevice);
	const colorTheme = useSelector(getColorTheme);
	let mode = useSelector(getMode);
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const [autofocusOtherField, setAutoFocusOtherField] = useState<boolean>(false);

	useState(() => {
		setAutoFocusOtherField(false);
	});

	useEffect(() => {
		if (selected !== selectedValue) {
			setSelected(selectedValue);
		}
	}, [currentPage, selectedValue]);

	useEffect(() => {
		if (isOtherOption(selected)) {
			setIsOtherSelected(true);
		} else {
			setIsOtherSelected(false);
		}
	}, [selected]);

	const selectHandler = (value: string | null): void => {
		if (value === "" || value === null || value === undefined) return;

		if (isOtherOption(value)) {
			setAutoFocusOtherField(true);
		}

		// check if the other option in the format "other" or "other (xxxxx)" is selected
		if (isOtherOption(value)) {
			// if "Other" or "other" is selected
			if (value.toString().toLowerCase() === "other") {
				if (isOtherOption(selected)) {
					// if "Other", "other", "other (xxxx)" is already selected, remove all
					onChange(null);
					return;
				} else {
					// if not add it
					onChange(value);
					return;
				}
			}

			// if "other (xxxxx)" is selected
			if (isOtherWithSpecifiedValue(value)) {
				const specificValue = getUserSpecifiedOther("", value);

				// if there is a value specified with "other" and it is not empty
				if (specificValue.trim() !== "") {
					// add it
					onChange(value);
				} else {
					// add "Other"
					onChange("Other");
				}
			}
		} else {
			if (selected === value) {
				onChange(null);
			} else {
				onChange(value);
			}
		}
	};

	const enableColumnWrap = device.isTablet && device.orientation === "landscape";
	const numColumn = enableColumnWrap ? 2 : 1;
	const adjustWidth = enableColumnWrap ? horizontalScale(150, device.screenWidth) : "100%";

	// if on Mode page, set mode to Kid to enable getOptionSublabel
	if (currentPage.page.ident === "mode") {
		mode = Mode.Kid;
	}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<FlatList
					removeClippedSubviews={false}
					horizontal={false}
					bounces={false}
					numColumns={numColumn}
					key={enableColumnWrap.toString()}
					data={[...options]}
					contentContainerStyle={{
						paddingBottom: 20,
						direction: adjustWritingDirection(),
					}}
					renderItem={({ item, index }) => {
						return (
							<Option
								text={`${optionLetter(index)}.  ${item.label}`}
								value={item.value}
								selected={
									selected !== null &&
									(selected === item.value ||
										(isOtherOption(item.value) && isOtherOption(selected)))
								}
								selectHandler={selectHandler}
								color={color100}
								width={adjustWidth}
								isOtherSelected={isOtherSelected}
								autofocusOtherField={autofocusOtherField}
								defaultOtherInputValue={getUserSpecifiedOther(item.value, selected)}
								optionSublabel={getOptionSubLabel(item.sublabel, mode) ?? undefined}
							/>
						);
					}}
				/>
			</View>
		</SafeAreaView>
	);
};

export default QuestionRadio;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		maxHeight: "100%",
	},
	optionContainer: {
		...GeneralStyle.kid.optionContainer,
		width: "100%",
	},
	optionText: {
		...GeneralStyle.kid.optionText,
	},
	optionUnpressed: {
		// backgroundColor: "#FFF",
	},
	textPressed: {
		color: "#fff",
	},
	textUnpressed: {
		color: "#000",
	},
});
