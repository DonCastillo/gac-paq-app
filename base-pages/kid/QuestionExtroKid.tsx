import { useContext } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { Images } from "../../styles/images";

export default function QuestionExtroKid() {
    console.log("question extro kid ...");
    const settingCtx = useContext(SettingContext);
    const { language, colorTheme, currentPage } = settingCtx.settingState;
    const color100 = "#FFEDA5";
    const color200 = "#FFCB66";
    const translatedPage = translate(currentPage.page.translations, language);
    const ImageComponent = Images.kid.extro_question_page;

    console.log(translatedPage);

    return (
        <View style={styles.container}>
            <Main>
                <CenterMain>
                    <Heading customStyle={{ color: "#000", fontSize: 32, fontWeight: "bold", textAlign: "center" }}>
                        {translatedPage.heading}
                    </Heading>
                    <Paragraph customStyle={{ color: "#000", fontSize: 20 }}>
                        {translatedPage.subheading}
                    </Paragraph>
                    <View style={styles.imageContainer}>
                        <ImageComponent height={400} width={300} padding={0} margin={0} />
                    </View>
                </CenterMain>
            </Main>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center"
    },
    imageContainer: {
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: -40,
    }
});
