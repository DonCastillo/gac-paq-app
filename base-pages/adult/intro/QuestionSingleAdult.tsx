import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "../../../store/settings";
import { translate } from "../../../utils/page";
import Main from "../../../components/Main";
import Navigation from "../../../components/Navigation";
import QuestionLabel from "../../../components/kid/QuestionLabel";
import { getQuestionType } from "../../../utils/questions";
import QuestionType from "../../../constants/question_type";
import { ResponseContext } from "../../../store/responses";
import BGLinearGradient from "../../../components/BGLinearGradient";
import CenterMain from "../../../components/orientation/CenterMain";
import QuestionContainer from "../../../components/adults/QuestionContainer";
import SingleNav from "../../../components/adults/navigation/SingleNav";
import QuestionRadio from "../../../components/adults/QuestionRadio";
import QuestionRadioItemInterface from "../../../interface/question_radio_item";
import { normalize } from "../../../utils/options";
import QuestionText from "../../../components/adults/QuestionText";
import Toolbar from "../../../components/adults/Toolbar";

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

    const { language, colorTheme, currentPage, buttons } =
        settingCtx.settingState;
    const { color100, color200 } = colorTheme;
    const translatedPage = translate(currentPage.page.translations, language);
    const questionType = getQuestionType(translatedPage);
    let questionComponent = <></>;

    useEffect(() => {
        const theresResponse = Object.keys(responses).length > 0;
        setProceed(theresResponse);
    }, [responses]);

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
            return { ...currResponse, [currentPage.page?.name]: value };
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

    // console.log("choices: ", translatedPage.choices);

    if (questionType === QuestionType.QuestionDropdown) {
        const options: QuestionRadioItemInterface[] = normalize(
            translatedPage.choices
        );
        questionComponent = (
            <QuestionRadio
                options={options}
                onSelect={(value: string) => changeHandler(value)}
            />
        );
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
            <BGLinearGradient />
            <Main>
                <Toolbar />
                <CenterMain>
                    <QuestionContainer>
                        <QuestionLabel
                            textStyle={{ fontSize: 25, fontWeight: "bold" }}
                        >
                            {translatedPage.label}
                        </QuestionLabel>
                        {questionComponent}
                    </QuestionContainer>
                </CenterMain>
                <Navigation>
                    <SingleNav
                        label={buttons?.continue}
                        onPress={proceedHandler}
                    />
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
