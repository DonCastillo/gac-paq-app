import type LanguageInterface from "interface/language";

export default interface ButtonInterface {
	id?: number;
	label: string;
	complete_button_id?: number;
	next_button_id?: number;
	back_button_id?: number;
	go_button_id?: number;
	lets_get_started_button_id?: number;
	continue_button_id?: number;
	languages_id?: LanguageInterface | null;
}
