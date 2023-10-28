import type RegionInterface from "../interface/region";
import { FlagIcons } from "../styles/flags";
import Regions from "../store/data/regions";
import type LanguageInterface from "../interface/language";
import Languages from "../store/data/languages";

function loadRegionsOffline(): RegionInterface[] {
	return Regions.map((region) => {
		return {
			...region,
			flag: region.code ? FlagIcons[region.code.toLowerCase()] : "",
		};
	});
}

function loadLanguagesOffline(): LanguageInterface[] {
	return Languages.map((language) => {
		return {
			...language,
			flag: language.flag_code ? FlagIcons[language.flag_code.toLowerCase()] : "",
		};
	});
}

export { loadRegionsOffline, loadLanguagesOffline };
