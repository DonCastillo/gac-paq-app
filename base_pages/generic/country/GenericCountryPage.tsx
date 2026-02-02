import { CountryProvider } from "@/contexts/common/CountryContext";
import { Component } from "@interface/function.type";
import GenericCountryContent from "./GenericCountryContent";
import GenericCountryLayout from "./GenericCountryLayout";

const GenericCountryPage: Component = () => {
	return (
		<CountryProvider>
			<GenericCountryLayout>
				<GenericCountryContent />
			</GenericCountryLayout>
		</CountryProvider>
	);
};

export default GenericCountryPage;
