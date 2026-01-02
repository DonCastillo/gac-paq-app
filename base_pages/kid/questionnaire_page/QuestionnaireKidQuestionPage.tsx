import { ButtonProvider } from "@contexts/common/ButtonContext";
import { ProceedProvider } from "@contexts/common/ProceedContext";
import { QuestionProvider } from "@contexts/common/QuestionContext";
import { Component } from "@interface/function.type";
import QuestionnaireKidQuestionContent from "./QuestionnaireKidQuestionContent";
import QuestionnaireKidQuestionLayout from "./QuestionnaireKidQuestionLayout";

const QuestionnaireKidQuestionPage: Component = () => {
	return (
		<ButtonProvider>
			<ProceedProvider>
				<QuestionProvider>
					<QuestionnaireKidQuestionLayout>
						<QuestionnaireKidQuestionContent />
					</QuestionnaireKidQuestionLayout>
				</QuestionProvider>
			</ProceedProvider>
		</ButtonProvider>
	);
};

export default QuestionnaireKidQuestionPage;
