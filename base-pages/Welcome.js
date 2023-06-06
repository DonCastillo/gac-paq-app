import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "./../styles/kids/Colors";
import Heading from "../components/kids/Heading";
import Paragraph from "../components/kids/Paragraph";
import CenterMain from "../components/CenterMain";
import Navigation from "../components/Navigation";
import FullWidthButton from "../components/kids/FullWidthButton";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Main from "../components/Main";

export default function Welcome() {
    const { nextPage } = useContext(AppContext);

    return (
        <View>
            <Main>
                <CenterMain>
                    <Heading color={Colors.introBackgroundColor} fontSize={70}>
                        welcome!
                    </Heading>
                    <Paragraph
                        color={Colors.introBackgroundColor}
                        fontSize={15}
                        lineHeight={17}
                    >
                        Physical activity is essential for healthy child
                        development, yet 80% of youth are not active enough and
                        we lack information about activity levels of young
                        children.
                    </Paragraph>
                </CenterMain>
                <Navigation>
                    <FullWidthButton onPress={nextPage}>Start</FullWidthButton>
                </Navigation>
            </Main>
        </View>
    );
}