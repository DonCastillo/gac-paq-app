import PageInterface from "../page";

export default interface PagePayloadInterface {
    title?: string | null,
    translations: PageInterface[]
}