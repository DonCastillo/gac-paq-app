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
import TopMain from "../../components/orientation/TopMain";
import QuestionLabel from "../../components/kid/QuestionLabel";
import { getQuestionComponent, getQuestionType } from "../../utils/questions";
import QuestionType from "../../constants/question_type";
import QuestionSelect from "../../components/kid/QuestionSelect";

export default function QuestionKid({ route, navigation }) {
    // setting
    const settingCtx = useContext(SettingContext);
    const { language, colorTheme, mode } = settingCtx.settingState;
    const { color100, color200 } = colorTheme;

    // route
    const { page, pageNumber } = route.params;
    const translatedPage = translate(page.translations, language);
    const pageName = page.name;
    const questionType = getQuestionType(translatedPage);
    let questionComponent = <></>
    // const questionComponent = getQuestionComponent(mode, questionType)

    console.log('+++++')
    console.log('hhh: ', translatedPage)
    console.log('+++++')


    function pressHandler() {
        console.log("press handler: ");
        navigation.navigate(`Page-${pageNumber + 1}`);
    }


    if (questionType === QuestionType.QuestionCheckbox) {
        questionComponent = <></>;
    } else if (questionType === QuestionType.QuestionDropdown) {
        questionComponent = <QuestionSelect options={translatedPage.choices} />
    } else if (questionType === QuestionType.QuestionRadio) {
        questionComponent = <></>;
    } else if (questionType === QuestionType.QuestionRadioImage) {
        questionComponent = <></>;
    } else if (questionType === QuestionType.QuestionSlider) {
        questionComponent = <></>;
    } else if (questionType === QuestionType.QuestionText) {
        questionComponent = <></>;
    } else {
        questionComponent = <></>;
    }
    

    return (
        <View style={styles.container}>
            <Main>
                <TopMain>
                    <View style={styles.innerContainer}>
                        <QuestionLabel fontSize={33}>{translatedPage.heading}</QuestionLabel>
                        {questionComponent}
                    </View>
                </TopMain>
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
        // backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    innerContainer: {
        // backgroundColor: "red",
        // height: "100%",
        marginHorizontal: 20,
        marginTop: 50,
    },
});
