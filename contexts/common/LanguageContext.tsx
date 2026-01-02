import { ParentComponent } from "@/interface/function.type";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import useLoadAppByLanguage from "@hooks/useLoadAppByLanguage";
import useTranslations from "@hooks/useTranslations";
import { setLanguage } from "@store/settings/settingsSlice";
import { addResponse } from "@utils/response.utils";
import { translateQuestionLabel } from "@utils/translate.utils";
import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface LanguageContextType {
	selectedValue: string | null;
	setSelectedValue: (value: string | null) => void;
	heading: string;
	questionLabel: string;
	changeHandler: (value: string | null) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPageNumber, currentPage } = useCurrentPage();
	const { mode, language } = useCharacter();
	const { translatedPage } = useTranslations(currentPageNumber, currentPage);
	const [selectedValue, setSelectedValue] = useState<string | null>(language);
	const { loadApp } = useLoadAppByLanguage();

	// set selected value
	useEffect(() => {
		setSelectedValue(language);
	}, [currentPageNumber, language]);

	// set language default and add to response
	useEffect(() => {
		addResponse(language);
	}, []);

	const changeHandler = (value: string | null): void => {
		if (value !== "" && value !== null && value !== undefined) {
			loadApp(mode, value)
				.then(() => {
					addResponse(value);
					setSelectedValue(value);
					dispatch(setLanguage(value));
				})
				.catch((error) => {
					addResponse("en-CA");
					setSelectedValue("en-CA");
					dispatch(setLanguage("en-CA"));
					console.error(error);
				});
		} else {
			setSelectedValue(null);
		}
	};

	const value: LanguageContextType = {
		selectedValue,
		setSelectedValue,
		heading: translatedPage?.heading || "",
		questionLabel: translateQuestionLabel(translatedPage?.kid_label, translatedPage?.adult_label, mode),
		changeHandler,
	};

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

const useLanguageContext = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguageContext must be used within a LanguageProvider");
	}
	return context;
};

export { LanguageProvider, useLanguageContext };
