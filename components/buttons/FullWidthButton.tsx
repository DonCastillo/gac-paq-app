import { View, Text, Pressable, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import Colors from "../../styles/kids/Colors";
import { DefaultStyle } from "../../styles/general";

export default function FullWidthButton({ children, onPress, customStyle = {} }) {
    return (
        <View style={[style.container, customStyle]}>
            <Pressable onPress={onPress}>
                <Text style={[style.buttonText]}>{children}</Text>
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
        width: '100%',
    },
    buttonText: {
        color: DefaultStyle.button.color,
        textAlign: DefaultStyle.button.textAlign,
        fontSize: DefaultStyle.button.fontSize,
        lineHeight: DefaultStyle.button.lineHeight,
        fontWeight: DefaultStyle.button.fontWeight,
    }
})