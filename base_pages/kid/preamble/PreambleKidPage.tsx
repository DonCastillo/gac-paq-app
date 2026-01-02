import { ProceedProvider } from "@contexts/common/ProceedContext";
import { TextProvider } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import PreambleKidContent from "./PreambleKidContent";
import PreambleKidLayout from "./PreambleKidLayout";

const PreambleKidPage: Component = () => {
	return (
		<TextProvider>
			<ProceedProvider>
				<PreambleKidLayout>
					<PreambleKidContent />
				</PreambleKidLayout>
			</ProceedProvider>
		</TextProvider>
	);
};

export default PreambleKidPage;
