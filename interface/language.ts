import type { Svg } from "react-native-svg";

export default interface LanguageInterface {
	sort?: number | null;
	name: string;
	flag_code: string;
	lang_code: string;
	flag?: Svg | null;
}
