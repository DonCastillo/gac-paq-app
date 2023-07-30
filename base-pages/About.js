import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "./../styles/kids/Colors";
import Heading from "../components/kids/Heading";
import Paragraph from "../components/kids/Paragraph";
import CenterMain from "../components/orientation/CenterMain";
import Navigation from "../components/Navigation";
import FullWidthButton from "../components/kids/FullWidthButton";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Main from "../components/Main";

export default function About() {
    const { nextPage } = useContext(AppContext);

    return (
        <View>
            <Main>
                <CenterMain>
                    <View style={styles.headingContainer}>
                        <Heading
                            color={Colors.introBackgroundColor}
                            fontSize={100}
                        >
                            gacpaq
                        </Heading>
                    </View>
                    <Paragraph
                        color={Colors.introBackgroundColor}
                        fontSize={15}
                        lineHeight={17}
                    >
                        Our goal is to address the lack of information on
                        activity levels, particularly among young children, and
                        the limitations of current questionnaires that neglect
                        certain types of physical activity. By collecting data
                        on active play, we can compare activity levels within
                        and between countries to identify effective strategies
                        for promoting physical activity. Our study involves
                        expert and public reviews, translations, pilot studies,
                        and a large-scale data collection across diverse urban
                        and rural areas. By comparing our questionnaire data
                        with movement sensors, we aim to create a more accurate
                        global measurement of physical activity, contributing to
                        healthier lifestyles worldwide.
                    </Paragraph>
                </CenterMain>
                <Navigation>
                    <FullWidthButton onPress={nextPage}>Start</FullWidthButton>
                </Navigation>
            </Main>
        </View>
    );
}

const styles = StyleSheet.create({
    headingContainer: {
        marginBottom: 60,
    },
});
