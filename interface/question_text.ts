import LanguageInterface from "./language";
import QuestionField from "../constants/question_field";

interface Field {
    type: QuestionField.QuestionFieldText | QuestionField.QuestionFieldNumber;
    label: string;
    name: string;
}

export default interface QuestionTextInterface {
    id?: string | number | null,
    question_text_id?: string | number | null,
    sort?: number | null,
    heading: string;
    label: string;
    fields: Field[];
    languages_id?: LanguageInterface;
}
