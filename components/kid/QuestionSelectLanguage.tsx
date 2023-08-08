import { Text, View, Image, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import LanguageInterface from "../../interface/language";
import Languages from "../../store/data/languages";
import { SettingContext } from "../../store/settings";

const FONT_SIZE = 16;
const BORDER_WIDTH = 2;

interface ItemInterface {
    label: string;
    value: string;
    icon: any;
}

export default function QuestionSelectLanguage({onChange}) {
    const settingCtx = useContext(SettingContext);
    const { color100, color200 } = settingCtx.settingState.colorTheme;
    // console.log('choices: ', options)
    const options: LanguageInterface[] = Languages;
    const itemsRaw: ItemInterface[] = options.map((option) => {
        return {
            label: option.name,
            value: option.lang_code,
            // disabled: () => {
            //     if(option.name !== 'German' && option.name !== 'Netherlands' && option.name !== 'German'){
            //         return ''
            //     } else {
            //         return 'disabled'
            //     }
            // },
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
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([...itemsRaw]);

    return (
        <DropDownPicker
            style={[styles.container, { borderColor: color100 }]}
            showTickIcon={true}
            placeholder="Select"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            listItemLabelStyle={styles.listItemLabelStyle}
            labelStyle={styles.labelStyle}
            iconContainerStyle={styles.iconContainer}
            dropDownContainerStyle={[
                styles.dropdownContainer,
                { borderColor: color100 },
            ]}
            listItemContainerStyle={styles.listItemContainerStyle}
            onChangeValue={(value: string) => onChange(value)}
            textStyle={{fontSize: FONT_SIZE, fontWeight: "bold"}}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: BORDER_WIDTH,
        // backgroundColor: "green",
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 60,
        fontSize: FONT_SIZE,
    },
    listItemContainerStyle: {
        height: 60,
        // backgroundColor: "yellow",
    },
    dropdownContainer: {
        marginTop: 5,
        borderWidth: BORDER_WIDTH,
        minHeight: 280,
    },
    headingContainer: {
        marginBottom: 60,
    },
    optionIcon: {
        width: 50,
        height: "100%",
    },
    iconContainer: {
        // backgroundColor: 'pink'
    },
    listItemLabelStyle: {
        fontWeight: "400",
        fontSize: FONT_SIZE,
    },
    labelStyle: {
        fontWeight: "400",
        fontSize: FONT_SIZE,
    },
});
