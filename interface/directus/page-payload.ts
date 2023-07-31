import ScreenType from "../../constants/screen_type";
import PageInterface from "../page";

export default interface PagePayloadInterface {
    title?: string | null,
    name?: string | null,
    type: ScreenType.Page,
    translations: PageInterface[]
}