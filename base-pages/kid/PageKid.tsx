import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Navigation from "../../components/Navigation";
import FullWidthButton from "../../components/buttons/FullWidthButton";
import { getSectionType } from "../../utils/section";
import SectionType from "../../constants/section_type";
import { QuestionContext } from "../../store/questions";

export default function PageKid() {
    const settingCtx = useContext(SettingContext);
    const questionCtx = useContext(QuestionContext);
    const { language, colorTheme, currentPage, buttons } = settingCtx.settingState;
    const { introductoryPages } = questionCtx.questionState
    const { color100, color200 } = colorTheme;
    const translatedPage = translate(currentPage.page.translations, language);
    const [label, setLabel] = useState("Continue");

    useEffect(() => {
        let buttonLabel = buttons?.continue;
        const section = getSectionType(currentPage.section);
        const sectionPageNumber = currentPage.sectionPageNumber;

        /** Welcome Page should display "Let's get started" button */
        if(section === SectionType.Intro && sectionPageNumber === 1) {
            buttonLabel = buttons?.started + "!"
        }

        /** Great Job Page should display "Let's get started" button */
        if(section === SectionType.Intro && sectionPageNumber === introductoryPages.length) {
            buttonLabel = buttons?.started + "!";
        }

        setLabel(buttonLabel);

    }, [currentPage.section, currentPage.sectionPageNumber]);

    function pressHandler() {
        console.log("press handler: ");
        settingCtx.nextPage();
    }

    return (
        <View style={styles.container}>
            <Main>
                <CenterMain>
                    <Heading customStyle={{ color: color100, fontSize: 50, marginBottom: 50, textAlign: "center" }}>
                        {translatedPage.heading.toLowerCase()}
                    </Heading>
                    <Paragraph
                        customStyle={{
                            color: color100,
                            fontSize: 15,
                            lineHeight: 20,
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
                        {label}
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
