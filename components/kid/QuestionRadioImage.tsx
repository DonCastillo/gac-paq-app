import {
    View,
    Text,
    StyleSheet,
    Pressable,
    FlatList,
    SafeAreaView,
    Image,
} from "react-native";
import Colors from "../../styles/kids/Colors";
import { Component, useContext, useState } from "react";
import { GeneralStyle } from "../../styles/general";
import { SettingContext } from "../../store/settings";
import Svg, { Path } from "react-native-svg";
import { Images } from "../../styles/images";

export default function QuestionRadioImage({ options, onChange }) {
    const settingCtx = useContext(SettingContext);
    const { colorTheme } = settingCtx.settingState;
    const { color100, color200 } = colorTheme;
    const [selected, setSelected] = useState(null);

    const optionPressedStyle = {
        backgroundColor: color100,
        borderColor: color100,
    };

    function selectHandler(value: string) {
        if (value == selected) {
            setSelected(null);
            onChange(null);
        } else {
            setSelected(value);
            onChange(value);
        }
    }

    function renderImage(image: string, image_default: any) {
        const ImageComponent = image_default;
        if(!image_default) {
            return <></>;
        }
        return <ImageComponent height={150} width={150} padding={0} margin={0} />
        // return (
        //     <View>
        //         {/* <image_default height={100} width={100} /> */}
        //         {/* <image_default /> */}
        //         <Text>Don</Text>
        //     </View>
        // );

        // if (image) {
        //     ImageComponent = (
        //         <Image
        //             source={{
        //                 uri: `http://localhost:8055/assets/${image}?access_token=kaTCPGRRqTCp18GmHkECCKNeMcY5Vwa5`,
        //             }}
        //             style={{ height: 100, width: 100, resizeMode: "contain" }}
        //         />
        //     );
        // }
    }

    function renderOption({ item }) {
        const { image_kid, image_kid_default, text, value } =
            item.image_choices_id;
        return (
            <Pressable
                style={[
                    styles.optionContainer,
                    selected === value
                        ? optionPressedStyle
                        : styles.optionUnpressed,
                ]}
                onPress={() => selectHandler(value)}
            >
                <View style={styles.imageContainer}>
                    {renderImage(image_kid, image_kid_default)}
                </View>
                <Text
                    style={[
                        styles.optionText,
                        selected === value
                            ? styles.textPressed
                            : styles.textUnpressed,
                    ]}
                >
                    {text}
                </Text>
            </Pressable>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    style={[]}
                    data={options}
                    renderItem={renderOption}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "orange",
        marginTop: -20,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "pink"
    },
    optionContainer: {
        // backgroundColor: "red",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: 160,
        width: "100%",
        maxWidth: 150,
        margin: 5,
        marginTop: 0,
        padding: 10,
        borderWidth: GeneralStyle.kid.field.borderWidth,
        borderColor: GeneralStyle.kid.field.borderColor,
        borderRadius: GeneralStyle.kid.field.borderRadius,
        marginBottom: GeneralStyle.kid.field.marginBottom,
        paddingVertical: GeneralStyle.kid.field.paddingVertical,
        paddingHorizontal: GeneralStyle.kid.field.paddingHorizontal,
    },
    optionImage: {
        height: 100,
        width: 100,
    },
    optionText: {
        fontWeight: GeneralStyle.kid.field.fontWeight,
        fontSize: GeneralStyle.kid.field.fontSize - 6,
        textAlign: 'center',
        marginTop: -15
    },
    optionPressed: {
        backgroundColor: Colors.Green400,
        borderColor: Colors.Green400,
    },
    optionUnpressed: {
        backgroundColor: "#fff",
        borderColor: "#000",
    },
    textPressed: {
        color: "#fff",
    },
    textUnpressed: {
        color: "#000",
    },
});
