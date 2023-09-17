import { StyleSheet, Text, View } from "react-native";
import { Icon } from "@rneui/themed";

const ICON_SIZE = 30;

export default function Toolbar() {
    return (
        <View style={styles.container}>
            <Icon name="west" size={ICON_SIZE} color={"#fff"} />
            <Icon name="volume-up" size={ICON_SIZE} color={"#fff"} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: "pink",
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    }
})