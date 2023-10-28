import QuestionRadioItemInterface from "../../interface/question_radio_item";
import DropDownSelector from "../DropDownPicker";

export default function QuestionSelect({ options, onChange }) {
    const rawItems: QuestionRadioItemInterface[] = options.map((option) => {
        return { label: option.text, value: option.value };
    });

    return (
        <DropDownSelector
            options={rawItems}
            selectedValue={""}
            onSelect={onChange}
        />
    );
}
