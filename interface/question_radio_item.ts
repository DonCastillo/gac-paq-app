import { type ReactElement } from "react";
import { type Image } from "react-native";

export default interface QuestionRadioItemInterface {
	label: string;
	value: string;
	icon?: ReactElement<Image> | SVGElement;
}
