import { useContext } from "react";
import { SettingContext } from "../../store/settings";
import { Text, TextInput, View, StyleSheet, ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { GeneralStyle } from "../../styles/general";


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
                    style={[styles.container]}
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
        borderWidth: GeneralStyle.adult.field.borderWidth,
        borderRadius: GeneralStyle.adult.field.borderRadius,
        borderColor: GeneralStyle.adult.field.borderColor, 
        fontSize: GeneralStyle.adult.field.fontSize,
        paddingHorizontal: GeneralStyle.adult.field.paddingHorizontal,
        paddingVertical: GeneralStyle.adult.field.paddingVertical,
        backgroundColor: "#fff",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
