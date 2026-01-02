import { TextProvider } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import GenericTextContent from "./GenericTextContent";
import GenericTextLayout from "./GenericTextLayout";

const GenericTextPage: Component = () => {
	return (
		<TextProvider>
			<GenericTextLayout>
				<GenericTextContent />
			</GenericTextLayout>
		</TextProvider>
	);
};

export default GenericTextPage;
