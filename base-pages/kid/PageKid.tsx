import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Navigation from "../../components/Navigation";
import FullWidthButton from "../../components/buttons/FullWidthButton";

export default function PageKid({ route, navigation }) {
    const settingCtx = useContext(SettingContext);
    const { language, colorTheme } = settingCtx.settingState;
    const { color100, color200 } = colorTheme;
    const { page, pageNumber } = route.params;
    const translatedPage = translate(page.translations, language);

    function pressHandler() {
        console.log("press handler: ");
        navigation.navigate(`Page-${pageNumber + 1}`);
    }

    return (
        <View style={styles.container}>
            <Main>
                <CenterMain>
                    <Heading customStyle={{ color: color100, fontSize: 70 }}>
                        {translatedPage.heading.toLowerCase()}
                    </Heading>
                    <Paragraph
                        customStyle={{
                            color: color100,
                            fontSize: 15,
                            lineHeight: 17,
                        }}
                    >
                        {translatedPage.description}
                    </Paragraph>
                </CenterMain>
                <Navigation>
                    <FullWidthButton
                        customStyle={{ backgroundColor: color100 }}
                        onPress={pressHandler}
                    >
                        Start
                    </FullWidthButton>
                </Navigation>
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
});
