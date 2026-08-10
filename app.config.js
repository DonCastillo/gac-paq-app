/**
 * Country-locked app identity.
 *
 * `app.json` stays the single source of truth for everything shared — version, plugins, splash,
 * permissions. This file receives that JSON as `config` and overrides only the fields that have to
 * differ when `EXPO_PUBLIC_COUNTRY` selects a locked build, so the regular app's config is returned
 * completely untouched when the flag is unset.
 *
 * The country list is duplicated from `constants/locked_country.ts` rather than imported: this file
 * is evaluated by Node before the bundler exists, so it cannot resolve TypeScript or the `@constants`
 * path alias. Keep the two in step — `locked_country.ts` decides how the app *behaves*, this decides
 * what the app *is*. A country present there but missing here builds with the global app's identity.
 */

/**
 * Identity per locked country. `icon` and `adaptiveIcon` are optional: leave them out to inherit the
 * global artwork, or point them at country-specific assets once those exist.
 */
const COUNTRY_APPS = {
	MX: {
		name: "GAC-PAQ México",
		bundleIdentifier: "com.uleth.gacpaq.mx",
		androidPackage: "com.uleth.gacpaq.mx",
		// A distinct scheme matters because both apps can be installed side by side during testing,
		// and a shared "gacpaq://" would let either one claim a development-client deep link.
		scheme: "gacpaqmx",
		// icon: "./assets/icon-mx.png",
		// adaptiveIcon: "./assets/adaptive-icon-mx.png",
	},
};

const resolveCountry = () => {
	const raw = (process.env.EXPO_PUBLIC_COUNTRY ?? "").trim().toUpperCase();
	return raw in COUNTRY_APPS ? raw : null;
};

module.exports = ({ config }) => {
	const country = resolveCountry();

	// Unset, empty, or unrecognised leaves the global app exactly as app.json defines it. A typo in
	// the flag therefore builds the regular app rather than a broken hybrid.
	if (country === null) return config;

	const variant = COUNTRY_APPS[country];

	return {
		...config,
		name: variant.name,
		scheme: variant.scheme ?? config.scheme,
		icon: variant.icon ?? config.icon,
		ios: {
			...config.ios,
			bundleIdentifier: variant.bundleIdentifier,
		},
		android: {
			...config.android,
			package: variant.androidPackage,
			adaptiveIcon: {
				...config.android?.adaptiveIcon,
				foregroundImage: variant.adaptiveIcon ?? config.android?.adaptiveIcon?.foregroundImage,
			},
		},
	};
};
