import RegionInterface from "../interface/region";
import { FlagIcons } from "../styles/flags";
import Regions from "../store/data/regions";

function loadRegionsOffline(): RegionInterface[] {
    return Regions.map((region) => {
        return { 
            ...region, 
            flag: region.code ? FlagIcons[region.code.toLowerCase()] : "" 
        };
    });
}

export { loadRegionsOffline };
