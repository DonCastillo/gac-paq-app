import { useContext, useState } from "react";
import DropDownSelector from "../DropDownPicker";

import QuestionRadioItemInterface from "../../interface/question_radio_item";
import { QuestionContext } from "../../store/questions";
import RegionInterface from "../../interface/region";


export default function QuestionSelectRegion({ selectedValue, onChange }) {
    console.log("question select region component...")
    const questionCtx = useContext(QuestionContext);
    const { regionOption } = questionCtx.questionState;
    const options: RegionInterface[] = regionOption;
    const itemsRaw: QuestionRadioItemInterface[] = options.map((option) => {
        const FlagComponent = option.flag;
        return {
            label: option.title,
            value: option.title,
            icon: () => <FlagComponent height={50} width={50} padding={0} margin={0} />
        };
    });


    return (
        <DropDownSelector
            options={[...itemsRaw]}
            selectedValue={""}
            onSelect={onChange}
        />
    );
}
