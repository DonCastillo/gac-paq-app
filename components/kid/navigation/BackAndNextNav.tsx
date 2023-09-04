import { View, Text, StyleSheet } from "react-native";
import ButtonContainerWidth from "../../buttons/ButtonContainerWidth";
import { SettingContext } from "../../../store/settings";
import { useContext } from "react";

export default function BackAndNextNav() {
    const settingCtx = useContext(SettingContext);
    const { colorTheme, buttons } = settingCtx.settingState;
    const { color100, color200 } = colorTheme;

    return (
        <View style={styles.bottomNavigation}>
            <ButtonContainerWidth
                onPress={() => settingCtx.prevPage()}
                borderColor={color100}
                bgColor={"#fff"}
                textColor={color100}
            >
                {buttons?.back}
            </ButtonContainerWidth>

            <ButtonContainerWidth
                onPress={() => settingCtx.nextPage()}
                borderColor={color100}
                bgColor={color100}
                textColor={"#fff"}
            >
                {buttons?.next}
            </ButtonContainerWidth>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomNavigation: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "pink",
    },
});
