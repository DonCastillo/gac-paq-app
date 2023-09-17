import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Navigation from "../../components/Navigation";
import BGLinearGradient from "../../components/BGLinearGradient";
import SingleNav from "../../components/adults/navigation/SingleNav";
import Toolbar from "../../components/adults/Toolbar";

export default function PageAdult() {
    const settingCtx = useContext(SettingContext);
    const { language, colorTheme, currentPage, buttons } =
        settingCtx.settingState;
    const { color100, color200 } = colorTheme;
    const translatedPage = translate(currentPage.page.translations, language);

    console.log("currentPage: ", JSON.stringify(currentPage))

    function pressHandler() {
        console.log("press handler: ");
        settingCtx.nextPage();
    }

    function renderToolbar() {
        if (currentPage.section === "intro" && currentPage.sectionPageNumber === 1) {
            return <></>;
        } else {
            return <Toolbar />;
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: color100 }]}>
            <BGLinearGradient />
            <Main>
                {renderToolbar()}
                <CenterMain>
                    <Heading
                        customStyle={{
                            color: "white",
                            fontSize: 70,
                            marginBottom: 50,
                            textAlign: "center"
                        }}
                    >
                        {translatedPage.heading.toLowerCase()}
                    </Heading>
                    <Paragraph
                        customStyle={{
                            color: "white",
                            fontSize: 15,
                            lineHeight: 17,
                        }}
                    >
                        {translatedPage.description}
                    </Paragraph>
                </CenterMain>
                <Navigation>
                    <SingleNav
                        label={buttons?.continue}
                        onPress={pressHandler}
                    />
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
        position: "relative",
    },
});
