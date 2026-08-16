/**
 * Country-locked builds.
 *
 * `EXPO_PUBLIC_COUNTRY` selects which app a build produces. Unset (the default) produces the regular
 * app, where the participant picks their language and location on the first page. Set to a supported
 * country code, it produces a build for that country: the language page is dropped and the language
 * is fixed at startup.
 *
 * The mapping is explicit rather than derived from `languages.ts`, because a country code only
 * identifies a language where that country has one. NZ (`en-NZ`, `mi-NZ`) and MW (`en-MW`, `ch-MW`)
 * are ambiguous, so adding them here has to be a deliberate choice rather than a first match.
 */
const COUNTRY_LANGUAGE: Record<string, string> = {
	MX: "es-MX",
};

const rawCountry = process.env.EXPO_PUBLIC_COUNTRY?.trim().toUpperCase() ?? "";

/** The country this build is locked to, or null for the regular app. */
const LOCKED_COUNTRY: string | null = rawCountry in COUNTRY_LANGUAGE ? rawCountry : null;

/** The language a country-locked build starts in, or null for the regular app. */
const LOCKED_LANGUAGE: string | null = LOCKED_COUNTRY !== null ? COUNTRY_LANGUAGE[LOCKED_COUNTRY] : null;

/** Whether this build skips the language page and fixes the language. */
const isCountryLocked = (): boolean => LOCKED_LANGUAGE !== null;

export default LOCKED_COUNTRY;
export { COUNTRY_LANGUAGE, isCountryLocked, LOCKED_LANGUAGE };
