import { Text, View } from "react-native";
import SettingContextProvider from "../store/settings";
import QuestionContextProvider, { QuestionContext } from "../store/questions";

function AppWrapper() {
    return (
        <QuestionContextProvider>
            <SettingContextProvider>
                <View>
                    <Text>Hello</Text>
                </View>
            </SettingContextProvider>
        </QuestionContextProvider>
    );
}

export default AppWrapper;
