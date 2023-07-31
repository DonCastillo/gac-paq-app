import { View, Text, Pressable, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import Colors from "../../styles/kids/Colors";

export default function FullWidthButton({ children, onPress, customStyle = {} }) {
    return (
        <View style={[style.container, customStyle]}>
            <Pressable onPress={onPress}>
                <Text style={[style.buttonText]}>{children}</Text>
            </Pressable>
        </View>
    );
}



const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        // marginVertical: 15,
        width: '90%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 27,
        fontWeight: 'bold',
    }
})