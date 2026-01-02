import { ProceedProvider } from "@contexts/common/ProceedContext";
import { TextProvider } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import PreambleAdultContent from "./PreambleAdultContent";
import PreambleAdultLayout from "./PreambleAdultLayout";

const PreambleAdultPage: Component = () => {
	return (
		<TextProvider>
			<ProceedProvider>
				<PreambleAdultLayout>
					<PreambleAdultContent />
				</PreambleAdultLayout>
			</ProceedProvider>
		</TextProvider>
	);
};

export default PreambleAdultPage;
