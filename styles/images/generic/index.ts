import VeryDissatisfiedSVG from "assets/images/general/ratings/very_dissatisfied.svg";
import DissatisfiedSVG from "assets/images/general/ratings/dissatisfied.svg";
import NeutralSVG from "assets/images/general/ratings/neutral.svg";
import SatisfiedSVG from "assets/images/general/ratings/satisfied.svg";
import VerySatisfiedSVG from "assets/images/general/ratings/very_satisfied.svg";

const GenericImages = {
	rating: {
		very_dissatisfied: VeryDissatisfiedSVG,
		dissatisfied: DissatisfiedSVG,
		neutral: NeutralSVG,
		satisfied: SatisfiedSVG,
		very_satisfied: VerySatisfiedSVG,
	},
	doNotKnow: require("assets/images/general/options/do-not-know.webp"),
	doNotKnowES: require("assets/images/general/options/do-not-know-es.webp"),
};

export default GenericImages;
