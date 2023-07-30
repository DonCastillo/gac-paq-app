import { Text, View, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';


export default function Paragraph({ children, customStyle = {}}) {
    return (
        <View>
            <Text style={[styles.text, customStyle]}>
                {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 500,
        fontSize: 100,
        color: "white",
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
});
