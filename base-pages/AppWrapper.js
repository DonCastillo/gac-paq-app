import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import { useContext, useEffect } from "react";
import { SettingContext } from "../store/settings";
import { getScreen, getScreenType } from "../utils/screen";
import ScreenType from "../constants/screen_type";
import Mode from "../constants/mode";
import { QuestionContext } from "../store/questions";
import Language from "../screens/kid/Language";
import RegularPageScreen from "../screens/RegularPageScreen";
import SplashKid from "./kid/SplashKid";

const Stack = createNativeStackNavigator();

function AppWrapper() {
    const settingCtx = useContext(SettingContext);
    const questionCtx = useContext(QuestionContext);

    const language = settingCtx.settingState.language;
    const mode = settingCtx.settingState.mode;
    const colorTheme = settingCtx.settingState.colorTheme;
    const introductoryPages = questionCtx.questionState.introductoryPages;

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
        console.log('inside app wrapper...');
        introductoryPages.forEach((page, index) => {
            settingCtx.addPage({
                pageNumber: index + 1,
                page: page,
                screen: page.type
            })
        })
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
                {/* <Stack.Screen name="RegularPageScreen" component={<></>}/>
                <Stack.Screen name="QuestionIntroScreen" component={<></>}/>
                <Stack.Screen name="QuestionExtroScreen" component={<></>}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppWrapper;
