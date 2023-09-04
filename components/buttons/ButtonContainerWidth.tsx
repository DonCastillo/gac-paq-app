import { View, Text, Pressable, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import Colors from "../../styles/kids/Colors";

export default function ButtonContainerWidth({ children, onPress, borderColor, textColor, bgColor }) {
    return (
        <View>
            <Pressable onPress={onPress} style={[style.container, {borderColor: borderColor, backgroundColor: bgColor}]}>
                <Text style={[style.buttonText, {color: textColor}]}>{children}</Text>
            </Pressable>
        </View>
    );
}



const style = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 2,
        // marginVertical: 15,
        // width: '90%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        // lineHeight: 27,
        fontWeight: 'bold',
    }
})