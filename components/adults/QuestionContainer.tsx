import { ScrollView, StyleSheet, View } from "react-native";
import { GeneralStyle } from "../../styles/general";

export default function QuestionContainer({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...GeneralStyle.adult.questionContainer,
    },
});