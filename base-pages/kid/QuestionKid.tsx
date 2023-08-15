import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import Main from "../../components/Main";
import Navigation from "../../components/Navigation";
import FullWidthButton from "../../components/buttons/FullWidthButton";
import TopMain from "../../components/orientation/TopMain";
import QuestionLabel from "../../components/kid/QuestionLabel";
import { getQuestionType } from "../../utils/questions";
import QuestionType from "../../constants/question_type";
import QuestionSelect from "../../components/kid/QuestionSelect";
import { ResponseContext } from "../../store/responses";
import QuestionText from "../../components/kid/QuestionText";

interface ResponseInterface {
    label: string;
    answer: string;
}

export default function QuestionKid() {
    // setting
    const [responses, setResponses] = useState({});
    const [proceed, setProceed] = useState(false);
    const settingCtx = useContext(SettingContext);
    const responseCtx = useContext(ResponseContext);

    const { language, colorTheme, currentPage } = settingCtx.settingState;
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



    if (questionType === QuestionType.QuestionCheckbox) {
        questionComponent = <></>;
    } else if (questionType === QuestionType.QuestionDropdown) {
        questionComponent = (
            <QuestionSelect
                options={translatedPage.choices}
                onChange={changeHandler}
            />
        );
    } else if (questionType === QuestionType.QuestionRadio) {
        questionComponent = <></>;
    } else if (questionType === QuestionType.QuestionRadioImage) {
        questionComponent = <></>;
    } else if (questionType === QuestionType.QuestionSlider) {
        questionComponent = <></>;
    } else if (questionType === QuestionType.QuestionText) {
        questionComponent = (
            <QuestionText
                fields={translatedPage.fields}
                onChange={changeHandler}
            />
        );
    } else {
        questionComponent = <></>;
    }

    return (
        <View style={styles.container}>
            <Main>
                <TopMain>
                    <View style={styles.innerContainer}>
                        <QuestionLabel fontSize={33}>
                            {translatedPage.heading}
                        </QuestionLabel>
                        {questionComponent}
                    </View>
                </TopMain>
                <Navigation>
                    {proceed &&
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
