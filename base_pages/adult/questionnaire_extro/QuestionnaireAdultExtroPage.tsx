import { ButtonProvider } from "@contexts/common/ButtonContext";
import { TextProvider } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import QuestionnaireAdultExtroContent from "./QuestionnaireAdultExtroContent";
import QuestionnaireAdultExtroLayout from "./QuestionnaireAdultExtroLayout";

const QuestionnaireAdultExtroPage: Component = () => {
	return (
		<ButtonProvider>
			<TextProvider>
				<QuestionnaireAdultExtroLayout>
					<QuestionnaireAdultExtroContent />
				</QuestionnaireAdultExtroLayout>
			</TextProvider>
		</ButtonProvider>
	);
};

export default QuestionnaireAdultExtroPage;
