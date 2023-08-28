import QuestionRadioPayloadInterface from "../../interface/directus/question-radio-payload";
import QuestionSliderPayloadInterface from "../../interface/directus/question-slider-payload";
import SectionPayloadInterface from "../../interface/directus/section-payload";
import ExtroPayloadInterface from "../../interface/directus/extro-payload";
import S1Q2 from "./questionpages/section-1/S1Q2";
import S1Q3 from "./questionpages/section-1/S1Q3";
import S1Q4 from "./questionpages/section-1/S1Q4";
import S1Q1 from "./questionpages/section-1/S1Q1";
import S1Q5 from "./questionpages/section-1/S1Q5";
import S1Q6 from "./questionpages/section-1/S1Q6";
import S1Q7 from "./questionpages/section-1/S1Q7";
import S1Intro from "./questionpages/section-1/S1Intro";
import S1Extro from "./questionpages/section-1/S1Extro";

const Section1 = [S1Intro, S1Q1, S1Q2, S1Q3, S1Q4, S1Q5, S1Q6, S1Q7, S1Extro];

const QuestionPages:
    | (
          | SectionPayloadInterface
          | QuestionRadioPayloadInterface
          | QuestionSliderPayloadInterface
          | ExtroPayloadInterface
      )[]
    | [] = [...Section1];

export default QuestionPages;
