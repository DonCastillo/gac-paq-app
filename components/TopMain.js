import { Text, View, Image, StyleSheet } from "react-native";
import Main from "./Main";

export default function TopMain({ children }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 7,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#fff",
        // paddingHorizontal: "8%",

    },
});