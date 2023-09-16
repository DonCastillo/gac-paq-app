import { Pressable, StyleSheet, Text, View } from "react-native";
import { GeneralStyle } from "../../../styles/general";
import { useContext, useState } from "react";
import { SettingContext } from "../../../store/settings";

export default function RadioOption({ label, value, icon, onPress, selected = false }) {
    const settingCtx = useContext(SettingContext);
    const { color100, color200 } = settingCtx.settingState.colorTheme;
    const [optionValue, setOptionValue] = useState(value);

    function pressHandler() {
        if (selected) {
            // console.log('already selected');
            onPress(null);
        } else {
            // console.log('selected');
            onPress(optionValue);
        }
    }

    return (
        <Pressable style={styles.container} onPress={pressHandler}>
            <View
                style={[
                    styles.radioButton,
                    selected && { backgroundColor: color100 },
                ]}
            ></View>
            <View style={styles.labelContainer}>
                <View style={styles.labelImage}>{icon}</View>
                <Text style={styles.labelText}>{label}</Text>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container: {
        ...GeneralStyle.adult.optionContainer,
        alignItems: "center",
        flexDirection: "row",
        // backgroundColor: "pink",
    },
    radioButton: {
        // backgroundColor: "whitesmoke",
        height: 25,
        width: 25,
        marginRight: 15,
        borderRadius: 25 / 2,
        borderColor: "#D8D8D8",
        borderWidth: 2,
    },

    labelContainer: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        // backgroundColor: "yellow",
        alignItems: "center",
        flexWrap: "nowrap",
    },
    labelText: {
        ...GeneralStyle.adult.optionText,
        // backgroundColor: "lightblue",
        flexWrap: "wrap",
        flex: 1,
    },

    labelImage: {
        marginRight: 10,
    },
});
