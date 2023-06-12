import { Text, View, Image, StyleSheet } from "react-native";

export default function Navigation({ children, justify = "center" }) {
    return (
        <View style={[styles.container, { justifyContent: justify }]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // paddingHorizontal: "8%",

    },
});
