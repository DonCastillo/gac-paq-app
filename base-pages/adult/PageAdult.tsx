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
import BGLinearGradient from "../../components/BGLinearGradient";
import { QuestionContext } from "../../store/questions";
import { getSectionType } from "../../utils/section";
import BackAndGoNav from "../../components/kid/navigation/BackAndGoNav";
import SectionType from "../../constants/section_type";


export default function PageAdult() {
    const settingCtx = useContext(SettingContext);
    const questionCtx = useContext(QuestionContext);
    const { language, colorTheme, currentPage, buttons } = settingCtx.settingState;
    const { introductoryPages } = questionCtx.questionState;
    const { color100, color200 } = colorTheme;
    const translatedPage = translate(currentPage.page.translations, language);
    const [buttonComponent, setButtonComponent] = useState(null);


    useEffect(() => {
        let buttonComponent = <></>;
        const section = getSectionType(currentPage.section);
        const sectionPageNumber = currentPage.sectionPageNumber;

        buttonComponent = renderDoubleButton();

        /** Welcome Page should display "Let's get started" button */
        if (section === SectionType.Intro && sectionPageNumber === 1) {
            buttonComponent = renderSingleButton(buttons?.started + "!");
        }

        /** Great Job Page should display "Let's get started" button */
        // if (
        //     section === SectionType.Intro &&
        //     sectionPageNumber === introductoryPages.length
        // ) {
        //     buttonComponent = renderSingleButton(buttons?.started + "!");
        // }

        setButtonComponent(buttonComponent);

    }, [currentPage?.section, currentPage?.sectionPageNumber]);

    function renderSingleButton(label: string) {
        return (
            <FullWidthButton
                customStyle={{ backgroundColor: color100 }}
                onPress={pressHandler}
            >
                {label}
            </FullWidthButton>
        );
    }

    function renderDoubleButton() {
        return <BackAndGoNav />;
    }

    function pressHandler() {
        console.log("press handler: ");
        settingCtx.nextPage();
    }


    return (
        <View style={[styles.container, { backgroundColor: color100 }]}>
            <BGLinearGradient />
            <Main>
                <CenterMain>
                    <Heading customStyle={{ color: 'white', fontSize: 70, marginBottom: 50 }}>
                        {translatedPage.heading.toLowerCase()}
                    </Heading>
                    <Paragraph
                        customStyle={{
                            color: 'white',
                            fontSize: 15,
                            lineHeight: 17,
                        }}
                    >
                        {translatedPage.description}
                    </Paragraph>
                </CenterMain>
                <Navigation>
                    {buttonComponent}
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
        position:'relative',
    },
});

