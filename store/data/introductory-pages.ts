import PagePayloadInterface from "../../interface/directus/page-payload";
import QuestionDropdownPayloadInterface from "../../interface/directus/question-dropdown-payload";
import QuestionTextPayloadInterface from "../../interface/directus/question-text-payload";
import AboutPage from "./introductory-pages/about";
import AccelerometerPage from "./introductory-pages/accelerometer";
import AgePage from "./introductory-pages/age";
import DemographicPage from "./introductory-pages/demographic";
import GreatJobPage from "./introductory-pages/great-job";
import LocationPage from "./introductory-pages/location";
import WelcomePage from "./introductory-pages/welcome";

const IntroductoryPages:
    | (
          | PagePayloadInterface
          | QuestionDropdownPayloadInterface
          | QuestionTextPayloadInterface
      )[]
    | [] = [
    WelcomePage,
    AboutPage,
    // LocationPage,
    AgePage,
    DemographicPage,
    AccelerometerPage,
    GreatJobPage,
];

export default IntroductoryPages;
