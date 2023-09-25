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
import QuestionBreadcrumb from "../../../components/kid/QuestionBreadcrumb";
import QuestionProgress from "../../../components/kid/QuestionProgress";
import QuestionTitle from "../../../components/kid/QuestionTitle";
import QuestionSlider from "../../../components/adults/QuestionSlider";
import BackAndNextNav from "../../../components/kid/navigation/BackAndNextNav";
import BGLinearGradient from "../../../components/BGLinearGradient";
import Toolbar from "../../../components/adults/Toolbar";
import CenterMain from "../../../components/orientation/CenterMain";
import SingleNav from "../../../components/adults/navigation/SingleNav";
import QuestionContainer from "../../../components/adults/QuestionContainer";
import QuestionRadioItemInterface from "../../../interface/question_radio_item";
import { normalize } from "../../../utils/options";
import QuestionRadio from "../../../components/adults/QuestionRadio";
import QuestionRadioImage from "../../../components/adults/QuestionRadioImage";

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
    // console.log("questiontype: ", questionType);
    // console.log("translatedPage: ", translatedPage);
    let questionComponent = <></>;
    console.log("Here is the question adult");

    useEffect(() => {
        // console.log('use effect here... heres the responses: ', responses)
        // const theresResponse = Object.keys(responses).length > 0;
        // setProceed(theresResponse);
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
    function changeHandler(value: string | null) {
        console.log("change handler from the question single kid: ", value);
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

    if (questionType === QuestionType.QuestionCheckbox) {
        questionComponent = <></>;
    }
    // else if (questionType === QuestionType.QuestionDropdown) {
    //     questionComponent = (
    //         <QuestionSelect
    //             options={translatedPage.choices}
    //             onChange={changeHandler}
    //         />
    //     );
    // }
    else if (questionType === QuestionType.QuestionRadio) {
        const options: QuestionRadioItemInterface[] = normalize(
            translatedPage.choices
        );
        console.log("choices here: ", options);

        questionComponent = (
            <QuestionRadio
                options={options}
                onSelect={(value: string) => changeHandler(value)}
            />
        );
    }
    else if (questionType === QuestionType.QuestionRadioImage) {
        questionComponent = (
            <QuestionRadioImage
                options={translatedPage.choices}
                onChange={changeHandler}
            />
        );
    } 
    else if (questionType === QuestionType.QuestionSlider) {
        questionComponent = <QuestionSlider onChange={changeHandler} />;
    } 
    // else if (questionType === QuestionType.QuestionText) {
    //     questionComponent = (
    //         <QuestionText
    //             fields={translatedPage.fields}
    //             onChange={changeHandler}
    //         />
    //     );
    // }
    else {
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
    },
});
