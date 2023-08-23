import { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { SettingContext } from "../store/settings";
import Language from "./kid/Language";
import { getScreen, getScreenType, getSectionType } from "../utils/screen";
import ScreenType from "../constants/screen_type";

export default function RegularPageScreen() {
    const settingCtx = useContext(SettingContext);
    const [component, setComponent] = useState(<></>);

    useEffect(() => {
        const mode = settingCtx.settingState.mode;
        const pageType = settingCtx.settingState.currentPage.screen;
        const sectionType = settingCtx.settingState.currentPage.section;
        console.log('mode: ', mode)
        console.log('pageType: ', pageType)
        let tempComponent = <></>;

        if (settingCtx.settingState.currentPageNumber == 0) {
            tempComponent = <Language />;
        } else {
            if (pageType) {
                tempComponent = getScreen(mode, getScreenType(pageType), getSectionType(sectionType));
            } else {
                tempComponent = <></>;
            }
        }

        setComponent(tempComponent);
    }, [
        settingCtx.settingState.currentPageNumber,
        settingCtx.settingState.currentPage,
    ]);

    return <>{component}</>;
}
