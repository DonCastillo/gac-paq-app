import { Text, View, Image, StyleSheet } from "react-native";
import {useState} from 'react';
import DropDownPicker from "react-native-dropdown-picker";

export default function QuestionSelect({ options }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(options);

    console.log(options)

    return (
        <DropDownPicker
            style={styles.container}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    headingContainer: {
        marginBottom: 60,
    },
});
