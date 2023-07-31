import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import { useContext } from "react";
import { SettingContext } from "../store/settings";
import { getScreen } from "../utils/screen";
import ScreenType from "../constants/screen_type";
import Mode from "../constants/mode";
import { QuestionContext } from "../store/questions";

const Stack = createNativeStackNavigator();

function AppWrapper() {
    const settingCtx = useContext(SettingContext);
    const questionCtx = useContext(QuestionContext);

    const language = settingCtx.settingState.language;
    const mode = settingCtx.settingState.mode;
    const colorTheme = settingCtx.settingState.colorTheme;
    const introductoryPages = questionCtx.questionState.introductoryPages;

    console.log("app wrapper ======");
    // console.log('language: ', language),
    // console.log('mode: ', mode),
    // console.log('colorTheme: ', colorTheme),
    console.log("introductory pages: ", JSON.stringify(introductoryPages));
    console.log("introductory pages length: ", introductoryPages.length);
    console.log("app wrapper ======");

    // {introductoryPages.map(page =>
    //     console.log(page.name)
    // )}

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* Splash Screen */}
                <Stack.Screen
                    name="Page-0"
                    component={getScreen(mode, ScreenType.Splash)}
                    initialParams={{pageNumber: 0}}
                />

                {/* Introductory Pages */}
                {introductoryPages.map((page, index) => (
                    <Stack.Screen
                        name={`Page-${index + 1}`}
                        component={getScreen(mode, page.type)}
                        key={page.name}
                        initialParams={{pageNumber: index + 1, page: page}}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppWrapper;
