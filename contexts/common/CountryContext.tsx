import { ParentComponent } from "@/interface/function.type";
import { clearResponseByIdent } from "@/store/responses/responsesSlice";
import { setCountry, setLanguage } from "@/store/settings/settingsSlice";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import useTranslations from "@hooks/useTranslations";
import { addResponse } from "@utils/response.utils";
import { translateQuestionLabel } from "@utils/translate.utils";
import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface CountryContextType {
	selectedValue: string | null;
	setSelectedValue: (value: string | null) => void;
	heading: string;
	questionLabel: string;
	changeHandler: (value: string | null) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

const CountryProvider: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPageNumber, currentPage } = useCurrentPage();
	const { mode, country } = useCharacter();
	const { translatedPage } = useTranslations(currentPageNumber, currentPage);
	const [selectedValue, setSelectedValue] = useState<string | null>(country);

	// set selected value
	useEffect(() => {
		setSelectedValue(country);
	}, [currentPageNumber, country]);

	// set country default and add to response
	useEffect(() => {
		addResponse(country);
	}, []);

	const changeHandler = (value: string | null): void => {
		dispatch(clearResponseByIdent("language_location"));
		dispatch(setLanguage(null));
		if (value !== "" && value !== null && value !== undefined) {
			addResponse(value);
			setSelectedValue(value);
			dispatch(setCountry(value));
		} else {
			setSelectedValue(null);
		}
	};

	const value: CountryContextType = {
		selectedValue,
		setSelectedValue,
		heading: translatedPage?.heading || "",
		questionLabel: translateQuestionLabel(translatedPage?.kid_label, translatedPage?.adult_label, mode),
		changeHandler,
	};

	return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>;
};

const useCountryContext = (): CountryContextType => {
	const context = useContext(CountryContext);
	if (context === undefined) {
		throw new Error("useCountryContext must be used within a CountryProvider");
	}
	return context;
};

export { CountryProvider, useCountryContext };
