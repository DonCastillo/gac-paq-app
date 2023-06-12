import { View, Text, StyleSheet } from "react-native";

export default function QuestionRadio({ label, options }) {
    return (
        <View>
            <Text style={styles.labelText}>{label}</Text>
            <View>
                {options.map((option) => {
                    const { text, value } = option;
                    return (
                        <View style={styles.optionContainer}>
                            <Text style={styles.optionText}>{text}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    labelText: {
        color: "#000",
        marginBottom: 20,
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 23,
    },
    optionContainer: {
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: "#000",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginBottom: 15,
        maxWidth: "90%",
        // fontSize:
    },
    optionText: {
        fontWeight: 400,
        fontSize: 18,
    },
});
