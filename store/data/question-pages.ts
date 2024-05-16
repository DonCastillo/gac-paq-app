import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";
import type QuestionSliderPayloadInterface from "interface/directus/question-slider-payload";
import type SectionPayloadInterface from "interface/directus/section-payload";
import type ExtroPayloadInterface from "interface/directus/extro-payload";
import S1Q2 from "store/data/questionpages/section-1/S1Q2";
import S1Q3 from "store/data/questionpages/section-1/S1Q3";
import S1Q4 from "store/data/questionpages/section-1/S1Q4";
import S1Q1 from "store/data/questionpages/section-1/S1Q1";
import S1Q5 from "store/data/questionpages/section-1/S1Q5";
import S1Q6 from "store/data/questionpages/section-1/S1Q6";
import S1Q7 from "store/data/questionpages/section-1/S1Q7";
import S1Intro from "store/data/questionpages/section-1/S1Intro";
import S1Extro from "store/data/questionpages/section-1/S1Extro";
import S2Intro from "store/data/questionpages/section-2/S2Intro";
import S2Q1 from "store/data/questionpages/section-2/S2Q1";
import S2Q2 from "store/data/questionpages/section-2/S2Q2";
import S2Q3 from "store/data/questionpages/section-2/S2Q3";
import S2Extro from "store/data/questionpages/section-2/S2Extro";
import S2Q4 from "./questionpages/section-2/S2Q4";
import S3Intro from "./questionpages/section-3/S3Intro";
import S3Extro from "./questionpages/section-3/S3Extro";
import S3Q1 from "./questionpages/section-3/S3Q1";
import S3Q3 from "./questionpages/section-3/S3Q3";
import S3Q2 from "./questionpages/section-3/S3Q2";
import S4Intro from "./questionpages/section-4/S4Intro";
import S4Q1 from "./questionpages/section-4/S4Q1";
import S4Q2 from "./questionpages/section-4/S4Q2";
import S4Q3 from "./questionpages/section-4/S4Q3";
import S4Q4 from "./questionpages/section-4/S4Q4";
import S4Q5 from "./questionpages/section-4/S4Q5";
import S4Q6 from "./questionpages/section-4/S4Q6";
import S4Q7 from "./questionpages/section-4/S4Q7";
import S4Q8 from "./questionpages/section-4/S4Q8";
import S4Q9 from "./questionpages/section-4/S4Q9";
import S4Extro from "./questionpages/section-4/S4Extro";
import S5Intro from "./questionpages/section-5/S5Intro";
import S5Extro from "./questionpages/section-5/S5Extro";
import S5Q1 from "./questionpages/section-5/S5Q1";
import S5Q2 from "./questionpages/section-5/S5Q2";
import S5Q3 from "./questionpages/section-5/S5Q3";
import S6Extro from "./questionpages/section-6/S6Extro";
import S6Q1 from "./questionpages/section-6/S6Q1";
import S6Q2 from "./questionpages/section-6/S6Q2";
import S7Intro from "./questionpages/section-7/S7Intro";
import S7Extro from "./questionpages/section-7/S7Extro";
import S6Intro from "./questionpages/section-6/S6Intro";
import S7Q1 from "./questionpages/section-7/S7Q1";
import S4Q10 from "./questionpages/section-4/S4Q10";
import S4Q11 from "./questionpages/section-4/S4Q11";
import S1Preamble from "./questionpages/section-1/S1Preamble";
import S2Preamble from "./questionpages/section-2/S2Preamble";
import S3Preamble from "./questionpages/section-3/S3Preamble";
import S4Preamble from "./questionpages/section-4/S4Preamble";
import S5Preamble from "./questionpages/section-5/S5Preamble";
import S6Preamble from "./questionpages/section-6/S6Preamble";
import S7Preamble from "./questionpages/section-7/S7Preamble";

const Section1 = [S1Intro, S1Preamble, S1Q1, S1Q2, S1Q3, S1Q4, S1Q5, S1Q6, S1Q7, S1Extro];
// const Section1 = [S1Intro, S1Q1, S1Q2, S1Extro];
const Section2 = [S2Intro, S2Preamble, S2Q1, S2Q2, S2Q3, S2Q4, S2Extro];
const Section3 = [S3Intro, S3Preamble, S3Q1, S3Q2, S3Q3, S3Extro];
const Section4 = [
	S4Intro,
	S4Preamble,
	S4Q1,
	S4Q2,
	S4Q3,
	S4Q4,
	S4Q5,
	S4Q6,
	S4Q7,
	S4Q8,
	S4Q9,
	S4Q10,
	S4Q11,
	S4Extro,
];
const Section5 = [S5Intro, S5Preamble, S5Q1, S5Q2, S5Q3, S5Extro];
const Section6 = [S6Intro, S6Preamble, S6Q1, S6Q2, S6Extro];
const Section7 = [S7Intro, S7Preamble, S7Q1, S7Extro];

const QuestionPages:
	| Array<
			| SectionPayloadInterface
			| QuestionRadioPayloadInterface
			| QuestionSliderPayloadInterface
			| ExtroPayloadInterface
	  >
	| [] = [
	...Section1,
	...Section2,
	...Section3,
	...Section4,
	...Section5,
	...Section6,
	...Section7,
];

export default QuestionPages;
