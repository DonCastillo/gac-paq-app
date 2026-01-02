import { ButtonProvider } from "@contexts/common/ButtonContext";
import { TextProvider } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import QuestionnaireAdultIntroContent from "./QuestionnaireAdultIntroContent";
import QuestionnaireAdultIntroLayout from "./QuestionnaireAdultIntroLayout";

const QuestionnaireAdultIntroPage: Component = () => {
	return (
		<ButtonProvider>
			<TextProvider>
				<QuestionnaireAdultIntroLayout>
					<QuestionnaireAdultIntroContent />
				</QuestionnaireAdultIntroLayout>
			</TextProvider>
		</ButtonProvider>
	);
};

export default QuestionnaireAdultIntroPage;
