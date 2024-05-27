export interface ButtonInterface {
	label: string;
}
export type LangButtonInterface = Record<string, ButtonInterface>

export interface ButtonPayloadInterface {
	back: string;
	complete: string;
	continue: string;
	go: string;
	next: string;
	started: string;
}