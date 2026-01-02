import { ButtonProvider } from "@contexts/common/ButtonContext";
import { ProceedProvider } from "@contexts/common/ProceedContext";
import { TextProvider } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import TextKidContent from "./TextKidContent";
import TextKidLayout from "./TextKidLayout";

const TextKidPage: Component = () => {
	return (
		<ButtonProvider>
			<ProceedProvider>
				<TextProvider>
					<TextKidLayout>
						<TextKidContent />
					</TextKidLayout>
				</TextProvider>
			</ProceedProvider>
		</ButtonProvider>
	);
};

export default TextKidPage;
