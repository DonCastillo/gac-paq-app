import { LanguageProvider } from "@contexts/common/LanguageContext";
import { Component } from "@interface/function.type";
import GenericLanguageContent from "./GenericLanguageContent";
import GenericLanguageLayout from "./GenericLanguageLayout";

const GenericLanguagePage: Component = () => {
	return (
		<LanguageProvider>
			<GenericLanguageLayout>
				<GenericLanguageContent />
			</GenericLanguageLayout>
		</LanguageProvider>
	);
};

export default GenericLanguagePage;
