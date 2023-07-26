import LanguageInterface from "./language";
import QuestionField from "../constants/question_field";

interface Field {
    type: QuestionField.QuestionFieldText | QuestionField.QuestionFieldNumber;
    label: string;
}

export default interface QuestionTextInterface {
    heading: string;
    label: string;
    fields: Field[];
    languages_id?: LanguageInterface;
}
