import { View, StyleSheet, Text } from "react-native";
import Main from "../components/Main";
import TopMain from "../components/TopMain";
import Navigation from "../components/Navigation";
import ButtonContainerWidth from "../components/kids/ButtonContainerWidth";
import Colors from "../styles/kids/Colors";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import Heading from "../components/kids/Heading";
import QuestionBreadcrumb from "../components/kids/QuestionBreadcrumb";
import QuestionProgress from "../components/kids/QuestionProgress";
import QuestionTitle from "../components/kids/QuestionTitle";
import QuestionRadio from "../components/kids/QuestionRadio";

export default function QuestionSingle({ breadcrumb, title, options, label }) {
    const { nextPage, prevPage } = useContext(AppContext);
    return (
        <View>
            {/* <QuestionProgress>School</QuestionProgress> */}
            {/* <Text>{children}</Text> */}
            <Main>
                <TopMain>
                    <QuestionBreadcrumb>{breadcrumb}</QuestionBreadcrumb>
                    {/* <QuestionProgress /> */}
                    <QuestionTitle>{title}</QuestionTitle>
                    <QuestionRadio
                        label={label}
                        options={options}
                    ></QuestionRadio>
                </TopMain>
                <Navigation justify="space-between">
                    <ButtonContainerWidth
                        onPress={prevPage}
                        color={Colors.Green400}
                    >
                        back
                    </ButtonContainerWidth>
                    <ButtonContainerWidth
                        onPress={nextPage}
                        color={Colors.Green400}
                    >
                        next
                    </ButtonContainerWidth>
                </Navigation>
            </Main>
        </View>
    );
}

const styles = StyleSheet.create({
    question: {
        // backgroundColor: "pink",
    },
});
