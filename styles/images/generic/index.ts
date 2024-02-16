import VeryDissatisfiedSVG from "assets/images/general/ratings/very_dissatisfied.svg";
import DissatisfiedSVG from "assets/images/general/ratings/dissatisfied.svg";
import NeutralSVG from "assets/images/general/ratings/neutral.svg";
import SatisfiedSVG from "assets/images/general/ratings/satisfied.svg";
import VerySatisfiedSVG from "assets/images/general/ratings/very_satisfied.svg";

const GenericImages = {
	pages: {
		phone: {
			language: require("assets/images/generic/phone/1.png"),
			participant: require("assets/images/generic/phone/2.png"),
			mode: require("assets/images/generic/phone/3.png"),
			age: require("assets/images/generic/phone/4.png"),
		},
		tablet: {
			language: require("assets/images/generic/tablet/1.png"),
			participant: require("assets/images/generic/tablet/2.png"),
			mode: require("assets/images/generic/tablet/3.png"),
			age: require("assets/images/generic/tablet/4.png"),
		},
	},
	rating: {
		very_dissatisfied: VeryDissatisfiedSVG,
		dissatisfied: DissatisfiedSVG,
		neutral: NeutralSVG,
		satisfied: SatisfiedSVG,
		very_satisfied: VerySatisfiedSVG,
	},
};

export default GenericImages;
