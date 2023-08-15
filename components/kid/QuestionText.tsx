import { useContext } from "react";
import { SettingContext } from "../../store/settings";
import { Text, TextInput, View, StyleSheet, ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { GeneralStyle } from "../../styles/general";

const FONT_SIZE = GeneralStyle.kid.field.fontSize;
const BORDER_WIDTH = GeneralStyle.kid.field.borderWidth;
const BORDER_RADIUS = GeneralStyle.kid.field.borderRadius;
const PADDING_HORIZONTAL = GeneralStyle.kid.field.paddingHorizontal;
const PADDING_VERTICAL = GeneralStyle.kid.field.paddingVertical;
const MIN_HEIGHT = GeneralStyle.kid.field.minHeight;

export default function QuestionText({ fields, onChange }) {
    console.log("fields: ", fields);
    // setting
    const settingCtx = useContext(SettingContext);
    const { language, colorTheme, currentPage } = settingCtx.settingState;
    const { color100, color200 } = colorTheme;


    // function DismissKeyboard({children}) {
    //     return <TouchableWithoutFeedback
    // }

    function changeHandler(value:string) {
        onChange(value);
    }

    function displayTextInput(field: any, index: number) {
        return (
            <ScrollView key={index + 1}>
                <TextInput
                    style={[styles.container, { borderColor: color100 }]}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={changeHandler}
                    placeholder={field.label}
                />
            </ScrollView>
        );
    }

    return <View>{fields.map(displayTextInput)}</View>;
}

const styles = StyleSheet.create({
    container: {
        borderWidth: BORDER_WIDTH,
        borderRadius: BORDER_RADIUS,
        fontSize: FONT_SIZE,
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
        minHeight: MIN_HEIGHT,
        backgroundColor: "#fff",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
