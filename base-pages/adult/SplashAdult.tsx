import { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SettingContext } from "../../store/settings";
import { LinearGradient } from "expo-linear-gradient";
import Main from "../../components/Main";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import BottomMain from "../../components/orientation/BottomMain";

export default function SplashAdult() {
    const settingCtx = useContext(SettingContext);
    const { color100, color200 } = settingCtx.settingState.colorTheme;
    // console.log('inside splash adult: ', color100)
    // console.log('inside splash adult: ', color200)

    return (
        <View style={[styles.container, { backgroundColor: color100 }]}>
            <LinearGradient
                colors={[color100, color200]}
                start={[1, 0]}
                end={[0, 1]}
                locations={[0.3, 0.5]}
                style={styles.bgGradient}
            ></LinearGradient>
            <Main>
                <BottomMain>
                    <Heading customStyle={{ fontWeight: "bold" }}>
                        gacpaq
                    </Heading>
                    <Paragraph
                        customStyle={{
                            color: "#fff",
                            fontSize: 20,
                            lineHeight: 23.6,
                        }}
                    >
                        The global adolescent and children activity
                        questionnaire
                    </Paragraph>
                    {/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae molestiae repellat mollitia? Delectus aspernatur eaque hic corrupti, nihil minima autem minus voluptatum placeat. Delectus doloremque soluta dolore eveniet deserunt.</Text> */}
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
        position:'relative',
    },
    logo: {
        height: 400,
        width: 350,
        resizeMode: "contain",
    },
    bgGradient: {
        position: 'absolute',
        top:0,
        left:0,
        height: '100%',
        width: '100%'
    }
});
