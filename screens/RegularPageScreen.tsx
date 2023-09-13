import { useContext, useEffect, useState } from "react";
import { SettingContext } from "../store/settings";
import { getScreen, getScreenType } from "../utils/screen";
import { getSectionType } from "../utils/section";
import ScreenType from "../constants/screen_type";

export default function RegularPageScreen() {
    const settingCtx = useContext(SettingContext);
    const { currentPage, currentPageNumber, mode } = settingCtx.settingState;
    const pageType = currentPage.screen ? getScreenType(currentPage.screen) : null;
    const sectionType = currentPage.section ? getSectionType(currentPage.section) : null;
    const [component, setComponent] = useState(<></>);

    function changeComponent() {
        let tempComponent = <></>;
        
        if (settingCtx.settingState.currentPageNumber == 0) {
            tempComponent = getScreen(mode, ScreenType.Language);
        } else {
            if (pageType) {
                tempComponent = getScreen(mode, pageType, sectionType);
            }
        }
        setComponent(tempComponent);
    }

    function changeColor() {
        settingCtx.setColorTheme(currentPage.sectionNumber);
    }

    useEffect(() => {
        changeComponent();
        changeColor();
    }, [currentPageNumber, currentPage]);

    return <>{component}</>;
}
