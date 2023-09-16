import {
    Text,
    View,
    Image,
    StyleSheet,
    FlatList,
    ScrollView,
} from "react-native";
import { useContext, useState } from "react";
import LanguageInterface from "../../interface/language";
import Languages from "../../store/data/languages";
import { SettingContext } from "../../store/settings";
import RadioOption from "./item/RadioOption";

interface ItemInterface {
    label: string;
    value: string;
    icon: any;
}

export default function QuestionSelectLanguageAdult({ onChange }) {
    const settingCtx = useContext(SettingContext);
    const { color100, color200 } = settingCtx.settingState.colorTheme;
    const [value, setValue] = useState(null);
    const options: LanguageInterface[] = Languages;
    const itemsRaw: ItemInterface[] = options.map(
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

    function pressHandler(value: string) {
        console.log("value chosen is: ", value);
        setValue(value);
        onChange(value);
    }

    return (
        <FlatList
            data={itemsRaw}
            renderItem={({ item }) => (
                <RadioOption
                    {...item}
                    onPress={pressHandler}
                    selected={value === item.value}
                />
            )}
            persistentScrollbar={true}
            showsVerticalScrollIndicator={true}
        />
    );
}

const styles = StyleSheet.create({
    optionIcon: {
        width: 50,
        height: 40,
        // backgroundColor: "red"
    },
});
