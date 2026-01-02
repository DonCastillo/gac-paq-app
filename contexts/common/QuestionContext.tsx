import Question from "@constants/question.enum";
import useCurrentPage from "@hooks/useCurrentPage";
import { useTranslateQuestionLabel } from "@hooks/useTranslatedQuestionIntro";
import useTranslations from "@hooks/useTranslations";
import { ParentComponent } from "@interface/function.type";
import { TranslatedIntroQuestionType, TranslatedQuestionQuestionType } from "@interface/union.type";
import { getResponse } from "@utils/response.utils";
import { createContext, useContext, useEffect, useState } from "react";

interface QuestionContextType {
	selectedValue: string | null;
	setSelectedValue: (value: string | null) => void;
	questionLabel: string;
	questionSubLabel: string;
	questionType: Question | null;
	translatedPage: TranslatedIntroQuestionType | TranslatedQuestionQuestionType | null;
	heading: string;
}

const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

const QuestionProvider: ParentComponent = ({ children }) => {
	const { currentPageNumber, currentPage } = useCurrentPage();
	const { translatedPage } = useTranslations(currentPageNumber, currentPage);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const { questionLabel, questionSubLabel, questionType } = useTranslateQuestionLabel(translatedPage);

	// on page load, set selected value from response store
	useEffect(() => {
		setSelectedValue(getResponse());
	}, [currentPageNumber]);

	const value: QuestionContextType = {
		selectedValue,
		setSelectedValue,
		questionLabel,
		questionSubLabel,
		questionType,
		translatedPage,
		heading: translatedPage?.heading || "",
	};

	return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>;
};

const useQuestionContext = (): QuestionContextType => {
	const context = useContext(QuestionContext);
	if (context === undefined) {
		throw new Error("useQuestionContext must be used within a QuestionProvider");
	}
	return context;
};

export { QuestionProvider, useQuestionContext };
