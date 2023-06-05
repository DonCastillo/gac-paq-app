import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "./../styles/kids/Colors";
import Heading from "../components/kids/Heading";
import Paragraph from "../components/kids/Paragraph";
import CenterMain from "../components/CenterMain";
import Navigation from "../components/Navigation";
import FullWidthButton from "../components/kids/FullWidthButton";


export default function Welcome({onPress }) {
    return (
        <View style={styles.container}>
            <CenterMain>
                <Heading color={Colors.introBackgroundColor} fontSize={70}>welcome!</Heading>
                <Paragraph color={Colors.introBackgroundColor} fontSize={15} lineHeight={17}>
                    Physical activity is essential for healthy child development, yet 80% of youth are not active enough and we lack information about activity levels of young children.
                </Paragraph>
            </CenterMain>
            <Navigation>
                <FullWidthButton onPress={onPress}>Start</FullWidthButton>
            </Navigation>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});