import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect } from "react";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import BackAndGoNav from "../../components/kid/navigation/BackAndGoNav";
import SingleNav from "../../components/adults/navigation/SingleNav";
import Toolbar from "../../components/adults/Toolbar";
import BGLinearGradient from "../../components/BGLinearGradient";

export default function QuestionIntroAdult() {
    const settingCtx = useContext(SettingContext);
    const { language, colorTheme, currentPage, buttons } =
        settingCtx.settingState;
    const { color100, color200 } = colorTheme;
    const translatedPage = translate(currentPage.page.translations, language);

    const image = { uri: currentPage.page.image_mobile };
    console.log("image: ", image);

    return (
        <View style={styles.container}>
            <BGLinearGradient />
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            ></ImageBackground>
            <Toolbar />
            <View style={[styles.headingPanel, { backgroundColor: color200 }]}>
                <ScrollView style={styles.headingPanelTop}>
                    <Text style={styles.headingSubText}>
                        {translatedPage.subheading}
                    </Text>
                    <Text style={styles.headingText}>
                        {translatedPage.heading}
                    </Text>
                </ScrollView>
                <View style={styles.headingPanelBottom}>
                    <SafeAreaView style={{ width: "100%" }}>
                        <SingleNav
                            label={buttons?.continue}
                            onPress={() => settingCtx.nextPage()}
                        />
                    </SafeAreaView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        position: "relative",
        // backgroundColor: "pink"
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    toolbar: {
        position: "absolute",
        top: 0,
        // left:0,
        width: "100%",
    },
    headingPanel: {
        paddingHorizontal: 20,
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "45%",
        flex: 1,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        paddingTop: 40,
        paddingBottom: 50,
    },
    headingSubText: {
        // backgroundColor: "#f7dcbe",
        // opacity: "0.3",
        textAlign: "center",
        color: "#fff",
    },
    headingText: {
        // backgroundColor: "#d4fae7",
        // opacity: "0.3",
        textAlign: "center",
        paddingTop: 20,
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        height: "100%",
    },
    headingPanelTop: {
        // backgroundColor: 'lightblue',
        flex: 1,
        // height: "100%",
        // fontSize: 9,
    },
    headingPanelBottom: {
        // backgroundColor: 'blue',
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingHorizontal: 20,
    },
});
