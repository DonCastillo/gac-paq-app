import { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SettingContext } from "../../store/settings";
import Main from "../../components/Main";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import BottomMain from "../../components/orientation/BottomMain";
import BGLinearGradient from "../../components/BGLinearGradient";

export default function SplashAdult() {
    const settingCtx = useContext(SettingContext);
    const { color100, color200 } = settingCtx.settingState.colorTheme;

    return (
        <View style={[styles.container, { backgroundColor: color100 }]}>
            <BGLinearGradient />
            <Main>
                <BottomMain>
                    <Heading customStyle={{ fontWeight: "bold" }}>
                        gacpaq
                    </Heading>
                    <Paragraph
                        customStyle={{
                            color: "#fff",
                            fontSize: 20,
                            lineHeight: 23.6,
                        }}
                    >
                        The global adolescent and children activity
                        questionnaire
                    </Paragraph>
                </BottomMain>
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
        position:'relative',
    },
    logo: {
        height: 400,
        width: 350,
        resizeMode: "contain",
    },
});
