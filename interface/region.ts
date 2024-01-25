import type { Svg } from "react-native-svg";

export default interface RegionInterface {
	id?: number;
	sort?: number | null;
	title: string;
	code: string;
	flag_code?: string;
	flag?: Svg | null;
}
