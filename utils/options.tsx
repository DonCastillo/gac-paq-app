import QuestionRadioItemInterface from "../interface/question_radio_item";

interface OptionInterface {
    text: string;
    value: string;
}

function normalize(options: OptionInterface[]): QuestionRadioItemInterface[] {
    return options.map(({ text, value }) => {
        return { label: text, value: value };
    });
}

export { normalize };
