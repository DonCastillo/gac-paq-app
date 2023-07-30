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
    const locationOptions = [
        { label: "United States", value: "United States" },
        { label: "Canada", value: "Canada" },
        { label: "Mexico", value: "Mexico" },
        { label: "Switzerland", value: "Switzerland" },
        { label: "Japan", value: "Japan" },
    ];

    return (
        <View>
            <Main>
                <TopMain>
                    <QuestionLabel>Where are you?</QuestionLabel>
                    <QuestionSelect options={locationOptions} />
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