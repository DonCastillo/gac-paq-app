import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "./../styles/kids/Colors";
import Heading from "../components/kids/Heading";
import Paragraph from "../components/kids/Paragraph";
import TopMain from "../components/TopMain";
import Navigation from "../components/Navigation";
import FullWidthButton from "../components/kids/FullWidthButton";
import Main from "./../components/Main";
import QuestionLabel from "../components/questions/QuestionLabel";
import QuestionSelect from "../components/questions/QuestionSelect";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Location({ onPress }) {
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