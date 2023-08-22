import { useContext, useEffect, useState } from "react";
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



export default function Language() {
const navigation = useNavigation();

    const [languageSelected, setLanguageSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [newLanguage, setNewLanguage] = useState(null);
    const LABEL = "What is your preferred language?";
    // setting
    const settingCtx = useContext(SettingContext);
    const responseCtx = useContext(ResponseContext);
    const { language, colorTheme, mode } = settingCtx.settingState;
    const { color100, color200 } = colorTheme;
  
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
                            Continue
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
