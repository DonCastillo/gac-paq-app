import { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SettingContext } from "../../store/settings";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import TopMain from "../../components/orientation/TopMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import BottomMain from "../../components/orientation/BottomMain";

export default function SplashKid({ route, navigation }) {
    const settingCtx = useContext(SettingContext);
    const { color100, color200 } = settingCtx.settingState.colorTheme;
    const currentPage = settingCtx.settingState.currentPage;
    // console.log(route.params.pageNumber)
    const pageNumber = route.params.pageNumber;

    useEffect(() => {
        const timeout = setTimeout(() => {
            clearInterval(timeout);
            navigation.navigate(`Page-${pageNumber + 1}`);
        }, 3000)
    })

    return (
        <View style={[styles.container, { backgroundColor: color100 }]}>
            <Main>
                <CenterMain>
                    <Image
                        style={styles.logo}
                        source={require("./../../assets/images/Logo.png")}
                    />
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
        height: 400,
        width: 350,
        resizeMode: "contain",
    },
});
