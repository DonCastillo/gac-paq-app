import { QuestionProvider } from "@contexts/common/QuestionContext";
import { Component } from "@interface/function.type";
import GenericQuestionnaireContent from "./GenericQuestionnaireContent";
import GenericQuestionnaireLayout from "./GenericQuestionnaireLayout";

const GenericQuestionnairePage: Component = () => {
	return (
		<QuestionProvider>
			<GenericQuestionnaireLayout>
				<GenericQuestionnaireContent />
			</GenericQuestionnaireLayout>
		</QuestionProvider>
	);
};

export default GenericQuestionnairePage;
