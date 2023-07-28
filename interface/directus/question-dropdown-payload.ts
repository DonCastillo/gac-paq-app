import QuestionDropdownInterface from "../question_dropdown";

export default interface QuestionDropdownPayloadInterface {
    name?: string | null,
    translations: QuestionDropdownInterface[]
}