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

export default function GreatJob() {
    const { nextPage } = useContext(AppContext);

    return (
        <View>
            <Main>
                <CenterMain>
                    <View style={styles.headingContainer}>
                        <Heading
                            color={Colors.introBackgroundColor}
                            fontSize={60}
                        >
                            Great job!
                        </Heading>
                    </View>
                </CenterMain>
                <Navigation>
                    <FullWidthButton onPress={nextPage}>Let's get started!</FullWidthButton>
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
