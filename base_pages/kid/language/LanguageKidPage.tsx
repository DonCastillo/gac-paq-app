import { DropdownProvider } from "@contexts/common/DropdownContext";
import { LanguageProvider } from "@contexts/common/LanguageContext";
import { Component } from "@interface/function.type";
import LanguageKidContent from "./LanguageKidContent";
import LanguageKidLayout from "./LanguageKidLayout";

const LanguageKidPage: Component = () => {
	return (
		<LanguageProvider>
			<DropdownProvider>
				<LanguageKidLayout>
					<LanguageKidContent />
				</LanguageKidLayout>
			</DropdownProvider>
		</LanguageProvider>
	);
};

export default LanguageKidPage;
