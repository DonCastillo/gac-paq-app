import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import { useContext } from "react";
import { SettingContext } from "../store/settings";

const Stack = createNativeStackNavigator();

function AppWrapper() {
    const settingCtx = useContext(SettingContext);
    const language = settingCtx.settingState.language;
    const mode = settingCtx.settingState.mode;
    const colorTheme = settingCtx.settingState.colorTheme;

    console.log('app wrapper ======')
    console.log('language: ', language),
    console.log('mode: ', mode),
    console.log('colorTheme: ', colorTheme),
    console.log('app wrapper ======')

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SpashScreen" component={Splash} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppWrapper;
