import { Text, View, Image, StyleSheet, TextInput } from "react-native";
import {useState} from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import Colors from "../../styles/kids/Colors";

export default function QuestionText({placeholder}) {
    return (
        <View>
            <TextInput style={styles.container} placeholder={placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.introBorderColor,
        borderWidth: 2,
        backgroundColor: "#fff",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 20
    },
});
