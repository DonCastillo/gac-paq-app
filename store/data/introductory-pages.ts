import type { LangIntroductoryPagesType } from "@interface/union.type";
import AboutPage from "@store/data/introductory-pages/about";
import AgePage from "@store/data/introductory-pages/age";
import DemographicPage from "@store/data/introductory-pages/demographic_general_age";
import LanguagePage from "@store/data/introductory-pages/language";
import ParticipantIDPage from "@store/data/introductory-pages/participant";

const IntroductoryPages: LangIntroductoryPagesType = [LanguagePage, ParticipantIDPage, AgePage, AboutPage, DemographicPage];

export default IntroductoryPages;
