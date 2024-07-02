import KidImages from "styles/images/kids/index";
import ErrorSVG from "assets/images/general/error.svg";
import CheckSVG from "assets/images/general/check.svg";
import GenericImages from "styles/images/generic/index";
import AdultImages from "styles/images/adult/index";

const Images = {
	adult: AdultImages,
	kids: KidImages,
	generic: GenericImages,
	general: {
		error: ErrorSVG,
		check: CheckSVG,
	},
};

export default Images;
