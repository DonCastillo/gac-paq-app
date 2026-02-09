import { getCountry, getLanguage, getMode } from "@/store/settings/settingsSlice";
import { ModeType } from "@interface/union.type";
import { useSegments } from "expo-router";
import { useSelector } from "react-redux";

interface Props {
	pageName: string;
	mode: ModeType;
	country: string;
	language: string;
}

export default function useCharacter() {
	const segments = useSegments();
	const pageName = segments[0];
	const mode = useSelector(getMode);
	const language = useSelector(getLanguage) ?? null;
	const country = useSelector(getCountry) ?? "CA";

	return {
		pageName,
		mode,
		country,
		language,
	} as Props;
}
