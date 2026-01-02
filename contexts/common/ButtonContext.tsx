import { ParentComponent } from "@interface/function.type";
import { createContext, useContext, useState } from "react";

interface ButtonContextType {
	buttonComponent: React.ReactElement | null;
	setButtonComponent: (component: React.ReactElement | null) => void;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

const ButtonProvider: ParentComponent = ({ children }) => {
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	const value: ButtonContextType = {
		buttonComponent,
		setButtonComponent,
	};

	return <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>;
};

const useButtonContext = (): ButtonContextType => {
	const context = useContext(ButtonContext);
	if (context === undefined) {
		throw new Error("useButtonContext must be used within a ButtonProvider");
	}
	return context;
};

export { ButtonProvider, useButtonContext };
