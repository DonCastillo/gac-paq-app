import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "./../styles/kids/Colors";
import Heading from "../components/kids/Heading";
import Paragraph from "../components/kids/Paragraph";
import TopMain from "../components/orientation/TopMain";
import Navigation from "../components/Navigation";
import FullWidthButton from "../components/kids/FullWidthButton";
import Main from "./../components/Main";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import QuestionLabel from "../components/kids/QuestionLabel";
import QuestionText from "../components/kids/QuestionText";

export default function Accelerometer() {
    const {nextPage} = useContext(AppContext);

    return (
        <View>
            <Main>
                <TopMain>
                    <QuestionLabel>What is your{'\n'}Accelerometer Serial{'\n'}Number?</QuestionLabel>
                    <QuestionText placeholder={"Serial number"}/>
                </TopMain>
                <Navigation>
                    <FullWidthButton onPress={nextPage}>
                        Continue
                    </FullWidthButton>
                </Navigation>
            </Main>
        </View>
    );
}