import ButtonLabel from "constants/button_label.enum";
import type { ButtonPayloadInterface } from "interface/button";

const defaultButton: ButtonPayloadInterface = {
	back: ButtonLabel.Back,
	complete: ButtonLabel.Complete,
	continue: ButtonLabel.Continue,
	go: ButtonLabel.Go,
	next: ButtonLabel.Next,
	started: ButtonLabel.Started,
};

export default defaultButton;
