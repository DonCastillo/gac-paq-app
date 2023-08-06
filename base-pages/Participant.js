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
import QuestionSelect from "../components/kids/QuestionSelect";

export default function Location() {
    const {nextPage} = useContext(AppContext);
    const options = [
        { label: "Child / Teen", value: "Child / Teen" },
        { label: "Parent", value: "Parent" }
    ];

    return (
        <View>
            <Main>
                <TopMain>
                    <QuestionLabel>Who's taking this{'\n'}questionnaire?</QuestionLabel>
                    <QuestionSelect options={options} />
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