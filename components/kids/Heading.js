import {Text, View, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';


export default function Heading({children, color, fontSize}) {

    return <View>
        <Text style={[styles.text, {color: color, fontSize: fontSize || 100}]}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        color:'white',
        flexWrap: "wrap"
    }
});