import { View, ImageBackground, Text, StyleSheet } from "react-native";
import ButtonContainerWidth from "./ButtonContainerWidth";

export default function QuestionCover({
    themeColor,
    heading,
    subheading,
    imageSrc,
    accentColor,
}) {
    console.log("Don");
    console.log("imagesrc: ", imageSrc);
    console.log(heading);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={imageSrc}
                resizeMode="cover"
                style={styles.image}
            ></ImageBackground>
            <View
                style={[styles.headingPanel, { backgroundColor: themeColor }]}
            >
                <View style={styles.headingPanelTop}>
                    <Text style={styles.headingSubText}>{subheading}</Text>
                    <Text style={styles.headingText}>{heading}</Text>
                </View>
                <View style={styles.headingPanelBottom}>
                    <View
                        style={[
                            styles.bottomNavigation,
                            { justifyContent: "center" },
                        ]}
                    >
                        <ButtonContainerWidth color={accentColor}>
                            Go!
                        </ButtonContainerWidth>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "green",
        flex: 1,
        width: "100%",
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    headingPanel: {
        backgroundColor: "orange",
        paddingHorizontal: 20,
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "45%",
        flex: 1,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        paddingTop: 40,
        paddingBottom: 50,
    },
    headingSubText: {
        // backgroundColor: "#f7dcbe",
        // opacity: "0.3",
        textAlign: "center",
        color: "#fff",
    },
    headingText: {
        // backgroundColor: "#d4fae7",
        // opacity: "0.3",
        textAlign: "center",
        paddingTop: 20,
        color: "#fff",
        fontSize: 36,
        fontWeight: "bold",
    },
    headingPanelTop: {
        // backgroundColor: 'lightblue',
        flex: 1,
    },
    headingPanelBottom: {
        // backgroundColor: 'blue',
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingHorizontal: 20,
    },
    bottomNavigation: {
        // backgroundColor: "pink",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
