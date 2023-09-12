import { View, Text, StyleSheet } from "react-native";
import ButtonContainerWidth from "../../buttons/ButtonContainerWidth";
import { SettingContext } from "../../../store/settings";
import { useContext } from "react";

export default function BackAndGoNav() {
    const settingCtx = useContext(SettingContext);
    const { colorTheme, buttons } = settingCtx.settingState;
    const { color100, color200 } = colorTheme;

    function prevPage() {
        settingCtx.prevPage();
    }

    function nextPage() {
        settingCtx.nextPage();
    }

    return (
        <View style={styles.bottomNavigation}>
            <ButtonContainerWidth
                onPress={prevPage}
                borderColor={color100}
                bgColor={"#fff"}
                textColor={color100}
            >
                {buttons?.back}
            </ButtonContainerWidth>

            <ButtonContainerWidth
                onPress={nextPage}
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
