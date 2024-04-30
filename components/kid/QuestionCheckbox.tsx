import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import {
	extractUserSpecifiedOtherFromArray,
	getUserSpecifiedOther,
	isOtherOption,
	isOtherWithSpecifiedValue,
	type OptionInterface,
} from "utils/options";
import { horizontalScale } from "utils/responsive";
import Option from "./subcomponents/Option";

interface PropsInterface {
	options: OptionInterface[];
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionCheckbox({
	options,
	onChange,
	selectedValue,
}: PropsInterface): React.ReactElement {
	const SEPARATOR = " | ";
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage, device } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string[]>(initializeSelectedValue());
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const [autofocusOtherField, setAutoFocusOtherField] = useState<boolean>(false);

	useState(() => {
		setAutoFocusOtherField(false);
	});

	useEffect(() => {
		if (JSON.stringify(selected) !== JSON.stringify(selectedValue)) {
			setSelected(initializeSelectedValue());
		}
	}, [currentPage, selectedValue]);

	useEffect(() => {
		if (arrayHasOther(selected)) {
			setIsOtherSelected(true);
		} else {
			setIsOtherSelected(false);
		}
	}, [selected]);

	function initializeSelectedValue(): string[] {
		return selectedValue === "" || selectedValue === null ? [] : selectedValue.split(SEPARATOR);
	}

	function arrayHasOther(arr: string[]): boolean {
		return arr.some(isOtherOption);
	}

	function everyNotAnswer(value: string): boolean {
		const finalValue = value.toString().toLowerCase();
		return !["prefer not to answer", "prefer not to say", "none of the above"].includes(finalValue);
	}

	function someNotAnswer(value: string): boolean {
		const finalValue = value.toString().toLowerCase();
		return ["prefer not to answer", "prefer not to say", "none of the above"].includes(finalValue);
	}

	function selectHandler(value: string): void {
		let finalSelected = "";
		let existingSelectedValue = initializeSelectedValue();

		if (value === "" || value === null || value === undefined) return;

		// activate other field if "other" or "other (xxxxx)" is selected
		if (isOtherOption(value)) {
			setAutoFocusOtherField(true);
		}

		// if value is "prefer not to answer" or" prefer not to say" or "none of the above" reset existing value and add this
		if (someNotAnswer(value)) {
			finalSelected = value;
			onChange(finalSelected);
			return;
		} else {
			// remove "prefer not to answer" or "prefer not to say" or "none of the above" if it is selected
			existingSelectedValue = existingSelectedValue.filter(everyNotAnswer);
		}

		// check if the other option in the format "other" or "other (xxxxx)" is selected
		if (isOtherOption(value)) {
			// if "Other" or "other" is selected
			if (value.toString().toLowerCase() === "other") {
				if (arrayHasOther(existingSelectedValue)) {
					// if "Other", "other", "other (xxxx)" is already selected, remove all
					finalSelected = existingSelectedValue
						.filter((item) => !isOtherOption(item))
						.join(SEPARATOR);
				} else {
					// if not add it
					finalSelected = [...existingSelectedValue, value].join(SEPARATOR);
				}
			}

			// if "other (xxxxx)" is selected
			if (isOtherWithSpecifiedValue(value)) {
				const withoutOther = existingSelectedValue.filter((item) => !isOtherOption(item));
				const specificValue = getUserSpecifiedOther("", value);

				// if there is a value specified with "other" and it is not empty
				if (specificValue.trim() !== "") {
					// add it
					finalSelected = [...withoutOther, value].join(SEPARATOR);
				} else {
					// add "Other"
					finalSelected = [...withoutOther, "Other"].join(SEPARATOR);
				}
			}
		} else {
			if (existingSelectedValue.includes(value)) {
				finalSelected = existingSelectedValue.filter((item) => item !== value).join(SEPARATOR);
			} else {
				finalSelected = [...existingSelectedValue, value].join(SEPARATOR);
			}
		}
		onChange(finalSelected);
	}

	const enableColumnWrap = device.isTablet && device.orientation === "landscape";
	const numColumn = enableColumnWrap ? 2 : 1;
	const adjustWidth = enableColumnWrap ? horizontalScale(150, device.screenWidth) : "100%";

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
					contentContainerStyle={{ paddingBottom: 20 }}
					renderItem={({ item }) => {
						return (
							<Option
								text={item.text}
								value={item.value}
								selected={
									selected !== null &&
									(selected?.includes(item.value) ||
										(isOtherOption(item.value) && arrayHasOther(selected)))
								}
								selectHandler={selectHandler}
								color={color100}
								width={adjustWidth}
								isOtherSelected={isOtherSelected}
								autofocusOtherField={autofocusOtherField}
								defaultOtherInputValue={extractUserSpecifiedOtherFromArray(selected)}
							/>
						);
					}}
				/>
			</View>
		</SafeAreaView>
	);
}

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
