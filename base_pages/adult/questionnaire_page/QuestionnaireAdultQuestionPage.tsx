import { ButtonProvider } from "@contexts/common/ButtonContext";
import { ProceedProvider } from "@contexts/common/ProceedContext";
import { QuestionProvider } from "@contexts/common/QuestionContext";
import { Component } from "@interface/function.type";
import QuestionnaireAdultQuestionContent from "./QuestionnaireAdultQuestionContent";
import QuestionnaireAdultQuestionLayout from "./QuestionnaireAdultQuestionLayout";

const QuestionnaireAdultQuestionPage: Component = () => {
	return (
		<ButtonProvider>
			<ProceedProvider>
				<QuestionProvider>
					<QuestionnaireAdultQuestionLayout>
						<QuestionnaireAdultQuestionContent />
					</QuestionnaireAdultQuestionLayout>
				</QuestionProvider>
			</ProceedProvider>
		</ButtonProvider>
	);
};

export default QuestionnaireAdultQuestionPage;
