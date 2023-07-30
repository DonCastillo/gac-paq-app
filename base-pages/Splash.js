import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "./../styles/kids/Colors";
import { SvgUri } from "react-native-svg";
import Logo from "./../assets/images/Logo.svg";
import FullWidthButton from "../components/kids/FullWidthButton";
import Heading from "../components/kids/Heading";
import Paragraph from "../components/kids/Paragraph";
import CenterMain from "../components/orientation/CenterMain";
import Navigation from "../components/Navigation";

export default function Splash({onPress}) {
    console.log(Logo);
    return (
        <View style={styles.container}>
            <CenterMain>
                <Image style={styles.logo} source={require("./../assets/images/Logo.png")} />
                <Heading color={"#fff"}>gacpaq</Heading>
                <Paragraph color={"#fff"} fontSize={20} lineHeight={23.6}>
                    The global adolescent and children activity questionnaire
                </Paragraph>
            </CenterMain>
            {/* <Navigation>
                <FullWidthButton onPress={onPress}>Start</FullWidthButton>
            </Navigation> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.introBackgroundColor,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        height: 400,
        width: 350,
        resizeMode: 'contain'
    },
});
