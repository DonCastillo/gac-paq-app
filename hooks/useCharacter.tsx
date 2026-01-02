import { getLanguage, getMode } from "@/store/settings/settingsSlice";
import { getCountry } from "@/utils/country.utils";
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
	const language = useSelector(getLanguage) ?? "en-CA";
	const country = getCountry(language) ?? "CA";

	return {
		pageName,
		mode,
		country,
		language,
	} as Props;
}
