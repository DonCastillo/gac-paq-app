import { useContext } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SettingContext } from "../store/settings";

export default function BGLinearGradient() {
    const settingCtx = useContext(SettingContext);
    console.log(settingCtx.settingState.mode);
    const { color100, color200, color300, color400 } = settingCtx.settingState.colorTheme;

    return (
        <LinearGradient
            colors={[color100, color200, color300, color400]}
            start={[1, 0]}
            end={[0, 1]}
            locations={[0.1, 0.3, 0.6, 0.9]}
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
