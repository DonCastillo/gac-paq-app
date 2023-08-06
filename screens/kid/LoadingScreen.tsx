import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";

export default function LoadingScreen({ text, image = "", color = "white" }) {
    return (
        <View style={styles.container}>
            <Main>
                <CenterMain>
                    <Text style={{ color: color }}>Don</Text>
                    <ActivityIndicator size='large' color={color}/>
                </CenterMain>
            </Main>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        opacity: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
});
