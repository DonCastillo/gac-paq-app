import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import useTranslations from "@hooks/useTranslations";
import { ParentComponent } from "@interface/function.type";
import { translateText } from "@utils/translate.utils";
import { createContext, useContext } from "react";

interface TextContextType {
	heading: string;
	subheading: string;
	description: string;
}

const TextContext = createContext<TextContextType | undefined>(undefined);

const TextProvider: ParentComponent = ({ children }) => {
	const { currentPageNumber, currentPage } = useCurrentPage();
	const { mode } = useCharacter();
	const { translatedPage } = useTranslations(currentPageNumber, currentPage);

	const value: TextContextType = {
		heading: translatedPage?.heading ?? "",
		subheading: translatedPage?.subheading ?? "",
		description: translateText(translatedPage?.description, mode) ?? "",
	};

	return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
};

const useTextContext = (): TextContextType => {
	const context = useContext(TextContext);
	if (context === undefined) {
		throw new Error("useTextContext must be used within a TextProvider");
	}
	return context;
};

export { TextProvider, useTextContext };
