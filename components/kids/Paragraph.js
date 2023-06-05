import { Text, View, StyleSheet } from "react-native";

export default function Paragraph({ children, color, fontSize, lineHeight }) {
    const customStyles = { color: color, fontSize: fontSize, lineHeight: lineHeight };
    return (
        <View>
            <Text style={[styles.text, customStyles]}>
                {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: 100,
        color: "white",
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
});
