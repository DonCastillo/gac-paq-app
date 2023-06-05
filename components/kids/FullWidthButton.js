import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../styles/kids/Colors";

function FullWidthButton({ children, onPress }) {
    return (
        <View style={style.container}>
            <Pressable onPress={onPress}>
                <Text style={style.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default FullWidthButton;


const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.introBackgroundColor,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        gap: 10,
        marginVertical: 15,
        width: '80%'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 27,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
    }
})