import LanguageInterface from "../interface/language";
import QuestionRadioItemInterface from "../interface/question_radio_item";
import RegionInterface from "../interface/region";

interface OptionInterface {
    text: string;
    value: string;
}



function optionText(options: OptionInterface[]): QuestionRadioItemInterface[] {
    return options.map(({ text, value }) => {
        return { label: text, value: value };
    });
}

function optionRegion(options: RegionInterface[]): QuestionRadioItemInterface[] {
    return options.map(({ title, code, flag }) => {
        const FlagComponent = flag;
        return { 
            label: title, 
            value: title, 
            icon: <FlagComponent height={50} width={50} padding={0} margin={0} /> 
        };
    });
}

function optionLanguage(options: LanguageInterface[]): QuestionRadioItemInterface[] {
    return options.map(({ name, lang_code, flag }) => {
        const FlagComponent = flag;
        return { 
            label: name, 
            value: lang_code, 
            icon: <FlagComponent height={50} width={50} padding={0} margin={0} /> 
        };
    });
}

export { optionText, optionRegion, optionLanguage };
