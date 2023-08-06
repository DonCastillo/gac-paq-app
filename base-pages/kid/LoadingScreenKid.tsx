import { useContext, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { SettingContext } from "../../store/settings";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import ProgressBar from "../../components/ProgressBar";

const FONT_SIZE = 20;

export default function LoadingScreenKid({ text = "" }) {
    const settingCtx = useContext(SettingContext);
    const { color100, color200 } = settingCtx.settingState.colorTheme;
    const currentPage = settingCtx.settingState.currentPage;

    return (
        <View style={[styles.container, { backgroundColor: color100 }]}>
            <Main>
                <CenterMain>
                    <Image
                        style={styles.logo}
                        source={require("./../../assets/images/Logo.png")}
                    />
                    <ProgressBar />
                </CenterMain>
            </Main>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 350,
        resizeMode: "contain",
    },
});
