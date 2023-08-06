import { Text, View, Image, StyleSheet } from "react-native";

export default function QuestionLabel({ children, fontSize }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        textAlign: 'left',
    }
});
