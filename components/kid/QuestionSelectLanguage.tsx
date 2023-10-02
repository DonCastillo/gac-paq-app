import { Text, View, Image, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import LanguageInterface from "../../interface/language";
import Languages from "../../store/data/languages";
import { SettingContext } from "../../store/settings";
import QuestionRadioItemInterface from "../../interface/question_radio_item";
import DropDownSelector from "../DropDownPicker";


export default function QuestionSelectLanguage({ selectedValue, onChange }) {
    const settingCtx = useContext(SettingContext);
    const { color100, color200 } = settingCtx.settingState.colorTheme;
    const options: LanguageInterface[] = Languages;
    const itemsRaw: QuestionRadioItemInterface[] = options.map((option) => {
        return {
            label: option.name,
            value: option.lang_code,
            icon: () => (
                <Image
                    source={{
                        uri: `https://flagsapi.com/${option.flag_code}/flat/64.png`,
                    }}
                    style={styles.optionIcon}
                />
            ),
        };
    });




    return (
        <DropDownSelector
            options={[...itemsRaw]}
            selectedValue={selectedValue}
            onSelect={onChange}
        />
    );
}


const styles = StyleSheet.create({
    optionIcon: {
        width: 50,
        height: "100%",
    },
})