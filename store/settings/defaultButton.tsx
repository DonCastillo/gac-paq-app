import ButtonLabel from "constants/button_label.enum";

export interface ButtonInterface {
	back: string;
	complete: string;
	continue: string;
	go: string;
	next: string;
	started: string;
}

const defaultButton: ButtonInterface = {
	back: ButtonLabel.Back,
	complete: ButtonLabel.Complete,
	continue: ButtonLabel.Continue,
	go: ButtonLabel.Go,
	next: ButtonLabel.Next,
	started: ButtonLabel.Started,
};

export default defaultButton;
