import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect } from "react";
import { SettingContext } from "../store/settings";
import { QuestionContext } from "../store/questions";
import RegularPageScreen from "../screens/RegularPageScreen";
import SplashKid from "./kid/SplashKid";
import SectionType from "../constants/section_type";

const Stack = createNativeStackNavigator();

function AppWrapper() {
    const settingCtx = useContext(SettingContext);
    const questionCtx = useContext(QuestionContext);

    const language = settingCtx.settingState.language;
    const mode = settingCtx.settingState.mode;
    const colorTheme = settingCtx.settingState.colorTheme;
    const introductoryPages = questionCtx.questionState.introductoryPages;
    const questionPages = questionCtx.questionState.questionPages;


    // console.log("app wrapper ======");
    // console.log('language: ', language),
    // console.log('mode: ', mode),
    // console.log('colorTheme: ', colorTheme),
    // console.log("introductory pages: ", JSON.stringify(introductoryPages));
    // console.log("introductory pages length: ", introductoryPages.length);
    // console.log("app wrapper ======");

    // {introductoryPages.map(page =>
    //     console.log(page.name)
    // )}
    useEffect(() => {
        console.log('load introductory pages...');
        let index = 1;
        // introductoryPages.forEach((page, sectionIndex) => {
        //     settingCtx.addPage({
        //         pageNumber: index++,
        //         page: page,
        //         screen: page.type,
        //         section: SectionType.Intro,
        //         sectionPageNumber: ++sectionIndex
        //     })
        // });

        console.log('load question pages...');
        questionPages.forEach((page, sectionIndex) => {
            settingCtx.addPage({
                pageNumber: index++,
                page: page,
                screen: page.type,
                section: SectionType.Question,
                sectionPageNumber: ++sectionIndex
            })
        })

        console.log('loading next page');
        // settingCtx.initializeCurrentPage();

    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashKid}
                />
                <Stack.Screen
                    name="RegularPageScreen"
                    component={RegularPageScreen}
                />
                {/* <Stack.Screen
                    name="QuestionIntroScreen"
                    component={QuestionIntroScreen}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppWrapper;
