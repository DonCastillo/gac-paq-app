import { View, Text, Pressable, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import Colors from "../../styles/kids/Colors";
import { DefaultStyle, GeneralStyle } from "../../styles/general";

export default function ButtonContainerWidth({ children, onPress, borderColor, textColor, bgColor }) {
    return (
        <View>
            <Pressable onPress={onPress} style={[style.container, {borderColor: borderColor, backgroundColor: bgColor}]}>
                <Text style={[style.buttonText, {color: textColor}]}>{children}</Text>
            </Pressable>
        </View>
    );
}



const style = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyle.button.backgroundColor,
        paddingHorizontal: DefaultStyle.button.paddingHorizontal,
        paddingVertical: DefaultStyle.button.paddingVertical,
        borderRadius: DefaultStyle.button.borderRadius,
        borderWidth: DefaultStyle.button.borderWidth,
        minWidth: DefaultStyle.button.minWidth
    },
    buttonText: {
        color: DefaultStyle.button.color,
        textAlign: DefaultStyle.button.textAlign,
        fontSize: DefaultStyle.button.fontSize,
        fontWeight: DefaultStyle.button.fontWeight,
        lineHeight: DefaultStyle.button.lineHeight
    }
})