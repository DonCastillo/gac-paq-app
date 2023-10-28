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
import QuestionSelect from "../../../components/kid/QuestionSelect";
import { ResponseContext } from "../../../store/responses";
import QuestionText from "../../../components/kid/QuestionText";
import BackAndNextNav from "../../../components/kid/navigation/BackAndNextNav";
import { QuestionContext } from "../../../store/questions";
import QuestionSelectRegion from "../../../components/kid/QuestionSelectRegion";

interface ResponseInterface {
    label: string;
    answer: string;
}

export default function QuestionSingleKid() {
    // setting
    const [responses, setResponses] = useState({});
    const [proceed, setProceed] = useState(false);
    const settingCtx = useContext(SettingContext);
    const responseCtx = useContext(ResponseContext);
    const questionCtx = useContext(QuestionContext);

    const { language, colorTheme, currentPage } = settingCtx.settingState;
    const { regionOption } = questionCtx.questionState;
    const { color100, color200 } = colorTheme;
    const translatedPage = translate(currentPage.page.translations, language);
    const questionType = getQuestionType(translatedPage);
    console.log("question type: ", questionType);
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
        questionComponent = (
            <QuestionSelect
                options={translatedPage.choices}
                onChange={changeHandler}
            />
        );
    } else if (questionType === QuestionType.QuestionRegion) {
        console.log("rendering the region question....");
        questionComponent = (
            <QuestionSelectRegion 
                selectedValue={""}
                onChange={(value: string) => console.log("value: ", value)}
            />
        )

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
                        <QuestionLabel textStyle={{ fontSize: 33 }}>
                            {translatedPage.heading}
                        </QuestionLabel>
                        {questionComponent}
                    </View>
                </TopMain>
                <Navigation>
                    <BackAndNextNav />
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
    innerContainer: {
        backgroundColor: "green",
        marginTop: 50
    }
});
