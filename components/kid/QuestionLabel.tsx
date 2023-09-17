import { Text, View, Image, StyleSheet } from "react-native";

export default function QuestionLabel({
    children,
    fontSize = 24,
    customStyle = {},
    textStyle = {},
}) {
    return (
        <View style={[styles.container, customStyle]}>
            <Text style={[styles.text, textStyle]}>
                {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        marginBottom: 20,
        // backgroundColor: 'pink'
    },
    text: {
        textAlign: "left",
        width: "100%",
        flex: 1,
        flexWrap: "wrap",
        fontSize: 24
    },
});
