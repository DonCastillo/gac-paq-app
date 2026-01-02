import { ButtonProvider } from "@contexts/common/ButtonContext";
import { ProceedProvider } from "@contexts/common/ProceedContext";
import { QuestionProvider } from "@contexts/common/QuestionContext";
import { Component } from "@interface/function.type";
import OpeningQuestionAdultContent from "./OpeningQuestionAdultContent";
import OpeningQuestionAdultLayout from "./OpeningQuestionAdultLayout";

const OpeningQuestionAdultPage: Component = () => {
	return (
		<ButtonProvider>
			<ProceedProvider>
				<QuestionProvider>
					<OpeningQuestionAdultLayout>
						<OpeningQuestionAdultContent />
					</OpeningQuestionAdultLayout>
				</QuestionProvider>
			</ProceedProvider>
		</ButtonProvider>
	);
};

export default OpeningQuestionAdultPage;
