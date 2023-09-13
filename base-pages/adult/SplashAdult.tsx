import { useContext, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { SettingContext } from "../../store/settings";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import ProgressBar from "../../components/ProgressBar";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../../styles/images";
import BottomMain from "../../components/orientation/BottomMain";
import BGLinearGradient from "../../components/BGLinearGradient";

export default function SplashAdult() {
    const settingCtx = useContext(SettingContext);
    const { currentPage, currentPageNumber, mode, colorTheme } = settingCtx.settingState;
    const { color100 } = colorTheme;

    // const pageNumber = route.params.pageNumber;
    const navigation = useNavigation();
    const SplashImage = Images.kid.splash_image;

   
    useEffect(() => {
        const timeout = setTimeout(() => {
            clearInterval(timeout);
            navigation.navigate(`RegularPageScreen`);
        }, 3000)
    })

    return (
        <View style={[styles.container, { backgroundColor: color100 }]}>
            <BGLinearGradient />
            <Main>
                <BottomMain>
                    <Heading customStyle={{ fontWeight: "bold", textAlign: "center", fontSize: 90 }}>
                        gacpaq
                    </Heading>
                    <Paragraph
                        customStyle={{
                            color: "#fff",
                            fontSize: 20,
                            lineHeight: 23.6,
                            textAlign: "center"
                        }}
                    >
                        The global adolescent and children activity
                        questionnaire
                    </Paragraph>
                    <View style={styles.progressContainer}>
                        <ProgressBar />
                    </View>
                </BottomMain>
            </Main>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    progressContainer: {
        marginVertical: 20
    },
    imageContainer: {
        // backgroundColor: "red"
    }
});
