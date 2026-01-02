import { ButtonProvider } from "@contexts/common/ButtonContext";
import { DropdownProvider } from "@contexts/common/DropdownContext";
import { ProceedProvider } from "@contexts/common/ProceedContext";
import { QuestionProvider } from "@contexts/common/QuestionContext";
import { Component } from "@interface/function.type";
import OpeningQuestionKidContent from "./OpeningQuestionKidContent";
import OpeningQuestionKidLayout from "./OpeningQuestionKidLayout";

const OpeningQuestionKidPage: Component = () => {
	return (
		<ButtonProvider>
			<DropdownProvider>
				<ProceedProvider>
					<QuestionProvider>
						<OpeningQuestionKidLayout>
							<OpeningQuestionKidContent />
						</OpeningQuestionKidLayout>
					</QuestionProvider>
				</ProceedProvider>
			</DropdownProvider>
		</ButtonProvider>
	);
};

export default OpeningQuestionKidPage;
