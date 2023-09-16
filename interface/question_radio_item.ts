import { ReactElement } from "react";
import { Image } from "react-native";

export default interface QuestionRadioItemInterface {
    label: string;
    value: string;
    icon?: ReactElement<Image> | any;
}