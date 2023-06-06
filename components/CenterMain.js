import { Text, View, Image, StyleSheet } from "react-native";

export default function CenterMain({ children }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
});
