import { Image, StyleSheet, FlatList } from "react-native";
import { useContext, useState } from "react";
import LanguageInterface from "../../interface/language";
import Languages from "../../store/data/languages";
import { SettingContext } from "../../store/settings";
import RadioOption from "./item/RadioOption";
import QuestionRadioItemInterface from "../../interface/question_radio_item";
import QuestionRadio from "./QuestionRadio";
import { QuestionContext } from "../../store/questions";

export default function QuestionSelectLanguageAdult({ onChange }) {
    const settingCtx = useContext(SettingContext);
    const questionCtx = useContext(QuestionContext)
    const options: LanguageInterface[] = questionCtx.questionState.languageOption;

    const itemsRaw: QuestionRadioItemInterface[] = options.map(
        (option: LanguageInterface) => {
            const FlagComponent = option.flag;
            return {
                label: option.name,
                value: option.lang_code,
                icon: <FlagComponent height={50} width={50} padding={0} margin={0} />,
            };
        }
    );

    console.log("itemsRaw", itemsRaw)

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
