import CheckSVG from "@assets/images/general/check.svg";
import ErrorSVG from "@assets/images/general/error.svg";
import AdultImages from "@styles/images/adult/index";
import GenericImages from "@styles/images/generic/index";
import KidImages from "@styles/images/kids/index";

const Images = {
	adult: AdultImages,
	kids: KidImages,
	generic: GenericImages,
	general: {
		error: ErrorSVG,
		check: CheckSVG,
	},
} as const;

export default Images;
