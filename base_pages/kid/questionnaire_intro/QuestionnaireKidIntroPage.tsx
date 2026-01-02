import { ButtonProvider } from "@contexts/common/ButtonContext";
import { TextProvider } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import QuestionnaireKidIntroContent from "./QuestionnaireKidIntroContent";
import QuestionnaireKidIntroLayout from "./QuestionnaireKidIntroLayout";

const QuestionnaireKidIntroPage: Component = () => {
	return (
		<ButtonProvider>
			<TextProvider>
				<QuestionnaireKidIntroLayout>
					<QuestionnaireKidIntroContent />
				</QuestionnaireKidIntroLayout>
			</TextProvider>
		</ButtonProvider>
	);
};

export default QuestionnaireKidIntroPage;
