import { useContext } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SettingContext } from "../store/settings";

export default function BGLinearGradient() {
    const settingCtx = useContext(SettingContext);
    const { color100, color200 } = settingCtx.settingState.colorTheme;

    return (
        <LinearGradient
            colors={[color100, color200]}
            start={[1, 0]}
            end={[0, 1]}
            locations={[0.3, 0.5]}
            style={styles.bgGradient}
        ></LinearGradient>
    );
}

const styles = StyleSheet.create({
    bgGradient: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
    },
});
