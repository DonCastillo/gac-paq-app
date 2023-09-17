import { StyleSheet, Text, View } from "react-native";
import { Icon } from "@rneui/themed";
import { useContext } from "react";
import { SettingContext } from "../../store/settings";

const ICON_SIZE = 30;

export default function Toolbar() {
    const settingCtx = useContext(SettingContext);

    function backHandler() {
        console.log("back pressed from the toolbar");
        settingCtx.prevPage();
    }

    function audioHandler() {
        console.log("audio pressed from the toolbar");
    }

    return (
        <View style={styles.container}>
            <Icon
                name="west"
                size={ICON_SIZE}
                color={"#fff"}
                onPress={backHandler}
            />
            <Icon
                name="volume-up"
                size={ICON_SIZE}
                color={"#fff"}
                onPress={audioHandler}
            />
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
        flexDirection: "row",
    },
});
