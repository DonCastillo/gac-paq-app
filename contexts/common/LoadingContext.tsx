import { ParentComponent } from "@interface/function.type";
import { createContext, useContext, useState } from "react";

interface LoadingContextType {
	isLoading: boolean;
	setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

const LoadingProvider: ParentComponent = ({ children }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const value: LoadingContextType = {
		isLoading,
		setIsLoading,
	};

	return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};

const useLoadingContext = (): LoadingContextType => {
	const context = useContext(LoadingContext);
	if (context === undefined) {
		throw new Error("useLoadingContext must be used within a LoadingProvider");
	}
	return context;
};

export { LoadingProvider, useLoadingContext };
