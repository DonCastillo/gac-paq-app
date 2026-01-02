import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { createContext, useContext, useEffect, useState } from "react";

interface ProceedContextType {
	proceed: boolean;
	setProceed: (proceed: boolean) => void;
}

const ProceedContext = createContext<ProceedContextType | undefined>(undefined);

const ProceedProvider: ParentComponent = ({ children }) => {
	const { currentPageNumber, currentPage } = useCurrentPage();
	const [proceed, setProceed] = useState<boolean>(false);

	// display buttons
	useEffect(() => {
		if (currentPage.page.audio_autoplay === true) {
			const timer = setTimeout(() => {
				setProceed(true);
				clearTimeout(timer);
			}, 1000);
		} else {
			setProceed(true);
		}
		return () => {
			setProceed(false);
		};
	}, [currentPageNumber]);

	const value: ProceedContextType = {
		proceed,
		setProceed,
	};

	return <ProceedContext.Provider value={value}>{children}</ProceedContext.Provider>;
};

const useProceedContext = (): ProceedContextType => {
	const context = useContext(ProceedContext);
	if (context === undefined) {
		throw new Error("useProceedContext must be used within a ProceedProvider");
	}
	return context;
};

export { ProceedProvider, useProceedContext };
