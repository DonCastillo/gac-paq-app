import type RegionInterface from "../interface/region";
import { FlagIcons } from "../styles/flags";
import Regions from "../store/data/regions";
import type LanguageInterface from "../interface/language";
import Languages from "../store/data/languages";

function loadRegionsOffline(): RegionInterface[] {
	return Regions.map((region: RegionInterface) => {
		return {
			...region,
			flag: region.code !== "" ? FlagIcons[region.code.toLowerCase()] : null,
		};
	});
}

function loadLanguagesOffline(): LanguageInterface[] {
	return Languages.map((language: LanguageInterface) => {
		return {
			...language,
			flag: language.flag_code !== "" ? FlagIcons[language.flag_code.toLowerCase()] : null,
		};
	});
}

export { loadRegionsOffline, loadLanguagesOffline };
