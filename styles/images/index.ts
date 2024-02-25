import KidImages from "styles/images/kids/index";
import AdultImages from "styles/images/adults/index";
import ErrorSVG from "assets/images/general/error.svg";
import CheckSVG from "assets/images/general/check.svg";
import GenericImages from "styles/images/generic/index";

const Images = {
	adults: AdultImages,
	kids: KidImages,
	generic: GenericImages,
	general: {
		error: ErrorSVG,
		check: CheckSVG,
	},
};

export default Images;
