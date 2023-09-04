import { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SettingContext } from "../../store/settings";
import Main from "../../components/Main";
import Navigation from "../../components/Navigation";
import FullWidthButton from "../../components/buttons/FullWidthButton";
import TopMain from "../../components/orientation/TopMain";
import QuestionLabel from "../../components/kid/QuestionLabel";
import QuestionSelectLanguage from "../../components/kid/QuestionSelectLanguage";
import LoadingScreen from "./LoadingScreen";
import LoadingScreenKid from "../../base-pages/kid/LoadingScreenKid";
import ProgressBar from "../../components/ProgressBar";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { ResponseContext } from "../../store/responses";
import ScreenType from "../../constants/screen_type";
import { getScreenType } from "../../utils/screen";
import { QuestionContext } from "../../store/questions";
import { translateButton } from "../../utils/translate";
import ButtonLabel from "../../constants/button_label";



export default function Language() {
const navigation = useNavigation();

    const [languageSelected, setLanguageSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [newLanguage, setNewLanguage] = useState(null);
    const LABEL = "What is your preferred language?";
    const settingCtx = useContext(SettingContext);
    const responseCtx = useContext(ResponseContext);
    const questionCtx = useContext(QuestionContext);

    const { language, colorTheme, mode, buttons } = settingCtx.settingState;
    const { backButton, completeButton, continueButton, goButton, nextButton, startedButton } = questionCtx.questionState;
    
    console.log('completeButton button: ', completeButton);
    const { color100, color200 } = colorTheme;


    

    useEffect(() => {
        settingCtx.translateButtons({
            back: translateButton(backButton, language) || ButtonLabel.Back,
            complete: translateButton(completeButton, language) || ButtonLabel.Complete,
            continue: translateButton(continueButton, language) || ButtonLabel.Continue,
            go: translateButton(goButton, language) || ButtonLabel.Go,
            next: translateButton(nextButton, language) || ButtonLabel.Next,
            started: translateButton(startedButton, language) || ButtonLabel.Started
        });

    }, [language])
  
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
            <Main>
                <TopMain>
                    <View style={styles.innerContainer}>
                        <QuestionLabel fontSize={25}>{LABEL}</QuestionLabel>
                        <QuestionSelectLanguage onChange={changeHandler}/>
                    </View>
                </TopMain>
                <Navigation>
                    {languageSelected && 
                        <FullWidthButton
                            customStyle={{ backgroundColor: color100 }}
                            onPress={nextPage}
                        >
                            {buttons?.continue}
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
