import QuestionTextInterface from "../question_text";

export default interface QuestionTextPayloadInterface {
    name?: string | null,
    translations: QuestionTextInterface[]
}