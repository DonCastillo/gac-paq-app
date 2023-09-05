import { useContext } from "react";
import FullWidthButton from "../../buttons/FullWidthButton";
import { SettingContext } from "../../../store/settings";

export default function SingleNav({ label }) {
    const settingCtx = useContext(SettingContext);
    const { colorTheme } = settingCtx.settingState;
    const { color100, color200 } = colorTheme;

    function nextPage() {
        console.log('in the single nav...')
        settingCtx.nextPage();
    }

    return (
        <FullWidthButton
            customStyle={{ backgroundColor: color100 }}
            onPress={nextPage}
        >
            {label}
        </FullWidthButton>
    );
}
