import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect } from "react";
import { SettingContext } from "../store/settings";
import { QuestionContext } from "../store/questions";
import RegularPageScreen from "../screens/RegularPageScreen";
import SplashKid from "./kid/SplashKid";
import SectionType from "../constants/section_type";
import { getScreenType } from "../utils/screen";
import ScreenType from "../constants/screen_type";

const Stack = createNativeStackNavigator();

function AppWrapper() {
    const settingCtx = useContext(SettingContext);
    const questionCtx = useContext(QuestionContext);

    const introductoryPages = questionCtx.questionState.introductoryPages;
    const questionPages = questionCtx.questionState.questionPages;

    useEffect(() => {
        let pageNumber = 1;
        let sectionNumber = 0;
        let sectionPageNumber = 1;

        console.log("load intro pages...");
        introductoryPages.forEach((page, sectionIndex) => {
            settingCtx.addPage({
                pageNumber: pageNumber++,
                page: page,
                screen: page.type,
                sectionNumber: sectionNumber,
                section: SectionType.Intro,
                sectionPageNumber: ++sectionIndex
            })
        });

        
        console.log("load intro pages...");
        questionPages.forEach((page) => {
            if (getScreenType(page.type) === ScreenType.IntroQuestion) {
                sectionPageNumber = 1;
                sectionNumber++;
            }

            settingCtx.addPage({
                pageNumber: pageNumber++,
                page: page,
                screen: page.type,
                section: SectionType.Question,
                sectionNumber: sectionNumber,
                sectionPageNumber: sectionPageNumber++,
            });
        });

    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreen" component={SplashKid} />
                <Stack.Screen
                    name="RegularPageScreen"
                    component={RegularPageScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppWrapper;
