import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import React, { createContext } from "react";
import Splash from "./Splash";
import Welcome from "./Welcome";
import About from "./About";
import Location from "./Location";
import Participant from "./Participant";
import Age from "./Age";
import Accelerometer from "./Accelerometer";
import GreatJob from "./GreatJob";
import QuestionCover from "../components/kids/QuestionCover";
import { AppContext } from "../context/AppContext";
import Colors from "../styles/kids/Colors";
import QuestionRadioPage from "./QuestionRadioPage";
// import QuestionRadio from "../components/kids/QuestionRadio";

export default function PageWrapper() {
    /** vars */
    let page = <Splash />;
    const TOTAL_PAGES = 12;
    const [currentPageNumber, setCurrentPageNumber] = useState(2);

    /** functions */
    function nextPage() {
        if (currentPageNumber > TOTAL_PAGES) {
            setCurrentPageNumber(TOTAL_PAGES);
        } else {
            setCurrentPageNumber((currentPage) => ++currentPage);
        }
        console.log(currentPageNumber);
    }

    function prevPage() {
        if (currentPageNumber <= 1) {
            setCurrentPageNumber(1);
        } else {
            setCurrentPageNumber((currentPage) => --currentPage);
        }
        console.log(currentPageNumber);
    }

    /** switch page */
    switch (currentPageNumber) {
        case 1:
            page = <Splash />;
            break;
        case 2:
            page = <Welcome />;
            break;
        case 3:
            page = <About />;
            break;
        case 4:
            page = <Location />;
            break;
        case 5:
            page = <Participant />;
            break;
        case 6:
            page = <Age />;
            break;
        case 7:
            page = <Accelerometer />;
            break;
        case 8:
            page = <GreatJob />;
            break;
        case 9:
            page = (
                <QuestionCover
                    heading={"School Activities"}
                    subheading={"Section 1"}
                    imageSrc={require("./../assets/images/image-placeholder.jpg")}
                    themeColor={Colors.Green500}
                    accentColor={Colors.Green400}
                />
            );
            break;
        case 10:
            {
                const options = [
                    { text: "Yes", value: "yes" },
                    { text: "No", value: "no" },
                ];
                page = (
                    <QuestionRadioPage
                        breadcrumb={"School"}
                        title={"Question 1"}
                        options={options}
                        label={"Did you attend school in the past week?"}
                    />
                );
            }
            break;
        case 11:
            {
                const options = [
                    { text: "1 Day", value: "1 Day" },
                    { text: "2 Days", value: "2 Day" },
                    { text: "3 Days", value: "3 Day" },
                    { text: "4 Days", value: "4 Day" },
                    { text: "5 Days", value: "5 Day" },
                    { text: "6 Days", value: "6 Day" },
                    { text: "7 Days", value: "7 Day" },
                ];
                page = (
                    <QuestionRadioPage
                        breadcrumb={"School"}
                        title={"Question 2"}
                        options={options}
                        h
                        label={
                            "How many days did you attend school in the past week?"
                        }
                    />
                );
            }
            break;
        case 12:
            {
                const options = [
                    {
                        text: "Less than 30 minutes",
                        value: "Less than 30 minutes",
                    },
                    { text: "30 - 45 minutes", value: "30 - 45 minutes" },
                    { text: "46 - 60 minutes", value: "46 - 60 minutes" },
                    { text: "Over 60 minutes", value: "Over 60 minutes" },
                    { text: "I don't know", value: "I don't know" },
                ];
                page = (
                    <QuestionRadioPage
                        breadcrumb={"School"}
                        title={"Question 3"}
                        options={options}
                        label={"How long are your physical education classes?"}
                    />
                );
            }
            break;
        // case 13:
        //     {
        //         const options = [
        //             { text: "Mostly non-moving", value: "0.1" },
        //             { text: "Mostly moving fast or exercising", value: "0.3" },
        //             { text: "Mostly moving slow", value: "0.5" },
        //         ];
        //         page = (
        //             <QuestionRadioPage
        //                 breadcrumb={"School"}
        //                 title={"Question 4"}
        //                 options={options}
        //                 label={"Which of the following images shows what you do most of the time in physical education class?"}
        //             />
        //         );
        //     }
        //     break;
    }

    return (
        <AppContext.Provider
            value={{
                currentPageNumber,
                setCurrentPageNumber,
                nextPage,
                prevPage,
            }}
        >
            <View style={styles.container}>{page}</View>
        </AppContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
});
