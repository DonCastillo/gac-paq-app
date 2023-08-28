import LanguageInterface from "./language";

export default interface ButtonInterface {
    id?: number;
    label: string;
    complete_button_id?: number | null;
    next_button_id?: number | null;
    back_button_id?: number | null;
    go_button_id?: number | null;
    lets_get_started_button_id?: number | null;
    continue_button_id?: number | null;
    languages_id?: LanguageInterface | {}
};