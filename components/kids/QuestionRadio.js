import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView } from "react-native";
import Colors from "../../styles/kids/Colors";
import { useState } from "react";

export default function QuestionRadio({ label, options }) {
    const [selected, setSelected] = useState(null);

    function selectHandler(value) {
        setSelected(value);
        console.log(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.labelText}>{label}</Text>
            <View>
                <FlatList
                    data={options}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Pressable
                                    style={[
                                        styles.optionContainer,
                                        selected === item.value
                                            ? styles.optionPressed
                                            : styles.optionUnpressed,
                                    ]}
                                    onPress={() => selectHandler(item.value)}
                                >
                                    <Text
                                        style={[
                                            styles.optionText,
                                            selected === item.value
                                                ? styles.textPressed
                                                : styles.textUnpressed,
                                        ]}
                                    >
                                        {item.text}
                                    </Text>
                                </Pressable>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "orange",
        flex: 1
    },
    labelText: {
        color: "#000",
        marginBottom: 20,
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 23,
    },
    optionContainer: {
        // backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: "#000",
        borderRadius: 10,
        marginBottom: 15,
        maxWidth: "90%",
        // backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 25,
        // fontSize:
    },
    optionText: {
        fontWeight: 400,
        fontSize: 18,
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
        color: "#000"
    }
});
