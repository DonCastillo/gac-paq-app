import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";

export default function Main({ children }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: "column",
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: "100%",
        // backgroundColor: 'yellow'
    },
});
