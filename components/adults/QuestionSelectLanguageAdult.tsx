import { Image, StyleSheet, FlatList } from "react-native";
import { useContext, useState } from "react";
import LanguageInterface from "../../interface/language";
import Languages from "../../store/data/languages";
import { SettingContext } from "../../store/settings";
import RadioOption from "./item/RadioOption";
import QuestionRadioItemInterface from "../../interface/question_radio_item";
import QuestionRadio from "./QuestionRadio";

export default function QuestionSelectLanguageAdult({ onChange }) {
    const settingCtx = useContext(SettingContext);
    const { color100, color200 } = settingCtx.settingState.colorTheme;
    const options: LanguageInterface[] = Languages;
    const itemsRaw: QuestionRadioItemInterface[] = options.map(
        (option: LanguageInterface) => {
            return {
                label: option.name,
                value: option.lang_code,
                icon: (
                    <Image
                        source={{
                            uri: `https://flagsapi.com/${option.flag_code}/flat/64.png`,
                        }}
                        style={styles.optionIcon}
                    />
                ),
            };
        }
    );

    function selectHandler(value: string) {
        onChange(value);
    }

    return <QuestionRadio options={itemsRaw} onSelect={selectHandler} />;
}

const styles = StyleSheet.create({
    optionIcon: {
        width: 50,
        height: 40,
        // backgroundColor: "red"
    },
});
