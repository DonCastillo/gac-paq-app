import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { createContext, useContext, useEffect, useState } from "react";

interface DropdownContextType {
	dropdownOpen: boolean;
	setDropdownOpen: (open: boolean) => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

const DropdownProvider: ParentComponent = ({ children }) => {
	const { currentPageNumber } = useCurrentPage();
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

	// change background on page change
	useEffect(() => {
		setDropdownOpen(false);
	}, [currentPageNumber]);

	const value: DropdownContextType = {
		dropdownOpen,
		setDropdownOpen,
	};

	return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
};

const useDropdownContext = (): DropdownContextType => {
	const context = useContext(DropdownContext);
	if (context === undefined) {
		throw new Error("useDropdownContext must be used within a DropdownProvider");
	}
	return context;
};

export { DropdownProvider, useDropdownContext };
