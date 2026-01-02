import { translateQuestionLabel } from "@utils/translate.utils";
import { getQuestionType } from "@utils/type.utils";
import useCharacter from "./useCharacter";

const useTranslateQuestionLabel = (translatedPage: any) => {
	const { mode } = useCharacter();

	return {
		questionLabel: translateQuestionLabel(translatedPage?.kid_label ?? "", translatedPage?.adult_label ?? "", mode),
		questionSubLabel: translateQuestionLabel(translatedPage?.kid_sublabel ?? "", translatedPage?.adult_sublabel ?? "", mode),
		questionType: getQuestionType(translatedPage?.type),
	};
};

export { useTranslateQuestionLabel };
