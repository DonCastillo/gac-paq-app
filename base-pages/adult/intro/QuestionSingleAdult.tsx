import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SettingContext } from "../../../store/settings";
import { translate } from "../../../utils/page";
import Main from "../../../components/Main";
import Navigation from "../../../components/Navigation";
import TopMain from "../../../components/orientation/TopMain";
import QuestionLabel from "../../../components/kid/QuestionLabel";
import { getQuestionType } from "../../../utils/questions";
import QuestionType from "../../../constants/question_type";
import { ResponseContext } from "../../../store/responses";
import BGLinearGradient from "../../../components/BGLinearGradient";
import CenterMain from "../../../components/orientation/CenterMain";
import QuestionContainer from "../../../components/adults/QuestionContainer";
import SingleNav from "../../../components/adults/navigation/SingleNav";

interface ResponseInterface {
    label: string;
    answer: string;
}

export default function QuestionSingleAdult() {
    // setting
    const [responses, setResponses] = useState({});
    const [proceed, setProceed] = useState(false);
    const settingCtx = useContext(SettingContext);
    const responseCtx = useContext(ResponseContext);

    const { language, colorTheme, currentPage, buttons } = settingCtx.settingState;
    const { color100, color200 } = colorTheme;
    const translatedPage = translate(currentPage.page.translations, language);
    const questionType = getQuestionType(translatedPage);
    let questionComponent = <></>;

    useEffect(() => {
        const theresResponse = (Object.keys(responses)).length > 0;
        setProceed(theresResponse);
    }, [responses])

    /**
     * finalizes response
     */
    function proceedHandler() {
        for (const [key, value] of Object.entries(responses)) {
            responseCtx.addResponse({
                pageNumber: currentPage.pageNumber,
                label: key,
                answer: value,
            });
        }
        setResponses({});
        settingCtx.nextPage();
    }

    /**
     * temporarily store the initial selection
     */
    function changeHandler(value: string) {
        setResponses((currResponse) => {
            return {...currResponse, [currentPage.page?.name]: value}
        });
        
        // set mode
        // if(currentPage.page.name === "Who's taking this questionnaire?") {
        //     if (value === "child") {
        //         settingCtx.setMode(Mode.Kid);
        //     } else {
        //         settingCtx.setMode(Mode.Adult);
        //     }
        // }

    }



    if (questionType === QuestionType.QuestionDropdown) {
        questionComponent = <></>;
    } else if (questionType === QuestionType.QuestionText) {
        questionComponent = <></>;
    } else {
        questionComponent = <></>;
    }

    return (
        <View style={styles.container}>
            <BGLinearGradient />
            <Main>
                <CenterMain>
                    <QuestionContainer>
                        <QuestionLabel fontSize={25}>{translatedPage.label}</QuestionLabel>
                        {questionComponent}
                    </QuestionContainer>
                </CenterMain>
                <Navigation>
                    <SingleNav label={buttons?.continue} onPress={proceedHandler} />
                </Navigation>
            </Main>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
    },
});
