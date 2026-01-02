import { LanguageProvider } from "@contexts/common/LanguageContext";
import { Component } from "@interface/function.type";
import LanguageAdultContent from "./LanguageAdultContent";
import LanguageAdultLayout from "./LanguageAdultLayout.tsx";

const LanguageAdultPage: Component = () => {
	return (
		<LanguageProvider>
			<LanguageAdultLayout>
				<LanguageAdultContent />
			</LanguageAdultLayout>
		</LanguageProvider>
	);
};

export default LanguageAdultPage;
