import { Text, View, Image, StyleSheet } from "react-native";
import {useState, useContext} from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import { SettingContext } from "../../store/settings";


const FONT_SIZE = 16;
const BORDER_WIDTH = 2;

interface ItemInterface {
    label: string;
    value: string;
}

export default function QuestionSelect({ options, onChange }) {
    const settingCtx = useContext(SettingContext);
    const { color100, color200 } = settingCtx.settingState.colorTheme;
    const rawItems: ItemInterface[] = options.map((option) => {
        return {label: option.text, value: option.value}
    });

    // console.log('rawItems: ', rawItems)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(rawItems);

    // console.log('value: ', value)

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
        // minHeight: 280,
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
        color: 'black'

    },
    labelStyle: {
        fontWeight: "400",
        fontSize: FONT_SIZE,
        // color: 'black'
    },
});
