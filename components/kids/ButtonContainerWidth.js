import { View, Text, Pressable, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import Colors from "../../styles/kids/Colors";

export default function ButtonContainerWidth({ children, onPress, color }) {
    return (
        <View style={[style.container, {borderColor: color}]}>
            <Pressable onPress={onPress}>
                <Text style={[style.buttonText, {color: color}]}>{children}</Text>
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