import {Text, View, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';


export default function Heading({children, customStyle = {}}) {

    return <View>
        <Text style={[styles.text, customStyle]}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        color:'white',
        flexWrap: "wrap",
        fontSize: 100,
    }
});