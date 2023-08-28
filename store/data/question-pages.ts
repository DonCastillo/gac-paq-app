import QuestionRadioPayloadInterface from "../../interface/directus/question-radio-payload";
import QuestionSliderPayloadInterface from "../../interface/directus/question-slider-payload";
import SectionPayloadInterface from "../../interface/directus/section-payload";
import S1 from "./questionpages/section-1/S1";
import S1Q2 from "./questionpages/section-1/S1Q2";
import S1Q3 from "./questionpages/section-1/S1Q3";
import S1Q4 from "./questionpages/section-1/S1Q4";
import S1Q1 from "./questionpages/section-1/S1Q1";
import S1Q5 from "./questionpages/section-1/S1Q5";

const Section1 = [S1, S1Q1, S1Q2, S1Q3, S1Q4, S1Q5];

const QuestionPages:
    | (
          | SectionPayloadInterface
          | QuestionRadioPayloadInterface
          | QuestionSliderPayloadInterface
      )[]
    | [] = [...Section1];

export default QuestionPages;
