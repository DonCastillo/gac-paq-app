import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Splash } from './Splash';
import { Welcome } from './Welcome';
import { About } from './About';
import { Location } from './Location';
import { Participant } from './Participant';
import { Age } from './Age';
import { Accelerometer } from './Accelerometer';
import { GreatJob } from './GreatJob';

function PageWrapper() {

    /** vars */
    let page = <Splash />;
    const TOTAL_PAGES = 7;
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    /** functions */
    function nextPage() {
        setCurrentPageNumber(currentPage => ++currentPage);
    }

    function prevPage() {
        if(currentPageNumber <= 1) {
            setCurrentPageNumber(1);
        } else {
            setCurrentPageNumber(currentPage => --currentPage);
        }
    }

    /** switch page */
    switch(currentPageNumber) {
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
        
    }


    return (

        <View style={styles.container}>
            <Text>Page Wrapper</Text>
        </View>
    );
}

export default PageWrapper;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
});
