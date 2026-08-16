import { isCountryLocked } from "@constants/locked_country";
import type { LangIntroductoryPagesType } from "@interface/union.type";
import AboutPage from "@store/data/introductory-pages/about";
import AgePage from "@store/data/introductory-pages/age";
import DemographicPage from "@store/data/introductory-pages/demographic_general_age";
import LanguagePage from "@store/data/introductory-pages/language";
import ParticipantIDPage from "@store/data/introductory-pages/participant";

// a country-locked build already knows the language, so it opens on the participant page instead.
// The language_location response is injected at startup by seedLockedLanguageResponse() so the
// column still reaches the database.
const IntroductoryPages: LangIntroductoryPagesType = isCountryLocked()
	? [ParticipantIDPage, AgePage, AboutPage, DemographicPage]
	: [LanguagePage, ParticipantIDPage, AgePage, AboutPage, DemographicPage];

export default IntroductoryPages;
