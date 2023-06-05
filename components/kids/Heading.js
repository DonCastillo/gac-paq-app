import {Text, View, StyleSheet} from 'react-native';

export default function Heading({children, color, fontSize}) {
    return <View>
        <Text style={[styles.text, {color: color, fontSize: fontSize || 100}]}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color:'white'
    }
});