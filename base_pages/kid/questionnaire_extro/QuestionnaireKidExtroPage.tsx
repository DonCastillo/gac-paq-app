import { ButtonProvider } from "@contexts/common/ButtonContext";
import { TextProvider } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import QuestionnaireKidExtroContent from "./QuestionnaireKidExtroContent";
import QuestionnaireKidExtroLayout from "./QuestionnaireKidExtroLayout";

const QuestionnaireKidExtroPage: Component = () => {
	return (
		<ButtonProvider>
			<TextProvider>
				<QuestionnaireKidExtroLayout>
					<QuestionnaireKidExtroContent />
				</QuestionnaireKidExtroLayout>
			</TextProvider>
		</ButtonProvider>
	);
};

export default QuestionnaireKidExtroPage;
