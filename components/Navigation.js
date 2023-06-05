import { Text, View, Image, StyleSheet } from "react-native";

export default function Navigation({ children }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%"
    },
});
