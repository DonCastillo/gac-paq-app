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
import { useNavigationState } from "@react-navigation/native";

export default function Language({ route, navigation }) {
    const [languageSelected, setLanguageSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [newLanguage, setNewLanguage] = useState(null);
    // setting
    const settingCtx = useContext(SettingContext);
    const { language, colorTheme, mode } = settingCtx.settingState;
    const { color100, color200 } = colorTheme;

    // route
    const { pageNumber } = route.params;
    console.log('this page: ', `Page-${pageNumber}`)


    navigation.addListener('state', () => {
        // console.log('options: ', e.data.options)
        console.log('route: ', route);
    })
    // navigation.addListener('state', function() {
    //     console.log('goof to go')
    //     // console.log(settingCtx.settingState);
    //     console.log('-----')
    //     console.log(navigation.getState());
    // })

    // const d = useNavigationState()

    console.log('current language: ', settingCtx.settingState.language);
    
    useEffect(() => {
        console.log('language has been changed.')
        if(settingCtx.settingState.language) {
            setLanguageSelected(true);
        }else {
            setLanguageSelected(false);
        }
    }, [settingCtx.settingState.language])


    function pressHandler() {

        // console.log(settingCtx.settingState.language)
        // if(newLanguage !== 'de-DE' && newLanguage !== 'nl-NL' && newLanguage !== 'zh-CN') {
        //     settingCtx.setLanguage(newLanguage);
        // }else {
        //     settingCtx.setLanguage('en-US');
        // }
        // console.log(settingCtx.settingState.language)

        // setNewLanguage(null)
        console.log(`Page-${pageNumber + 1}`);

  
    }

    function changeHandler(value: string) {
        // setLanguageSelected(currentLanguage => false)
        if(value !== 'de-DE' && value !== 'nl-NL' && value !== 'zh-CN') {
            settingCtx.setLanguage(value);
        }else {
            settingCtx.setLanguage('en-US');
        }
        navigation.push(`Page-${pageNumber + 1}`);

        // const timeout = setTimeout(() => {
        //     clearInterval(timeout);
        // },1000)
        // setLanguageSelected(currentLanguage => true);

        // setNewLanguage(value);


    }
    

    // return <LoadingScreenKid text={'Loading'}/>
    // console.log('isLoafing: ', isLoading)
    // if(isLoading) {
    //    <ProgressBar />;
    // }

    return (
        <View style={styles.container}>
            <Main>
                <TopMain>
                    <View style={styles.innerContainer}>
                        <QuestionLabel fontSize={25}>What is your preferred language?</QuestionLabel>
                        <QuestionSelectLanguage onChange={changeHandler}/>
                    </View>
                </TopMain>
                <Navigation>
                    {languageSelected && 
                        <FullWidthButton
                            customStyle={{ backgroundColor: color100 }}
                            onPress={pressHandler}
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
