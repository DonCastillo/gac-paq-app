import type PagePayloadInterface from "interface/directus/page-payload";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import type QuestionTextPayloadInterface from "interface/directus/question-text-payload";
import type SingleCheckboxPayloadInterface from "interface/directus/single-checkbox-payload";
import AboutPage from "store/data/introductory-pages/about";
import AccelerometerPage from "store/data/introductory-pages/accelerometer";
import AgePage from "store/data/introductory-pages/age";
import ConfidentialityPage from "store/data/introductory-pages/confidentiality";
import DemographicPage from "store/data/introductory-pages/demographic";
import GreatJobPage from "store/data/introductory-pages/great-job";
import LanguagePage from "store/data/introductory-pages/language";
import LocationPage from "store/data/introductory-pages/location";
import ParticipantIDPage from "store/data/introductory-pages/participant";
import WelcomePage from "store/data/introductory-pages/welcome";

const IntroductoryPages:
	| Array<
			| PagePayloadInterface
			| QuestionDropdownPayloadInterface
			| QuestionTextPayloadInterface
			| SingleCheckboxPayloadInterface
	  >
	| [] = [
	LanguagePage,
	WelcomePage,
	AboutPage,
	ConfidentialityPage,
	ParticipantIDPage,
	AccelerometerPage,
	AgePage,
	DemographicPage,
];

export default IntroductoryPages;
