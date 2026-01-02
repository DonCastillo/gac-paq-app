import { ButtonProvider } from "@contexts/common/ButtonContext";
import { ProceedProvider } from "@contexts/common/ProceedContext";
import { TextProvider } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import TextAdultContent from "./TextAdultContent";
import TextAdultLayout from "./TextAdultLayout";

const TextAdultPage: Component = () => {
	return (
		<ButtonProvider>
			<ProceedProvider>
				<TextProvider>
					<TextAdultLayout>
						<TextAdultContent />
					</TextAdultLayout>
				</TextProvider>
			</ProceedProvider>
		</ButtonProvider>
	);
};

export default TextAdultPage;
