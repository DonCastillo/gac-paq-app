import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Text } from "react-native";
import { SettingContext } from "../store/settings";
import Language from "./kid/Language";
import { getScreen, getScreenType } from "../utils/screen";
import { getSectionType } from "../utils/section";
import ScreenType from "../constants/screen_type";

export default function RegularPageScreen() {
    const settingCtx = useContext(SettingContext);
    const { currentPage, currentPageNumber, mode } = settingCtx.settingState;
    const [component, setComponent] = useState(<></>);


    useEffect(() => {
        const pageType = currentPage.screen;
        const sectionType = currentPage.section;
        let tempComponent = <></>;

        if (settingCtx.settingState.currentPageNumber == 0) {
            tempComponent = <Language />;
        } else {
            if (pageType) {
                tempComponent = getScreen(
                    mode,
                    getScreenType(pageType),
                    getSectionType(sectionType)
                );
            } else {
                tempComponent = <></>;
            }
        }

        setComponent(tempComponent);
    }, [currentPageNumber, currentPage]);

    return <>{component}</>;
}
