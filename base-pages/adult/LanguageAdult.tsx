import { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SettingContext } from "../../store/settings";
import Main from "../../components/Main";
import Navigation from "../../components/Navigation";
import FullWidthButton from "../../components/buttons/FullWidthButton";
import TopMain from "../../components/orientation/TopMain";
import QuestionLabel from "../../components/kid/QuestionLabel";
import QuestionSelectLanguageAdult from "../../components/adults/QuestionSelectLanguageAdult";
import ProgressBar from "../../components/ProgressBar";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { ResponseContext } from "../../store/responses";
import ScreenType from "../../constants/screen_type";
import { getScreenType } from "../../utils/screen";
import { QuestionContext } from "../../store/questions";
import { translateButton } from "../../utils/translate";
import ButtonLabel from "../../constants/button_label";
import SingleNav from "../../components/kid/navigation/SingleNav";
import CenterMain from "../../components/orientation/CenterMain";
import QuestionContainer from "../../components/adults/QuestionContainer";
import BGLinearGradient from "../../components/BGLinearGradient";



export default function LanguageAdult() {
const navigation = useNavigation();

    const [languageSelected, setLanguageSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [newLanguage, setNewLanguage] = useState(null);
    const LABEL = "What is your preferred language?";
    const settingCtx = useContext(SettingContext);
    const responseCtx = useContext(ResponseContext);
    const questionCtx = useContext(QuestionContext);

    const { language, colorTheme, buttons } = settingCtx.settingState;
    const { backButton, completeButton, continueButton, goButton, nextButton, startedButton } = questionCtx.questionState;
    
    

    useEffect(() => {
        settingCtx.translateButtons({
            back: translateButton(backButton, language) || ButtonLabel.Back,
            complete: translateButton(completeButton, language) || ButtonLabel.Complete,
            continue: translateButton(continueButton, language) || ButtonLabel.Continue,
            go: translateButton(goButton, language) || ButtonLabel.Go,
            next: translateButton(nextButton, language) || ButtonLabel.Next,
            started: translateButton(startedButton, language) || ButtonLabel.Started
        });
    }, [language, languageSelected]);
  
    function changeHandler(value: string) {
        if(value) {
            settingCtx.setLanguage(value);
            responseCtx.addResponse({
                pageNumber: 0,
                label: LABEL,
                answer: value
            })
            setLanguageSelected(true);
        } else {
            setLanguageSelected(false);
        }

    }

    function nextPage() {
        settingCtx.nextPage();
    }

    return (
        <View style={styles.container}>
            <BGLinearGradient />
            <Main>
                <CenterMain>
                    <QuestionContainer>
                        <QuestionLabel fontSize={25}>{LABEL}</QuestionLabel>
                        <QuestionSelectLanguageAdult onChange={changeHandler}/>
                    </QuestionContainer>
                </CenterMain>
                <Navigation>
                    {languageSelected && 
                        <SingleNav label={buttons?.continue} onPress={nextPage}/>
                    }
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
        backgroundColor: "pink"
    }
});
