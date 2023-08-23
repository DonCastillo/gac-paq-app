import { Text, View, Image, StyleSheet } from "react-native";


export default function QuestionTitle({children}) {
    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        // backgroundColor: "yellowgreen",
        marginVertical: 15,
        fontWeight: 700,
        fontSize: 36,
        lineHeight: 35,
        color: "#000"
    }
});
