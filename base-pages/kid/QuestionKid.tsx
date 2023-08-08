import { useContext, useState } from "react";
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
import Mode from "../../constants/mode";
import { ResponseContext } from "../../store/responses";

export default function QuestionKid() {
    // setting
    const [response, setResponse] = useState({ label: null, answer: null })
    const settingCtx = useContext(SettingContext);
    const responseCtx = useContext(ResponseContext);

    const { language, colorTheme, currentPage } = settingCtx.settingState;
    const { color100, color200 } = colorTheme;
    const translatedPage = translate(currentPage.page.translations, language);
    const questionType = getQuestionType(translatedPage);
    let questionComponent = <></>


    console.log('+++++')
    console.log('currentPage: ', currentPage)
    console.log('+++++')


    /**
     * finalizes response
     */
    function proceedHandler() {
        console.log("press handler: ");
        console.log('response: ', response);
        responseCtx.addResponse({
            pageNumber: currentPage.pageNumber,
            label: response.label,
            answer: response.answer
        })
        settingCtx.nextPage();
        // navigation.navigate(`Page-${pageNumber + 1}`);
    }

    /**
     * temporarily store the initial selection
     */
    function selectChangeHandler(value: string) {
        setResponse({
            label: currentPage.page?.name,
            answer: value
        })

        // set mode
        // if(currentPage.page.name === "Who's taking this questionnaire?") {
        //     if (value === "child") {
        //         settingCtx.setMode(Mode.Kid); 
        //     } else {
        //         settingCtx.setMode(Mode.Adult);
        //     }
        // }
        console.log('response: ', response)
    }


    if (questionType === QuestionType.QuestionCheckbox) {
        questionComponent = <></>;
    } else if (questionType === QuestionType.QuestionDropdown) {
        questionComponent = <QuestionSelect options={translatedPage.choices} onChange={selectChangeHandler} />
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
                    {response.answer && 
                        <FullWidthButton
                            customStyle={{ backgroundColor: color100 }}
                            onPress={proceedHandler}
                        >
                            Start
                        </FullWidthButton>
                    }
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
