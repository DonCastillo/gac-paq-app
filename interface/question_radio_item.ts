import { type ReactElement } from "react";
import { type Image } from "react-native";
import { Svg } from "react-native-svg";

export default interface QuestionRadioItemInterface {
	label: string;
	value: string;
	icon?: ReactElement<Image> | SVGElement;
}
